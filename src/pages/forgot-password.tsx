import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { auth } from "../firebase";
import { onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import Nav from "@/components/Nav";
import Link from "next/link.js";

interface EmailInput {
  email: string;
}

export default function ForgotPassword() {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) router.push("/");
    });
  }, [router]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<EmailInput>();

  const onSubmit: SubmitHandler<EmailInput> = (data) => {
    setIsLoading(true);
    sendPasswordResetEmail(auth, data.email)
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        switch (errorCode) {
          case "auth/invalid-email":
            setErrorMsg("Invalid email address.");
            break;
          default:
            setErrorMsg(
              "There was an error. Please try again in a few minutes. If the problem persists, please contact us. (Error code: " +
                errorCode +
                ")"
            );
        }
      });
  };

  return (
    <div>
      <Nav title="Forgot Password" />
      <div className="py-4 px-12">
        <h1 className="font-bold text-3xl text-center">Forgot Password</h1>
        <div className="max-w-md mx-auto">
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email Address
                </label>
                <input
                  {...register("email", {
                    required: "Email address is required.",
                    pattern: {
                      value:
                        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                      message: "Entered value does not match email format.",
                    },
                  })}
                  id="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className={
                    "rounded-md relative block w-full border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  }
                  placeholder="Email Address"
                />
              </div>
            </div>

            <div
              className={
                "rounded-md p-2 text-sm " + errors ? "text-red-500" : ""
              }
            >
              <div>{errors?.email?.message}</div>
              <div>{errorMsg || ""}</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  href="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  I remembered my password.
                </Link>
              </div>
            </div>

            <div>
              <Button
                full={true}
                props={{ type: "submit" }}
                isLoading={isLoading}
              >
                Reset Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
