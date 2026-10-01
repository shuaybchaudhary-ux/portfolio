const process = [
  {
    number: "01",
    title: "ASK",
    description: "Define the question before touching the dataset.",
  },
  {
    number: "02",
    title: "CLEAN",
    description: "Remove noise and turn messy information into usable data.",
  },
  {
    number: "03",
    title: "ANALYZE",
    description: "Find patterns, relationships, anomalies and signals.",
  },
  {
    number: "04",
    title: "DECIDE",
    description: "Translate evidence into something the business can act on.",
  },
];

const tools = [
  {
    name: "SQL",
    role: "QUERY",
  },
  {
    name: "EXCEL",
    role: "MODEL",
  },
  {
    name: "POWER BI",
    role: "VISUALIZE",
  },
  {
    name: "PYTHON",
    role: "ANALYZE",
  },
];

const projects = [
  {
    number: "01",
    title: "NOVACART",
    description: "E-commerce operations analytics",
    type: "OPERATIONS / ANALYTICS",
  },
  {
    number: "02",
    title: "RETAIL",
    description: "Customer & sales performance",
    type: "CUSTOMER / SALES",
  },
  {
    number: "03",
    title: "COMMAND CENTER",
    description: "Executive KPI intelligence",
    type: "BUSINESS / BI",
  },
];

export default function DataSection() {
  return (
    <section
      id="data"
      className="relative overflow-hidden border-t border-black/10 bg-[#f4f1e9] text-black"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* ─────────────────────────────────────────
            HEADER
        ───────────────────────────────────────── */}

        <div className="grid grid-cols-4 gap-4 border-b border-black/10 py-6 md:grid-cols-12 md:gap-6">
          <div className="col-span-2 md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
              04 / Data
            </p>
          </div>

          <div className="col-span-2 text-right md:col-span-3 md:col-start-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
              Evidence / Analysis
            </p>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            HERO STATEMENT
        ───────────────────────────────────────── */}

        <div className="grid grid-cols-4 gap-4 py-28 md:grid-cols-12 md:gap-6 md:py-44">
          <div className="col-span-4 md:col-span-11">
            <h2 className="font-sans text-[clamp(4rem,11vw,11rem)] font-black uppercase leading-[0.76] tracking-[-0.085em]">
              THE NUMBERS
              <br />
              DON&apos;T SPEAK.
            </h2>
          </div>

          <div className="col-span-4 mt-16 md:col-span-8 md:col-start-5 md:mt-24">
            <h3 className="font-sans text-[clamp(3.2rem,8vw,8rem)] font-black uppercase leading-[0.8] tracking-[-0.075em]">
              THE
              <br />
              QUESTIONS
              <br />
              DO.
            </h3>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            INTRO
        ───────────────────────────────────────── */}

        <div className="grid grid-cols-4 gap-4 border-t border-black/15 py-16 md:grid-cols-12 md:gap-6 md:py-24">
          <div className="col-span-4 md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
              The principle
            </p>
          </div>

          <div className="col-span-4 md:col-span-7 md:col-start-5">
            <p className="max-w-[760px] text-xl font-medium leading-[1.35] tracking-[-0.025em] md:text-3xl">
              Data is useful when it helps explain what is happening, why it is
              happening, and what should happen next.
            </p>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            PROCESS
        ───────────────────────────────────────── */}

        <div className="border-t border-black/15">
          {process.map((item) => (
            <div
              key={item.number}
              className="grid grid-cols-4 gap-4 border-b border-black/15 py-8 md:grid-cols-12 md:gap-6 md:py-10"
            >
              <div className="col-span-1">
                <span className="font-mono text-[10px] tracking-[0.2em] text-black/35">
                  {item.number}
                </span>
              </div>

              <div className="col-span-3 md:col-span-3">
                <h4 className="text-lg font-black uppercase tracking-[-0.025em] md:text-xl">
                  {item.title}
                </h4>
              </div>

              <div className="col-span-3 col-start-2 md:col-span-5 md:col-start-8">
                <p className="text-sm leading-[1.6] text-black/50 md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ─────────────────────────────────────────
            ANALYTICAL ARTIFACT
        ───────────────────────────────────────── */}

        <div className="py-28 md:py-40">
          <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-6">
            <div className="col-span-4 md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
                Analytical artifact
              </p>

              <p className="mt-5 max-w-[260px] text-sm leading-[1.65] text-black/45">
                A visual language for finding movement inside a dataset.
              </p>
            </div>

            <div className="col-span-4 md:col-span-8 md:col-start-5">
              <div className="relative overflow-hidden border border-black/15 bg-[#eeebe2]">
                {/* chart header */}
                <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 md:px-7">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/45">
                    Revenue / Monthly
                  </span>

                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/35">
                    Illustrative
                  </span>
                </div>

                {/* chart */}
                <div className="relative h-[360px] px-5 pb-8 pt-8 md:h-[460px] md:px-8">
                  <div className="absolute inset-x-5 top-8 bottom-10 flex flex-col justify-between md:inset-x-8">
                    <span className="border-t border-black/[0.08]" />
                    <span className="border-t border-black/[0.08]" />
                    <span className="border-t border-black/[0.08]" />
                    <span className="border-t border-black/[0.08]" />
                    <span className="border-t border-black/[0.08]" />
                  </div>

                  <svg
                    viewBox="0 0 1000 400"
                    preserveAspectRatio="none"
                    className="relative z-10 h-full w-full"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 300 C80 285 100 315 170 270 S270 235 330 250 S410 180 470 205 S555 245 620 165 S710 120 760 145 S840 90 900 105 S950 65 1000 80"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      vectorEffect="non-scaling-stroke"
                    />

                    <path
                      d="M0 330 C100 325 135 340 210 315 S320 285 390 300 S500 275 570 290 S690 250 760 270 S870 235 1000 245"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="7 8"
                      opacity="0.25"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>

                  <div className="absolute bottom-3 left-5 right-5 flex justify-between md:left-8 md:right-8">
                    {["JAN", "FEB", "MAR", "APR", "MAY", "JUN"].map(
                      (month) => (
                        <span
                          key={month}
                          className="font-mono text-[8px] tracking-[0.15em] text-black/35"
                        >
                          {month}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            TOOL INDEX
        ───────────────────────────────────────── */}

        <div className="border-t border-black/15 py-20 md:py-28">
          <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-6">
            <div className="col-span-4 md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
                Toolkit
              </p>
            </div>

            <div className="col-span-4 md:col-span-8 md:col-start-5">
              {tools.map((tool, index) => (
                <div
                  key={tool.name}
                  className="flex items-baseline justify-between border-b border-black/15 py-5 md:py-7"
                >
                  <div className="flex items-baseline gap-5 md:gap-8">
                    <span className="font-mono text-[9px] tracking-[0.18em] text-black/30">
                      0{index + 1}
                    </span>

                    <span className="text-2xl font-black uppercase tracking-[-0.04em] md:text-4xl">
                      {tool.name}
                    </span>
                  </div>

                  <span className="font-mono text-[9px] tracking-[0.18em] text-black/35">
                    {tool.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            SELECTED WORK
        ───────────────────────────────────────── */}

        <div className="border-t border-black/15 py-24 md:py-36">
          <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-6">
            <div className="col-span-4 md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
                Selected analysis
              </p>
            </div>

            <div className="col-span-4 md:col-span-8 md:col-start-5">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="group border-b border-black/15 py-8 md:py-10"
                >
                  <div className="grid grid-cols-4 gap-4 md:grid-cols-8 md:gap-6">
                    <span className="col-span-1 font-mono text-[9px] tracking-[0.18em] text-black/30">
                      {project.number}
                    </span>

                    <div className="col-span-3 md:col-span-4">
                      <h4 className="text-2xl font-black uppercase tracking-[-0.045em] transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                        {project.title}
                      </h4>

                      <p className="mt-2 text-sm text-black/50">
                        {project.description}
                      </p>
                    </div>

                    <div className="col-span-3 col-start-2 md:col-span-2 md:col-start-7 md:text-right">
                      <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-black/35">
                        {project.type}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            EXIT
        ───────────────────────────────────────── */}

        <div className="flex items-end justify-between border-t border-black/10 py-7">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/35">
            Evidence → Decision
          </span>

          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/60">
            05 / Business ↓
          </span>
        </div>
      </div>
    </section>
  );
}