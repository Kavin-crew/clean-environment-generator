"use client";

import { useState } from "react";

function ScriptClipBoard() {
  const [value, setValue] = useState(`
  <script src="https://cdn-widgetsrepository.yotpo.com/v1/loader/rj74UZEzEEqYa1gTFXC3BLbr9GzC5SKjKXKupEpg" async></script>
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
      <button onClick={copy} type="button" className="btn btn-primary">
        {isCopied ? "Copied!" : "Copy Script"}
      </button>
    </>
  );
}

export default ScriptClipBoard;
