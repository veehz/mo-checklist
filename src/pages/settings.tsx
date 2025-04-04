import Nav from "@/components/Nav";
import competitions from "../competitions";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithCredential,
  signInWithEmailAndPassword,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "@/firebase";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import { onValue, ref, update } from "firebase/database";

function Linkmaybe({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  if (!href) return <>{children}</>;
  return <Link href={href}>{children}</Link>;
}

interface ProfileForm {
  name: string;
  shownYears: number;
  competitions: string[];
}

interface NewPasswordForm {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default function App() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [message, setMessage] = useState<string | null>(null);

  const [originalData, setOriginalData] = useState<any>({});

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<ProfileForm>({
    defaultValues: {
      competitions: competitions.map((competition) => competition.shortname),
    },
  });

  const onSubmit: SubmitHandler<ProfileForm> = async (data) => {
    try {
      await updateProfile(auth.currentUser!, {
        displayName: data.name,
      });

      const updates: {
        [key: string]: string | boolean | number | null;
      } = {};

      updates[`profile/${auth.currentUser!.uid}/displayName`] = data.name;
      if (data.shownYears === undefined || Number.isNaN(data.shownYears))
        updates[`profile/${auth.currentUser!.uid}/shownYears`] = null;
      else
        updates[`profile/${auth.currentUser!.uid}/shownYears`] =
          data.shownYears;

      for (const c of competitions) {
        if (data.competitions.includes(c.shortname)) {
          if (
            !originalData.hiddenContests ||
            originalData.hiddenContests[c.shortname]
          ) {
            updates[
              `profile/${auth.currentUser!.uid}/hiddenContests/${c.shortname}`
            ] = null;
          }
        } else {
          if (
            !originalData.hiddenContests ||
            !originalData.hiddenContests[c.shortname]
          ) {
            updates[
              `profile/${auth.currentUser!.uid}/hiddenContests/${c.shortname}`
            ] = true;
          }
        }
      }

      await update(ref(db), updates);
      router.reload();
    } catch (e) {
      console.log(e);
      setMessage("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("run");
        setUser(user);

        setValue("name", user.displayName || "");

        onValue(
          ref(db, "profile/" + user.uid),
          (snapshot) => {
            setOriginalData(snapshot.val() || {});
            if (!snapshot.exists()) return;

            if (snapshot.val().shownYears !== null)
              setValue("shownYears", snapshot.val().shownYears);

            if (snapshot.val().hiddenContests) {
              const shown = [];
              for (const competition of competitions) {
                if (!snapshot.val().hiddenContests[competition.shortname]) {
                  shown.push(competition.shortname);
                }
              }
              setValue("competitions", shown);
            }
          },
          {
            onlyOnce: true,
          }
        );
      }
    });
  }, [setValue]);

  const [pwmsg, setPwmsg] = useState<string | null>(null);

  const {
    register: registerPw,
    formState: { errors: errorsPw },
    handleSubmit: handleSubmitPw,
    setValue: setValuePw,
  } = useForm<NewPasswordForm>();

  const onSubmitPw: SubmitHandler<NewPasswordForm> = (data) => {
    signInWithEmailAndPassword(auth, user.email, data.oldPassword)
      .then(() => {
        updatePassword(auth.currentUser!, data.newPassword)
          .then(() => {
            router.reload();
          })
          .catch((e) => {
            console.log(e);
            setPwmsg("An error occurred. Please try again.");
          });
      })
      .catch((e) => {
        console.log(e);
        setPwmsg("An error occurred. Please try again.");
      });
  };

  return (
    <main>
      <Nav title="Settings" />
      <div className="py-4 px-12">
        <h1 className="font-bold text-3xl text-center">Settings</h1>
      </div>
      {!user ? (
        <div className="m-2 text-center">
          You must be logged in to view this page.
        </div>
      ) : (
        <div className="pb-4 pt-2 px-12">
          {message ? <div className="pb-4 text-center">{message}</div> : null}
          <h2 className="font-bold text-2xl text-center">Profile</h2>
          <div className="text-sm">
            {errors?.name?.message ||
              errors?.shownYears?.message ||
              errors?.competitions?.message}
          </div>
          <div className="space-y-2 max-w-md mx-auto">
            <form className="mx-auto my-4" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="font-bold text-xl text-center mt-4 mb-2">
                Display Name
              </h3>
              <input
                {...register("name")}
                id="name"
                type="text"
                className={
                  "rounded-md relative block w-full border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                }
                placeholder="Name"
              />
              <h3 className="font-bold text-xl text-center mt-4 mb-2">
                Shown Years
                <div className="text-sm">
                  (Competitions before or during ({new Date().getFullYear()} -
                  shownYears) will not be shown)
                </div>
              </h3>
              <input
                {...register("shownYears", {
                  valueAsNumber: true,
                  min: {
                    value: 0,
                    message: "Shown Years must be at least 0",
                  },
                })}
                id="shownYears"
                type="number"
                className={
                  "rounded-md relative block w-full border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                }
                placeholder={`Shown Years (Default = ${
                  process.env.NEXT_PUBLIC_DEFAULT_SHOWN_YEARS || "15"
                })`}
              />
              <h3 className="font-bold text-xl text-center mt-4 mb-2">
                My Competitions
              </h3>
              {competitions.map((competition) => (
                <div
                  key={competition.shortname}
                  className="flex flex-row space-x-1"
                >
                  <input
                    type="checkbox"
                    key={competition.name}
                    id={competition.shortname.toLowerCase()}
                    {...register("competitions")}
                    value={competition.shortname}
                  />
                  <label htmlFor={competition.shortname.toLowerCase()}>
                    {competition.name}
                  </label>
                </div>
              ))}
              <Button className="mt-2" props={{ type: "submit" }} full={true}>
                Save
              </Button>
            </form>
          </div>
          <h2 className="font-bold text-2xl text-center">Set a New Password</h2>
          <div className="space-y-2 max-w-md mx-auto">
            <form
              className="mt-8 space-y-6"
              onSubmit={handleSubmitPw(onSubmitPw)}
              noValidate
            >
              <div className="-space-y-px rounded-md shadow-xs">
                <div>
                  <label htmlFor="oldPassword" className="sr-only">
                    Old Password
                  </label>
                  <input
                    {...registerPw("oldPassword", {
                      minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters.",
                      },
                      maxLength: {
                        value: 20,
                        message: "Password must have less than 20 characters.",
                      },
                      required: "Password is required.",
                    })}
                    id="oldPassword"
                    type="password"
                    autoComplete="password"
                    required
                    className={
                      "rounded-t-md relative block w-full border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    }
                    placeholder="Old Password"
                  />
                </div>

                <div>
                  <label htmlFor="newpassword" className="sr-only">
                    Password
                  </label>
                  <input
                    {...registerPw("newPassword", {
                      minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters.",
                      },
                      maxLength: {
                        value: 20,
                        message: "Password must have less than 20 characters.",
                      },
                      required: "Password is required.",
                    })}
                    id="newpassword"
                    type="password"
                    autoComplete="password"
                    required
                    className={
                      "relative block w-full border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    }
                    placeholder="New Password"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    {...registerPw("confirmPassword", {
                      validate: {
                        validateSamePassword: (value, formValues) => {
                          return (
                            value === formValues.newPassword ||
                            "Passwords do not match."
                          );
                        },
                      },
                    })}
                    id="confirmPassword"
                    type="password"
                    autoComplete="password"
                    required
                    className={
                      "rounded-b-md relative block w-full border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    }
                    placeholder="Confirm Password"
                  />
                </div>
              </div>

              <div
                className={
                  "rounded-md p-2 text-sm " + errors ? "text-red-500" : ""
                }
              >
                <div>
                  {errorsPw?.oldPassword?.message ||
                    errorsPw?.newPassword?.message ||
                    errorsPw?.confirmPassword?.message ||
                    pwmsg}
                </div>
              </div>

              <div>
                <Button className="mt-2" props={{ type: "submit" }} full={true}>
                  Change Password
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
