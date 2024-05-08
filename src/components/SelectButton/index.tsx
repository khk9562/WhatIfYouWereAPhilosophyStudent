import React, { useState, useEffect } from "react";
import { Link, useFetcher } from "react-router-dom";
import StyledSelectButton from "./style";
import { SelectButtonType } from "../../types/types";
function SelectButton({
  children,
  onClick,
  pageNum,
  result,
  selections,
}: SelectButtonType) {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const selectedResult = selections.find(
      (selection) => selection.page === pageNum
    );

    if (selectedResult && selectedResult.result === result) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [selections, pageNum, result]);

  return (
    <StyledSelectButton className={isActive ? "active" : ""} onClick={onClick}>
      {children}
    </StyledSelectButton>
  );
}

export default SelectButton;
