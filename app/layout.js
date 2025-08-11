"use client";

import YotpoScriptLoader from "./_components/YotpoScriptLoader";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-stone-100 relative overflow-y-scroll">
        {children}
      </body>
      <YotpoScriptLoader />
    </html>
  );
}
