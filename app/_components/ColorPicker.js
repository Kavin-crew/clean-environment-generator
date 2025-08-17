import { SketchPicker } from "react-color";

export default function ColorPicker({ color, setColor, location }) {
  return (
    <SketchPicker
      className={`${location} absolute z-50`}
      color={color}
      onChangeComplete={(c) => setColor(c.hex)}
    />
  );
}
