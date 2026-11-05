
import { Link } from "react-router-dom";

// Add only brand names confirmed on the existing Alif Optics website.
const brands = [
  // Example structure:
  // { name: "Brand Name" },
];

export default function FeaturedBrandsSection() {
  return (
    <section className="bg-[#EEECE6] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A88954]">
            Our Brand Selection
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#24231F] sm:text-5xl">
            Brands We Offer
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#77756E]">
            Explore the eyewear brands available at Alif Optics.
          </p>
        </div>

        {/* Brand Names */}
        {brands.length > 0 && (
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex min-h-[110px] items-center justify-center border border-[#24231F]/10 bg-[#F9F8F5] px-5 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#A88954]/50 hover:shadow-md"
              >
                <span className="font-serif text-xl font-semibold tracking-wide text-[#24231F]">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* View All */}
        <div className="mt-12 text-center">
          <Link
            to="/brands"
            className="inline-flex items-center gap-3 border-b border-[#A88954] pb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#24231F] transition-colors hover:text-[#A88954]"
          >
            Explore All Brands
            <span className="text-base">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
