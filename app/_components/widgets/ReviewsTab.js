import { useWidgetStore } from "@/src/store/widgetStore";

export default function ReviewsTab() {
  const instanceIdReviewsTab = useWidgetStore(
    (state) => state.instanceIdReviewsTab
  );
  const productId = useWidgetStore((state) => state.productId);

  if (!instanceIdReviewsTab) return null;

  return (
    <div
      className={`yotpo-widget-instance ${
        instanceIdReviewsTab === "" ? "hide" : ""
      }`}
      data-yotpo-instance-id={instanceIdReviewsTab}
      data-yotpo-product-id={productId}
      mode-preview={instanceIdReviewsTab === "" ? "true" : ""}
    />
  );
}
