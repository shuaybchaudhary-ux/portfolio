export default function MindsetSection() {
  const principles = [
    {
      number: "01",
      word: "QUESTION",
      text: "before solution.",
    },
    {
      number: "02",
      word: "SYSTEM",
      text: "before feature.",
    },
    {
      number: "03",
      word: "EVIDENCE",
      text: "before assumption.",
    },
    {
      number: "04",
      word: "DETAIL",
      text: "before decoration.",
    },
  ];

  return (
    <section
      id="mindset"
      className="relative overflow-hidden border-t border-black/10 bg-[#f4f1e9] text-black"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40">
        {/* Chapter metadata */}
        <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-6">
          <div className="col-span-2 md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/45">
              03 / Mindset
            </p>
          </div>

          <div className="col-span-2 text-right md:col-span-3 md:col-start-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/45">
              How I think
            </p>
          </div>
        </div>

        {/* Main statement */}
        <div className="mt-20 grid grid-cols-4 gap-4 md:mt-28 md:grid-cols-12 md:gap-6">
          <div className="col-span-4 md:col-span-10">
            <h2 className="font-sans text-[clamp(4rem,10vw,10.5rem)] font-black uppercase leading-[0.79] tracking-[-0.075em]">
              I DON&apos;T
              <br />
              JUST BUILD
              <br />
              THINGS.
            </h2>
          </div>
        </div>

        {/* Second thought */}
        <div className="mt-16 grid grid-cols-4 gap-4 md:mt-24 md:grid-cols-12 md:gap-6">
          <div className="col-span-4 md:col-span-3 md:col-start-2">
            <p className="max-w-[320px] text-sm leading-[1.65] text-black/60 md:text-[15px]">
              I move between data, business, engineering and product because
              interesting problems rarely belong to one discipline.
            </p>
          </div>

          <div className="col-span-4 mt-12 md:col-span-7 md:col-start-6 md:mt-0">
            <p className="font-sans text-[clamp(2.7rem,6vw,6.8rem)] font-black uppercase leading-[0.86] tracking-[-0.065em]">
              I TRY TO
              <br />
              UNDERSTAND
              <br />
              WHY THEY
              <br />
              SHOULD EXIST.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-28 md:mt-40">
          <div className="border-t border-black/15">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="grid grid-cols-4 gap-4 border-b border-black/15 py-5 md:grid-cols-12 md:gap-6 md:py-7"
              >
                <div className="col-span-1">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-black/35">
                    {principle.number}
                  </span>
                </div>

                <div className="col-span-3 md:col-span-5">
                  <span className="text-sm font-bold uppercase tracking-[-0.01em] md:text-base">
                    {principle.word}
                  </span>
                </div>

                <div className="col-span-3 col-start-2 md:col-span-5 md:col-start-8">
                  <span className="text-sm text-black/50 md:text-base">
                    {principle.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transition into disciplines */}
        <div className="mt-28 grid grid-cols-4 gap-4 md:mt-44 md:grid-cols-12 md:gap-6">
          <div className="col-span-4 md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
              The disciplines
            </p>
          </div>

          <div className="col-span-4 mt-8 md:col-span-8 md:col-start-5 md:mt-0">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-sans text-[clamp(2.4rem,5vw,5.5rem)] font-black uppercase leading-none tracking-[-0.055em]">
              <span>Data</span>
              <span className="font-light text-black/20">/</span>
              <span>Business</span>
              <span className="font-light text-black/20">/</span>
              <span>Technology</span>
            </div>
          </div>
        </div>

        {/* Chapter exit */}
        <div className="mt-24 flex items-end justify-between border-t border-black/10 pt-6 md:mt-32">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/35">
            Thinking → Evidence
          </span>

          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/60">
            04 / Data ↓
          </span>
        </div>
      </div>
    </section>
  );
}