import "./Section.css";

interface SectionProps {
  id: string;
  className?: string;
  children?: React.ReactNode;
}

const Section = (props: SectionProps): JSX.Element => (
  <div
    id={props.id}
    className={props.className ? `section ${props.className}` : `section`}
  >
    <div className="section__container">{props.children}</div>
  </div>
);

export default Section;
