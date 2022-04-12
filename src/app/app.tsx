import { Route, Switch } from "react-router-dom";
import * as anchor from "@project-serum/anchor";
import Container from "react-bootstrap/Container";
import Header from "../components/Header/Header";
import Home from "../routes/Home/Home";
import Gallery from "../routes/Gallery";
import "./app.css";

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

const App = (): JSX.Element => {
  return (
    <Container className="app__container">
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
      </Switch>
    </Container>
  );
};

export default App;
