import { useState } from "react";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { Route, Switch } from "react-router-dom";
import * as anchor from "@project-serum/anchor";
import Header from "../components/Header";

import Home from "../routes/Home";
import Gallery from "../routes/Gallery";
import Provenance from "../routes/Provenance";
import Container from "react-bootstrap/Container";

import CandyButton from "../components/CandyButton";

const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);

const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const App = () => {
  const wallet = useAnchorWallet();
  return (
    <Container className="mx-auto" style={{ maxWidth: "1200px" }}>
      <WalletMultiButton />
      {wallet && <WalletDisconnectButton />}
      <Header />
      <Switch>
        <Route exact path="/">
          <Home
            candyMachineId={candyMachineId}
            config={config}
            connection={connection}
            startDate={startDateSeed}
            treasury={treasury}
            txTimeout={txTimeout}
          />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/provenance">
          <Provenance />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
