const projects = [
  {
    number: "01",
    code: "NOVA",
    category: "DATA / OPERATIONS",
    title: "E-commerce Operations Analytics",
    description:
      "An analytical system for understanding orders, products, customers and operational performance.",
    stack: "SQL / EXCEL / POWER BI / PYTHON",
    status: "CASE STUDY",
  },
  {
    number: "02",
    code: "VECTOR",
    category: "BUSINESS / BI",
    title: "Executive KPI Intelligence",
    description:
      "A decision-oriented dashboard designed to turn operational data into a clear executive view.",
    stack: "SQL / POWER BI / BUSINESS ANALYSIS",
    status: "CASE STUDY",
  },
  {
    number: "03",
    code: "ORBIT",
    category: "DATA / CUSTOMER",
    title: "Customer & Sales Performance",
    description:
      "An exploration of customer behavior, sales performance, segmentation and commercial patterns.",
    stack: "PYTHON / SQL / EXCEL / POWER BI",
    status: "CASE STUDY",
  },
  {
    number: "04",
    code: "SYSTEM 04",
    category: "AI / PRODUCT",
    title: "Intelligence & Automation",
    description:
      "A product experiment exploring AI, structured information and automated workflows.",
    stack: "PYTHON / APIs / AI / PRODUCT",
    status: "EXPERIMENT",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-black/10 bg-[#f4f1e9] text-black"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">

        {/* HEADER */}

        <div className="grid grid-cols-4 gap-4 border-b border-black/10 py-6 md:grid-cols-12 md:gap-6">
          <div className="col-span-2 md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
              09 / Projects
            </p>
          </div>

          <div className="col-span-2 text-right md:col-span-3 md:col-start-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
              Selected work
            </p>
          </div>
        </div>

        {/* INTRO */}

        <div className="grid grid-cols-4 gap-4 py-28 md:grid-cols-12 md:gap-6 md:py-44">

          <div className="col-span-4 md:col-span-10">

            <h2 className="font-sans text-[clamp(4rem,10.5vw,10.5rem)] font-black uppercase leading-[0.76] tracking-[-0.085em]">
              THINGS
              <br />
              I&apos;VE
              <br />
              ACTUALLY
              <br />
              BUILT.
            </h2>

          </div>

          <div className="col-span-4 mt-16 md:col-span-4 md:col-start-8 md:mt-20">

            <p className="text-sm leading-[1.7] text-black/50 md:text-base">
              Projects are where ideas become tangible. Each one is an
              opportunity to understand a problem, build a system and learn
              something from the result.
            </p>

          </div>

        </div>

        {/* PROJECT INDEX */}

        <div className="border-t border-black/15">

          {projects.map((project) => (
            <article
              key={project.number}
              className="group border-b border-black/15 py-10 md:py-14"
            >

              <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-6">

                {/* NUMBER */}

                <div className="col-span-1">

                  <span className="font-mono text-[9px] tracking-[0.18em] text-black/30">
                    {project.number}
                  </span>

                </div>

                {/* PROJECT */}

                <div className="col-span-3 md:col-span-6">

                  <div className="flex flex-col gap-3">

                    <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">

                      <h3 className="text-3xl font-black uppercase tracking-[-0.055em] transition-transform duration-300 group-hover:translate-x-2 md:text-5xl">
                        {project.code}
                      </h3>

                      <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-black/35">
                        {project.category}
                      </span>

                    </div>

                    <p className="text-lg font-medium tracking-[-0.02em] md:text-2xl">
                      {project.title}
                    </p>

                    <p className="max-w-[650px] text-sm leading-[1.65] text-black/45">
                      {project.description}
                    </p>

                  </div>

                </div>

                {/* STACK */}

                <div className="col-span-3 col-start-2 mt-6 md:col-span-3 md:col-start-9 md:mt-0">

                  <p className="font-mono text-[8px] uppercase leading-[1.8] tracking-[0.15em] text-black/35">
                    {project.stack}
                  </p>

                </div>

                {/* ACTION */}

                <div className="col-span-1 col-start-4 flex items-start justify-end md:col-start-12">

                  <span className="text-xl text-black/30 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </div>

              </div>

              {/* PROJECT FOOTER */}

              <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5 md:ml-[8.33%]">

                <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-black/30">
                  {project.status}
                </span>

                <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-black/45">
                  View case study →
                </span>

              </div>

            </article>
          ))}

        </div>

        {/* PROJECT PHILOSOPHY */}

        <div className="border-t border-black/15 py-28 md:py-40">

          <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-6">

            <div className="col-span-4 md:col-span-3">

              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
                Project philosophy
              </p>

            </div>

            <div className="col-span-4 md:col-span-8 md:col-start-5">

              <p className="font-sans text-[clamp(2.8rem,6vw,6.5rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]">
                DON&apos;T JUST
                <br />
                SHOW THE
                <br />
                RESULT.
                <br />
                SHOW THE
                <br />
                THINKING.
              </p>

            </div>

          </div>

        </div>

        {/* TRANSITION */}

        <div className="border-t border-black/10 py-7">

          <div className="flex items-end justify-between">

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/35">
              Work → Evidence
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/60">
              10 / Contact ↓
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}