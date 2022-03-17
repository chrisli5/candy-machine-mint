import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
interface ImageGridProps {
  src: string;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  className?: string;
}

const ImageGrid = (props: ImageGridProps): JSX.Element => (
  <Col
    xs={props.xs}
    sm={props.sm}
    md={props.md}
    lg={props.lg}
    className={props.className}
  >
    <Image src={props.src} style={{ borderRadius: "0.25rem" }} fluid />
  </Col>
);

export default ImageGrid;
