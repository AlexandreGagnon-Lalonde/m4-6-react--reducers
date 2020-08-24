import React from "react";
import styled from "styled-components";
import { BookingContext } from "./BookingContext";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { decodeSeatId } from "../helpers";

const PurchaseModal = () => {
  const {
    state: { status, error, selectedSeatId, price },
    actions: { beginBookingProcess },
  } = React.useContext(BookingContext);

  const [creditCard, setCreditCard] = React.useState("");
  const [expiration, setExpiration] = React.useState("");

  const { rowName, seatNum } = decodeSeatId(selectedSeatId);

  const handleClickOpen = () => {};

  const handleClose = () => {};

  return (
    <>
      <Dialog
        open={selectedSeatId !== null}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Purchase ticket</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You're purchasing 1 ticket for the price of {price}
          </DialogContentText>
          <TicketTable>
            <div>
              <p>Row</p>
              <p>Seat</p>
              <p>Price</p>
            </div>
            <div>
              <p>{rowName}</p>
              <p>{seatNum}</p>
              <p>{price}</p>
            </div>
          </TicketTable>
          <ModalInput>
            <h3>Enter payment details</h3>
            <CreditCardContainer>
              <TextField
                autoFocus
                margin="dense"
                id="credit-card-number"
                label="Credit Card Number"
                type="text"
                fullWidth
                onChange={(ev) => setCreditCard(ev.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="pin"
                label="Pin"
                type="text"
                fullWidth
                onChange={(ev) => setExpiration(ev.target.value)}
              />
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Subscribe
                </Button>
              </DialogActions>
            </CreditCardContainer>
          </ModalInput>
        </DialogContent>
      </Dialog>
    </>
  );
};

const TicketTable = styled.div``;
const ModalInput = styled.div``;
const CreditCardContainer = styled.div``;

export default PurchaseModal;
