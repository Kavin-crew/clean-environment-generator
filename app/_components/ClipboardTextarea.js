export default function ClipboardTextarea({ value, setCopied }) {
  return (
    <textarea
      className="text-[12px] h-[100px] mb-[14px] px-[10px] resize-none text-left cursor-default bg-[rgba(239,239,239,0.3)] text-[rgb(84,84,84)] border border-[rgba(118,118,118,0.3)] dark:bg-[rgba(59,59,59,0.3)] dark:text-[rgb(170,170,170)] mt-2"
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
  );
}
