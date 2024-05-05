import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StyledSelectButton from "./style";
import { SelectButtonType } from "../../types/types";
function SelectButton({ children, onClick }: SelectButtonType) {
  const [isActive, setIsActive] = useState<boolean>(false);
  // focus 이벤트 핸들러
  const handleFocus = () => {
    setIsActive(true);
  };

  // blur 이벤트 핸들러
  const handleBlur = () => {
    setIsActive(false);
  };

  // 조건부 클래스 이름을 설정합니다.
  const buttonClassName = isActive ? "active" : "";

  return (
    <StyledSelectButton
      className={buttonClassName}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={onClick}
    >
      {children}
    </StyledSelectButton>
  );
}

export default SelectButton;
