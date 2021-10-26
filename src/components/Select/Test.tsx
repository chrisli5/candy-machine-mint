import React from "react";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const CustomToggle = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey);

  return <div onClick={decoratedOnClick}>{children}</div>;
};

function Example() {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <CustomToggle eventKey="0">Body me!</CustomToggle>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

const Select = (props): JSX.Element => (
  <Accordion>
    <CustomToggle eventKey="0">{props.initialOption.name}</CustomToggle>
    <Accordion.Collapse eventKey="0">
      <CustomToggle eventKey="0">Body me!</CustomToggle>
    </Accordion.Collapse>
  </Accordion>
);

export default Select;
