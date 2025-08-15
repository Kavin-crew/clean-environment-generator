import { useWidgetStore } from "@/src/store/widgetStore";

export default function TitleInput() {
  const title = useWidgetStore((state) => state.title);
  const setTitle = useWidgetStore((state) => state.setTitle);
  return (
    <input
      type="text"
      id="title"
      name="title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Account name"
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  );
}
