import { useEffect, useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [active, setActive] = useState([]);
  const activeRef = useRef(active);

  const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ];

  function calculateNumbersOfActive(matrix) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 1) {
          count++;
        }
      }
    }
    return count;
  }

  let numbersOfActive = calculateNumbersOfActive(matrix);

  function onCellClicked(i, j) {
    if (matrix[i][j] === 1) {
      setActive((prev) => {
        if (!active.includes(i + "" + j)) {
          return [...prev, i + "" + j];
        } else {
          return [...prev];
        }
      });
    }
  }

  useEffect(() => {
    activeRef.current = active;
    if (activeRef.current.length === numbersOfActive) {
      let interval = setInterval(() => {
        if (activeRef.current.length === 0) {
          clearInterval(interval);
        } else {
          setActive((prev) => {
            let updated = [...prev];
            updated.pop();
            return updated;
          });
        }
      }, 200);
    }
  }, [active, numbersOfActive]);

  return (
    <div className="main">
      <div className="box">
        {matrix.map((i, outer_index) => {
          return i.map((j, inner_index) => {
            return (
              <>
                {matrix[outer_index][inner_index] === 1 ? (
                  <div
                    key={inner_index}
                    className="cell"
                    onClick={() => onCellClicked(outer_index, inner_index)}
                    style={
                      active.includes(outer_index + "" + inner_index)
                        ? { backgroundColor: "lightgreen" }
                        : {}
                    }
                  ></div>
                ) : (
                  <div className="empty_cell"></div>
                )}
              </>
            );
          });
        })}
      </div>
    </div>
  );
}
