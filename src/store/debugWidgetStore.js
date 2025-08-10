import React from "react";
import { useWidgetStore } from "@/src/store/widgetStore";

export default function DebugWidgetStore() {
  const state = useWidgetStore((state) => state);

  return (
    <div>
      <h2>Store Values:</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
