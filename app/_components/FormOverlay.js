import { customizationStore } from "@/src/store/customizationStore";

export default function FormOverlay() {
  const setIsFormOpen = customizationStore((state) => state.setIsFormOpen);
  return (
    <div className="form-overlay fixed inset-0 bg-gray-500 bg-opacity-75 opacity-80 transition-opacity z-[9998]">
      <button
        onClick={() => setIsFormOpen()}
        className="absolute w-full h-full z-[9998] cursor-pointer"
      ></button>
    </div>
  );
}
