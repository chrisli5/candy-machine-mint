import "./Title.css";

interface TitleProps {
  children: string;
  secondary?: boolean;
  className?: string;
}

const Title = (props: TitleProps): JSX.Element => (
  <h2
    className={`title ${props.className ? props.className : ""} ${
      props.secondary ? "title__secondary" : "title__primary"
    }`}
  >
    {props.children}
  </h2>
);

export default Title;
