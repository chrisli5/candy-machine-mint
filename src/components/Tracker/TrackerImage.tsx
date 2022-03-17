import Image from "react-bootstrap/Image";
import boxImage from "../../images/lootbox.png";
import "./TrackerImage.css";

const TrackerImage = (): JSX.Element => (
  <div className="tracker__image d-flex">
    <Image src={boxImage} className="m-auto" fluid />
  </div>
);
export default TrackerImage;
