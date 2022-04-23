import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Timeline from "@mui/lab/Timeline";
import Section from "../../../components/Section/Section";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import { roadmap } from "../content.json";
import MapItem from "./MapItem";

interface RoadmapProps {
  percentSold: number;
}

const Roadmap = (props: RoadmapProps): JSX.Element => (
  <Section id="roadmap">
    <Row>
      <Col xs={12}>
        <Title>{roadmap.title}</Title>
        <Body>{roadmap.body[0]}</Body>
      </Col>
      <Col xs={12}>
        <Timeline position="alternate">
          {roadmap.timeline.map((item) => (
            <React.Fragment key={item.title}>
              <MapItem
                percent={item.percent}
                title={item.title}
                active={props.percentSold >= item.percent}
              >
                {item.description}
              </MapItem>
            </React.Fragment>
          ))}
        </Timeline>
      </Col>
    </Row>
  </Section>
);

export default Roadmap;
