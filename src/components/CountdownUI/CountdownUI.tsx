import "./CountdownUI.css";

interface CountdownUIProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownUI = (props: CountdownUIProps): JSX.Element => (
  <ul className="countdownUI">
    <li className="countdownUI__li">
      <span className="countdownUI__value">{props.days}</span>
      <span className="countdownUI__label">days</span>
    </li>
    <li className="countdownUI__li">
      <span className="countdownUI__value">{props.hours}</span>
      <span className="countdownUI__label">hours</span>
    </li>
    <li className="countdownUI__li">
      <span className="countdownUI__value">{props.minutes}</span>
      <span className="countdownUI__label">minutes</span>
    </li>
    <li className="countdownUI__li">
      <span className="countdownUI__value">{props.seconds}</span>
      <span className="countdownUI__label">seconds</span>
    </li>
  </ul>
);

export default CountdownUI;
