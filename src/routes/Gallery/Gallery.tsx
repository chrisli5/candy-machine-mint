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
import Image from "react-bootstrap/Image";
import "./Gallery.css";

const Gallery = (): JSX.Element => {
  const [bg, setBg] = useState(initOptions[0]);
  const [base, setBase] = useState(initOptions[1]);
  const [clothing, setClothing] = useState(initOptions[2]);
  const [item, setItem] = useState(initOptions[3]);
  const [hat, setHat] = useState(initOptions[4]);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const onReset = () => {
    setBg(initOptions[0]);
    setBase(initOptions[1]);
    setClothing(initOptions[2]);
    setItem(initOptions[3]);
    setHat(initOptions[4]);
  };

  const onRandom = () => {
    setBg(bgs[getRandomInt(bgs.length)]);
    setBase(bases[getRandomInt(bgs.length)]);
    setClothing(clothings[getRandomInt(clothings.length)]);
    setItem(items[getRandomInt(items.length)]);
    setHat(hats[getRandomInt(hats.length)]);
  };

  return (
    <main>
      <Section id="gallery">
        <div className="gallery__container">
          <h2 className="gallery__title">Gallery</h2>
          <div className="gallery__content">
            <div className="gallery__left">
              <Accordion className="accordion-flush gallery__accordion">
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
              <div className="gallery__button-container">
                <div className="gallery__button" onClick={onRandom}>
                  <span>Randomise!</span>
                </div>
                <div className="gallery__button" onClick={onReset}>
                  <span>Reset</span>
                </div>
              </div>
            </div>
            <div className="gallery__image-container">
              <Image src={bg.url} className="gallery__layer" fluid />
              <Image src={base.url} className="gallery__layer" fluid />
              <Image src={clothing.url} className="gallery__layer" fluid />
              <Image src={item.url} className="gallery__layer" fluid />
              <Image src={hat.url} className="gallery__layer" fluid />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Gallery;
