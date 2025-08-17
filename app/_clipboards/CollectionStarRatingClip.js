import { useState, useEffect } from "react";
import { useWidgetStore } from "@/src/store/widgetStore";
import Button from "@/app/_components/Button";
import ClipboardTextarea from "@/app/_components/ClipboardTextarea";

export default function CollectionStarRatingClipboard() {
  const instanceIdStarRating = useWidgetStore(
    (state) => state.instanceIdStarRating
  );
  const [value, setValue] = useState(`
  <div className="yotpo-widget-instance"
      data-yotpo-instance-id="${instanceIdStarRating}"
      data-yotpo-product-id="Product ID"
      data-yotpo-section-id="collection">
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
      <Button type="primary" onClick={copy}>
        {isCopied ? "Copied!" : "Copy Code"}
      </Button>
    </>
  );
}
