import React from "react";
import { useContext } from "react";
import DataContext from "./context/DataContext";

export default function LeftGreatGrandChild(props) {
  const dataContext = useContext(DataContext)

  const styles = {
    backgroundColor: dataContext.background,
    color: dataContext.color
  }
  return (
    <div style={styles}>
      <p>Left Great Grandchild</p>
    </div>
  );
}
