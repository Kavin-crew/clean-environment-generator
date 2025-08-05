import PromotedClipBoard from "../clipboards/PromotedProductsClip";
import ScriptClipBoard from "../clipboards/ScriptClip";

function Widget(props) {
  const heading = props.heading;
  const instanceid = props.instanceid;
  const active = props.active;
  const productid = props.productid;
  const clipboardheading = props.clipboardheading;
  const clipboardscript = props.clipboardscript;
  const clipboardscriptnote = props.clipboardscriptnote;
  const clipboardsnippet = props.clipboardsnippet;
  const clipboardsnippetnote = props.clipboardsnippetnote;

  if (instanceid === "") {
    return null;
  } else {
    return (
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={
              active === "true"
                ? "accordion-button"
                : "accordion-button collapsed"
            }
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            {heading}
          </button>
        </h2>
        <div
          id="collapseFive"
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
              <PromotedClipBoard instanceid={instanceid} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Widget;
