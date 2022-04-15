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
      <h3 className="accordion__title">{props.selected.name}</h3>
    </Accordion.Header>
    <Accordion.Body className="accordion__body">
      <ul className="accordion__ul">
        {props.optionList.map((option) => (
          <li
            key={option.name}
            className="accordion__li"
            onClick={() => props.onChange(option)}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </Accordion.Body>
  </CustomToggle>
);

export default AccordionSelect;
