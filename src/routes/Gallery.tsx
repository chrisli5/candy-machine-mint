import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import AccordionSelect from "../components/Select/Select";
import skin1 from "../images/base/OrangeFox.png";
import skin2 from "../images/base/BlueFox.png";
import hat1 from "../images/hat/CrabHat.png";
import shirt1 from "../images/clothing/DivingSuit.png";
import "./Gallery.css";

const initialSkin = { name: "Skin", value: skin1 };
const skins = [
  { name: "Orange", value: skin1 },
  { name: "Blue", value: skin2 },
];

const initialHat = { name: "Hat", value: hat1 };
const hats = [{ name: "Crab", value: hat1 }];

const Gallery = (): JSX.Element => {
  const [skin, setSkin] = useState({
    name: "Skin",
    value: skin1,
  });
  const [hat, setHat] = useState(hats[0]);
  const [shirt, setShirt] = useState(shirt1);

  const handleSkin = (base) => {
    setSkin(base);
  };

  const handleHat = (hat) => {
    setHat(hat);
  };

  const resetAll = () => {
    setHat(initialHat);
    setSkin(initialSkin);
  };

  return (
    <main className="mt-5 pt-4 pt-md-5 px-2">
      <Accordion
        style={{
          border: "1px solid var(--paragraph)",
          borderRadius: "8px",
          padding: "8px",
          width: "350px",
          marginBottom: "12px",
        }}
      >
        <AccordionSelect
          ariaLabel="Skins"
          initialOption={skin}
          onChange={handleSkin}
          optionList={skins}
          eventKey="0"
        />
        <AccordionSelect
          ariaLabel="Hats"
          initialOption={hat}
          onChange={handleHat}
          optionList={hats}
          eventKey="1"
        />
      </Accordion>
      <button onClick={resetAll}>Reset Filters</button>

      <div>
        <Image src={skin.value} className="imageLayer" />
        <Image src={shirt} className="imageLayer" />
        <Image src={hat.value} className="imageLayer" />
      </div>
      <div style={{ height: "1000px" }} />
    </main>
  );
};

export default Gallery;
