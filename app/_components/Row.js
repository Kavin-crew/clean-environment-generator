export default function Row({ children }) {
  return (
    <div className="block space-y-2 justify-between gap-x-5 md:flex">
      {children}
    </div>
  );
}
