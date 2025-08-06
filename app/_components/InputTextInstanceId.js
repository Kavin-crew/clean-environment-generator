// this used to be a reusable input component for instance ID
// it accepts props for input name, disabled state, and a ref for the input element
export default function InputTextInstanceId({
  inputName,
  isDisabled,
  targetedInputRef,
}) {
  return (
    <input
      type="text"
      id={`${inputName}-input`}
      name={inputName}
      placeholder="Instance Id"
      disabled={!isDisabled}
      ref={targetedInputRef}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
    />
  );
}

// original code before it was moved to a separate component
{
  /* <input
    type="text"
    id="reviews-input"
    name="reviews"
    placeholder="Instance Id"
    disabled={!isReviewsWidgetEnabled}
    ref={(el) => (inputRef.current["reviewswidget"] = el)}
    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
  /> */
}
