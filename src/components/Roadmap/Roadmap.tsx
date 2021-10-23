import Timeline from "@mui/lab/Timeline";
import Col from "react-bootstrap/Col";
import Title from "../Text/Title";
import Card from "../Card";
import RoadmapItem from "./RoadmapItem";
import Paragraph from "../Text/Paragraph";

interface RoadmapProps {
  percentSold: number;
}

const Roadmap = (props: RoadmapProps): JSX.Element => {
  return (
    <Card id="roadmap">
      <Col xs={12}>
        <Title>Roadmap Goals</Title>
        <Paragraph>
          Heres a roadmap of our planned features as we hit certain checkpoints.
          These goals are tentative and we're open to feedback from the
          community. You'll also be able to track the progress of the project if
          you have a connected wallet.
        </Paragraph>
      </Col>
      <Timeline position="alternate">
        <RoadmapItem percent="0" success={props.percentSold > 0}>
          The team hopes we get past this.
        </RoadmapItem>
        <RoadmapItem percent="20" success={props.percentSold >= 20}>
          5 Kyubit NFTs from the collection will be raffled off in our community
          discord.
        </RoadmapItem>
        <RoadmapItem percent="40" success={props.percentSold >= 40}>
          10% of royalties made from secondary marketplace sales will be given
          to current holders.
        </RoadmapItem>
        <RoadmapItem percent="60" success={props.percentSold >= 60}>
          Existing holders that have collected a fox from each city (New York,
          Paris, Tokyo, and London) will be airdropped a special print of Kyubit
          NFT.
        </RoadmapItem>
        <RoadmapItem percent="80" success={props.percentSold >= 80}>
          Foxes will be allowed to breed to generate a new generation of Kyubit
          NFTs, more details to come if this goal is reached.
        </RoadmapItem>
        <RoadmapItem percent="100" success={props.percentSold >= 100}>
          After all Kyubis have been minted, our team will request for the
          collection to be listed on secondary marketplaces. In addition, 100%
          of royalties made from secondary marketplace sales will be given to
          current holders.
        </RoadmapItem>
      </Timeline>
    </Card>
  );
};
export default Roadmap;
