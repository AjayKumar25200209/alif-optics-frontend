
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Brands", path: "/brands" },
  { label: "Eye Care", path: "/eye-care" },
  { label: "Our Showroom", path: "/showroom" },
  { label: "Contact Us", path: "/contact" },
];

const collections = [
  { label: "Eyeglasses", path: "/collections/eyeglasses" },
  { label: "Sunglasses", path: "/collections/sunglasses" },
  { label: "Contact Lenses", path: "/collections/contact-lenses" },
];

export default function Footer() {
  return (
    <footer className="bg-[#24231F] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-[1600px] px-6 pb-10 pt-16 sm:px-10 lg:px-16 xl:px-[7%]">

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex flex-col">
              <span className="font-serif text-3xl font-semibold tracking-[0.06em]">
                ALIF<span className="ml-1 font-normal">OPTICS</span>
              </span>

              <span className="mt-2 text-[9px] tracking-[0.38em] text-[#C4A879]">
                SEE THE DIFFERENCE
              </span>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/55">
              Discover eyewear that brings together timeless style,
              exceptional comfort and clear vision. Find the perfect
              frames that reflect your personality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C4A879]">
              Explore
            </h3>

            <ul className="mt-7 space-y-4">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-[13px] text-white/60 transition-colors duration-200 hover:text-[#C4A879]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C4A879]">
              Collections
            </h3>

            <ul className="mt-7 space-y-4">
              {collections.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-[13px] text-white/60 transition-colors duration-200 hover:text-[#C4A879]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Showroom */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C4A879]">
              Visit Our Showroom
            </h3>

            <p className="mt-7 max-w-xs text-[13px] leading-7 text-white/60">
              DSF Plaza,
              <br />
              Thoothukudi,
              <br />
              Tamil Nadu, India.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-5 border border-[#C4A879] px-6 py-4 text-xs font-semibold text-[#C4A879] transition-all duration-200 hover:bg-[#C4A879] hover:text-[#24231F]"
            >
              Get In Touch
              <span className="text-base">↗</span>
            </Link>
          </div>

        </div>

        {/* CTA Strip */}
        <div className="mt-16 flex flex-col justify-between gap-6 border-y border-white/10 py-9 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-2xl sm:text-3xl">
              Your perfect vision starts here.
            </p>

            <p className="mt-2 text-xs leading-6 text-white/50">
              Discover eyewear that complements your style.
            </p>
          </div>

          <Link
            to="/collections"
            className="inline-flex w-fit items-center gap-4 bg-[#C4A879] px-6 py-4 text-xs font-semibold text-[#24231F] transition-colors duration-200 hover:bg-white"
          >
            Explore Collections
            <span className="text-base">↗</span>
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-5 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] text-white/40">
            © {new Date().getFullYear()} Alif Optics. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-[11px] text-white/40">
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-[#C4A879]"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition-colors hover:text-[#C4A879]"
            >
              Terms & Conditions
            </Link>
          </div>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[11px] font-medium uppercase tracking-wider text-white/50 transition-colors hover:text-[#C4A879]"
          >
            Back to Top ↑
          </button>
        </div>

      </div>
    </footer>
  );
}
