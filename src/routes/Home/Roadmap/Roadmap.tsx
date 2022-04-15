import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Timeline from "@mui/lab/Timeline";
import Section from "../../../components/Section/Section";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import { roadmap } from "../content.json";
import MapItem from "./MapItem";

const Roadmap = (): JSX.Element => (
  <Section id="roadmap">
    <Row>
      <Col xs={12}>
        <Title>{roadmap.title}</Title>
        <Body>{roadmap.body[0]}</Body>
      </Col>
      <Col xs={12}>
        <Timeline position="alternate">
          {roadmap.timeline.map((item) => (
            <MapItem percent={item.percent} title={item.title}>
              {item.description}
            </MapItem>
          ))}
        </Timeline>
      </Col>
    </Row>
  </Section>
);

export default Roadmap;
