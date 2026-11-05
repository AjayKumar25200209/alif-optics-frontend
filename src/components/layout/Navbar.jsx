
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

const navigation = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  {
    label: "Collections",
    path: "/collections",
    children: [
      { label: "Eyeglasses", path: "/collections/eyeglasses" },
      { label: "Sunglasses", path: "/collections/sunglasses" },
      { label: "Contact Lenses", path: "/collections/contact-lenses" },
    ],
  },
  { label: "Our Brands", path: "/brands" },
  { label: "Eye Care", path: "/eye-care" },
  { label: "Our Showroom", path: "/showroom" },
];

const desktopLinkClass = ({ isActive }) =>
  `inline-flex h-full items-center whitespace-nowrap text-[13px] font-medium leading-none transition-colors duration-200 ${
    isActive
      ? "text-[#A88954]"
      : "text-[#45443F] hover:text-[#A88954]"
  }`;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
    setCollectionsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#24231F]/10 bg-[#FAF9F6]">

      {/* MAIN NAVBAR */}
      <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-16 xl:px-[6.7%]">

        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenu}
          aria-label="Alif Optics Home"
          className="flex shrink-0 flex-col justify-center"
        >
          <span className="font-serif text-[25px] font-semibold leading-none tracking-[0.06em] text-[#24231F] sm:text-[28px]">
            ALIF<span className="ml-1 font-normal">OPTICS</span>
          </span>

          <span className="mt-[7px] text-[8px] font-medium tracking-[0.38em] text-[#A88954]">
            SEE THE DIFFERENCE
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden h-full items-center gap-6 xl:flex xl:gap-8"
        >
          {navigation.map((item) => (
            <div
              key={item.label}
              className="group relative flex h-full items-center"
            >
              {item.children ? (
                <>
                  {/* COLLECTIONS */}
                  <NavLink
                    to={item.path}
                    className={desktopLinkClass}
                  >
                    <span>Collections</span>

                    <ChevronDown
                      size={14}
                      strokeWidth={1.7}
                      className="ml-1.5 shrink-0 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                    />
                  </NavLink>

                  {/* COLLECTIONS DROPDOWN */}
                  <div
                    className="
                      invisible absolute left-0 top-full z-50 w-60
                      translate-y-2 border border-[#24231F]/10
                      bg-[#FAF9F6] p-2 opacity-0
                      shadow-[0_15px_35px_rgba(0,0,0,0.08)]
                      transition-all duration-200
                      group-hover:visible group-hover:translate-y-0
                      group-hover:opacity-100
                      group-focus-within:visible
                      group-focus-within:translate-y-0
                      group-focus-within:opacity-100
                    "
                  >
                    {item.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={({ isActive }) =>
                          `block px-4 py-3 text-[13px] transition-colors duration-200 ${
                            isActive
                              ? "bg-[#EEECE5] text-[#A88954]"
                              : "text-[#45443F] hover:bg-[#EEECE5] hover:text-[#A88954]"
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={desktopLinkClass}
                >
                  {item.label}
                </NavLink>
              )}
            </div>
          ))}
        </nav>

        {/* DESKTOP CONTACT BUTTON */}
        <Link
          to="/contact"
          className="
            hidden shrink-0 items-center gap-4
            border border-[#24231F]
            px-6 py-3.5
            text-[12px] font-semibold text-[#24231F]
            transition-colors duration-200
            hover:border-[#A88954]
            hover:bg-[#A88954]
            hover:text-white
            xl:flex
          "
        >
          Contact Us
          <ArrowUpRight size={15} strokeWidth={1.8} />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center text-[#24231F] transition-colors hover:text-[#A88954] xl:hidden"
        >
          {mobileOpen ? (
            <X size={24} strokeWidth={1.6} />
          ) : (
            <Menu size={24} strokeWidth={1.6} />
          )}
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        className={`
          grid overflow-hidden bg-[#FAF9F6]
          transition-all duration-300 ease-in-out xl:hidden
          ${
            mobileOpen
              ? "grid-rows-[1fr] border-t border-[#24231F]/10 opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-[1600px] flex-col px-6 py-3 sm:px-10"
          >
            {navigation.map((item) => (
              <div
                key={item.label}
                className="border-b border-[#24231F]/10"
              >
                {item.children ? (
                  <>
                    {/* MOBILE COLLECTIONS */}
                    <button
                      type="button"
                      onClick={() =>
                        setCollectionsOpen((prev) => !prev)
                      }
                      aria-expanded={collectionsOpen}
                      className="
                        flex w-full items-center justify-between
                        py-4 text-left text-[14px] font-medium
                        text-[#24231F] transition-colors
                        hover:text-[#A88954]
                      "
                    >
                      Collections

                      <ChevronDown
                        size={17}
                        strokeWidth={1.7}
                        className={`transition-transform duration-200 ${
                          collectionsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        collectionsOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden pb-1 pl-4">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                              `block py-3 text-[13px] transition-colors ${
                                isActive
                                  ? "text-[#A88954]"
                                  : "text-[#77756E] hover:text-[#A88954]"
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block py-4 text-[14px] font-medium transition-colors ${
                        isActive
                          ? "text-[#A88954]"
                          : "text-[#24231F] hover:text-[#A88954]"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}

            {/* MOBILE CONTACT BUTTON */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="
                mt-5 flex items-center justify-center gap-3
                bg-[#24231F] px-6 py-4
                text-[13px] font-semibold text-white
                transition-colors duration-200
                hover:bg-[#A88954]
              "
            >
              Contact Us
              <ArrowUpRight size={16} />
            </Link>
          </nav>
        </div>
      </div>

    </header>
  );
}
