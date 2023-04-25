import Nav from "@/components/Nav";
import Link from "next/link";

function sluggify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s/g, "-");
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <h2
        id={sluggify(title)}
        className="text-2xl font-bold text-center mt-4 mb-2"
      >
        {title}
      </h2>
      <div>{children}</div>
    </>
  );
}

export default function App() {
  return (
    <div>
      <Nav title="About" />
      <div className="py-4 px-12 max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-center mt-4 mb-2">About</h1>
        <div className="text-center">
          This site was inspired by{" "}
          <Link
            className="text-blue-500"
            href="https://codeforces.com/blog/entry/62898"
          >
            OI Checklist
          </Link>
          .
        </div>

        <Section title="What is this?">
          MO Checklist (MOCk) is a checklist for MOers to keep track of their progress in
          solving Mathematical Olympiad problems. Hope this will help you in
          your MO journey!
        </Section>

        <Section title="How do I use this?">
          You may click on the boxes to mark a problem as unsolved (
          <span className="bg-zinc-50">gray</span>), solving (
          <span className="bg-yellow-100">yellow</span>), or solved (
          <span className="bg-green-100">green</span>). You may also click on
          the problem name to go to the problem page. Remember to click save
          afterwards!
        </Section>

        <Section title="How do I add contests/problems?">
            There are tons of contests and problems out there. If you want to contribute, you may:
            <ol className="list-decimal">
                <li>Submit a pull request to <Link className="text-blue-500" href="https://github.com/veehz/mo-checklist">this repository</Link> to add a contest or problem.</li>
                <li>Email me at <Link className="text-blue-500" href="mailto:veehzhz@gmail.com">veehzhz@gmail.com</Link>.</li>
            </ol>
        </Section>

        <Section title="How else may I contribute?">
            If you found it helpful, you may leave a star at <Link className="text-blue-500" href="https://github.com/veehz/mo-checklist">my repo</Link>!
        </Section>
      </div>
    </div>
  );
}
