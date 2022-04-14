import "./TokenStats.css";

interface TokenStatsProps {
  itemsRedeemed: number;
  itemsAvailable: number;
  itemsRemaining: number;
}

const TokenStats = (props: TokenStatsProps): JSX.Element => (
  <div>
    <p>{props.itemsRedeemed}</p>
    <p>{props.itemsAvailable}</p>
    <p>{props.itemsRemaining}</p>
  </div>
);

export default TokenStats;
