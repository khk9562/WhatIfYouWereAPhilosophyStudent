import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StyledPageNumBox from "./style";

function PageNum() {
  const [pageNum, setPageNum] = useState<number>(1);

  const handlePageNext = () => {
    setPageNum(pageNum + 1);
  };
  const handlePagePrev = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  useEffect(() => {
    let page = localStorage.getItem("page");
    setPageNum(Number(page));
  }, []);

  useEffect(() => {
    localStorage.setItem("page", String(pageNum));
  }, [pageNum]);

  return (
    <StyledPageNumBox>
      <button type="button">
        <Link to={"/"}>메인으로</Link>
      </button>
      <button type="button" onClick={handlePagePrev}>
        이전
      </button>
      <div>
        <span>{pageNum}</span>
        <span>/</span>
        <span>전체페이지 수</span>
      </div>
      <button type="button" onClick={handlePageNext}>
        다음
      </button>
    </StyledPageNumBox>
  );
}

export default PageNum;
