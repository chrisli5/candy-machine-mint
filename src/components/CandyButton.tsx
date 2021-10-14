import {
  awaitTransactionSignatureConfirmation,
  CandyMachine,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "../candy-machine";
import toast from "react-hot-toast";
import Countdown from "react-countdown";
import * as anchor from "@project-serum/anchor";
import React, { useEffect, useState, useCallback } from "react";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "./Card";
import CandyStat from "./CandyStat";
import Notification from "./Notification/Notification";

export interface CandyButtonProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const CandyButton = (props: CandyButtonProps): JSX.Element => {
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT
  const [itemsAvailable, setItemsAvailable] = useState(0);
  const [itemsRedeemed, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

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
      props.setStartDate(goLiveDate);
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

  return (
    <Card>
      <Container fluid className="d-flex justify-content-center">
        {wallet && (
          <div
            onClick={() =>
              onNotify({
                message: "test",
                variant: "success",
              })
            }
          >
            Test
          </div>
        )}
      </Container>
    </Card>
  );
};

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <p>
      {hours} hours, {minutes} minutes, {seconds} seconds
    </p>
  );
};

export default CandyButton;
