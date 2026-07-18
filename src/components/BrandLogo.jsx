import { LOGO_URL } from "@/lib/media";
function BrandLogo({
  className = "h-14 w-14",
  bare = false
}) {
  if (bare) {
    return <img
      src={LOGO_URL}
      alt="December Delights logo"
      className={`object-contain ${className}`}
      loading="eager"
    />;
  }
  return <span
    className={`inline-flex items-center justify-center overflow-hidden rounded-full bg-cream shadow-[0_6px_20px_rgba(0,0,0,0.25)] ring-1 ring-gold/40 ${className}`}
  >
      <img
    src={LOGO_URL}
    alt="December Delights logo"
    className="h-[78%] w-[78%] object-contain"
    loading="eager"
  />
    </span>;
}
export {
  BrandLogo
};
