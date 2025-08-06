export default function Accordion({ children, heading }) {
  return (
    <div className="container mx-auto">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">{children}</div>
      </div>
    </div>
  );
}
