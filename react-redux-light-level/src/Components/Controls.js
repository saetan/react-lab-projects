import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function Controls(props) {
  const lightButtons = props.lightValues.map((d, i) => {
    return (
      <button key={i} onClick={() => props.handleClick(d)}>
        {d.name}
      </button>
    );
  });
  console.log(props);

  const Controls = styled.div`
    margin: 20px;
  `;

  return (
    <div>
      {<Controls>{lightButtons}</Controls>}
      <p>Number of clicks: {props.numberOfClicks}</p>
      <button className="reset" onClick={() => props.handleReset()}>
        Reset
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (data) => {
      dispatch({ type: data.action });
    },

    handleReset: () => {
      dispatch({ type: "RESET" });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
