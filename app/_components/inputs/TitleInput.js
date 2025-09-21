import { useWidgetStore } from "@/src/store/widgetStore";
import { useEffect } from "react";

export default function TitleInput() {
  const title = useWidgetStore((state) => state.title);
  const setTitle = useWidgetStore((state) => state.setTitle);

  useEffect(() => {
    if (!title) return;

    const timer = setTimeout(() => {
      if (!title.endsWith(" - v3")) {
        setTitle(title + " - v3");
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [title, setTitle]);

  return (
    <input
      required
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
