import "./TokenStats.css";

interface TokenStatsProps {
  itemsRedeemed: number;
  itemsAvailable: number;
  itemsRemaining: number;
}

const TokenStats = (props: TokenStatsProps): JSX.Element => (
  <div className="token-stats">
    <ul className="token-stats__ul">
      <li className="token-stats__value">{props.itemsAvailable}</li>
      <li className="token-stats__value">{props.itemsRedeemed}</li>
      <li className="token-stats__value">{props.itemsRemaining}</li>
    </ul>
    <ul className="token-stats__ul">
      <li className="token-stats__label">Available</li>
      <li className="token-stats__label">Adopted</li>
      <li className="token-stats__label">Remaining</li>
    </ul>
  </div>
);

export default TokenStats;
