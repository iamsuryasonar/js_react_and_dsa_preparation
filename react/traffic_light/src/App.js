import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState("green");

  const greenLightDuration = 3000;
  const yellowLightDuration = 500;
  const redLightDuration = 4000;

  useEffect(() => {
    const changeColor = (color) => {
      if (color === "green") {
        setTimeout(() => {
          setColor("yellow");
        }, greenLightDuration);
      }
      if (color === "yellow") {
        setTimeout(() => {
          setColor("red");
        }, yellowLightDuration);
      }
      if (color === "red") {
        setTimeout(() => {
          setColor("green");
        }, redLightDuration);
      }
    };
    changeColor(color);
  }, [color]);

  return (
    <div className="container">
      {color ? (
        <>
          <div
            className={`light_circle ${color === "green" ? "green_light" : ""}`}
          ></div>
          <div
            className={`light_circle ${
              color === "yellow" ? "yellow_light" : ""
            }`}
          ></div>
          <div
            className={`light_circle ${color === "red" ? "red_light" : ""}`}
          ></div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
