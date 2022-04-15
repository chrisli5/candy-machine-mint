import { useState } from "react";
import Section from "../../components/Section/Section";
import Accordion from "react-bootstrap/Accordion";
import { bgs, bases, clothings, items, hats } from "./galleryImages";
import AccordionSelect from "../../components/Select/AccordionSelect";
import { Image } from "react-bootstrap";
import "./Gallery.css";

const Gallery = (): JSX.Element => {
  const [base, setBase] = useState(bases[0]);
  const [bg, setBg] = useState(bgs[0]);
  const [clothing, setClothing] = useState(clothings[0]);
  const [item, setItem] = useState(items[0]);
  const [hat, setHat] = useState(hats[0]);

  return (
    <main>
      <Section id="Gallery">
        <h2>Gallery</h2>
        <Accordion>
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
