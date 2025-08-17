// type
// primary - normal button, blue background
// secondary - fixed button, blue background

const baseClasses =
  "text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

const typeClasses = {
  primary: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
  secondary:
    "fixed z-[9999] top-4 right-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
  ui: "fixed z-2 top-4 right-4 bg-stone-600 hover:bg-stone-900 focus:ring-stone-900",
};

export default function Button({ onClick, children, type, position }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseClasses} ${typeClasses[type] || ""}`}
    >
      {children}
    </button>
  );
}
