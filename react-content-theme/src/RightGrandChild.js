import React from "react";
import { useContext } from "react";
import DataContext from "./context/DataContext";

export default function RightGrandChild(props) {
  const dataContext = useContext(DataContext)
  const styles = {
    backgroundColor: dataContext.background,
    color: dataContext.color
  }
  //{props.theme}
  return (
    <div style={styles}>
      Right Grandchild
    </div>
  );
}
