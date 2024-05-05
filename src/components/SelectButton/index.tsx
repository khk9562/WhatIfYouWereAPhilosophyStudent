import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StyledSelectButton from "./style";
import { SelectButtonType } from "../../types/types";
function SelectButton({ children, onClick }: SelectButtonType) {
  return <StyledSelectButton onClick={onClick}>{children}</StyledSelectButton>;
}

export default SelectButton;
