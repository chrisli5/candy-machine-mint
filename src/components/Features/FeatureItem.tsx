import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./Features.css";

interface FeatureItemProps {
  src: string;
  text: string;
}

const FeatureItem = (props: FeatureItemProps): JSX.Element => (
  <Col>
    <div className="d-flex" style={{ height: "175px" }}>
      <Image
        src={props.src}
        className="m-auto"
        style={{ width: "100px", borderRadius: "8px" }}
      />
    </div>
    <p className="feature__text text-center">{props.text}</p>
  </Col>
);
export default FeatureItem;
