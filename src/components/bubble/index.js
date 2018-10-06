import React from "react";

const Bubble = props => {
  const bubbleStyle = { height: props.bubbleSize, width: props.bubbleSize };
  return <div className="bubble-wrapper" style={bubbleStyle} />;
};

export default Bubble;
