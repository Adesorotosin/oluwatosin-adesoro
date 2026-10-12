import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  CircleHelp,
  ClipboardList,
  LockKeyhole,
  Route,
  Wallet,
} from "lucide-react";

const workstreams = [
  {
    number: "01",
    icon: Boxes,
    title: "Inventory visibility",
    description:
      "Understand how stock is received, reserved, released, returned, and reconciled across vendor-owned goods.",
    status: "Discovery focus",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Order traceability",
    description:
      "Explore how an order can move from a vendor request through stock reservation, dispatch assignment, and final delivery.",
    status: "Discovery focus",
  },
  {
    number: "03",
    icon: Route,
    title: "Dispatch coordination",
    description:
      "Investigate the handoffs between operations staff and dispatchers, including mobile-friendly status updates and proof of delivery.",
    status: "Solution hypothesis",
  },
  {
    number: "04",
    icon: Wallet,
    title: "Payment reconciliation",
    description:
      "Map the initial payment, outstanding balance, delivery exceptions, company charges, and vendor settlement rules before designing the financial workflow.",
    status: "Needs validation",
  },
];

const discoveryQuestions = [
  "How is delivery distance measured and how is the initial delivery charge determined?",
  "Who confirms the post-delivery balance, and how is that confirmation recorded?",
  "What happens to payments, stock, and vendor settlement when a delivery fails or is returned?",
  "When is a vendor payable approved, and who is responsible for reconciliation?",
];

const stages = [
  { label: "Discovery", state: "current" },
  { label: "Definition & requirements", state: "upcoming" },
  { label: "UX design", state: "upcoming" },
  { label: "UI design & prototyping", state: "upcoming" },
  { label: "Validation & testing", state: "upcoming" },
  { label: "Handoff & evaluation", state: "upcoming" },
];

export const metadata = {
  title: "Logistics Operations Case Study | Oluwatosin Adesoro",
  description:
    "An exploratory product-design case study into inventory visibility, order traceability, dispatch coordination, and financial reconciliation.",
};

export default function LogisticsOperationsCaseStudy() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased transition-colors duration-300 dark:bg-[#080808] dark:text-zinc-100">
      <div className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8 sm:py-10">
        <header className="flex items-center justify-between gap-4">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to works
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
            Product design case study
          </span>
        </header>

        <main>
          <section className="relative mt-12 overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 px-6 py-10 dark:border-zinc-800 dark:bg-zinc-950 sm:mt-16 sm:px-10 sm:py-14 lg:px-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"
            />
            <div className="relative max-w-3xl">
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-indigo-700 dark:text-indigo-300">
                  Discovery in progress
                </span>
                <span className="rounded-full border border-zinc-300 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
                  Exploratory project
                </span>
              </div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                From fragmented records to a clearer operational picture
              </p>
              <h1 className="font-heading text-4xl font-normal leading-[1.05] tracking-tight sm:text-6xl">
                Bringing structure to a manual logistics operation.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg sm:leading-8">
                Exploring how a logistics team could better coordinate inventory,
                orders, dispatch, delivery payments, and vendor settlements through
                a more traceable digital workflow.
              </p>
              <div className="mt-9 grid grid-cols-2 gap-5 border-t border-zinc-200 pt-6 dark:border-zinc-800 sm:grid-cols-4">
                <div>
                  <p className="text-xs text-zinc-500">Role</p>
                  <p className="mt-1 text-sm font-medium">Product Designer</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Project type</p>
                  <p className="mt-1 text-sm font-medium">Exploratory</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Current stage</p>
                  <p className="mt-1 text-sm font-medium">Discovery</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Focus</p>
                  <p className="mt-1 text-sm font-medium">Operations workflow</p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-10 border-b border-zinc-200 py-12 dark:border-zinc-800 md:grid-cols-[0.7fr_1.3fr] md:py-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                01 / The challenge
              </p>
              <h2 className="mt-3 font-heading text-3xl font-normal sm:text-4xl">
                When critical details live in too many places.
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
              <p>
                The operational model being explored relies on a mix of handwritten
                records, messaging, and phone calls to coordinate stock, customer
                requests, delivery progress, and payments.
              </p>
              <p>
                That creates an opportunity to investigate how teams can get a more
                reliable view of what is in stock, which orders are moving, who owns
                the next action, and whether an order has been financially reconciled.
              </p>
              <p className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/50">
                <strong className="font-medium text-zinc-900 dark:text-white">
                  The design question:
                </strong>{" "}
                How might we make the flow of goods, information, and money easier
                to follow without adding unnecessary work for operations staff and
                dispatchers?
              </p>
            </div>
          </section>

          <section className="border-b border-zinc-200 py-12 dark:border-zinc-800 md:py-16">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                02 / Areas of investigation
              </p>
              <h2 className="mt-3 font-heading text-3xl font-normal sm:text-4xl">
                Start with the workflow, not the screens.
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
                Before committing to a solution, I am separating the operational
                problems into four workstreams. These are investigation areas, not
                claims that a system has already been built or approved.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {workstreams.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.number}
                    className="rounded-2xl border border-zinc-200 p-5 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900/50 sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="rounded-full bg-zinc-100 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wide text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                        {item.status}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-medium">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="grid gap-10 border-b border-zinc-200 py-12 dark:border-zinc-800 md:grid-cols-[0.7fr_1.3fr] md:py-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                03 / Solution hypothesis
              </p>
              <h2 className="mt-3 font-heading text-3xl font-normal sm:text-4xl">
                One operational view, with a simpler dispatch experience.
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
              <p>
                A direction worth validating is an internal operations dashboard
                paired with a mobile-friendly dispatcher interface. The dashboard
                could help staff coordinate vendors, stock, orders, exceptions, and
                settlement records; the dispatcher experience could focus on
                assigned deliveries, status updates, and delivery evidence.
              </p>
              <p>
                This is a hypothesis, not a final product decision. The right
                information architecture and MVP scope should follow stakeholder
                discovery and validation of the current process.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
                  <p className="font-medium text-zinc-900 dark:text-white">
                    Operations workspace
                  </p>
                  <p className="mt-1 text-sm">
                    Inventory, order tracking, assignment, exceptions, and
                    reconciliation.
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
                  <p className="font-medium text-zinc-900 dark:text-white">
                    Dispatcher experience
                  </p>
                  <p className="mt-1 text-sm">
                    Assigned deliveries, clear next actions, status updates, and
                    proof of delivery.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-10 border-b border-zinc-200 py-12 dark:border-zinc-800 md:grid-cols-[0.7fr_1.3fr] md:py-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                04 / Questions before design
              </p>
              <h2 className="mt-3 font-heading text-3xl font-normal sm:text-4xl">
                Resolve the rules that shape the experience.
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                These questions affect the workflow and cannot responsibly be
                settled by interface design alone.
              </p>
            </div>
            <div className="space-y-3">
              {discoveryQuestions.map((question) => (
                <div
                  key={question}
                  className="flex gap-3 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
                >
                  <CircleHelp className="mt-0.5 h-5 w-5 shrink-0 text-zinc-500" />
                  <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                    {question}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-10 border-b border-zinc-200 py-12 dark:border-zinc-800 md:grid-cols-[0.7fr_1.3fr] md:py-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                05 / Project progress
              </p>
              <h2 className="mt-3 font-heading text-3xl font-normal sm:text-4xl">
                Progress, documented as the work evolves.
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                This timeline reflects the current project stage. Future stages
                will be updated when their work has actually been completed.
              </p>
            </div>
            <ol className="space-y-0">
              {stages.map((stage, index) => {
                const isCurrent = stage.state === "current";
                return (
                  <li key={stage.label} className="relative flex gap-4 pb-7 last:pb-0">
                    <div className="relative flex w-5 shrink-0 justify-center">
                      {index < stages.length - 1 && (
                        <span className="absolute top-5 h-full w-px bg-zinc-200 dark:bg-zinc-800" />
                      )}
                      {isCurrent ? (
                        <CheckCircle2 className="relative z-10 h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      ) : (
                        <Circle className="relative z-10 h-5 w-5 text-zinc-300 dark:text-zinc-700" />
                      )}
                    </div>
                    <div className="-mt-0.5">
                      <p className="text-sm font-medium">{stage.label}</p>
                      <p className="mt-1 text-xs text-zinc-500">
                        {isCurrent ? "Current focus" : "Planned — not yet marked complete"}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>

          <section className="grid gap-6 py-12 md:grid-cols-2 md:py-16">
            <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800 sm:p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900">
                <LockKeyhole className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-lg font-medium">Respecting confidentiality</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                The organisation and individuals are intentionally unnamed. This
                public summary excludes customer records, internal documents,
                identifying operational details, and unapproved screenshots.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800 sm:p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900">
                <ClipboardList className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-lg font-medium">What comes next</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Validate the current-state workflow, clarify payment and exception
                rules, then define the MVP and map the future-state experience
                before moving into detailed UI design.
              </p>
            </div>
          </section>

          <footer className="flex flex-col gap-4 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
            <p>Oluwatosin Adesoro · Product Designer &amp; Design Engineer</p>
            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-zinc-900 transition-colors hover:text-indigo-600 dark:text-zinc-100 dark:hover:text-indigo-400"
            >
              Explore more work <ArrowUpRight className="h-4 w-4" />
            </Link>
          </footer>
        </main>
      </div>
    </div>
  );
}
