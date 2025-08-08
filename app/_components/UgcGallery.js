import UgcGalleryClipboard from "@/app/_clipboards/UgcGalleryClip";
import ScriptClipBoard from "@/app/_clipboards/ScriptClip";

function UgcGallery({
  heading,
  instanceid,
  active,
  productid,
  clipboardheading,
  clipboardscript,
  clipboardscriptnote,
  clipboardsnippet,
  clipboardsnippetnote,
}) {
  if (instanceid === "") {
    return null;
  } else {
    return (
      <div className="accordion-item">
        <button
          onClick={() => toggle((prev) => !prev)}
          className={`flex justify-between items-center p-4 border-1 w-full  ${
            !active ? "bg-blue-400 text-white" : "bg-white text-stone-800"
          }`}
        >
          <h2>{heading}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`w-5 h-5 transform transition-transform duration-800 ${
              active ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div
          className={`grid grid-cols-1 grid-rows-[0fr_1fr] transition-all duration-800 ease-in-out overflow-hidden border-1  ${
            active ? "max-h-0" : "max-h-screen"
          }`}
        >
          <div className="accordion-body">
            <div
              className="yotpo-widget-instance"
              data-yotpo-instance-id={instanceid === "" ? "608405" : instanceid}
              data-yotpo-product-id={instanceid === "" ? null : productid}
              mode-preview={productid === "" ? "true" : ""}
            ></div>
          </div>

          <div class="cliboard-holder">
            <h2>
              {clipboardheading} {heading} Widget to your store
            </h2>

            <div class="clipboard-details">
              <h3>{clipboardscript}</h3>
              <p>{clipboardscriptnote}</p>
              <ScriptClipBoard />
            </div>

            <div class="clipboard-details">
              <h3>{clipboardsnippet}</h3>
              <p>{clipboardsnippetnote}</p>
              <UgcGalleryClipboard instanceid={instanceid} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UgcGallery;
