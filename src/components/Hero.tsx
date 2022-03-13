import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import imageFox from "../images/banner.png";
import "./Hero.css";
import Card from "./Card";

const Hero = (): JSX.Element => (
  <div className="hero">
    <Image src={imageFox} fluid />
  </div>
);

export default Hero;
