import {
  WalletModalButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "./DefaultWallet.css";

const HeaderButton = (): JSX.Element => <WalletMultiButton />;

const WalletButton = (): JSX.Element => (
  <WalletModalButton style={{ width: "100%" }} />
);

export { HeaderButton, WalletButton };
