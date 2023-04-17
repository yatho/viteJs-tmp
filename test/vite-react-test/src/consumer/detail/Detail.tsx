import { useState } from "react";
import "./Detail.css";

const Detail = ({ value, test }: { value: number; test: number }) => {
  const [val, setVal] = useState(value * test);

  const multiply = () => setVal(val * test);

  return (
    <div>
      <h2 onClick={multiply}>Détail</h2>
      {val}
    </div>
  );
};

export default Detail;
