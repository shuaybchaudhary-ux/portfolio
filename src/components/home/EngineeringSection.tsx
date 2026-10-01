const layers = [
  {
    number: "01",
    title: "INTERFACE",
    description: "Where people interact with the system.",
  },
  {
    number: "02",
    title: "APPLICATION",
    description: "Where workflows and business logic live.",
  },
  {
    number: "03",
    title: "DATABASE",
    description: "Where information is structured and persisted.",
  },
  {
    number: "04",
    title: "INFRASTRUCTURE",
    description: "Where the system becomes reliable and deployable.",
  },
];

const stack = [
  {
    name: "PYTHON",
    role: "LOGIC",
  },
  {
    name: "POSTGRESQL",
    role: "DATA",
  },
  {
    name: "APIs",
    role: "CONNECT",
  },
  {
    name: "NEXT.JS",
    role: "PRODUCT",
  },
  {
    name: "CLOUD",
    role: "DEPLOY",
  },
];

export default function EngineeringSection() {
  return (
    <section
      id="engineering"
      className="relative overflow-hidden border-t border-black/10 bg-[#f4f1e9] text-black"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* ─────────────────────────────────────────
            HEADER
        ───────────────────────────────────────── */}

        <div className="grid grid-cols-4 gap-4 border-b border-black/10 py-6 md:grid-cols-12 md:gap-6">
          <div className="col-span-2 md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
              06 / Engineering
            </p>
          </div>

          <div className="col-span-2 text-right md:col-span-3 md:col-start-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
              Systems / Software
            </p>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            HERO STATEMENT
        ───────────────────────────────────────── */}

        <div className="grid grid-cols-4 gap-4 py-28 md:grid-cols-12 md:gap-6 md:py-44">
          <div className="col-span-4 md:col-span-11">
            <h2 className="font-sans text-[clamp(4rem,10.5vw,10.5rem)] font-black uppercase leading-[0.76] tracking-[-0.085em]">
              IDEAS ARE
              <br />
              CHEAP.
              <br />
              SYSTEMS MAKE
              <br />
              THEM REAL.
            </h2>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            INTRO
        ───────────────────────────────────────── */}

        <div className="grid grid-cols-4 gap-4 border-t border-black/15 py-16 md:grid-cols-12 md:gap-6 md:py-24">
          <div className="col-span-4 md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
              Engineering principle
            </p>
          </div>

          <div className="col-span-4 md:col-span-7 md:col-start-5">
            <p className="max-w-[780px] text-xl font-medium leading-[1.35] tracking-[-0.025em] md:text-3xl">
              I like understanding what happens underneath the interface —
              where data moves, where decisions live, and how individual parts
              become one working system.
            </p>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            SYSTEM ARCHITECTURE
        ───────────────────────────────────────── */}

        <div className="border-y border-black/15 py-20 md:py-28">
          <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-6">
            <div className="col-span-4 md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
                System architecture
              </p>

              <p className="mt-5 max-w-[280px] text-sm leading-[1.65] text-black/45">
                A simple mental model for how a digital product moves from
                interaction to infrastructure.
              </p>
            </div>

            <div className="col-span-4 md:col-span-8 md:col-start-5">
              <div className="relative">
                {[
                  {
                    label: "REQUEST",
                    detail: "INPUT",
                  },
                  {
                    label: "APPLICATION",
                    detail: "LOGIC",
                  },
                  {
                    label: "DATABASE",
                    detail: "STATE",
                  },
                  {
                    label: "RESPONSE",
                    detail: "OUTPUT",
                  },
                ].map((item, index, array) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between border border-black/20 px-5 py-5 md:px-8 md:py-7">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] md:text-xs">
                        {item.label}
                      </span>

                      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-black/35">
                        {item.detail}
                      </span>
                    </div>

                    {index < array.length - 1 && (
                      <div className="flex h-10 items-center justify-center">
                        <div className="h-full w-px bg-black/15" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            ENGINEERING LAYERS
        ───────────────────────────────────────── */}

        <div className="py-28 md:py-40">
          <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-6">
            <div className="col-span-4 md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
                Layers
              </p>

              <p className="mt-5 max-w-[260px] text-sm leading-[1.65] text-black/45">
                Good products are rarely one piece of software. They are
                systems of connected layers.
              </p>
            </div>

            <div className="col-span-4 md:col-span-8 md:col-start-5">
              <div className="border-t border-black/15">
                {layers.map((layer) => (
                  <div
                    key={layer.number}
                    className="grid grid-cols-4 gap-4 border-b border-black/15 py-8 md:grid-cols-8 md:gap-6 md:py-10"
                  >
                    <span className="col-span-1 font-mono text-[9px] tracking-[0.18em] text-black/30">
                      {layer.number}
                    </span>

                    <div className="col-span-3 md:col-span-3">
                      <h3 className="text-lg font-black uppercase tracking-[-0.03em] md:text-2xl">
                        {layer.title}
                      </h3>
                    </div>

                    <p className="col-span-3 col-start-2 text-sm leading-[1.6] text-black/45 md:col-span-3 md:col-start-6">
                      {layer.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            STACK
        ───────────────────────────────────────── */}

        <div className="border-t border-black/15 py-20 md:py-28">
          <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-6">
            <div className="col-span-4 md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
                Working stack
              </p>
            </div>

            <div className="col-span-4 md:col-span-8 md:col-start-5">
              <div className="border-t border-black/15">
                {stack.map((item, index) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between border-b border-black/15 py-6 md:py-8"
                  >
                    <div className="flex items-baseline gap-5 md:gap-8">
                      <span className="font-mono text-[9px] tracking-[0.18em] text-black/30">
                        0{index + 1}
                      </span>

                      <span className="text-xl font-black uppercase tracking-[-0.04em] md:text-3xl">
                        {item.name}
                      </span>
                    </div>

                    <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-black/35">
                      {item.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            BUILDING PHILOSOPHY
        ───────────────────────────────────────── */}

        <div className="border-t border-black/15 py-28 md:py-40">
          <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-6">
            <div className="col-span-4 md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
                The objective
              </p>
            </div>

            <div className="col-span-4 md:col-span-8 md:col-start-5">
              <p className="font-sans text-[clamp(2.8rem,6vw,6.5rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]">
                NOT JUST CODE.
                <br />
                USEFUL
                <br />
                SYSTEMS.
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
              System → Product
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/60">
              07 / Building ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}