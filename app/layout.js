"use client";

import "./globals.css";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 relative">{children}</body>
      <Script
        src="https://cdn-widgetsrepository.yotpo.com/v1/loader/Nam3yagCxxmjMwiZkWnbRKdBOJaJvBrcK2kc3AD8?languageCode=en"
        async
      ></Script>
    </html>
  );
}
