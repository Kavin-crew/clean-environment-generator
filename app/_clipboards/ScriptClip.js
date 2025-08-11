"use client";

import { useState } from "react";
import { useWidgetStore } from "@/src/store/widgetStore";
import Button from "@/app/_components/Button";
import ClipboardTextarea from "@/app/_components/ClipboardTextarea";

export default function ScriptClipBoard() {
  const appKey = useWidgetStore((state) => state.appKey);
  const language = useWidgetStore((state) => state.language);
  const hasHydrated = useWidgetStore((state) => state.hasHydrated);

  const [isCopied, setCopied] = useState(false);
  const [value, setValue] = useState(
    `<script src="https://cdn-widgetsrepository.yotpo.com/v1/loader/${appKey}?languageCode=${language}" async></script>`
  );

  if (!hasHydrated || !appKey || !language) return null;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <>
      <ClipboardTextarea value={value} setCopied={setCopied} />
      <Button onClick={copy}>{isCopied ? "Copied!" : "Copy Code"}</Button>
    </>
  );
}
