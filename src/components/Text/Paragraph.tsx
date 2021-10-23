import React from "react";
import "./Paragraph.css";

interface ParagraphProps {
  children: string;
}

const Paragraph = (props: ParagraphProps): JSX.Element => (
  <p className="paragraph mb-4">{props.children}</p>
);
export default Paragraph;
