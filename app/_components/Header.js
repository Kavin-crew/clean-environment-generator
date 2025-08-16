import Image from "next/image";
import { customizationStore } from "@/src/store/customizationStore";

export default function Header() {
  const logoImageUrl = customizationStore((state) => state.logoImageUrl);
  const logoImageWidth = customizationStore((state) => state.logoImageWidth);
  const setLogoImageUrl = customizationStore((state) => state.setLogoImageUrl);
  const setLogoImageWidth = customizationStore(
    (state) => state.setLogoImageWidth
  );

  const hasHydrated = customizationStore((state) => state.hasHydrated);

  if (!hasHydrated) return null;

  return (
    <header
      className={`logo flex justify-center items-center  relative w-[${logoImageWidth}px] h-auto min-h-28 mt-5 mb-5 mx-auto`}
    >
      <div className="absolute top-full block space-y-2 justify-between gap-x-5 md:flex translate-y-[-20px]">
        <input
          type="text"
          id="logoImageUrl"
          value={logoImageUrl}
          onChange={(e) => {
            setLogoImageUrl(e.target.value);
          }}
          className=" px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 z-10 bg-white mb-0"
        />
      </div>
      <input
        type="text"
        id="logoImageWidth"
        value={logoImageWidth}
        onChange={(e) => setLogoImageWidth(e.target.value)}
        className="w-15 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 z-10 bg-white mb-0"
      />
      <Image
        src={logoImageUrl}
        alt="Logo"
        fill
        style={{ objectFit: "contain" }}
        priority
      />
    </header>
  );
}
