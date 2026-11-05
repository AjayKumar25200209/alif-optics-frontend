
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function PrimaryButton({
  children,
  to = "/",
  variant = "primary",
  showArrow = true,
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-5 px-7 py-4 text-xs font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-[#A88954] text-white hover:bg-[#24231F]",

    secondary:
      "border border-white/50 text-white hover:bg-white hover:text-[#24231F]",

    dark:
      "bg-[#24231F] text-white hover:bg-[#A88954]",

    outline:
      "border border-[#24231F] text-[#24231F] hover:bg-[#24231F] hover:text-white",
  };

  return (
    <Link
      to={to}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
    >
      <span>{children}</span>

      {showArrow && (
        <ArrowUpRight size={15} strokeWidth={1.8} />
      )}
    </Link>
  );
}
