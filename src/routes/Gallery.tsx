import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import AccordionSelect from "../components/Select/Select";
import imageStore from "../components/images";
import "./Gallery.css";
import { ResetButton } from "../components/Buttons/Buttons";

const initialBackground = {
  name: "Background",
  value: imageStore["backgrounds"][0].value,
};
const initialBase = {
  name: "Base",
  value: imageStore["bases"][0].value,
};
const initialHat = {
  name: "Hat",
  value: imageStore["hats"][0].value,
};
const initialClothing = {
  name: "Clothing",
  value: imageStore["clothing"][0].value,
};
const initialItem = {
  name: "Item",
  value: imageStore["items"][0].value,
};

const Gallery = (): JSX.Element => {
  const [background, setBackground] = useState(initialBackground);
  const [base, setBase] = useState(initialBase);
  const [hat, setHat] = useState(initialHat);
  const [clothing, setClothing] = useState(initialClothing);
  const [item, setItem] = useState(initialItem);

  const resetAll = () => {
    setBackground(initialBackground);
    setBase(initialBase);
    setHat(initialHat);
    setClothing(initialClothing);
    setItem(initialItem);
  };

  return (
    <main className="mt-5 pt-4 pt-md-5 px-2">
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={5}>
          <h2 className="gallery__header">Gallery</h2>
          <Accordion id="gallery__accordion">
            <AccordionSelect
              ariaLabel="Backgrounds"
              selected={background}
              onChange={setBackground}
              optionList={imageStore["backgrounds"]}
              eventKey="0"
            />
            <AccordionSelect
              ariaLabel="Bases"
              selected={base}
              onChange={setBase}
              optionList={imageStore["bases"]}
              eventKey="1"
            />
            <AccordionSelect
              ariaLabel="Clothing"
              selected={clothing}
              onChange={setClothing}
              optionList={imageStore["clothing"]}
              eventKey="2"
            />
            <AccordionSelect
              ariaLabel="Items"
              selected={item}
              onChange={setItem}
              optionList={imageStore["items"]}
              eventKey="3"
            />
            <AccordionSelect
              ariaLabel="Hats"
              selected={hat}
              onChange={setHat}
              optionList={imageStore["hats"]}
              eventKey="4"
            />
          </Accordion>
          <div className="reset__container">
            <ResetButton onClick={resetAll} />
          </div>
        </Col>
        <Col md={1} />
        <Col xs={12} md={5}>
          <div className="images__container">
            <Image
              src={background.value}
              className="imageLayer"
              style={{ borderRadius: "12px" }}
              fluid
            />
            <Image src={base.value} className="imageLayer" fluid />
            <Image src={clothing.value} className="imageLayer" fluid />
            <Image src={item.value} className="imageLayer" fluid />
            <Image src={hat.value} className="imageLayer" fluid />
          </div>
        </Col>
      </Row>
    </main>
  );
};

export default Gallery;
