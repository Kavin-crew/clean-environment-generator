import { useWidgetStore } from "@/src/store/widgetStore";
import Label from "@/app/_components/Label";

export default function StarRatingsInput({ handleCheckboxChange }) {
  // states
  const instanceIdStarRating = useWidgetStore(
    (state) => state.instanceIdStarRating
  );
  const isStarRatingWidgetEnabled = useWidgetStore(
    (state) => state.isStarRatingWidgetEnabled
  );
  const setInstanceIdStarRating = useWidgetStore(
    (state) => state.setInstanceIdStarRating
  );
  const setIsStarRatingWidgetEnabled = useWidgetStore(
    (state) => state.setIsStarRatingWidgetEnabled
  );

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center space-x-2">
        <label className="toggle-switch">
          <input
            type="checkbox"
            id="reviews-toggle-star-ratings-checkbox"
            checked={isStarRatingWidgetEnabled}
            onChange={() => {
              handleCheckboxChange(setIsStarRatingWidgetEnabled);
              setInstanceIdStarRating("");
            }}
          />
          <span className="toggle-slider"></span>
        </label>
        <Label htmlFor="reviews-toggle-star-ratings-checkbox">
          Star Ratings
        </Label>
      </div>
      <input
        type="text"
        id="reviews-toggle-star-ratings-input"
        name={instanceIdStarRating}
        placeholder="Star Ratings Id"
        disabled={!isStarRatingWidgetEnabled}
        value={instanceIdStarRating}
        onChange={(e) => setInstanceIdStarRating(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
      />
    </div>
  );
}
