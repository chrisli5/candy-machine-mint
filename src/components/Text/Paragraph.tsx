import "./Paragraph.css";

interface ParagraphProps {
  children: string;
  secondary?: boolean;
}

const Paragraph = (props: ParagraphProps): JSX.Element => (
  <p
    className={`paragraph ${
      props.secondary ? "paragraph__secondary" : "paragraph__primary"
    }`}
  >
    {props.children}
  </p>
);
export default Paragraph;
