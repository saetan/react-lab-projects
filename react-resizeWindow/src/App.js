import React, { useEffect, useState } from "react";
import useResizeWindow from "./useResizeWindow";
import "./styles.css";

export default function App() {
  const [width, height] = useResizeWindow();

  return (
    <div>
      Window Size Dimensions Are:{" "}
      <b>
        {width}px / {height}px
      </b>
    </div>
  );
}
