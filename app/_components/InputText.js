export default function InputText({ inputName, value, setterFn }) {
  return (
    <input
      type={inputName}
      id={inputName}
      name={inputName}
      value={value}
      onChange={(e) => setterFn(e.target.value)}
      placeholder={inputName}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  );
}
