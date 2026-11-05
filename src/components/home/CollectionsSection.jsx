
const collections = [
  {
    number: "01",
    title: "Eyeglasses",
    subtitle: "Everyday vision",
    description:
      "Explore eyeglasses and power lens options available at Alif Optics.",
    accent: "bg-[#E9E5DC]",
    titleColor: "text-[#24231F]",
  },
  {
    number: "02",
    title: "Sunglasses",
    subtitle: "Style & protection",
    description:
      "Discover sunglasses and branded frames featured at our store.",
    accent: "bg-[#DCD8CE]",
    titleColor: "text-[#24231F]",
  },
  {
    number: "03",
    title: "Contact Lenses",
    subtitle: "An alternative to frames",
    description:
      "Explore contact lens options available at Alif Optics.",
    accent: "bg-[#E6E2D9]",
    titleColor: "text-[#24231F]",
  },
];

export default function CollectionsSection() {
  return (
    <section
      id="collections"
      className="bg-[#F9F8F5] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A88954]">
              Find Your Perfect Fit
            </p>

            <h2 className="mt-4 font-serif text-4xl text-[#24231F] sm:text-5xl">
              Explore Our Collections
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#77756E]">
            Discover eyewear options for your everyday needs,
            personal style and vision.
          </p>
        </div>

        {/* Collection Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {collections.map((item) => (
            <article
              key={item.number}
              className="group relative flex min-h-[310px] flex-col justify-between overflow-hidden border border-[#24231F]/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(36,35,31,0.08)] sm:min-h-[360px] sm:p-9"
            >
              {/* Background */}
              <div
                className={`absolute inset-0 ${item.accent} transition-transform duration-500 group-hover:scale-105`}
              />

              {/* Decorative Design */}
              <div className="pointer-events-none absolute -right-16 top-12 h-56 w-56 rounded-full border border-[#A88954]/20 transition-transform duration-500 group-hover:scale-110" />

              <div className="pointer-events-none absolute -right-8 top-20 h-40 w-40 rounded-full border border-[#A88954]/20" />

              {/* Card Content */}
              <div className="relative z-10 flex items-start justify-between">
                <span className="text-xs font-medium tracking-[0.2em] text-[#A88954]">
                  {item.number}
                </span>

                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#77756E]">
                  {item.subtitle}
                </span>
              </div>

              <div className="relative z-10 mt-16">
                <h3
                  className={`font-serif text-3xl ${item.titleColor} sm:text-4xl`}
                >
                  {item.title}
                </h3>

                <p className="mt-4 max-w-xs text-sm leading-7 text-[#625F57]">
                  {item.description}
                </p>

                <div className="mt-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#A88954]">
                  Discover More
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
