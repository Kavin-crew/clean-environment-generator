"use client";

import { customizationStore } from "@/src/store/customizationStore";
import YotpoScriptLoader from "@/app/_components/YotpoScriptLoader";
import "./globals.css";

export default function RootLayout({ children }) {
  const bodyBackgroundColor = customizationStore(
    (state) => state.bodyBackgroundColor
  );

  return (
    <html lang="en">
      <body
        style={{ backgroundColor: bodyBackgroundColor }}
        className="relative overflow-y-scroll"
      >
        {children}
      </body>
      <YotpoScriptLoader />
    </html>
  );
}
