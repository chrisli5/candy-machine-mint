import Image from "react-bootstrap/Image";
import heroImage from "../../images/hero.png";
import "./Hero.css";

const Hero = (): JSX.Element => (
  <div className="hero">
    <Image src={heroImage} fluid />
  </div>
);

export default Hero;
