"use client";

import { useState } from "react";
import Button from "@/app/_components/Button";
import ClipboardTextarea from "../_components/ClipboardTextarea";

export default function WidgetClipBoard({ instanceid }) {
  const [value, setValue] = useState(`<div class="yotpo-widget-instance" 
      data-yotpo-instance-id="${instanceid}"
      data-yotpo-product-id="Product ID" 
      data-yotpo-name="Product Title" 
      data-yotpo-url="The URL of your product page" 
      data-yotpo-image-url="The product image URL" 
      data-yotpo-price="Product Price" 
      data-yotpo-currency="Product Currency" 
      data-yotpo-description="Product Description">
    </div>`);
  const [isCopied, setCopied] = useState(false);

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
