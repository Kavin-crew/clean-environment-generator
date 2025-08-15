import { motion } from "framer-motion";
import { useWidgetStore } from "@/src/store/widgetStore";
import Caret from "@/app/_components/Caret";
import Clipboards from "@/app/_components/clipboards/Clipboards";

export default function PromotedProducts({ heading }) {
  const productId = useWidgetStore((state) => state.productId);
  const appKey = useWidgetStore((state) => state.appKey);
  const instanceIdPromotedProd = useWidgetStore(
    (state) => state.instanceIdPromotedProd
  );
  const isPromotedProductsCollapsed = useWidgetStore(
    (state) => state.isPromotedProductsCollapsed
  );
  const setIsPromotedProductsCollapsed = useWidgetStore(
    (state) => state.setIsPromotedProductsCollapsed
  );
  return (
    <div className="accordion-item relative border rounded-md overflow-hidden bg-[#fff]">
      {/* Accordion Header */}
      <button
        onClick={setIsPromotedProductsCollapsed}
        className={`flex justify-between items-center p-4 w-full border-b ${
          isPromotedProductsCollapsed
            ? "bg-white text-stone-800"
            : "bg-blue-400 text-white"
        }`}
      >
        <h2>{heading}</h2>
        <Caret active={isPromotedProductsCollapsed} />
      </button>

      {/* Accordion Content (Always Mounted) */}
      <motion.div
        initial={false}
        animate={{
          height: isPromotedProductsCollapsed ? 0 : "auto",
          opacity: isPromotedProductsCollapsed ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden border-t"
      >
        <div className="accordion-body bg-white">
          {/* Yotpo Widget */}
          <div
            className="yotpo-widget-instance"
            data-yotpo-instance-id={instanceIdPromotedProd}
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

        {appKey && instanceIdPromotedProd && <Clipboards heading={heading} />}
      </motion.div>
    </div>
  );
}
