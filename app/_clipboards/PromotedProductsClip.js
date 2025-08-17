import { useState, useEffect } from "react";

function PromotedClipBoard(props) {
  const instanceid = props.instanceid;
  const [value, setValue] = useState(`
    <div class="yotpo-widget-instance" 
      data-yotpo-instance-id="${instanceid}"
      data-yotpo-product-id="Product ID">
    </div>
    `);
  const [isCopied, setCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [isCopied]);

  return (
    <>
      <textarea
        disabled
        contentEditable
        spellCheck={false}
        onFocus={(event) => event.target.select()}
        type="text"
        value={value}
        onChange={({ target: { value } }) => {
          setValue(value);
          setCopied(false);
        }}
      />
      <button type="button" className="btn btn-primary">
        {isCopied ? "Copied!" : "Copy Code"}
      </button>
    </>
  );
}

export default PromotedClipBoard;
