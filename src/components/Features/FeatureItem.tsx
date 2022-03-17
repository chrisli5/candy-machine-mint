import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./Features.css";

interface FeatureItemProps {
  src: string;
  text: string;
}

const FeatureItem = (props: FeatureItemProps): JSX.Element => (
  <Col xs={6} md={2}>
    <div className="feature-item__div d-flex">
      <Image src={props.src} className="feature-item__image m-auto" />
    </div>
    <p className="feature-item__text text-center">{props.text}</p>
  </Col>
);
export default FeatureItem;
