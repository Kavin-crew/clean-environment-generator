"use client";

import Script from "next/script";
import { useWidgetStore } from "@/src/store/widgetStore";

export default function YotpoScriptLoader() {
  const appKey = useWidgetStore((state) => state.appKey);
  const language = useWidgetStore((state) => state.language);
  const hasHydrated = useWidgetStore((state) => state.hasHydrated);

  if (!hasHydrated || !appKey || !language) return null;

  return (
    <Script
      src={`https://cdn-widgetsrepository.yotpo.com/v1/loader/${appKey}?languageCode=${language}`}
      async
    />
  );
}
