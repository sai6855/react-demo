import "./styles.css";
import React from "react";
import Chart from "./Chart/Chart";

export default function App() {
  return (
    <div className="App">
      {new Array(50).fill("-").map((_, i) => (
        <Chart key={i} />
      ))}
    </div>
  );
}
