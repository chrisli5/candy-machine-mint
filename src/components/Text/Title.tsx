import "./Title.css";

interface TitleProps {
  children: string;
  secondary?: boolean;
}

const Title = (props: TitleProps): JSX.Element => (
  <h2
    className={`title mb-4 ${
      props.secondary ? "title__secondary" : "title__primary"
    }`}
  >
    {props.children}
  </h2>
);

export default Title;
