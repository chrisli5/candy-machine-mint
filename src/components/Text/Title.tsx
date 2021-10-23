import "./Title.css";

interface TitleProps {
  children: string;
  className?: string;
}

const Title = (props: TitleProps): JSX.Element => (
  <h2 className={`title mb-3 ${props.className}`}>{props.children}</h2>
);

export default Title;
