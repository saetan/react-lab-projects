import React, { useEffect, useRef } from "react";
import { white, primary, secondary, success, warning, danger } from "../colors";
import useHoverHook from "./useHoverHook";

export default function InlineStyle(props) {
  const buttonStyles = {
    color: white,
    padding: "7px 14px",
    margin: "0 5px",
    borderRadius: "5px",
    border: "1px solid transparent"
  };

  const primaryStyles = {
    ...buttonStyles,
    backgroundColor: primary
  };

  const secondaryStyles = {
    ...buttonStyles,
    backgroundColor: secondary
  };

  const successStyles = {
    ...buttonStyles,
    backgroundColor: success
  };

  let primaryRef = useHoverHook(primaryStyles.backgroundColor, danger);
  let secondaryRef = useHoverHook(secondaryStyles.backgroundColor, danger);
  let successRef = useHoverHook(successStyles.backgroundColor, danger);



  return (
    <div style={{ color: "red" }}>
      <h2>Inline Styles With Hooks</h2>
      {/* {renderButtons()} */}
      <button style={primaryStyles} ref={primaryRef}>
        Primary
      </button>
      <button style={secondaryStyles} ref={secondaryRef}>
        Secondary
      </button>
      <button style={successStyles} ref={successRef}>
        Success
      </button>
    </div>
  );
}