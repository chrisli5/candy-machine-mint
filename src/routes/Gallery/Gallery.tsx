import { useState } from "react";
import Section from "../../components/Section/Section";
import Accordion from "react-bootstrap/Accordion";
import {
  initOptions,
  bgs,
  bases,
  clothings,
  items,
  hats,
} from "./galleryImages";
import AccordionSelect from "../../components/Select/AccordionSelect";
import { Button, Image } from "react-bootstrap";
import "./Gallery.css";

const Gallery = (): JSX.Element => {
  const [bg, setBg] = useState(initOptions[0]);
  const [base, setBase] = useState(initOptions[1]);
  const [clothing, setClothing] = useState(initOptions[2]);
  const [item, setItem] = useState(initOptions[3]);
  const [hat, setHat] = useState(initOptions[4]);

  const onReset = () => {
    setBg(initOptions[0]);
    setBase(initOptions[1]);
    setClothing(initOptions[2]);
    setItem(initOptions[3]);
    setHat(initOptions[4]);
  };

  return (
    <main>
      <Section id="Gallery">
        <Accordion className="gallery__accordion">
          <AccordionSelect
            eventKey="0"
            ariaLabel="select-bg"
            optionList={bgs}
            selected={bg}
            onChange={setBg}
          />
          <AccordionSelect
            eventKey="1"
            ariaLabel="select-base"
            optionList={bases}
            selected={base}
            onChange={setBase}
          />
          <AccordionSelect
            eventKey="2"
            ariaLabel="select-clothing"
            optionList={clothings}
            selected={clothing}
            onChange={setClothing}
          />
          <AccordionSelect
            eventKey="3"
            ariaLabel="select-item"
            optionList={items}
            selected={item}
            onChange={setItem}
          />
          <AccordionSelect
            eventKey="4"
            ariaLabel="select-hat"
            optionList={hats}
            selected={hat}
            onChange={setHat}
          />
        </Accordion>
        <Button onClick={onReset}>Reset</Button>

        <div className="gallery__container">
          <Image src={bg.url} className="gallery__layer" fluid />
          <Image src={base.url} className="gallery__layer" fluid />
          <Image src={clothing.url} className="gallery__layer" fluid />
          <Image src={item.url} className="gallery__layer" fluid />
          <Image src={hat.url} className="gallery__layer" fluid />
        </div>
      </Section>
    </main>
  );
};

export default Gallery;
