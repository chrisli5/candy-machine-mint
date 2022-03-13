import background1 from "../images/background/Pink.png";
import base1 from "../images/base/OrangeFox.png";
import base2 from "../images/base/BlueFox.png";
import hat1 from "../images/hat/CrabHat.png";
import hat2 from "../images/hat/PigHat.png";
import hat3 from "../images/hat/NinjaMask.png";
import clothing1 from "../images/clothing/DivingSuit.png";
import item1 from "../images/item/Camera.png";

const backgrounds = [
  {
    name: "Pink",
    value: background1,
  },
];

const bases = [
  { name: "Orange", value: base1 },
  { name: "Blue", value: base2 },
];

const hats = [
  {
    name: "Crab",
    value: hat1,
  },
  {
    name: "Pig",
    value: hat2,
  },
  {
    name: "Ninja Mask",
    value: hat3,
  },
];

const clothing = [
  {
    name: "Diving Suit",
    value: clothing1,
  },
];

const items = [{ name: "Camera", value: item1 }];

export default {
  backgrounds,
  bases,
  hats,
  clothing,
  items,
};
