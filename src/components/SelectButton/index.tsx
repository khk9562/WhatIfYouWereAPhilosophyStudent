import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StyledSelectButton from "./style";
import { StringChildren } from "../../types/types";
function SelectButton({ children }: StringChildren) {
  return <StyledSelectButton>{children}</StyledSelectButton>;
}

export default SelectButton;
