import "./CountdownUI.css";

interface CountdownUIProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownUI = (props: CountdownUIProps): JSX.Element => (
  <div className="countdownUI">
    <ul className="countdownUI__ul">
      <li className="countdownUI__li">
        <span className="countdownUI__value">{props.days}</span>
      </li>
      <li className="countdownUI__colon">:</li>
      <li className="countdownUI__li">
        <span className="countdownUI__value">{props.hours}</span>
      </li>
      <li className="countdownUI__colon">:</li>
      <li className="countdownUI__li">
        <span className="countdownUI__value">{props.minutes}</span>
      </li>
      <li className="countdownUI__colon">:</li>
      <li className="countdownUI__li">
        <span className="countdownUI__value">{props.seconds}</span>
      </li>
    </ul>
    <ul className="countdownUI__ul">
      <li className="countdownUI__li">
        <span className="countdownUI__label">days</span>
      </li>
      <li className="countdownUI__spacer" />
      <li className="countdownUI__li">
        <span className="countdownUI__label">hours</span>
      </li>
      <li className="countdownUI__spacer" />
      <li className="countdownUI__li">
        <span className="countdownUI__label">minutes</span>
      </li>
      <li className="countdownUI__spacer" />
      <li className="countdownUI__li">
        <span className="countdownUI__label">seconds</span>
      </li>
    </ul>
  </div>
);

export default CountdownUI;
