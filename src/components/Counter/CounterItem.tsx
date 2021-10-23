import "./Counter.css";

interface CounterProps {
  children?: number | string;
}

const CounterTime = (props: CounterProps): JSX.Element => (
  <div className="counter__time">{props.children}</div>
);

const CounterColon = (props: CounterProps): JSX.Element => (
  <div className="counter__colon">{props.children}</div>
);

const CounterLabel = (props: CounterProps): JSX.Element => (
  <div className="counter__label">{props.children}</div>
);

export { CounterTime, CounterColon, CounterLabel };
