import Nav from "@/components/Nav";
import competitions from "../competitions";
import Link from "next/link";

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

export default function App() {
  return (
    <main>
      <Nav />
      <div className="py-4 px-12">
        <h1 className="font-bold text-3xl text-center">My Checklist</h1>
        {competitions.map((competition) => (
          <div key={competition.name} className="my-4">
            <h2
              className={
                "font-bold text-2xl" + (competition.url ? " text-blue-500" : "")
              }
              id={competition.shortname.toLowerCase()}
            >
              <Linkmaybe href={competition.url}>{competition.name}</Linkmaybe>
            </h2>
            <table className="table-auto w-full">
              <tbody>
                {competition.years.map((year) => (
                  <tr
                    key={
                      year.name
                        ? year.name
                        : `${competition.shortname} ${year.year}`
                    }
                  >
                    <td
                      className={
                        "cell cell-year" + (year.url ? " text-blue-500" : "")
                      }
                    >
                      <Linkmaybe href={year.url}>
                        {year.name
                          ? year.name
                          : `${competition.shortname} ${year.year}`}
                      </Linkmaybe>
                    </td>
                    {year.problems.map((p) => (
                      <td key={p.name || p.index} className={"cell cell-problem" + (p.url?" text-blue-500":"")}>
                        <Linkmaybe href={p.url}>
                          {p.name ? p.name : `P${p.index}`}
                        </Linkmaybe>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </main>
  );
}
