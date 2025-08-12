import { useWidgetStore } from "@/src/store/widgetStore";
import Label from "@/app/_components/Label";

export default function Checkbox({ handleCheckboxChange, title }) {
  const isReviewsWidgetEnabled = useWidgetStore(
    (state) => state.isReviewsWidgetEnabled
  );
  const setIsReviewsWidgetEnabled = useWidgetStore(
    (state) => state.setIsReviewsWidgetEnabled
  );
  return (
    <>
      <label className="toggle-switch">
        <input
          type="checkbox"
          id="reviews-toggle"
          checked={isReviewsWidgetEnabled}
          onChange={() => handleCheckboxChange(setIsReviewsWidgetEnabled)}
        />
        <span className="toggle-slider"></span>
      </label>
      <Label htmlFor="reviews-toggle">{title}</Label>
    </>
  );
}
