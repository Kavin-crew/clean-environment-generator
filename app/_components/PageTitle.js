"use client";

import { useEffect } from "react";
import { useWidgetStore } from "@/src/store/widgetStore";

export default function PageTitle() {
  const title = useWidgetStore((state) => state.title);
  useEffect(() => {
    document.title = title || "Account name - v3";
  }, [title]);

  return null;
}
