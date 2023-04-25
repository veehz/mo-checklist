import Nav from "@/components/Nav";
import competitions, {
  Competition,
  CompetitionProblem,
  CompetitionYear,
} from "../competitions";
import Link from "next/link";
import { auth, db } from "@/firebase";
import { useEffect, useReducer, useState, Fragment, useRef } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { onValue, ref, update } from "firebase/database";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Button from "@/components/Button";
import { useRouter } from "next/router";

function Extlink({
  href,
  children,
  target,
  onClick,
  className,
}: {
  href?: string;
  target?: string;
  onClick?: any;
  className?: string;
  children: React.ReactNode;
}) {
  if (!href) return <span className={className}>{children}</span>;
  return (
    <a href={href} target={target} onClick={onClick} className={className}>
      {children}
    </a>
  );
}

interface solvedStates {
  [key: string]: number | null;
  // 0 Unread
  // 1 Solving
  // 2 Solved
}

const solvedStatesColors: {
  [key: keyof solvedStates]: string;
} = {
  0: "bg-zinc-50",
  1: "bg-yellow-200",
  2: "bg-green-200",
};

/** returns a unique id for each problem (used to store in firebase) */
function getId(
  comp: Competition,
  year: CompetitionYear,
  problem: CompetitionProblem
): string {
  return `${comp.shortname} ${year.name || year.year} ${
    problem.name || problem.index
  }`;
}

function reducer(
  state: solvedStates,
  action: {
    type: "increment" | "update" | "set";
    payload: any;
  }
): solvedStates {
  if (action.type == "increment") {
    const len = Object.keys(solvedStatesColors).length;
    if (!state[action.payload]) state[action.payload] = 0;
    return { ...state, [action.payload]: (state[action.payload]! + 1) % len };
  }
  if (action.type == "update")
    return {
      ...state,
      ...action.payload,
    };

  return action.payload;
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, {});

  const [user, setUser] = useState<User>();
  const [hiddenContests, setHiddenContests] = useState<string[]>([]);

  const defaultShownYears = parseInt(
    process.env.NEXT_PUBLIC_DEFAULT_SHOWN_YEARS || "15"
  );
  const [shownYears, setShownYears] = useState<number>(defaultShownYears);

  const [viewMode, setViewMode] = useState<boolean>(false);
  const [viewModeDisplayName, setViewModeDisplayName] =
    useState<string>("User");

  const [shareLink, setShareLink] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [originalData, setOriginalData] = useState<solvedStates>({});

  // Warn leaving page with unsaved changes (https://stackoverflow.com/a/65338027/6931684)
  const [edited, setEdited] = useState<boolean>(false);
  useEffect(() => {
    const confirmationMessage =
      "You have unsaved changes. Are you sure you want to leave?";
    const beforeUnloadHandler = (e: BeforeUnloadEvent) => {
      (e || window.event).returnValue = confirmationMessage;
      return confirmationMessage; // Gecko + Webkit, Safari, Chrome etc.
    };
    const beforeRouteHandler = (url: string) => {
      if (router.pathname !== url && !confirm(confirmationMessage)) {
        router.events.emit("routeChangeError");
        // tslint:disable-next-line: no-string-throw
        throw `Route change to "${url}" was aborted (this error can be safely ignored). See https://github.com/vercel/next.js/discussions/32231.`;
      }
    };

    if (edited) {
      window.addEventListener("beforeunload", beforeUnloadHandler);
      router.events.on("routeChangeStart", beforeRouteHandler);
    } else {
      window.removeEventListener("beforeunload", beforeUnloadHandler);
      router.events.off("routeChangeStart", beforeRouteHandler);
    }
  }, [edited]);

  function solvedAll(competition: Competition, year: CompetitionYear) {
    if (!year.problems.length) return false;
    let unsolved = false;
    for (const p of year.problems) {
      if (
        !state[getId(competition, year, p)] ||
        state[getId(competition, year, p)] != 2
      ) {
        unsolved = true;
        break;
      }
    }
    return !unsolved;
  }

  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("run");

      const origin =
        typeof window !== "undefined" && window.location.origin
          ? window.location.origin
          : "";

      if (router.query.user) {
        // setLoaded(true);
        setViewMode(true);

        setShareLink(
          `${origin}${router.basePath || "/"}?user=${router.query.user}`
        );

        onValue(
          ref(db, `profile/${router.query!.user}`),
          (snapshot) => {
            if (snapshot.exists()) {
              if (snapshot.val().hiddenContests)
                setHiddenContests(Object.keys(snapshot.val().hiddenContests));
              else setHiddenContests([]);
              if (snapshot.val().displayName)
                setViewModeDisplayName(snapshot.val().displayName);
              else setViewModeDisplayName("User");
              if (snapshot.val().shownYears)
                setShownYears(snapshot.val().shownYears);
              else setShownYears(defaultShownYears);
            }
          },
          {
            onlyOnce: true,
          }
        );

        onValue(
          ref(db, `solved/${router.query!.user}`),
          (snapshot) => {
            if (snapshot.exists()) {
              dispatch({
                type: "set",
                payload: snapshot.val(),
              });
            } else {
              dispatch({
                type: "set",
                payload: {},
              });
            }
          },
          {
            onlyOnce: true,
          }
        );
      } else if (user) {
        setUser(user);
        setShareLink(`${origin}${router.basePath || "/"}?user=${user.uid}`);

        onValue(
          ref(db, `profile/${user.uid}`),
          (snapshot) => {
            if (snapshot.exists()) {
              if (snapshot.val().hiddenContests)
                setHiddenContests(Object.keys(snapshot.val().hiddenContests));
              else setHiddenContests([]);
              if (snapshot.val().shownYears)
                setShownYears(snapshot.val().shownYears);
              else setShownYears(defaultShownYears);
            }
          },
          {
            onlyOnce: true,
          }
        );

        onValue(
          ref(db, `solved/${user.uid}`),
          (snapshot) => {
            if (snapshot.exists()) {
              setOriginalData(snapshot.val());
              dispatch({
                type: "set",
                payload: snapshot.val(),
              });
            } else {
              setOriginalData({});
              dispatch({
                type: "set",
                payload: {},
              });
            }
          },
          {
            onlyOnce: true,
          }
        );
      } else {
        setOriginalData({});
        dispatch({
          type: "set",
          payload: {},
        });
        setUser(undefined);
        setShareLink("");
        setHiddenContests([]);
        setShownYears(defaultShownYears);
      }
    });
  }, [router]);

  function saveData() {
    const updates: solvedStates = {};
    for (const [key, value] of Object.entries(state)) {
      if (originalData[key] != value) {
        if (!originalData[key] && value == 0) continue;
        updates[key] = value ? value : null;
      }
    }
    update(ref(db, `solved/${user!.uid}`), updates);
  }

  return (
    <main>
      <Nav />
      <div className="py-4 px-4 sm:px-10 md:px-20">
        <h1 className="font-bold text-3xl text-center">
          {viewMode
            ? `Viewing ${viewModeDisplayName}'s Checklist`
            : user?.displayName
            ? `${user!.displayName}'s Checklist`
            : `My Checklist`}
        </h1>
        <div className="text-center mt-2">
          {user ? null : <div>Sign in to save your progress!</div>}
          <div>{message}</div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row-reverse mt-4">
          {/* <Menu as="div" className="relative inline-block float-right"> */}
          <Menu as="div" className="relative inline-block mx-2 my-1 sm:my-0">
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-30 px-4 py-2 text-sm font-bold text-white hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              Jump To
              <ChevronDownIcon
                className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  {competitions
                    .filter((x) => !hiddenContests.includes(x.shortname))
                    .map((competition) => {
                      return (
                        <Menu.Item key={competition.shortname}>
                          <Link
                            href={`#${competition.shortname.toLowerCase()}`}
                            className={`text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {competition.name} ({competition.shortname})
                          </Link>
                        </Menu.Item>
                      );
                    })}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {user && !viewMode ? (
            <Button
              onClick={() => {
                saveData();
              }}
              className="bg-green-600 mx-2 my-1 sm:my-0"
            >
              <div className="px-2 sm:px-8">Save</div>
            </Button>
          ) : null}
          {viewMode ? (
            <Button
              className="bg-blue-600 mx-2 my-1 sm:my-0"
              onClick={() => {
                router.push("/");
                setViewMode(false);
              }}
            >
              <div className="px-2 sm:px-8">Go Back to My Checklist</div>
            </Button>
          ) : null}
          {shareLink ? (
            <Button
              onClick={() => {
                navigator.clipboard.writeText(shareLink);
                setMessage("Copied to clipboard!");
              }}
              className="bg-blue-600 mx-2 my-1 sm:my-0"
            >
              <div className="px-2 sm:px-8">Copy Sharable Link</div>
            </Button>
          ) : null}
        </div>

        {competitions
          .filter((x) => !hiddenContests.includes(x.shortname))
          .map((competition) => (
            <div key={competition.name} className="my-4">
              <h2
                className={
                  "font-bold text-2xl" +
                  (competition.url ? " text-blue-500" : "")
                }
                id={competition.shortname.toLowerCase()}
              >
                <Extlink href={competition.url} target="_blank">
                  {competition.name}
                </Extlink>
              </h2>
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <tbody>
                    {competition.years
                      .filter((year) => {
                        return (
                          !year.year ||
                          year.year > new Date().getFullYear() - shownYears
                        );
                      })
                      .map((year) => (
                        <tr
                          key={
                            year.name
                              ? year.name
                              : `${competition.shortname} ${year.year}`
                          }
                        >
                          <td
                            className={
                              "cell" +
                              (solvedAll(competition, year)
                                ? ` ${solvedStatesColors[2]}`
                                : ` bg-zinc-100`)
                            }
                          >
                            <Extlink
                              href={year.url}
                              target="_blank"
                              className={
                                year.url
                                  ? "text-blue-500 font-bold"
                                  : "font-bold"
                              }
                            >
                              {year.name
                                ? year.name
                                : `${competition.shortname} ${year.year}`}
                            </Extlink>{" "}
                            {year.links ? (
                              <>
                                (
                                {Object.keys(year.links).map(
                                  (link: string, index: number) => (
                                    <span key={link}>
                                      <Extlink
                                        href={year.links![link]}
                                        target="_blank"
                                        className="text-blue-500"
                                      >
                                        {link}
                                      </Extlink>
                                      {index ==
                                      Object.keys(year.links!).length - 1
                                        ? ""
                                        : ", "}
                                    </span>
                                  )
                                )}
                                )
                              </>
                            ) : null}
                          </td>
                          {year.problems.map((p) => (
                            <td
                              id={getId(competition, year, p)}
                              key={p.name || p.index}
                              className={
                                "cell cell-problem" +
                                (p.url ? " text-blue-500" : "") +
                                " " +
                                solvedStatesColors[
                                  state[getId(competition, year, p)] || 0
                                ]
                              }
                              onClick={() => {
                                if (!viewMode && user) {
                                  setEdited(true);
                                  dispatch({
                                    type: "increment",
                                    payload: getId(competition, year, p),
                                  });
                                }
                              }}
                            >
                              <Extlink
                                href={p.url}
                                target="_blank"
                                onClick={(e: any) => {
                                  e.stopPropagation();
                                }}
                              >
                                {p.name ? p.name : `P${p.index}`}
                              </Extlink>
                            </td>
                          ))}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
