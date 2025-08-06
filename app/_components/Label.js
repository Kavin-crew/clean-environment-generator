export default function Label({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-slate-900 mb-2"
    >
      {children}
    </label>
  );
}
