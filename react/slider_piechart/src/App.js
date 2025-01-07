import "./styles.css";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState();

  return (
    <div className="App">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div
        className="circle"
        // Conic gradient-
        // RED STARTS FROM ZERO DEGREE TO THE PERCENTAGE VALUE,
        // AND LIGHTGREEN START FROM ZERO DEGREE TO 360 DEGREES
        style={{
          backgroundImage: `conic-gradient(red 0,red ${value}%, lightgreen 0,lightgreen 360deg)`
        }}
      ></div>
    </div>
  );
}
