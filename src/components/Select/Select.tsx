import React from "react";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Accordion from "react-bootstrap/Accordion";
import "./Select.css";

interface SelectProps {
  ariaLabel: string;
  optionList: Option[];
  initialOption: Option;
  eventKey: string;
  onChange: (option: Option) => void;
}

type Option = {
  name: string;
  value: string;
};

const CustomToggle = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey);

  return <div onClick={decoratedOnClick}>{children}</div>;
};

const AccordionSelect = (props: SelectProps): JSX.Element => (
  <CustomToggle eventKey={props.eventKey}>
    <div className="gallery__select" aria-label={props.ariaLabel}>
      <h4 className="select__header">{props.initialOption.name}</h4>
      <Accordion.Collapse eventKey={props.eventKey}>
        <ul className="select__ul">
          {props.optionList.map((option) => (
            <li
              key={option.name}
              className="select__li"
              onClick={() => props.onChange(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      </Accordion.Collapse>
    </div>
  </CustomToggle>
);

export default AccordionSelect;
