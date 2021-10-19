import React from "react";
import LeftGrandChild from './LeftGrandChild'
import DataContext from "./context/DataContext";
import { useContext } from "react";

export default function LeftChild() {

  const dataContext = useContext(DataContext)

  const styles = {
    backgroundColor: dataContext.background,
    color: dataContext.color
  }
  return (
    < div>
      <p style={styles}> Left Child </p>
      <LeftGrandChild />
    </div >
  );
}
