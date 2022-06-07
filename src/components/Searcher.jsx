import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DataContext from "../context/DataContext";
import { useNavigate, useParams } from "react-router-dom";

function Searcher() {
  let context = useContext(DataContext);

  let navigate = useNavigate();
  const sendId = () => {
    navigate(`/${context.input}`);
  };

  const params = useParams();


  useEffect(() => {
    context.setCurrentId(params.id);
  }, [params.id]);

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        id="outlined-basic"
        label="Search by ID"
        variant="outlined"
        value={context.input}
        onChange={context.handleInput}
        onSubmit={() => sendId()}
      />
      <Button
        variant="contained"
        sx={{
          margin: "none",
          height: "50px",
        }}
        onClick={() => sendId()}
      >
        search
      </Button>
    </Box>
  );
}

export default Searcher;
