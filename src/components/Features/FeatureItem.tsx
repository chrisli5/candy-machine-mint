import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

interface FeatureItemProps {
  src: string;
  text: string;
}

const FeatureItem = (props: FeatureItemProps): JSX.Element => (
  <Col>
    <div className="d-flex" style={{ height: "175px" }}>
      <Image src={props.src} className="m-auto" style={{ width: "100px" }} />
    </div>
    <p className="text-center m-0">{props.text}</p>
  </Col>
);
export default FeatureItem;
