import {
  WalletModalButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "./DefaultWallet.css";

const HeaderButton = (): JSX.Element => <WalletMultiButton />;

const WalletButton = (): JSX.Element => (
  <WalletModalButton style={{ width: "100%" }} />
);

interface ResetButtonProps {
  onClick: () => void;
}

const ResetButton = (props: ResetButtonProps): JSX.Element => (
  <button id="reset-button" onClick={props.onClick}>
    Reset Filters
  </button>
);

export { HeaderButton, WalletButton, ResetButton };
