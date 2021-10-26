import "./Title.css";

interface TitleProps {
  children: string;
}

const Title = (props: TitleProps): JSX.Element => (
  <h2 className="title mb-3">{props.children}</h2>
);

export default Title;
