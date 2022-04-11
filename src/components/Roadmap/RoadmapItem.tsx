import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import "./Roadmap.css";

interface RoadmapItemProps {
  title?: string;
  percent: string;
  children?: string;
  success: boolean;
}

const RoadmapItem = (props: RoadmapItemProps): JSX.Element => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color={"text.secondary"}>
        <span className="roadmap__percent">{props.percent}%</span>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot
          variant="outlined"
          color={props.success ? "success" : "grey"}
        />
        <TimelineConnector
          sx={{ bgcolor: props.success ? "success.main" : "grey" }}
        />
      </TimelineSeparator>
      <TimelineContent>
        <p className="roadmap__title">{props.title}</p>
        <p className="roadmap__text">{props.children}</p>
      </TimelineContent>
    </TimelineItem>
  );
};

export default RoadmapItem;
