import Image from "next/image";

export const info = {
  "bg-color": "#fff",
};

export default function Header() {
  return (
    <header
      className={`${info["bg-color"]} logo flex justify-center items-center  relative  h-[150px] w-full`}
    >
      <Image
        src="https://cdn.shopify.com/s/files/1/0708/4605/4708/files/Black_Kracken_LLC_Logo.png?v=1743113457"
        alt="Logo"
        fill
        style={{ objectFit: "contain", top: "20px" }}
        priority
        sizes="(max-width: 150px) 100vw, 150px"
      />
    </header>
  );
}
