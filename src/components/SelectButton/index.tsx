import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StyledSelectButton from "./style";
import { SelectButtonType } from "../../types/types";
function SelectButton({ children }: SelectButtonType) {
  return <StyledSelectButton>{children}</StyledSelectButton>;
}

export default SelectButton;
