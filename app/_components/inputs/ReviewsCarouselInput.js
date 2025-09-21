import { useWidgetStore } from "@/src/store/widgetStore";
import Label from "@/app/_components/Label";

export default function ReviewsCarouselInput({ handleCheckboxChange }) {
  const instanceIdCarousel = useWidgetStore(
    (state) => state.instanceIdCarousel
  );
  const isReviewsCarouselEnabled = useWidgetStore(
    (state) => state.isReviewsCarouselEnabled
  );
  const setInstanceIdCarousel = useWidgetStore(
    (state) => state.setInstanceIdCarousel
  );
  const setIsReviewsCarouselEnabled = useWidgetStore(
    (state) => state.setIsReviewsCarouselEnabled
  );
  return (
    <div className="w-full space-y-2">
      <div className="flex items-center space-x-2">
        <label className="toggle-switch">
          <input
            type="checkbox"
            id="reviews-toggle-reviews-carousel-checkbox"
            checked={isReviewsCarouselEnabled}
            onChange={() => {
              handleCheckboxChange(setIsReviewsCarouselEnabled);
              setInstanceIdCarousel("");
            }}
          />
          <span className="toggle-slider"></span>
        </label>
        <Label htmlFor="reviews-toggle-reviews-carousel-checkbox">
          Reviews Carousel
        </Label>
      </div>
      <input
        type="text"
        id="reviews-toggle-reviews-carousel-input"
        name="reviews_carousel"
        placeholder="Reviews Carousel Instance Id"
        disabled={!isReviewsCarouselEnabled}
        value={instanceIdCarousel}
        onChange={(e) => setInstanceIdCarousel(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
      />
    </div>
  );
}
