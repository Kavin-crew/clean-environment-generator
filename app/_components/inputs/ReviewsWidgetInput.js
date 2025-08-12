import { useWidgetStore } from "@/src/store/widgetStore";
import Label from "@/app/_components/Label";

export default function ReviewsWidgetInput({ handleCheckboxChange }) {
  // states
  const instanceIdWidget = useWidgetStore((state) => state.instanceIdWidget);
  const isReviewsWidgetEnabled = useWidgetStore(
    (state) => state.isReviewsWidgetEnabled
  );
  // setters
  const setInstanceIdWidget = useWidgetStore(
    (state) => state.setInstanceIdWidget
  );
  const setIsReviewsWidgetEnabled = useWidgetStore(
    (state) => state.setIsReviewsWidgetEnabled
  );
  return (
    <div className="w-full space-y-2">
      <div className="flex items-center space-x-2">
        <label className="toggle-switch">
          <input
            type="checkbox"
            id="reviews-toggle"
            checked={isReviewsWidgetEnabled}
            onChange={() => {
              handleCheckboxChange(setIsReviewsWidgetEnabled);
              setInstanceIdWidget("");
            }}
          />
          <span className="toggle-slider"></span>
        </label>
        <Label htmlFor="reviews-toggle">Reviews</Label>
      </div>
      <input
        type="text"
        name={instanceIdWidget}
        placeholder="Reviews Instance Id"
        disabled={!isReviewsWidgetEnabled}
        value={instanceIdWidget}
        onChange={(e) => setInstanceIdWidget(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
      />
    </div>
  );
}
