export default function ReviewsTab({ instanceid, productid }) {
  if (instanceid === "") {
    return null;
  } else {
    return (
      <div
        className={`yotpo-widget-instance ${instanceid === "" ? "hide" : ""}`}
        data-yotpo-instance-id={instanceid}
        data-yotpo-product-id={productid}
        mode-preview={productid === "" ? "true" : ""}
      />
    );
  }
}
