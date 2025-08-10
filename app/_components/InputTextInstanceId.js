"use client";

import { useWidgetStore } from "@/src/store/widgetStore";

export default function InputTextInstanceId({
  inputName,
  isDisabled,
  targetedInputRef,
}) {
  const { instanceId_Widget, setInstanceId_Widget } = useWidgetStore();

  return (
    <input
      type="text"
      id={`${inputName}-input`}
      name={inputName}
      placeholder="Instance Id"
      disabled={!isDisabled}
      ref={targetedInputRef}
      value={instanceId_Widget}
      onChange={(e) => setInstanceId_Widget(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
    />
  );
}
