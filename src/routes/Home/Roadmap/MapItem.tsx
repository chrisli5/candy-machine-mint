import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import "./MapItem.css";

interface MapItemProps {
  title: string;
  percent: number;
  children: string;
}

const MapItem = (props: MapItemProps): JSX.Element => (
  <TimelineItem>
    <TimelineOppositeContent>
      <h5 className="map-item__percent">{props.percent}%</h5>
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot variant="outlined" className="map-item__dot" />
      <TimelineConnector className="map-item__connector" />
    </TimelineSeparator>
    <TimelineContent>
      <h5 className="map-item__title">{props.title}</h5>
      <p className="map-item__body">{props.children}</p>
    </TimelineContent>
  </TimelineItem>
);

export default MapItem;
