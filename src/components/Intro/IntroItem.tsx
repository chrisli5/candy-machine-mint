import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
interface IntroItemProps {
  src: string;
}

const IntroItem = (props: IntroItemProps): JSX.Element => (
  <Col xs={6} className="px-1">
    <Image src={props.src} fluid style={{ borderRadius: "8px" }} />
  </Col>
);

export default IntroItem;
