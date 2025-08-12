import { useWidgetStore } from "@/src/store/widgetStore";
import Label from "@/app/_components/Label";

export default function QnAWidgetInput({ handleCheckboxChange }) {
  const instanceIdQnA = useWidgetStore((state) => state.instanceIdQnA);
  const isQAWidgetEnabled = useWidgetStore((state) => state.isQAWidgetEnabled);

  const setInstanceIdQnA = useWidgetStore((state) => state.setInstanceIdQnA);
  const setIsQAWidgetEnabled = useWidgetStore(
    (state) => state.setIsQAWidgetEnabled
  );

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center space-x-2">
        <label className="toggle-switch">
          <input
            type="checkbox"
            id="reviews-toggle"
            checked={isQAWidgetEnabled}
            onChange={() => {
              handleCheckboxChange(setIsQAWidgetEnabled);
              setInstanceIdQnA("");
            }}
          />
          <span className="toggle-slider"></span>
        </label>
        <Label htmlFor="reviews-toggle">Q&A</Label>
      </div>
      <input
        type="text"
        name={instanceIdQnA}
        placeholder="Q&A Instance Id"
        disabled={!isQAWidgetEnabled}
        value={instanceIdQnA}
        onChange={(e) => setInstanceIdQnA(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
      />
    </div>
  );
}
