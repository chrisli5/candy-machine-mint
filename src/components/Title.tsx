import React from "react";
import "./Title.css";

const Title = (props) => {
  return (
    <h2 className="title" style={{ fontWeight: 800, fontStyle: "italic" }}>
      {props.children}
    </h2>
  );
};

export default Title;
