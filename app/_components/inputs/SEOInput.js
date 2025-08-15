import { useWidgetStore } from "@/src/store/widgetStore";
import Label from "@/app/_components/Label";

export default function SEOInput({ handleCheckboxChange }) {
  const instanceIdSEO = useWidgetStore((state) => state.instanceIdSEO);
  const isSEOnabled = useWidgetStore((state) => state.isSEOnabled);
  const setInstanceIdSEO = useWidgetStore((state) => state.setInstanceIdSEO);
  const setIsSEOnabled = useWidgetStore((state) => state.setIsSEOnabled);
  return (
    <div className="w-full space-y-2">
      <div className="flex items-center space-x-2">
        <label className="toggle-switch">
          <input
            type="checkbox"
            id="reviews-toggle-seo-checkbox"
            checked={isSEOnabled}
            onChange={() => {
              handleCheckboxChange(setIsSEOnabled);
              setInstanceIdSEO("");
            }}
          />
          <span className="toggle-slider"></span>
        </label>
        <Label htmlFor="reviews-toggle-seo-checkbox">SEO</Label>
      </div>
      <input
        type="text"
        id="reviews-toggle-seo-input"
        name={instanceIdSEO}
        placeholder="SEO Instance Id"
        disabled={!setIsSEOnabled}
        value={instanceIdSEO}
        onChange={(e) => setInstanceIdSEO(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
      />
    </div>
  );
}
