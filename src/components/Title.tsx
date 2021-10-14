import React from "react";

const Title = (props) => {
  return (
    <h2 className="title" style={{ fontWeight: 800, fontStyle: "italic" }}>
      {props.children}
    </h2>
  );
};

export default Title;
