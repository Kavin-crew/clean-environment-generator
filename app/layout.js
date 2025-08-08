import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Account name - v3 Widgets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-stone-100 relative overflow-y-scroll">
        {children}
      </body>
      <Script
        src="https://cdn-widgetsrepository.yotpo.com/v1/loader/rj74UZEzEEqYa1gTFXC3BLbr9GzC5SKjKXKupEpg?languageCode=en"
        async
      ></Script>
    </html>
  );
}
