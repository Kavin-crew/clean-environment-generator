import { useWidgetStore } from "@/src/store/widgetStore";
import Label from "@/app/_components/Label";

export default function ReviewsTabInput({ handleCheckboxChange }) {
  const instanceIdReviewsTab = useWidgetStore(
    (state) => state.instanceIdReviewsTab
  );
  const isReviewsTabEnabled = useWidgetStore(
    (state) => state.isReviewsTabEnabled
  );
  const setInstanceIdReviewsTab = useWidgetStore(
    (state) => state.setInstanceIdReviewsTab
  );
  const setIsReviewsTabEnabled = useWidgetStore(
    (state) => state.setIsReviewsTabEnabled
  );

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center space-x-2">
        <label className="toggle-switch">
          <input
            type="checkbox"
            id="reviews-toggle"
            checked={isReviewsTabEnabled}
            onChange={() => {
              handleCheckboxChange(setIsReviewsTabEnabled);
              setInstanceIdReviewsTab("");
            }}
          />
          <span className="toggle-slider"></span>
        </label>
        <Label htmlFor="reviews-toggle">Reviews Tab</Label>
      </div>
      <input
        type="text"
        name={instanceIdReviewsTab}
        placeholder="Reviews Tab Instance Id"
        disabled={!isReviewsTabEnabled}
        value={instanceIdReviewsTab}
        onChange={(e) => setInstanceIdReviewsTab(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
      />
    </div>
  );
}
