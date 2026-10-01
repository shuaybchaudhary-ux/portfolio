"use client";

import Image from "next/image";
import { useState } from "react";

type Expertise = {
  id: string;
  label: string;
  title: string;
  description: string;
  accent: string;
  skills: string[];
};

const expertise: Expertise[] = [
  {
    id: "01",
    label: "DATA",
    title: "Data Analytics",
    description:
      "Turning raw business data into useful metrics, patterns, dashboards, and decisions.",
    accent: "#123c32",
    skills: ["SQL", "Excel", "Power BI", "Python", "Pandas"],
  },
  {
    id: "02",
    label: "BUSINESS",
    title: "Business Analysis",
    description:
      "Understanding business problems, defining KPIs, analysing operations, and translating findings into action.",
    accent: "#243c5a",
    skills: ["KPIs", "Operations", "Strategy", "Business Metrics"],
  },
  {
    id: "03",
    label: "ENGINEERING",
    title: "Python Backend",
    description:
      "Building APIs, backend systems, PostgreSQL applications, and data-driven products.",
    accent: "#4a3430",
    skills: ["Python", "APIs", "PostgreSQL", "Backend Systems"],
  },
  {
    id: "04",
    label: "AI / SYSTEMS",
    title: "AI & Intelligent Systems",
    description:
      "Exploring AI products, automation, data systems, LLM applications, and intelligent workflows.",
    accent: "#39432e",
    skills: ["LLMs", "RAG", "Automation", "AI Products"],
  },
  {
    id: "05",
    label: "BUILDING",
    title: "Product Building",
    description:
      "Taking ideas from business problem to product architecture, interface, deployment, and iteration.",
    accent: "#45354d",
    skills: ["Product", "Architecture", "UX", "Deployment"],
  },
  {
    id: "06",
    label: "BRANDS",
    title: "Brand Building",
    description:
      "Working across positioning, visual identity, consumer thinking, storytelling, and growth.",
    accent: "#513a2d",
    skills: ["Positioning", "Identity", "Consumer Thinking", "Storytelling"],
  },
];

export default function Hero() {
  const [flipped, setFlipped] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const activeExpertise = expertise.find(
    (item) => item.id === activeCard
  );

  const handleFlip = () => {
    setActiveCard(null);
    setFlipped(true);
  };

  const handleReturn = () => {
    setActiveCard(null);
    setFlipped(false);
  };

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-paper text-ink"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-[70vh] w-[55vw]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(18,60,50,0.045)_0%,transparent_68%)]
          blur-3xl
        "
      />

      {/* =====================================================
          SECTION METADATA
      ====================================================== */}

      <div className="absolute left-[4vw] top-[22%] z-30">
        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-black/35" />

          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-black/45">
            {flipped ? "02 / Identity" : "01 / Presence"}
          </span>
        </div>
      </div>

      <div
        className="
          absolute right-[4vw] top-[22%]
          z-30 hidden
          font-mono text-[9px]
          uppercase tracking-[0.2em]
          text-black/30
          md:block
        "
      >
        Personal / 2026
      </div>

      {/* =====================================================
          3D FLIP STAGE
      ====================================================== */}

      <div
        className="
          relative flex min-h-screen
          items-center justify-center
          px-[4vw]
          pb-32 pt-24
        "
      >
        <div
          className="
            hero-flip-stage
            relative
            h-[74vh]
            w-[min(92vw,1180px)]
          "
        >
          <div
            className={`
              hero-flip-card
              ${flipped ? "hero-flip-card--flipped" : ""}
            `}
          >
            {/* =================================================
                FRONT — PRESENCE
            ================================================== */}

            <div className="hero-flip-face hero-flip-front">
              {/* oversized section number */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute left-[2vw] top-1/2
                  -translate-y-1/2
                  select-none
                  font-display
                  text-[clamp(14rem,28vw,30rem)]
                  leading-[0.65]
                  tracking-[-0.09em]
                  text-black/[0.025]
                "
              >
                01
              </div>

              {/* front portrait */}

              <div
                className="
                  absolute left-1/2 top-1/2
                  h-[74vh]
                  w-[min(58vw,720px)]
                  min-w-[320px]
                  -translate-x-[42%]
                  -translate-y-1/2
                "
              >
                {/* soft atmospheric duplicate */}

                <div
                  aria-hidden="true"
                  className="
                    absolute inset-[4%]
                    overflow-hidden
                    opacity-[0.18]
                    blur-[14px]
                  "
                >
                  <Image
                    src="/media/portraits/hero.png"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 90vw, 58vw"
                    className="
                      film-image-soft
                      object-contain
                      scale-[1.025]
                    "
                  />
                </div>

                {/* actual front portrait */}

                <Image
                  src="/media/portraits/hero.png"
                  alt="portrait"
                  fill
                  priority
                  sizes="(max-width: 768px) 94vw, 59vw"
                  className="
                    film-image
                    object-contain
                    drop-shadow-[0_42px_75px_rgba(0,0,0,0.105)]
                  "
                />

                {/* registration corners */}

                <div
                  aria-hidden="true"
                  className="
                    absolute left-[4%] top-[7%]
                    h-8 w-8
                    border-l border-t
                    border-black/20
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    absolute bottom-[5%] right-[4%]
                    h-8 w-8
                    border-b border-r
                    border-black/20
                  "
                />
              </div>

              {/* vertical composition axis */}

              <div
                aria-hidden="true"
                className="
                  absolute left-1/2 top-[17%]
                  h-[66%] w-px
                  -translate-x-1/2
                  bg-black/[0.055]
                "
              />

              {/* flip control */}

              <button
                type="button"
                onClick={handleFlip}
                aria-label="Reveal identity"
                className="
                  absolute bottom-8 right-8
                  z-40
                  flex items-center gap-3
                  border border-black/15
                  bg-white/[0.22]
                  px-4 py-3
                  font-mono text-[9px]
                  uppercase tracking-[0.18em]
                  text-black/65
                  shadow-[0_10px_35px_rgba(0,0,0,0.035)]
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-0.5
                  hover:border-black/30
                  hover:bg-black
                  hover:text-paper
                  hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]
                "
              >
                <span>Flip</span>
                <span>↗</span>
              </button>
            </div>

            {/* =================================================
                BACK — IDENTITY
            ================================================== */}

            <div className="hero-flip-face hero-flip-back">
              {/* oversized section number */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute right-[1vw] top-1/2
                  -translate-y-1/2
                  select-none
                  font-display
                  text-[clamp(14rem,28vw,30rem)]
                  leading-[0.65]
                  tracking-[-0.09em]
                  text-black/[0.025]
                "
              >
                02
              </div>

              {/* =================================================
                  FACE-VISIBLE PORTRAIT
              ================================================== */}

              <div
                className="
                  absolute
                  left-1/2 top-1/2
                  z-10
                  h-[92vh]
                  w-[min(59vw,800px)]
                  -translate-x-1/2
                  -translate-y-1/2
                "
              >
                {/* subtle portrait atmosphere */}

                <div
                  aria-hidden="true"
                  className="
                    absolute inset-[4%]
                    rounded-full
                    bg-black/[0.045]
                    blur-3xl
                  "
                />

                {/* portrait */}

                <Image
                  src="/media/portraits/identity.png"
                  alt="Portrait"
                  fill
                  priority
                  sizes="(max-width: 768px) 92vw, 50vw"
                  className="
                    object-contain
                    drop-shadow-[0_40px_70px_rgba(0,0,0,0.15)]
                  "
                />
              </div>

              {/* =================================================
                  DESKTOP EXPERTISE CARDS
              ================================================== */}

              <div className="absolute inset-0 z-20 hidden lg:block">
                <ExpertiseCard
                  item={expertise[0]}
                  position="left-[2%] top-[10%]"
                  onClick={() => setActiveCard(expertise[0].id)}
                />

                <ExpertiseCard
                  item={expertise[1]}
                  position="left-[0%] top-[42%]"
                  onClick={() => setActiveCard(expertise[1].id)}
                />

                <ExpertiseCard
                  item={expertise[2]}
                  position="left-[5%] bottom-[10%]"
                  onClick={() => setActiveCard(expertise[2].id)}
                />

                <ExpertiseCard
                  item={expertise[3]}
                  position="right-[2%] top-[12%]"
                  onClick={() => setActiveCard(expertise[3].id)}
                />

                <ExpertiseCard
                  item={expertise[4]}
                  position="right-[0%] top-[44%]"
                  onClick={() => setActiveCard(expertise[4].id)}
                />

                <ExpertiseCard
                  item={expertise[5]}
                  position="right-[5%] bottom-[10%]"
                  onClick={() => setActiveCard(expertise[5].id)}
                />
              </div>

              {/* =================================================
                  MOBILE EXPERTISE GRID
              ================================================== */}

              <div
                className="
                  absolute
                  inset-x-5 bottom-24
                  z-20
                  grid grid-cols-2
                  gap-2
                  lg:hidden
                "
              >
                {expertise.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveCard(item.id)}
                    className="
                      border border-black/[0.09]
                      bg-white/[0.18]
                      px-3 py-3
                      text-left
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      active:scale-[0.98]
                    "
                  >
                    <span className="font-mono text-[7px] tracking-[0.18em] text-black/35">
                      {item.id}
                    </span>

                    <p className="mt-2 font-mono text-[7px] uppercase tracking-[0.14em] text-black/45">
                      {item.label}
                    </p>

                    <p className="mt-1 text-[10px] font-medium">
                      {item.title}
                    </p>
                  </button>
                ))}
              </div>

              {/* =================================================
                  RETURN BUTTON
              ================================================== */}

              <button
                type="button"
                onClick={handleReturn}
                aria-label="Return to presence"
                className="
                  absolute bottom-8 left-1/2
                  z-40
                  -translate-x-1/2
                  border border-black/15
                  bg-white/[0.22]
                  px-4 py-3
                  font-mono text-[9px]
                  uppercase tracking-[0.18em]
                  text-black/65
                  shadow-[0_10px_35px_rgba(0,0,0,0.035)]
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-0.5
                  hover:bg-black
                  hover:text-paper
                "
              >
                ← Return
              </button>

              {/* =================================================
                  ACTIVE DETAIL PANEL
              ================================================== */}

              {activeExpertise && (
                <div
                  className="
                    absolute inset-0
                    z-50
                    flex items-center justify-center
                    bg-paper/45
                    p-5
                    backdrop-blur-md
                  "
                >
                  <div
                    className="
                      relative
                      w-[min(540px,92vw)]
                      overflow-hidden
                      border border-black/[0.1]
                      bg-white/[0.62]
                      p-7
                      shadow-[0_35px_90px_rgba(0,0,0,0.14)]
                      backdrop-blur-2xl
                      backdrop-saturate-150
                    "
                  >
                    {/* glass highlight */}

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute inset-0
                        bg-gradient-to-br
                        from-white/[0.38]
                        via-transparent
                        to-black/[0.025]
                      "
                    />

                    <button
                      type="button"
                      onClick={() => setActiveCard(null)}
                      className="
                        absolute right-5 top-5
                        z-10
                        font-mono text-[9px]
                        uppercase tracking-[0.15em]
                        text-black/40
                        transition-colors
                        hover:text-black
                      "
                    >
                      Close ×
                    </button>

                    <div className="relative z-10">
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/40">
                        {activeExpertise.id} / {activeExpertise.label}
                      </p>

                      <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.05em]">
                        {activeExpertise.title}
                      </h2>

                      <p className="mt-6 max-w-[430px] text-sm leading-7 text-black/60">
                        {activeExpertise.description}
                      </p>

                      {/* skills */}

                      <div className="mt-7 flex flex-wrap gap-2">
                        {activeExpertise.skills.map((skill) => (
                          <span
                            key={skill}
                            className="
                              border border-black/[0.08]
                              bg-black/[0.025]
                              px-3 py-2
                              font-mono text-[8px]
                              uppercase tracking-[0.12em]
                              text-black/55
                            "
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 h-px w-full bg-black/10" />

                      <p className="mt-4 font-mono text-[8px] uppercase tracking-[0.18em] text-black/30">
                        Selected work will live here ↓
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM INFORMATION
      ====================================================== */}

      <div
        className="
          absolute inset-x-[4vw]
          bottom-7 z-30
          flex items-end
          justify-between
          gap-10
        "
      >
        <div className="max-w-[500px]">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/40">
            {flipped
              ? "Data × Business × Engineering × Building"
              : "Data × Business × Engineering"}
          </p>

          <p className="mt-3 max-w-[470px] text-[clamp(0.82rem,1vw,0.96rem)] leading-[1.55] tracking-[-0.015em] text-black/65">
            {flipped
              ? "A technical and creative practice spanning analytics, engineering, products, AI, and brand building."
              : "Building analytical systems, digital products, and ideas at the intersection of technology and business."}
          </p>
        </div>

        <div className="flex flex-col items-end">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/35">
            {flipped ? "Explore" : "Scroll"}
          </span>

          <span className="mt-2 text-base text-black/55">
            {flipped ? "✦" : "↓"}
          </span>
        </div>
      </div>

      {/* =====================================================
          BOTTOM LEFT INDEX
      ====================================================== */}

      <div
        className="
          absolute bottom-7 left-[4vw]
          hidden
          font-mono text-[8px]
          uppercase tracking-[0.2em]
          text-black/25
          lg:block
        "
      >
        SH / {flipped ? "002" : "001"}
      </div>
    </section>
  );
}

/* =========================================================
   EXPERTISE CARD
========================================================= */

function ExpertiseCard({
  item,
  position,
  onClick,
}: {
  item: Expertise;
  position: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        expertise-card
        group
        absolute
        ${position}
        w-[158px]
        text-left
      `}
    >
      <div className="expertise-glass px-4 py-4 text-black">

        {/* Accent */}

        <div
          className="expertise-accent"
          style={{
            backgroundColor: item.accent,
          }}
        />

        {/* Content */}

        <div className="expertise-card-content">

          {/* Top metadata */}

          <div className="flex items-center justify-between">
            <span
              className="
                font-mono
                text-[8px]
                tracking-[0.18em]
                text-black/35
              "
            >
              {item.id}
            </span>

            <span
              className="
                font-mono
                text-[8px]
                text-black/30
                transition-all
                duration-500
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            >
              ↗
            </span>
          </div>

          {/* Category */}

          <p
            className="
              mt-4
              font-mono
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-black/45
            "
          >
            {item.label}
          </p>

          {/* Title */}

          <h3
            className="
              mt-1
              text-sm
              font-medium
              tracking-[-0.025em]
              text-black/85
            "
          >
            {item.title}
          </h3>

          {/* Interaction */}

          <p
            className="
              mt-3
              text-[10px]
              leading-5
              text-black/35
              transition-colors
              duration-300
              group-hover:text-black/60
            "
          >
            Click to explore
          </p>

        </div>
      </div>
    </button>
  );
}











// import Image from "next/image";


// export default function Hero() {
//   return (
//     <section
//       id="top"
//       className="relative min-h-screen overflow-hidden bg-paper text-ink"
//     >
//       {/* -------------------------------------------------
//           SUBTLE ATMOSPHERE
//       -------------------------------------------------- */}

//       <div
//         aria-hidden="true"
//         className="
//           pointer-events-none absolute
//           left-[48%] top-[46%]
//           h-[58vh] w-[42vw]
//           -translate-x-1/2 -translate-y-1/2
//           rounded-full
//           bg-[radial-gradient(circle,rgba(0,0,0,0.035)_0%,transparent_68%)]
//           blur-3xl
//         "
//       />

//       {/* -------------------------------------------------
//           SECTION METADATA
//       -------------------------------------------------- */}

//       <div className="absolute left-[4vw] top-[22%] z-20">
//         <div className="flex items-center gap-3">
//           <span className="h-px w-7 bg-black/35" />

//           <span
//             className="
//               font-mono text-[9px]
//               uppercase tracking-[0.22em]
//               text-black/45
//             "
//           >
//             01 / Presence
//           </span>
//         </div>
//       </div>

//       <div
//         className="
//           absolute right-[4vw] top-[22%]
//           hidden md:block
//           font-mono text-[9px]
//           uppercase tracking-[0.2em]
//           text-black/30
//         "
//       >
//         Personal / 2026
//       </div>

//       {/* -------------------------------------------------
//           MAIN EDITORIAL STAGE
//       -------------------------------------------------- */}

//       <div
//         className="
//           relative flex min-h-screen
//           items-center justify-center
//           px-[4vw]
//           pb-32 pt-24
//         "
//       >
//         {/* oversized section number */}

//         <div
//           aria-hidden="true"
//           className="
//             pointer-events-none absolute
//             left-[7vw] top-1/2
//             -translate-y-1/2
//             select-none
//             font-display
//             text-[clamp(14rem,28vw,30rem)]
//             leading-[0.65]
//             tracking-[-0.09em]
//             text-black/[0.025]
//           "
//         >
//           01
//         </div>

//         {/* -------------------------------------------------
//             IMAGE COMPOSITION
//         -------------------------------------------------- */}

//         <div
//           className="
//             relative z-10
//             h-[74vh]
//             w-[min(58vw,720px)]
//             min-w-[320px]
//             translate-x-[3vw]
//           "
//         >
//           {/* subtle tonal stage */}

//           <div
//             aria-hidden="true"
//             className="
//               absolute
//               left-[8%] right-[8%]
//               top-[6%] bottom-[4%]
//               bg-black/[0.018]
//               shadow-[0_35px_90px_rgba(0,0,0,0.06)]
//             "
//           />

//           {/* -------------------------------------------------
//               SOFT PHOTOGRAPHIC ATMOSPHERE
//           -------------------------------------------------- */}

//           <div
//             aria-hidden="true"
//             className="
//               absolute inset-[4%]
//               overflow-hidden
//               opacity-[0.18]
//               blur-[14px]
//             "
//           >
//             <Image
//               src="/media/portraits/hero.png"
//               alt=""
//               fill
//               sizes="(max-width: 768px) 90vw, 58vw"
//               className="
//                 film-image-soft
//                 object-contain
//                 scale-[1.025]
//               "
//             />
//           </div>

//           {/* -------------------------------------------------
//               ACTUAL PORTRAIT
//           -------------------------------------------------- */}

//           <div className="absolute inset-0 overflow-hidden">
//             <Image
//               src="/media/portraits/hero.png"
//               alt="Editorial portrait"
//               fill
//               priority
//               sizes="(max-width: 768px) 90vw, 58vw"
//               className="
//                 film-image
//                 object-contain
//                 drop-shadow-[0_32px_50px_rgba(0,0,0,0.105)]
//                 transition-transform
//                 duration-700
//                 ease-out
//               "
//             />
//           </div>

//           {/* -------------------------------------------------
//               SUBTLE VIGNETTE
//           -------------------------------------------------- */}

//           <div
//             aria-hidden="true"
//             className="
//               pointer-events-none
//               absolute inset-0
//               bg-[radial-gradient(ellipse_at_center,transparent_48%,rgba(0,0,0,0.055)_100%)]
//             "
//           />

//           {/* -------------------------------------------------
//               EDITORIAL REGISTRATION MARKS
//           -------------------------------------------------- */}

//           <div
//             aria-hidden="true"
//             className="
//               absolute left-[4%] top-[7%]
//               h-8 w-8
//               border-l border-t
//               border-black/20
//             "
//           />

//           <div
//             aria-hidden="true"
//             className="
//               absolute bottom-[5%] right-[4%]
//               h-8 w-8
//               border-b border-r
//               border-black/20
//             "
//           />

//           {/* -------------------------------------------------
//               VERTICAL IMAGE INDEX
//           -------------------------------------------------- */}

//           <div
//             className="
//               absolute
//               -right-8 top-1/2
//               hidden -translate-y-1/2
//               rotate-90
//               font-mono text-[8px]
//               uppercase tracking-[0.24em]
//               text-black/30
//               md:block
//             "
//           >
//             Editorial Portrait / 01
//           </div>
//         </div>

//         {/* -------------------------------------------------
//             COMPOSITION AXIS
//         -------------------------------------------------- */}

//         <div
//           aria-hidden="true"
//           className="
//             absolute left-1/2 top-[17%]
//             h-[66%] w-px
//             -translate-x-1/2
//             bg-black/[0.055]
//           "
//         />
//       </div>

//       {/* -------------------------------------------------
//           BOTTOM EDITORIAL INFORMATION
//       -------------------------------------------------- */}

//       <div
//         className="
//           absolute inset-x-[4vw]
//           bottom-7 z-30
//           flex items-end
//           justify-between
//           gap-10
//         "
//       >
//         <div className="max-w-[500px]">
//           <p
//             className="
//               font-mono text-[9px]
//               uppercase tracking-[0.2em]
//               text-black/40
//             "
//           >
//             Data × Business × Engineering
//           </p>

//           <p
//             className="
//               mt-3
//               max-w-[470px]
//               text-[clamp(0.82rem,1vw,0.96rem)]
//               leading-[1.55]
//               tracking-[-0.015em]
//               text-black/65
//             "
//           >
//             Building analytical systems, digital products, and ideas at the
//             intersection of technology and business.
//           </p>
//         </div>

//         {/* scroll indicator */}

//         <div className="flex flex-col items-end">
//           <span
//             className="
//               font-mono text-[9px]
//               uppercase tracking-[0.2em]
//               text-black/35
//             "
//           >
//             Scroll
//           </span>

//           <span className="mt-2 text-base text-black/55">↓</span>
//         </div>
//       </div>

//       {/* -------------------------------------------------
//           BOTTOM LEFT INDEX
//       -------------------------------------------------- */}

//       <div
//         className="
//           absolute bottom-7 left-[4vw]
//           hidden
//           font-mono text-[8px]
//           uppercase tracking-[0.2em]
//           text-black/25
//           lg:block
//         "
//       >
//         SH / 001
//       </div>
//     </section>
//   );
// }