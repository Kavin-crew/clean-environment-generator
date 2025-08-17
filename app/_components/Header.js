import Image from "next/image";
import { customizationStore } from "@/src/store/customizationStore";
import Row from "@/app/_components/Row";
import Label from "@/app/_components/Label";
import { useState } from "react";

const DEFAULT_LOGO_URL =
  "https://cdn.pixabay.com/photo/2015/12/22/04/00/photo-1103594_1280.png";

export default function Header() {
  const logoImageUrl = customizationStore((state) => state.logoImageUrl);
  const logoImageWidth = customizationStore((state) => state.logoImageWidth);
  const logoImageHeight = customizationStore((state) => state.logoImageHeight);
  const setLogoImageUrl = customizationStore((state) => state.setLogoImageUrl);
  const setLogoImageWidth = customizationStore(
    (state) => state.setLogoImageWidth
  );
  const setLogoImageHeight = customizationStore(
    (state) => state.setLogoImageHeight
  );
  const hasHydrated = customizationStore((state) => state.hasHydrated);

  const [isImageSettingsHidden, setIsImageSettingsHidden] = useState(false);

  const handleEmptyInput = (e, setter) => {
    const inputValue = e.target.value;

    // If input is empty, set value to 0
    if (inputValue === "") {
      setter(0);
      return;
    }

    // Only allow numbers
    const numericValue = Number(inputValue);

    if (!isNaN(numericValue)) {
      setter(numericValue);
    }
  };

  const handleLogoUrlChange = (e) => {
    const inputValue = e.target.value.trim();

    if (inputValue === "") {
      setLogoImageUrl(DEFAULT_LOGO_URL);
    } else {
      setLogoImageUrl(inputValue);
    }
  };

  if (!hasHydrated) return null;

  return (
    <header
      className={`logo flex justify-center items-center  relative w-[${logoImageWidth}px] h-auto min-h-28 mt-5 mb-5 mx-auto`}
    >
      <button
        className="absolute  bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        onClick={() => setIsImageSettingsHidden((prev) => !prev)}
      >
        {isImageSettingsHidden ? "Show Settings" : "Hide Settings"}
      </button>
      <div
        className={`absolute top-full block space-y-2 justify-between gap-x-5  translate-y-[-20px] ${
          isImageSettingsHidden ? "hidden" : "block"
        }`}
      >
        <Row>
          <div className="w-full space-y-6">
            <Label htmlFor="logoImageUrl">Image url</Label>
            <input
              type="text"
              id="logoImageUrl"
              value={logoImageUrl}
              onChange={handleLogoUrlChange}
              className=" px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 z-10 bg-white mb-0"
            />
          </div>
          <div className="w-full space-y-6">
            <Label htmlFor="logoImageWidth">Width</Label>
            <input
              type="text"
              id="logoImageWidth"
              value={logoImageWidth}
              onChange={(e) => handleEmptyInput(e, setLogoImageWidth)}
              className="w-15 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 z-10 bg-white mb-0"
            />
          </div>
          <div className="w-full space-y-6">
            <Label htmlFor="logoImageHeight">Height</Label>
            <input
              type="text"
              id="logoImageHeight"
              value={logoImageHeight}
              onChange={(e) => handleEmptyInput(e, setLogoImageHeight)}
              className="w-15 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 z-10 bg-white mb-0"
            />
          </div>
        </Row>
      </div>

      <Image
        src={logoImageUrl}
        alt="Logo"
        width={`${logoImageWidth}`}
        height={`${logoImageHeight}`}
        priority
      />
    </header>
  );
}
