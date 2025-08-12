import { useWidgetStore } from "@/src/store/widgetStore";

export default function AppkeyInput() {
  const appKey = useWidgetStore((state) => state.appKey);
  const setAppKey = useWidgetStore((state) => state.setAppKey);
  return (
    <input
      type="text"
      id="appkey"
      name="appkey"
      value={appKey}
      onChange={(e) => setAppKey(e.target.value)}
      placeholder="appkey"
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  );
}
