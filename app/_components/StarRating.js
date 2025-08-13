import { motion } from "framer-motion";
import { useWidgetStore } from "@/src/store/widgetStore";
import { useEffect, useState } from "react";
import Caret from "@/app/_components/Caret";
import Clipboards from "@/app/_components/Clipboards";

export default function StarRating({ heading }) {
  const instanceIdStarRating = useWidgetStore(
    (state) => state.instanceIdStarRating
  );
  const productId = useWidgetStore((state) => state.productId);
  const setIsStarRatingWidgetCollapsed = useWidgetStore(
    (state) => state.setIsStarRatingWidgetCollapsed
  );
  const setInstanceIdStarRating = useWidgetStore(
    (state) => state.setInstanceIdStarRating
  );
  const isStarRatingWidgetCollapsed = useWidgetStore(
    (state) => state.isStarRatingWidgetCollapsed
  );

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Re-init Yotpo when values change
  useEffect(() => {
    if (mounted && window.yotpo) {
      window.yotpo.initWidgets();
    }
  }, [mounted, instanceIdStarRating]);

  if (!mounted) return null; // No ID, no widget
  return (
    <div className="accordion-item relative border rounded-md overflow-hidden bg-[#fff]">
      {/* Accordion Header */}
      <button
        onClick={setIsStarRatingWidgetCollapsed}
        className={`flex justify-between items-center p-4 w-full border-b ${
          isStarRatingWidgetCollapsed
            ? "bg-white text-stone-800"
            : "bg-blue-400 text-white"
        }`}
      >
        <h2>{heading}</h2>
        <Caret active={isStarRatingWidgetCollapsed} />
      </button>

      {/* Accordion Content (Always Mounted) */}
      <motion.div
        initial={false}
        animate={{
          height: isStarRatingWidgetCollapsed ? 0 : "auto",
          opacity: isStarRatingWidgetCollapsed ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden border-t"
      >
        <div className="accordion-body bg-white">
          {/* Yotpo Widget */}
          <div className="rating-holder">
            <section>
              <h1>Product Star Rating</h1>
              <div
                className="yotpo-widget-instance"
                data-yotpo-instance-id={instanceIdStarRating}
                data-yotpo-product-id={productId}
                data-yotpo-section-id="product"
                mode-preview={productId === "" ? "true" : ""}
              ></div>
            </section>

            <section>
              <h1>Collections Star Rating</h1>
              <div
                className="yotpo-widget-instance"
                data-yotpo-instance-id={instanceIdStarRating}
                data-yotpo-product-id={productId}
                data-yotpo-section-id="collection"
                mode-preview={productId === "" ? "true" : ""}
              ></div>
            </section>
          </div>
        </div>

        <Clipboards heading={heading} />
      </motion.div>
    </div>
  );
}
