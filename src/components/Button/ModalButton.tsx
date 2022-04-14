import { WalletModalButton } from "@solana/wallet-adapter-react-ui";
import { BiWallet } from "react-icons/bi";
import "./ModalButton.css";

const ModalButton = (): JSX.Element => (
  <WalletModalButton className="modal-button">
    <span className="modal-button__icon">
      <BiWallet />
    </span>
    <span className="modal-button__text">Connect Wallet</span>
  </WalletModalButton>
);

export default ModalButton;
