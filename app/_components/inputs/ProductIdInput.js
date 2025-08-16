import { useWidgetStore } from "@/src/store/widgetStore";

export default function ProductIdInput() {
  const productId = useWidgetStore((state) => state.productId);
  const setProductId = useWidgetStore((state) => state.setProductId);
  return (
    <input
      type="text"
      id="productId"
      name="productId"
      value={productId}
      onChange={(e) => setProductId(e.target.value)}
      placeholder="Product Id"
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  );
}
