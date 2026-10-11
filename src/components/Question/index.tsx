import React from "react";
import { StringChildren } from "../../types/types";
import StyledQuestion from "./style";
function Question({ children }: StringChildren) {
  const isLong = children.length > 60;
  return (
    <StyledQuestion className={isLong ? "blur-in long" : "blur-in"}>
      {children}
    </StyledQuestion>
  );
}

export default Question;
