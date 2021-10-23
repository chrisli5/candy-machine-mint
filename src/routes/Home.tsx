import { useState, useEffect, useCallback } from "react";
import * as anchor from "@project-serum/anchor";
import {
  awaitTransactionSignatureConfirmation,
  CandyMachine,
  getCandyMachineState,
  mintOneToken,
} from "../candy-machine";
import toast from "react-hot-toast";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

import Notification from "../components/Notification/Notification";
import Purchase from "../components/Purchase";
import Hero from "../components/Hero";
import Intro from "../components/Intro/Intro";
import Specs from "../components/Specs";
import Line from "../components/Line";
import Team from "../components/Team";
import Features from "../components/Features/Features";
import Roadmap from "../components/Roadmap/Roadmap";
import Footer from "../components/Footer";
import Countdown from "react-countdown";
import Counter from "../components/Counter/Counter";
import Tracker from "../components/Tracker/Tracker";
import { WalletButton } from "../components/Buttons/Buttons";
import MintButton from "../components/Buttons/MintButton";
import imageFox from "../images/orangefox1.png";

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Home = (props: HomeProps): JSX.Element => {
  const [startDate, setStartDate] = useState(new Date(props.startDate));
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT
  const [itemsAvailable, setItemsAvailable] = useState(0);
  const [itemsRedeemed, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const wallet = useAnchorWallet();

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const {
        candyMachine,
        goLiveDate,
        itemsAvailable,
        itemsRemaining,
        itemsRedeemed,
      } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      );

      setItemsAvailable(itemsAvailable);
      setItemsRemaining(itemsRemaining);
      setItemsRedeemed(itemsRedeemed);

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  };

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          onNotify({
            message: "Minting successful!",
            variant: "success",
          });
        } else {
          onNotify({
            message: "Minting failed! Please try again!",
            variant: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      onNotify({
        message,
        variant: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
  ]);

  const onNotify = useCallback(
    ({ message, variant }) =>
      toast.custom(<Notification message={message} variant={variant} />),
    []
  );

  const percentSold = wallet
    ? itemsAvailable === 0
      ? 0
      : (itemsRedeemed / itemsAvailable) * 100
    : 0;

  return (
    <main>
      <Hero />
      <Intro />
      <Line />
      <Purchase>
        <Col xs={12} lg={4} className="offset-lg-1 d-flex-column">
          <div className="d-flex mb-3">
            <Image
              src={imageFox}
              className="m-auto"
              style={{ width: "200px" }}
            />
          </div>
          {isActive ? (
            <Countdown
              date={startDate}
              onMount={({ completed }) => completed && setIsActive(true)}
              onComplete={() => setIsActive(true)}
              renderer={Counter}
            />
          ) : (
            <Tracker
              itemsAvailable={itemsAvailable}
              itemsRedeemed={itemsRedeemed}
              itemsRemaining={itemsRemaining}
            >
              {wallet ? (
                <MintButton
                  isActive={isActive}
                  isSoldOut={isSoldOut}
                  isMinting={isMinting}
                  onMint={onMint}
                />
              ) : (
                <WalletButton />
              )}
            </Tracker>
          )}
        </Col>
      </Purchase>
      <Line />
      <Features />
      <Line />
      <Specs />
      <Line />
      <Roadmap percentSold={percentSold} />
      <Line />
      <Team />
      <Line />
      <Footer />
    </main>
  );
};

export default Home;
