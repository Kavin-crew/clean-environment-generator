import WidgetClipboard from "../clipboards/WidgetClip";
import ScriptClipBoard from "../clipboards/ScriptClip";

export default function Widget({
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
      <div className="accordion-item container mx-auto px-4">
        <h2
          className={`accordion-header cursor-pointer ${
            active ? "" : "collapsed"
          }`}
        >
          {heading}
        </h2>
        <div
          id="collapseOne"
          className={`accordion-collapse collapse ${active ? "show" : ""}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div
              className="yotpo-widget-instance"
              data-yotpo-instance-id={instanceid}
              data-yotpo-product-id={productid}
              data-yotpo-name="Product Title"
              data-yotpo-url="The URL of your product page"
              data-yotpo-image-url="The product image URL"
              data-yotpo-price="Product Price"
              data-yotpo-currency="Product Currency"
              mode-preview={productid ? "true" : ""}
              data-yotpo-description="Product Description"
            ></div>
          </div>

          <div class="cliboard-holder">
            <h2>
              {clipboardheading} {heading} to your store
            </h2>

            <div class="clipboard-details">
              <h3>{clipboardscript}</h3>
              <p>{clipboardscriptnote}</p>
              <ScriptClipBoard />
            </div>

            <div class="clipboard-details">
              <h3>{clipboardsnippet}</h3>
              <p>{clipboardsnippetnote}</p>
              <WidgetClipboard instanceid={instanceid} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
