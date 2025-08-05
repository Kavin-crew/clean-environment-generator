function ReviewsTab(props) {
    const instanceid = props.instanceid;
    const productid = props.productid;
    
    if (instanceid === "") {
      return null;
    } else {
      return (
        <div
          className={
            instanceid === ""
              ? "yotpo-widget-instance hide"
              : "yotpo-widget-instance"
          }
          data-yotpo-instance-id={instanceid}
          data-yotpo-product-id={productid}
          mode-preview={productid === "" ? "true" : ""}
        />
      );
    }
  }
  
  export default ReviewsTab;
  