import React from "react";
interface LineProps {
  show?: boolean;
}
const Line = (props: LineProps): JSX.Element => (
  <div
    className={props.show ? "d-block" : "d-md-none"}
    style={{ borderBottom: "2px solid var(--primary-bg)", opacity: 0.5 }}
  />
);

export default Line;
