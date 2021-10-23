import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";

interface RoadmapItemProps {
  title?: string;
  percent: string;
  children: string;
  success: boolean;
}

const RoadmapItem = (props: RoadmapItemProps): JSX.Element => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color={"text.secondary"}>
        <Typography variant="body1">{props.percent}%</Typography>
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
        <Typography variant="h6" component="span">
          {props.title}
        </Typography>
        <Typography variant="body2">{props.children}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default RoadmapItem;
