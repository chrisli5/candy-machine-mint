import React, { useState } from "react";
import * as anchor from "@project-serum/anchor";
import CandyButton from "../components/CandyButton";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Specs from "../components/Specs";
import Line from "../components/Line";
import Team from "../components/Team";
import Features from "../components/Features";

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

  return (
    <main>
      <Hero />
      <Intro />
      <CandyButton
        setStartDate={setStartDate}
        candyMachineId={props.candyMachineId}
        config={props.config}
        connection={props.connection}
        startDate={startDate}
        treasury={props.treasury}
        txTimeout={props.txTimeout}
      />
      <Line />
      <Specs />
      <Line />
      <Team />
      <Line />
      <Features />
      <Line />
    </main>
  );
};

export default Home;
