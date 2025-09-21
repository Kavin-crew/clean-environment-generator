import { useWidgetStore } from "@/src/store/widgetStore";
import Label from "@/app/_components/Label";

export default function UgcGalleryInput({ handleCheckboxChange }) {
  const instanceIdUgcGallery = useWidgetStore(
    (state) => state.instanceIdUgcGallery
  );
  const isGalleryEnabled = useWidgetStore((state) => state.isGalleryEnabled);
  const setInstanceIdUgcGallery = useWidgetStore(
    (state) => state.setInstanceIdUgcGallery
  );
  const setIsGalleryEnabled = useWidgetStore(
    (state) => state.setIsGalleryEnabled
  );
  return (
    <div className="w-full space-y-2">
      <div className="flex items-center space-x-2">
        <label className="toggle-switch">
          <input
            type="checkbox"
            id="reviews-toggle-gallery-checkbox"
            checked={isGalleryEnabled}
            onChange={() => {
              handleCheckboxChange(setIsGalleryEnabled);
              setInstanceIdUgcGallery("");
            }}
          />
          <span className="toggle-slider"></span>
        </label>
        <Label htmlFor="reviews-toggle-gallery-checkbox">Reviews Gallery</Label>
      </div>
      <input
        type="text"
        id="reviews-toggle-gallery-input"
        name="ugc_gallery"
        placeholder="Gallery Instance Id"
        disabled={!isGalleryEnabled}
        value={instanceIdUgcGallery}
        onChange={(e) => setInstanceIdUgcGallery(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
      />
    </div>
  );
}
