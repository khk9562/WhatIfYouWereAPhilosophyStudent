import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { StringChildren } from "../../types/types";
import StyledQuestion from "./style";
function Question({ children }: StringChildren) {
  return <StyledQuestion>{children}</StyledQuestion>;
}

export default Question;
