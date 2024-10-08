import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const MultipleSelect = ({ select, setSelect, reset }) => {
  return (
    <div
      style={{
        width: 200,
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{`Filtrar por pais`}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select}
          label="Filtrar por pais"
          onChange={(e) => {
            setSelect(e.target.value);
            reset();
          }}
        >
          <MenuItem value={`Todos`}>Todos</MenuItem>
          <MenuItem value={`VEN`}>Venezuela</MenuItem>
          <MenuItem value={`COL`}>Colombia</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleSelect;
