import React from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import imageHead from "../../images/head.png";
import "./MintButton.css";

interface MintButtonProps {
  isActive: boolean;
  isSoldOut: boolean;
  isMinting: boolean;
  onMint: () => void;
}

const MintButton = (props: MintButtonProps): JSX.Element => (
  <Button
    id="mint-button"
    onClick={props.onMint}
    disabled={props.isSoldOut || props.isMinting || !props.isActive}
  >
    <div className="mint-button__inner">
      {props.isSoldOut ? (
        <div className="mint-button__text">
          <span>Sold Out</span>
        </div>
      ) : props.isActive ? (
        props.isMinting ? (
          <React.Fragment>
            <div className="mint-button__icon">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="mint-button__spinner"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
            <div className="mint-button__text">
              <span>Processing...</span>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="mint-button__icon">
              <Image src={imageHead} className="mint-button__image" fluid />
            </div>
            <div className="mint-button__text">
              <span>Mint</span>
            </div>
          </React.Fragment>
        )
      ) : (
        <div className="mint-button__text">
          <span>Has Not Started</span>
        </div>
      )}
    </div>
  </Button>
);

export default MintButton;
