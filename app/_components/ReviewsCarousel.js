import { motion } from "framer-motion";
import { useWidgetStore } from "@/src/store/widgetStore";
import { useEffect, useState } from "react";
import Caret from "@/app/_components/Caret";
import Clipboards from "@/app/_components/Clipboards";

export default function ReviewsCarousel({ heading }) {
  const productId = useWidgetStore((state) => state.productId);
  const instanceIdCarousel = useWidgetStore(
    (state) => state.instanceIdCarousel
  );
  const isReviewsCarouselCollapsed = useWidgetStore(
    (state) => state.isReviewsCarouselCollapsed
  );

  const setIsReviewsCarouselCollapsed = useWidgetStore(
    (state) => state.setIsReviewsCarouselCollapsed
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
  }, [mounted, instanceIdCarousel]);

  if (!mounted || !instanceIdCarousel) return null; // No ID, no widget

  return (
    <div className="accordion-item relative border rounded-md overflow-hidden bg-[#fff]">
      {/* Accordion Header */}
      <button
        onClick={setIsReviewsCarouselCollapsed}
        className={`flex justify-between items-center p-4 w-full border-b ${
          isReviewsCarouselCollapsed
            ? "bg-white text-stone-800"
            : "bg-blue-400 text-white"
        }`}
      >
        <h2>{heading}</h2>
        <Caret active={isReviewsCarouselCollapsed} />
      </button>

      {/* Accordion Content (Always Mounted) */}
      <motion.div
        initial={false}
        animate={{
          height: isReviewsCarouselCollapsed ? 0 : "auto",
          opacity: isReviewsCarouselCollapsed ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden border-t"
      >
        <div className="accordion-body bg-white">
          {/* Yotpo Widget */}
          <div
            className="yotpo-widget-instance"
            data-yotpo-instance-id={instanceIdCarousel}
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

        <Clipboards heading={heading} />
      </motion.div>
    </div>
  );
}
