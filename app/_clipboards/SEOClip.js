import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function SEOClipboard(props) {
  const instanceid = props.instanceid;
  const [value, setValue] = useState(`
    <div class="yotpo-widget-instance" 
    data-yotpo-instance-id="${instanceid}"
    data-yotpo-product-id="Product ID"/>
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
      <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
        <button type="button" className="btn btn-primary">
          {isCopied ? "Copied!" : "Copy Code"}
        </button>
      </CopyToClipboard>
    </>
  );
}

export default SEOClipboard;
