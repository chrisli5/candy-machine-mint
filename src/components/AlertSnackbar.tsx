import React from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

export interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

interface AlertSnackBarProps {
  alertState: AlertState;
  setAlertState: React.Dispatch<React.SetStateAction<AlertState>>;
}

const AlertSnackbar = (props: AlertSnackBarProps) => {
  return (
    <Snackbar
      open={props.alertState.open}
      autoHideDuration={6000}
      onClose={() => props.setAlertState({ ...props.alertState, open: false })}
    >
      <Alert
        onClose={() =>
          props.setAlertState({ ...props.alertState, open: false })
        }
        severity={props.alertState.severity}
      >
        {props.alertState.message}
      </Alert>
    </Snackbar>
  );
};

export default AlertSnackbar;
