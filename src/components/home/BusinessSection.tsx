const questions = [
  {
    number: "01",
    question: "WHY ARE SALES MOVING?",
    context: "Revenue / Demand / Mix",
  },
  {
    number: "02",
    question: "WHERE IS MARGIN LEAKING?",
    context: "Cost / Pricing / Operations",
  },
  {
    number: "03",
    question: "WHICH CUSTOMERS MATTER?",
    context: "Retention / Value / Segments",
  },
  {
    number: "04",
    question: "WHAT SHOULD CHANGE?",
    context: "Action / Priority / Impact",
  },
];

const systems = [
  "CUSTOMER",
  "REVENUE",
  "OPERATIONS",
  "MARGIN",
  "GROWTH",
];

export default function BusinessSection() {
  return (
    <section
      id="business"
      className="relative overflow-hidden border-t border-black/10 bg-[#f4f1e9] text-black"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* ─────────────────────────────────────────
            HEADER
        ───────────────────────────────────────── */}

        <div className="grid grid-cols-4 gap-4 border-b border-black/10 py-6 md:grid-cols-12 md:gap-6">
          <div className="col-span-2 md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
              05 / Business
            </p>
          </div>

          <div className="col-span-2 text-right md:col-span-3 md:col-start-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
              Context / Decisions
            </p>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            HERO STATEMENT
        ───────────────────────────────────────── */}

        <div className="grid grid-cols-4 gap-4 py-28 md:grid-cols-12 md:gap-6 md:py-44">
          <div className="col-span-4 md:col-span-11">
            <h2 className="font-sans text-[clamp(4rem,10.5vw,10.5rem)] font-black uppercase leading-[0.76] tracking-[-0.085em]">
              A BUSINESS
              <br />
              IS A SYSTEM
              <br />
              OF TRADE-OFFS.
            </h2>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            SYSTEM DIAGRAM
        ───────────────────────────────────────── */}

        <div className="border-y border-black/15 py-20 md:py-28">
          <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-6">
            <div className="col-span-4 md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
                Business system
              </p>

              <p className="mt-5 max-w-[280px] text-sm leading-[1.65] text-black/45">
                A change in one part of the system can create consequences
                somewhere else.
              </p>
            </div>

            <div className="col-span-4 md:col-span-8 md:col-start-5">
              <div className="relative py-8 md:py-12">
                {/* Main system */}
                <div className="flex flex-col items-center">
                  <div className="border border-black/20 px-8 py-5 text-center">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/45">
                      CUSTOMER
                    </span>
                  </div>

                  <div className="h-10 w-px bg-black/15" />

                  <div className="border border-black/20 px-8 py-5 text-center">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/45">
                      DEMAND
                    </span>
                  </div>

                  <div className="h-10 w-px bg-black/15" />

                  <div className="border border-black/30 bg-black px-10 py-6 text-center text-[#f4f1e9]">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                      BUSINESS
                    </span>
                  </div>

                  <div className="h-10 w-px bg-black/15" />

                  <div className="grid w-full max-w-[620px] grid-cols-2 gap-3 md:grid-cols-4">
                    {["REVENUE", "OPERATIONS", "MARGIN", "GROWTH"].map(
                      (item) => (
                        <div
                          key={item}
                          className="border border-black/15 px-3 py-4 text-center"
                        >
                          <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-black/45">
                            {item}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            BUSINESS QUESTIONS
        ───────────────────────────────────────── */}

        <div className="py-28 md:py-40">
          <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-6">
            <div className="col-span-4 md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
                The questions
              </p>

              <p className="mt-5 max-w-[250px] text-sm leading-[1.65] text-black/45">
                Analysis becomes valuable when it is attached to a decision.
              </p>
            </div>

            <div className="col-span-4 md:col-span-8 md:col-start-5">
              <div className="border-t border-black/15">
                {questions.map((item) => (
                  <div
                    key={item.number}
                    className="group border-b border-black/15 py-8 md:py-10"
                  >
                    <div className="grid grid-cols-4 gap-4 md:grid-cols-8 md:gap-6">
                      <span className="col-span-1 font-mono text-[9px] tracking-[0.18em] text-black/30">
                        {item.number}
                      </span>

                      <div className="col-span-3 md:col-span-6">
                        <h3 className="text-xl font-black uppercase leading-none tracking-[-0.045em] transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                          {item.question}
                        </h3>

                        <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-black/35">
                          {item.context}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            KPI / DECISION LANGUAGE
        ───────────────────────────────────────── */}

        <div className="border-t border-black/15 py-24 md:py-36">
          <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-6">
            <div className="col-span-4 md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
                Decision layer
              </p>
            </div>

            <div className="col-span-4 md:col-span-8 md:col-start-5">
              <p className="max-w-[900px] font-sans text-[clamp(2.8rem,6vw,6.5rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]">
                A KPI IS NOT
                <br />
                THE DECISION.
                <br />
                IT&apos;S THE SIGNAL
                <br />
                BEHIND IT.
              </p>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            BUSINESS SYSTEM INDEX
        ───────────────────────────────────────── */}

        <div className="border-t border-black/15 py-20 md:py-28">
          <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-6">
            <div className="col-span-4 md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
                What I look at
              </p>
            </div>

            <div className="col-span-4 md:col-span-8 md:col-start-5">
              <div className="grid grid-cols-1 border-t border-black/15 md:grid-cols-2">
                {systems.map((system, index) => (
                  <div
                    key={system}
                    className="flex items-center justify-between border-b border-black/15 py-6 md:px-4"
                  >
                    <span className="font-black uppercase tracking-[-0.03em] md:text-lg">
                      {system}
                    </span>

                    <span className="font-mono text-[8px] tracking-[0.18em] text-black/30">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            TRANSITION
        ───────────────────────────────────────── */}

        <div className="border-t border-black/10 py-7">
          <div className="flex items-end justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/35">
              Decision → System
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/60">
              06 / Engineering ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}