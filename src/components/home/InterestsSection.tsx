const categories = [
  {
    number: "01",
    title: "Poetry",
    description: "Words, fragments and lines worth returning to.",
    meta: "URDU / HINDI / ENGLISH",
  },
  {
    number: "02",
    title: "Visuals",
    description: "Images, spaces and moments that shape my visual language.",
    meta: "PHOTOGRAPHY / ARCHITECTURE / ATMOSPHERE",
  },
  {
    number: "03",
    title: "Ideas",
    description: "Observations, questions and thoughts collected over time.",
    meta: "NOTES / ESSAYS / FRAGMENTS",
  },
  {
    number: "04",
    title: "Reading",
    description: "Books, biographies and thinkers I keep coming back to.",
    meta: "BOOKS / PHILOSOPHY / HISTORY",
  },
  {
    number: "05",
    title: "Culture",
    description: "Design, fashion, cinema and other influences on my taste.",
    meta: "DESIGN / FASHION / CINEMA",
  },
  {
    number: "06",
    title: "Archive",
    description: "Everything interesting that refuses to fit elsewhere.",
    meta: "MISCELLANEOUS",
  },
];

export default function InterestsSection() {
  return (
    <section
      id="interests"
      className="relative overflow-hidden border-t border-black/10 bg-[#f4f1e9] text-black"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">

        {/* HEADER */}

        <div className="grid grid-cols-4 gap-4 border-b border-black/10 py-6 md:grid-cols-12 md:gap-6">
          <div className="col-span-2 md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
              08 / Interests
            </p>
          </div>

          <div className="col-span-2 text-right md:col-span-3 md:col-start-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
              Personal archive
            </p>
          </div>
        </div>

        {/* HERO */}

        <div className="grid grid-cols-4 gap-4 py-28 md:grid-cols-12 md:gap-6 md:py-44">
          <div className="col-span-4 md:col-span-10">
            <h2 className="font-sans text-[clamp(4rem,10.5vw,10.5rem)] font-black uppercase leading-[0.76] tracking-[-0.085em]">
              A PERSONAL
              <br />
             ARCHIVE OF
              <br />
              THINGS WORTH
              <br />
              KEEPING.
            </h2>
          </div>

          <div className="col-span-4 mt-16 md:col-span-4 md:col-start-8 md:mt-20">
            <p className="text-sm leading-[1.7] text-black/50 md:text-base">
              Not everything I care about needs to become a project.
              Some things simply shape the way I see.
            </p>
          </div>
        </div>

        {/* ARCHIVE INDEX */}

        <div className="border-t border-black/15">

          {categories.map((category) => (
            <article
              key={category.number}
              className="group border-b border-black/15 py-8 md:py-10"
            >
              <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-6">

                {/* NUMBER */}

                <div className="col-span-1">
                  <span className="font-mono text-[9px] tracking-[0.18em] text-black/30">
                    {category.number}
                  </span>
                </div>

                {/* TITLE */}

                <div className="col-span-3 md:col-span-4">

                  <h3 className="text-2xl font-black uppercase tracking-[-0.05em] transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                    {category.title}
                  </h3>

                  <p className="mt-3 max-w-[420px] text-sm leading-[1.6] text-black/45">
                    {category.description}
                  </p>

                </div>

                {/* META */}

                <div className="col-span-3 col-start-2 mt-5 md:col-span-4 md:col-start-8 md:mt-0 md:text-right">
                  <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-black/35">
                    {category.meta}
                  </span>
                </div>

                {/* ARROW */}

                <div className="col-span-1 col-start-4 flex items-start justify-end md:col-start-12">
                  <span className="text-xl text-black/30 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

              </div>
            </article>
          ))}

        </div>

        {/* CLOSING */}

        <div className="border-t border-black/10 py-28 md:py-40">

          <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-6">

            <div className="col-span-4 md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
                Outside the work
              </p>
            </div>

            <div className="col-span-4 md:col-span-8 md:col-start-5">

              <p className="font-sans text-[clamp(2.8rem,6vw,6.5rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]">
                SOME THINGS
                <br />
                ARE BUILT.
                <br />
                SOME ARE
                <br />
                SIMPLY FELT.
              </p>

            </div>

          </div>

        </div>

        {/* TRANSITION */}

        <div className="border-t border-black/10 py-7">

          <div className="flex items-end justify-between">

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/35">
              Archive → Expression
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/60">
              09 / Contact ↓
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}