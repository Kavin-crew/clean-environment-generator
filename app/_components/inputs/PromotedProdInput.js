import { useWidgetStore } from "@/src/store/widgetStore";
import Label from "@/app/_components/Label";

export default function PromotedProdInput({ handleCheckboxChange }) {
  const instanceIdPromotedProd = useWidgetStore(
    (state) => state.instanceIdPromotedProd
  );
  const isPromotedProductsEnabled = useWidgetStore(
    (state) => state.isPromotedProductsEnabled
  );
  const setInstanceIdPromotedProd = useWidgetStore(
    (state) => state.setInstanceIdPromotedProd
  );
  const setIsPromotedProductsEnabled = useWidgetStore(
    (state) => state.setIsPromotedProductsEnabled
  );
  return (
    <div className="w-full space-y-2">
      <div className="flex items-center space-x-2">
        <label className="toggle-switch">
          <input
            type="checkbox"
            id="reviews-toggle"
            checked={isPromotedProductsEnabled}
            onChange={() => {
              handleCheckboxChange(setIsPromotedProductsEnabled);
              setInstanceIdPromotedProd("");
            }}
          />
          <span className="toggle-slider"></span>
        </label>
        <Label htmlFor="reviews-toggle">Promoted Products</Label>
      </div>
      <input
        type="text"
        name={instanceIdPromotedProd}
        placeholder="Promoted Products Instance Id"
        disabled={!isPromotedProductsEnabled}
        value={instanceIdPromotedProd}
        onChange={(e) => setInstanceIdPromotedProd(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
      />
    </div>
  );
}
