import React from "react";
import { useWidgetStore } from "@/src/store/widgetStore";

export default function DebugWidgetStore() {
  const state = useWidgetStore((state) => state);

  const widgetInfo = [
    {
      appkey: "rj74UZEzEEqYa1gTFXC3BLbr9GzC5SKjKXKupEpg",
      InstanceId_Widget: "433901",
      InstanceId_QA: "555238",
      InstanceId_SEO: "622016",
      InstanceId_Carousel: "555239",
      InstanceId_StarRating: "557423",
      InstanceId_PromotedProd: "622001",
      InstanceId_UgcGallery: "",
      InstanceId_ReviewsTab: "621963",
      ProductId: "",
    },
  ];
  return (
    <div>
      <h2>Store Values:</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      {widgetInfo.map((widget, index) => (
        <div key={index}>
          {Object.entries(widget).map(([key, value]) => (
            <p key={key}>
              {key}: {value || ""}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
