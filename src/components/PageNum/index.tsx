import React, { useState, useEffect, SetStateAction } from "react";
import { Link, useNavigate } from "react-router-dom";
import StyledPageNumBox from "./style";
import { SELECT_LIST } from "../../constants/SelectList";
import { HandlePageType } from "../../types/types";

function PageNum({ pageNum, setPageNum }: HandlePageType) {
  const handlePageNext = () => {
    if (pageNum < SELECT_LIST.length) {
      setPageNum(pageNum + 1);
    }
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
      <Link to={"/"}>
        <button
          type="button"
          onClick={() => {
            localStorage.clear();
          }}
        >
          메인으로
        </button>
      </Link>
      <button type="button" onClick={handlePagePrev}>
        이전
      </button>
      <div>
        <span>{pageNum}</span>
        <span>/</span>
        <span>{SELECT_LIST.length}</span>
      </div>
      <button type="button" onClick={handlePageNext}>
        다음
      </button>
    </StyledPageNumBox>
  );
}

export default PageNum;
