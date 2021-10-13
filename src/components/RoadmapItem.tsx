import React from "react";
import {
  TimelineSeparator,
  TimelineConnector,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";

const RoadmapItem = ({ label, end = false, children }) => (
  <TimelineItem>
    <TimelineOppositeContent style={{ flex: 0.3 }}>
      <Typography>{label}</Typography>
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot />
      {!end && <TimelineConnector />}
    </TimelineSeparator>
    <TimelineContent>
      <Typography>{children}</Typography>
    </TimelineContent>
  </TimelineItem>
);

export default RoadmapItem;
