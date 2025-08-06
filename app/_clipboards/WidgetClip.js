"use client";

import React, { useState, useEffect } from "react";

function WidgetClipBoard({ instanceid }) {
  const [value, setValue] = useState(`
    <div class="yotpo-widget-instance" 
      data-yotpo-instance-id="${instanceid}"
      data-yotpo-product-id="Product ID" 
      data-yotpo-name="Product Title" 
      data-yotpo-url="The URL of your product page" 
      data-yotpo-image-url="The product image URL" 
      data-yotpo-price="Product Price" 
      data-yotpo-currency="Product Currency" 
      data-yotpo-description="Product Description">
    </div>
    `);
  const [isCopied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setCopied(false);
  //   }, 3000);

  //   return () => clearTimeout(timeout);
  // }, [isCopied]);

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
      <button onClick={copy} className="btn btn-primary">
        {isCopied ? "Copied!" : "Copy Code"}
      </button>
    </>
  );
}

export default WidgetClipBoard;
