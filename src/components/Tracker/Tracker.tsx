import "./Tracker.css";

interface TrackerProps {
  itemsRedeemed: number;
  itemsAvailable: number;
  itemsRemaining: number;
  children?: JSX.Element;
}

const Tracker = (props: TrackerProps): JSX.Element => (
  <div className="tracker">
    <h2 className="tracker__title">Fox Adoption Center</h2>
    <div className="tracker__row">
      <div className="tracker__item">
        <div className="tracker__value">{props.itemsAvailable}</div>
        <div className="tracker__label">Collection</div>
      </div>
      <div className="tracker__item">
        <div className="tracker__value">{props.itemsRedeemed}</div>
        <div className="tracker__label">Sold</div>
      </div>
      <div className="tracker__item">
        <div className="tracker__value">{props.itemsRemaining}</div>
        <div className="tracker__label">Remaining</div>
      </div>
    </div>
    <div className="tracker__button">{props.children}</div>
  </div>
);
export default Tracker;
