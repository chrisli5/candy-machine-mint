import "./Title.css";

interface TitleProps {
  children: string;
  className?: string;
}

const Title = (props: TitleProps): JSX.Element => (
  <h3 className={props.className ? `title ${props.className}` : `title`}>
    {props.children}
  </h3>
);

export default Title;
