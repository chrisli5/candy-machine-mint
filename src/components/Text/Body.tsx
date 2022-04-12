import "./Body.css";

interface BodyProps {
  children: string;
  className?: string;
}

const Body = (props: BodyProps): JSX.Element => (
  <p className={props.className ? `body ${props.className}` : `body`}>
    {props.children}
  </p>
);

export default Body;
