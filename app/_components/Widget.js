import ScriptClipBoard from "../_clipboards/ScriptClip";
import WidgetClipBoard from "../_clipboards/WidgetClip";

function Widget({
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
        <h2 className="accordion-header p-4 bg-blue-400 text-white ">
          <button
            className={
              active === "true"
                ? "accordion-button"
                : "accordion-button collapsed"
            }
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {heading}
          </button>
        </h2>
        <div
          id="collapseOne"
          className={
            active === "true"
              ? "accordion-collapse collapse show"
              : "accordion-collapse collapse"
          }
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
              mode-preview={productid === "" ? "true" : ""}
              data-yotpo-description="Product Description"
            ></div>
          </div>

          <div className="cliboard-holder">
            <h2>
              {clipboardheading} {heading} to your store
            </h2>

            <div className="clipboard-details">
              <h3>{clipboardscript}</h3>
              <p>{clipboardscriptnote}</p>
              <ScriptClipBoard />
            </div>

            <div className="clipboard-details">
              <h3>{clipboardsnippet}</h3>
              <p>{clipboardsnippetnote}</p>
              <WidgetClipBoard instanceid={instanceid} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Widget;
