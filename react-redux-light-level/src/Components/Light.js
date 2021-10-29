import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function Lights(props) {
  console.log("Lights - props", props);

  const Light = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: "1px solid";
    color: white;
    background: ${props.activeLight.color};
  `;

  return <Light />;
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Lights);
