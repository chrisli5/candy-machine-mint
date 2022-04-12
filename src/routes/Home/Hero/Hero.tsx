import Image from "react-bootstrap/Image";
import Section from "../../../components/Section/Section";
import imageHero from "../../../images/hero.png";
import "./Hero.css";

const Hero = (): JSX.Element => (
  <Section id="hero">
    <Image src={imageHero} fluid />
  </Section>
);

export default Hero;
