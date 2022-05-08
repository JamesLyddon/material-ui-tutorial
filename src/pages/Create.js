import React from "react";
import { Typography, Button, Container } from "@mui/material";
import { AcUnitIcon, DeleteForeverIcon } from "@mui/icons-material";

export default function Create() {
  return (
    <div>
      <Container>
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          color="textSecondary"
        >
          Create a New Note
        </Typography>
        <Button
          onClick={() => console.log("clicked!")}
          type="submit"
          color="secondary"
          variant="contained"
          startIcon={<DeleteForeverIcon color="disabled" fontSize="large" />}
        ></Button>
        <br />
      </Container>
    </div>
  );
}
