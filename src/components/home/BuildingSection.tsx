const ventures = [
  {
    number: "01",
    code: "SYSTEM 01",
    category: "TECHNOLOGY / PRODUCT",
    title: "Building tools that give people more control over technology.",
    description:
      "A long-term exploration into software, hardware, AI and systems designed around user freedom.",
  },
  {
    number: "02",
    code: "STUDIO 01",
    category: "CONSUMER / BRAND",
    title: "Exploring how identity becomes a product.",
    description:
      "A consumer-focused exploration across brand positioning, visual language, culture and product.",
  },
  {
    number: "03",
    code: "EXPERIMENT 03",
    category: "AI / INTELLIGENCE",
    title: "Turning fragmented information into useful intelligence.",
    description:
      "Experiments around AI interfaces, structured information, automation and decision systems.",
  },
  {
    number: "04",
    code: "LAB 04",
    category: "PRODUCT / SYSTEMS",
    title: "Testing ideas before turning them into products.",
    description:
      "Small experiments used to understand problems, validate concepts and discover what deserves to exist.",
  },
];

const stages = [
  "OBSERVE",
  "QUESTION",
  "EXPLORE",
  "BUILD",
  "ITERATE",
];

export default function BuildingSection() {
  return (
    <section
      id="building"
      className="relative overflow-hidden border-t border-black/10 bg-[#f4f1e9] text-black"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* ─────────────────────────────────────────
            HEADER
        ───────────────────────────────────────── */}

        <div className="grid grid-cols-4 gap-4 border-b border-black/10 py-6 md:grid-cols-12 md:gap-6">
          <div className="col-span-2 md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
              07 / Building
            </p>
          </div>

          <div className="col-span-2 text-right md:col-span-3 md:col-start-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
              Ventures / Experiments
            </p>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            HERO
        ───────────────────────────────────────── */}

        <div className="grid grid-cols-4 gap-4 py-28 md:grid-cols-12 md:gap-6 md:py-44">
          <div className="col-span-4 md:col-span-11">
            <h2 className="font-sans text-[clamp(4rem,10.5vw,10.5rem)] font-black uppercase leading-[0.76] tracking-[-0.085em]">
              I LIKE
              <br />
              BUILDING
              <br />
              THINGS
              <br />
              THAT DON&apos;T
              <br />
              EXIST YET.
            </h2>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            INTRO
        ───────────────────────────────────────── */}

        <div className="grid grid-cols-4 gap-4 border-t border-black/15 py-16 md:grid-cols-12 md:gap-6 md:py-24">
          <div className="col-span-4 md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
              Builder&apos;s note
            </p>
          </div>

          <div className="col-span-4 md:col-span-7 md:col-start-5">
            <p className="max-w-[800px] text-xl font-medium leading-[1.35] tracking-[-0.025em] md:text-3xl">
              Some ideas begin as businesses. Some begin as experiments. Some
              begin as questions I cannot stop thinking about.
            </p>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            BUILDING LOOP
        ───────────────────────────────────────── */}

        <div className="border-y border-black/15 py-20 md:py-28">
          <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-6">
            <div className="col-span-4 md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
                Building loop
              </p>

              <p className="mt-5 max-w-[270px] text-sm leading-[1.65] text-black/45">
                The process is rarely linear. Every iteration changes the
                question.
              </p>
            </div>

            <div className="col-span-4 md:col-span-8 md:col-start-5">
              <div className="border-t border-black/15">
                {stages.map((stage, index) => (
                  <div
                    key={stage}
                    className="flex items-center justify-between border-b border-black/15 py-6 md:py-8"
                  >
                    <div className="flex items-baseline gap-6 md:gap-10">
                      <span className="font-mono text-[9px] tracking-[0.18em] text-black/30">
                        0{index + 1}
                      </span>

                      <span className="text-2xl font-black uppercase tracking-[-0.045em] md:text-4xl">
                        {stage}
                      </span>
                    </div>

                    {index < stages.length - 1 && (
                      <span className="font-mono text-[9px] text-black/25">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            VENTURES
        ───────────────────────────────────────── */}

        <div className="py-28 md:py-40">
          <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-6">
            <div className="col-span-4 md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
                Selected building
              </p>

              <p className="mt-5 max-w-[270px] text-sm leading-[1.65] text-black/45">
                Public-facing identifiers are intentionally abstract. The
                focus is on the problems, systems and ideas being explored.
              </p>
            </div>

            <div className="col-span-4 md:col-span-8 md:col-start-5">
              <div className="border-t border-black/15">
                {ventures.map((venture) => (
                  <article
                    key={venture.number}
                    className="group border-b border-black/15 py-10 md:py-14"
                  >
                    <div className="grid grid-cols-4 gap-4 md:grid-cols-8 md:gap-6">
                      <div className="col-span-1">
                        <span className="font-mono text-[9px] tracking-[0.18em] text-black/30">
                          {venture.number}
                        </span>
                      </div>

                      <div className="col-span-3 md:col-span-7">
                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                          <h3 className="text-2xl font-black uppercase tracking-[-0.05em] transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                            {venture.code}
                          </h3>

                          <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-black/35 md:pt-2">
                            {venture.category}
                          </span>
                        </div>

                        <p className="mt-7 max-w-[700px] text-lg font-medium leading-[1.3] tracking-[-0.02em] md:text-2xl">
                          {venture.title}
                        </p>

                        <p className="mt-4 max-w-[620px] text-sm leading-[1.65] text-black/45">
                          {venture.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            CLOSING STATEMENT
        ───────────────────────────────────────── */}

        <div className="border-t border-black/15 py-28 md:py-40">
          <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-6">
            <div className="col-span-4 md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
                The philosophy
              </p>
            </div>

            <div className="col-span-4 md:col-span-8 md:col-start-5">
              <p className="font-sans text-[clamp(2.8rem,6vw,6.5rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]">
                BUILD SMALL.
                <br />
                THINK LONG.
                <br />
                KEEP ITERATING.
              </p>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            TRANSITION
        ───────────────────────────────────────── */}

        <div className="border-t border-black/10 py-7">
          <div className="flex items-end justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/35">
              Ideas → Experiments → Products
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/60">
              08 / Personal ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}