
import PrimaryButton from "@/components/common/PrimaryButton";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-eyewear.png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-[#292720] text-white lg:min-h-[calc(100svh-76px)]"
    >
      {/* BACKGROUND IMAGE - PREMIUM PRESCRIPTION EYEWEAR */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#171713]/90 via-[#171713]/65 to-[#171713]/10" />

      {/* BOTTOM GRADIENT */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

      {/* HERO CONTENT */}
      <div className="mx-auto w-full max-w-[1600px] px-6 py-24 sm:px-10 lg:px-20 xl:px-[7.2%]">

        <div className="max-w-3xl">

          {/* EYEBROW */}
          <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C4A879] sm:text-xs">
            The Art of Seeing
          </p>

          {/* HEADING */}
          <h1 className="font-serif text-[clamp(46px,7vw,96px)] font-medium leading-[1.08] tracking-tight">
            A clearer view.
            <br />

            <span className="italic text-[#C4A879]">
              A better you.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-xl text-sm leading-8 text-white/85 sm:text-base">
            Discover eyewear that brings together timeless style,
            exceptional comfort and the perfect vision.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-10 flex flex-wrap items-center gap-4">

            <PrimaryButton
              to="/collections"
              variant="primary"
            >
              Explore Collections
            </PrimaryButton>

            <PrimaryButton
              to="/about"
              variant="secondary"
              showArrow={false}
            >
              Discover Alif
            </PrimaryButton>

          </div>

          {/* LOCATION */}
          <div className="mt-16 flex items-center gap-3 sm:mt-20">
            <span className="h-2 w-2 rounded-full bg-[#C4A879]" />

            <span className="text-[9px] font-medium tracking-[0.25em] text-white/75 sm:text-[10px]">
              THOOTHUKUDI, TAMIL NADU
            </span>
          </div>

        </div>
      </div>

      {/* DESKTOP SCROLL INDICATOR */}
      <a
        href="#collections"
        aria-label="Scroll to explore collections"
        className="absolute bottom-9 right-10 hidden items-center gap-3 text-[9px] font-medium tracking-[0.2em] text-white/75 transition-colors hover:text-[#C4A879] lg:flex"
      >
        SCROLL TO EXPLORE
        <ArrowDown size={14} />
      </a>

      {/* MOBILE SCROLL INDICATOR */}
      <a
        href="#collections"
        aria-label="Scroll to collections"
        className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-[#24231F] lg:hidden"
      >
        <ArrowDown size={17} />
      </a>

    </section>
  );
}
