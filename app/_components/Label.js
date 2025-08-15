export default function Label({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-slate-900 ${
        ["title", "language", "appkey"].includes(htmlFor) ? "mb-2" : "mb-0"
      }`}
    >
      {children}
    </label>
  );
}
