"use client";

export default function Clipboards({ value, setValue, isCopied, setCopied }) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };
  return copy;
}
