import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Accordion from "react-bootstrap/Accordion";
import "./AccordionSelect.css";

interface AccordionSelectProps {
  ariaLabel: string;
  optionList: Option[];
  selected: Option;
  eventKey: string;
  onChange: (option: Option) => void;
}

type Option = {
  name: string;
  url: string;
};

const CustomToggle = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <Accordion.Item eventKey={eventKey} onClick={decoratedOnClick}>
      {children}
    </Accordion.Item>
  );
};

const AccordionSelect = (props: AccordionSelectProps): JSX.Element => (
  <CustomToggle eventKey={props.eventKey}>
    <Accordion.Header>
      <h2>{props.selected.name}</h2>
    </Accordion.Header>
    <Accordion.Body>
      <ul>
        {props.optionList.map((option) => (
          <li key={option.name} onClick={() => props.onChange(option)}>
            {option.name}
          </li>
        ))}
      </ul>
    </Accordion.Body>
  </CustomToggle>
);

export default AccordionSelect;
