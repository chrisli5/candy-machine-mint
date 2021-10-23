import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
interface IntroItemProps {
  src: string;
}

const IntroItem = (props: IntroItemProps): JSX.Element => (
  <Col xs={4} className="px-1">
    <Image src={props.src} fluid />
  </Col>
);

export default IntroItem;
