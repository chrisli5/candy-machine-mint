import { CounterTime, CounterColon, CounterLabel } from "./CounterItem";

import "./Counter.css";

interface CounterProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Counter = (props: CounterProps): JSX.Element => (
  <div className="counter">
    <h2 className="counter__title">Adoptions Start In</h2>
    <div className="counter__container">
      <CounterTime>{props.days}</CounterTime>
      <CounterColon>:</CounterColon>
      <CounterTime>{props.hours}</CounterTime>
      <CounterColon>:</CounterColon>
      <CounterTime>{props.minutes}</CounterTime>
      <CounterColon>:</CounterColon>
      <CounterTime>{props.seconds}</CounterTime>
    </div>
    <div className="counter__container">
      <CounterLabel>days</CounterLabel>
      <CounterColon></CounterColon>
      <CounterLabel>hours</CounterLabel>
      <CounterColon></CounterColon>
      <CounterLabel>minutes</CounterLabel>
      <CounterColon></CounterColon>
      <CounterLabel>seconds</CounterLabel>
    </div>
  </div>
);

export default Counter;
