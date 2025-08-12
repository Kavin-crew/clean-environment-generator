import { useWidgetStore } from "@/src/store/widgetStore";
import ScriptClipBoard from "@/app/_clipboards/ScriptClip";
import WidgetClipBoard from "@/app/_clipboards/WidgetClip";

export default function Clipboards({ heading }) {
  const instanceIdWidget = useWidgetStore((state) => state.instanceIdWidget);
  const instanceIdQnA = useWidgetStore((state) => state.instanceIdQnA);
  return (
    <div className="cliboard-holder p-4 space-y-4 flex flex-wrap justify-center border-2 border-dashed border-[#04194c] mx-[clamp(10px,4vw,50px)] my-[clamp(10px,4vw,50px)] pt-[30px] px-[20px] pb-[20px] bg-[#f6f6ff]">
      <h2>{`Follow these steps to add this ${heading} to your store`}</h2>

      <div className="clipboard-details">
        <h3>{`1. Add the following to your <head> tag.`}</h3>
        <p>
          If you already have this script, please disregard since using one
          script will work for all of the Yotpo code snippets
        </p>
        <ScriptClipBoard />
      </div>

      <div className="clipboard-details">
        <h3>2. Add the following code snippet to your product page.</h3>
        <p>
          Make sure you replace each data element with the appropriate values of
          your website and product attributes.
        </p>
        {heading === "Reviews Widget" && (
          <WidgetClipBoard instanceid={instanceIdWidget} />
        )}
        {heading === "Q&A" && <WidgetClipBoard instanceid={instanceIdQnA} />}
      </div>
    </div>
  );
}
