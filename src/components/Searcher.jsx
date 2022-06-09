import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DataContext from "../context/DataContext";
import { useNavigate, useParams } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function Searcher() {
  let context = useContext(DataContext);

  let navigate = useNavigate();

  const sendId = () => {
    navigate(`/${context.input}`);
  };

  const resetId = () => {
    context.setInput("");
    context.setCurrentId("");
    navigate(`/`);
  };

  const params = useParams();

  const handleNumericInput = (e) => {
    let input = e.target.value;
    console.log(input);

    if (input === "") {
      context.setInput(input);
    }

    let number = parseInt(input);
    console.log(number);

    if (Number.isInteger(number)) {
      context.setInput(number);
    }
  };

  useEffect(() => {
    context.setCurrentId(params.id);
  }, [params.id]);

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        display: "flex",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        data-testid="input-item-test"
        id="input-with-icon-textfield"
        label="Search by ID"
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{
                "&:hover": {
                  transform: "scale(1.2)",
                  cursor: "pointer",
                },
              }}
              aria-label="clear search input"
            >
              {params.id != null ? (
                <HighlightOffIcon onClick={() => resetId()} />
              ) : null}
            </InputAdornment>
          ),
          inputMode: "numeric",
          pattern: "[0-9]*",
        }}
        style={{
          width: 300,
        }}
        variant="outlined"
        aria-describedby="Search color by ID"
        value= {context.input }
        onChange={handleNumericInput}
        onSubmit={() => sendId()}
      />

      <Button
        variant="contained"
        sx={{
          bgcolor: "#292929",
          "&:hover": {
            backgroundColor: "#363636",
          },
        }}
        style={{
          width: 210,
          height: 55,
        }}
        onClick={() => sendId()}
        aria-label="search button"
      >
        search
      </Button>
    </Box>
  );
}

export default Searcher;
