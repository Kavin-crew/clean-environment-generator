import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{ minHeight: "calc(10vh - 32px)" }}
      className="flex justify-center min-h-16 bg-[#04194c] border-t-1 border-white mt-8"
    >
      <Image
        src="https://yotpo-ps-ugc.github.io/pub.src/yotpo-text-large.svg"
        alt="yotpo-logo"
        width="60"
        height="17"
      />
    </footer>
  );
}
