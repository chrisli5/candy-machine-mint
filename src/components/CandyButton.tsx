import {
  awaitTransactionSignatureConfirmation,
  CandyMachine,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "../candy-machine";
import { Button, CircularProgress } from "@material-ui/core";
import Countdown from "react-countdown";
import styled from "styled-components";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import * as anchor from "@project-serum/anchor";
import React, { useEffect, useState } from "react";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "../components/Card";
import { AlertState } from "./AlertSnackbar";
import CandyStat from "./CandyStat";

const CounterText = styled.span``; // add your styles here

export interface CandyButtonProps {
  setAlertState: React.Dispatch<React.SetStateAction<AlertState>>;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  alertState: AlertState;
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: Date;
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
  const [startDate, setStartDate] = useState(new Date(props.startDate));

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
          props.setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          props.setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
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

      props.setAlertState({
        open: true,
        message,
        severity: "error",
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

  return (
    <Card>
      <Container
        fluid
        className="py-4 px-2"
        style={{
          backgroundColor: "#bfc500",
          borderRadius: "4px",
        }}
      >
        <Row>
          <Col className="my-auto ">
            <h3
              className="m-0 text-center"
              style={{ fontWeight: 800, fontStyle: "italic", color: "#000" }}
            >
              BUY A DRAGON
            </h3>
          </Col>
          <Col className="m-auto">
            <p className="m-0 text-center" style={{ color: "#000" }}>
              Connect your wallet to get started. Once you've successfully
              connected, click on the mint to purchase.
            </p>
            {wallet && (
              <Row className="py-5">
                <Col className="col-4">
                  <CandyStat label="Collection Size" value={itemsAvailable} />
                </Col>
                <Col className="col-4">
                  <CandyStat label="# of NFTs Redeemed" value={itemsRedeemed} />
                </Col>
                <Col className="col-4">
                  <CandyStat
                    label="# of NFTs remaining"
                    value={itemsRemaining}
                  />
                </Col>
              </Row>
            )}
          </Col>
          <Col className="m-auto">
            <Container fluid className="d-flex justify-content-center">
              {!wallet ? (
                <WalletDialogButton
                  className="p-3"
                  size="large"
                  style={{
                    backgroundColor: "#000",
                    color: "#bfc500",
                    fontWeight: 700,
                  }}
                >
                  Connect Wallet
                </WalletDialogButton>
              ) : (
                <Button
                  disabled={isSoldOut || isMinting || !isActive}
                  onClick={onMint}
                  variant="contained"
                >
                  {isSoldOut ? (
                    "SOLD OUT"
                  ) : isActive ? (
                    isMinting ? (
                      <CircularProgress />
                    ) : (
                      "MINT"
                    )
                  ) : (
                    <Countdown
                      date={startDate}
                      onMount={({ completed }) =>
                        completed && setIsActive(true)
                      }
                      onComplete={() => setIsActive(true)}
                      renderer={renderCounter}
                    />
                  )}
                </Button>
              )}
            </Container>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {hours} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

export default CandyButton;
