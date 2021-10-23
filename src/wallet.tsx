import { WalletAdapterNetwork, WalletError } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import React, { FC, useCallback, useMemo } from "react";
import { Image } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import App from "./app/app";
import Notification from "./components/Notification/Notification";

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const Wallet: FC = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets imports all the adapters but supports tree shaking --
  // Only the wallets you want to support will be compiled into your application
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSlopeWallet(),
      getSolflareWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    [network]
  );

  const onError = useCallback(
    (error: WalletError) =>
      toast.custom(
        <Notification
          message={
            error.message ? `${error.name}: ${error.message}` : error.name
          }
          variant="error"
        />
      ),
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} onError={onError} autoConnect>
        <WalletModalProvider logo={<Image src="./images/icon1.png" />}>
          <App />
        </WalletModalProvider>
        <Toaster position="bottom-left" reverseOrder={false} />
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default Wallet;
