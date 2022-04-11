import Timeline from "@mui/lab/Timeline";
import Col from "react-bootstrap/Col";
import Title from "../Text/Title";
import Card from "../Card/Card";
import RoadmapItem from "./RoadmapItem";
import Paragraph from "../Text/Paragraph";

interface RoadmapProps {
  percentSold: number;
}

const Roadmap = (props: RoadmapProps): JSX.Element => {
  return (
    <Card id="roadmap">
      <Col xs={12}>
        <Title className="mb-3">Roadmap Goals</Title>
        <Paragraph>
          Heres a roadmap of our planned features as we hit certain checkpoints.
          These goals are tentative and we're open to feedback from the
          community. You'll also be able to track the progress of the project if
          you have a connected wallet.
        </Paragraph>
      </Col>
      <Timeline position="alternate">
        <RoadmapItem
          percent="0"
          title="The Journey Begins"
          success={props.percentSold > 0}
        ></RoadmapItem>
        <RoadmapItem
          percent="20"
          title="Kyubits Raffle"
          success={props.percentSold >= 20}
        >
          5 Kyubit NFTs from the collection will be raffled off in our community
          discord.
        </RoadmapItem>
        <RoadmapItem
          percent="40"
          title="Kyubits Raffle II"
          success={props.percentSold >= 40}
        >
          10 Kyubit NFTs from the collection will be raffled off in our
          community discord.
        </RoadmapItem>
        <RoadmapItem
          percent="60"
          title="Special Airdrop for Collectors"
          success={props.percentSold >= 60}
        >
          Existing holders that have collected a fox from each city (New York,
          Paris, Tokyo, and London) will be airdropped a special print of Kyubit
          NFT. The date will be announced ahead of time.
        </RoadmapItem>
        <RoadmapItem
          percent="80"
          title="Breeding Mechanism"
          success={props.percentSold >= 80}
        >
          Foxes will be allowed to breed to generate a new generation of Kyubit
          NFTs, more details to come if this goal is reached.
        </RoadmapItem>
      </Timeline>
    </Card>
  );
};
export default Roadmap;
