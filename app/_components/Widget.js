"use client";

import { motion } from "framer-motion";
import ScriptClipBoard from "@/app/_clipboards/ScriptClip";
import WidgetClipBoard from "@/app/_clipboards/WidgetClip";
import Caret from "@/app/_components/Caret";
import { useWidgetStore } from "@/src/store/widgetStore";
import { useEffect, useState } from "react";

export default function Widget({
  heading,
  active,
  clipboardheading,
  clipboardscript,
  clipboardscriptnote,
  clipboardsnippet,
  clipboardsnippetnote,
  toggle,
}) {
  // Get values directly from Zustand
  const { instanceId_Widget, productId } = useWidgetStore();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Re-init Yotpo when values change
  useEffect(() => {
    if (mounted && window.yotpo) {
      window.yotpo.initWidgets();
    }
  }, [mounted, instanceId_Widget]);

  if (!mounted) return null; // No ID, no widget

  return (
    <div className="accordion-item relative border rounded-md overflow-hidden">
      {/* Accordion Header */}
      <button
        onClick={() => toggle((prev) => !prev)}
        className={`flex justify-between items-center p-4 w-full border-b ${
          active ? "bg-white text-stone-800" : "bg-blue-400 text-white"
        }`}
      >
        <h2>{heading}</h2>
        <Caret active={active} />
      </button>

      {/* Accordion Content (Always Mounted) */}
      <motion.div
        initial={false}
        animate={{
          height: active ? 0 : "auto",
          opacity: active ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden border-t"
      >
        <div className="accordion-body bg-white">
          {/* Yotpo Widget */}
          <div
            className="yotpo-widget-instance"
            data-yotpo-instance-id={instanceId_Widget}
            data-yotpo-product-id={productId}
            data-yotpo-name="Product Title"
            data-yotpo-url="The URL of your product page"
            data-yotpo-image-url="The product image URL"
            data-yotpo-price="Product Price"
            data-yotpo-currency="Product Currency"
            mode-preview={productId === "" ? "true" : ""}
            data-yotpo-description="Product Description"
          ></div>
        </div>

        {/* Clipboard Section */}
        <div className="cliboard-holder p-4 space-y-4">
          <h2>
            {clipboardheading} {heading} to your store
          </h2>

          <div className="clipboard-details">
            <h3>{clipboardscript}</h3>
            <p>{clipboardscriptnote}</p>
            <ScriptClipBoard />
          </div>

          <div className="clipboard-details">
            <h3>{clipboardsnippet}</h3>
            <p>{clipboardsnippetnote}</p>
            <WidgetClipBoard instanceid={instanceId_Widget} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
