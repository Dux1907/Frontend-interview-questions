import { useState } from "react";
import "./App.css";
import Star from "./assets/Star";
function App() {
  const [total, setTotal] = useState(5);
  const [rating, setRating] = useState(3);
  const [hover, setHover] = useState("");
  return (
    <>
      {Array.from({ length: total }).map((_, index) => (
        <span
          onClick={() => setRating(index + 1)}
          onMouseEnter={() => setHover(index + 1)}
          onMouseLeave={() => setHover("")}
        >
          <Star filled={hover !== "" ? index < hover : index < rating} />
        </span>
      ))}
    </>
  );
}

export default App;
