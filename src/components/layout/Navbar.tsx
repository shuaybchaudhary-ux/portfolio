
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Mindset", href: "#mindset" },
  { label: "Data", href: "#data" },
  { label: "Business", href: "#business" },
  { label: "Engineering", href: "#engineering" },
  { label: "Building", href: "#building" },
  { label: "Interests", href: "#interests" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-black/10 bg-[#f8f8f5]/90 shadow-[0_4px_24px_rgba(0,0,0,0.025)] backdrop-blur-xl"
          : "border-transparent bg-[#f8f8f5]/75 backdrop-blur-md"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:h-[78px] lg:px-12"
      >
        {/* Signature */}
        <a
          href="#top"
          onClick={closeMenu}
          aria-label="Shuayb — back to top"
          className="relative z-[60] flex shrink-0 items-center"
        >
          <Image
            src="/media/signature.png"
            alt="Shuayb signature"
            width={201}
            height={80}
            priority
            className="h-auto w-[98px] object-contain sm:w-[110px] lg:w-[115px]"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-4 xl:flex 2xl:gap-6">
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-black/55 transition-colors duration-200 hover:text-black 2xl:text-[10px]"
            >
              {item.label}

              <span className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-emerald-800 transition-transform duration-300 group-hover:scale-x-100" />

              <span className="sr-only">
                {" "}
                — section {String(index + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile and tablet menu toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-[60] flex h-11 w-11 items-center justify-center xl:hidden"
        >
          <span className="flex w-5 flex-col gap-[6px]">
            <span
              className={`h-px w-full bg-black transition-transform duration-300 ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-black transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile and tablet navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`fixed inset-0 z-50 bg-[#f8f8f5] transition-[opacity,visibility] duration-300 xl:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="mx-auto flex h-full max-w-2xl flex-col justify-center overflow-y-auto px-7 pb-10 pt-24 sm:px-12">
          <div className="mb-7 flex items-center justify-between">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/40">
              Index / Navigation
            </p>

            <span className="font-mono text-[9px] text-black/35">
              01—08
            </span>
          </div>

          <div className="flex flex-col">
            {navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
                className="group flex items-center justify-between border-b border-black/10 py-3.5 text-[clamp(1.5rem,5vw,2.25rem)] font-light tracking-tight text-black transition-colors duration-200 hover:text-emerald-800"
              >
                <span>{item.label}</span>

                <span className="flex items-center gap-3 font-mono text-[10px] text-black/35">
                  {String(index + 1).padStart(2, "0")}
                  <span className="translate-x-0 transition-transform duration-200 group-hover:translate-x-1">
                    ↗
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-black/40">
              Independent builder
            </p>

            <button
              type="button"
              onClick={closeMenu}
              className="font-mono text-[9px] uppercase tracking-[0.12em] text-black/60 hover:text-black"
            >
              Close ×
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}