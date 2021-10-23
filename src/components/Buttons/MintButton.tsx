import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "./Buttons.css";

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
    {props.isSoldOut ? (
      "Sold Out"
    ) : props.isActive ? (
      props.isMinting ? (
        <div>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            className="me-2"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          Processing...
        </div>
      ) : (
        "Mint"
      )
    ) : (
      "Has Not Started"
    )}
  </Button>
);

export default MintButton;
