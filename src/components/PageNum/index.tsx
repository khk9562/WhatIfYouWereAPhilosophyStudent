import React, { useState, useEffect, SetStateAction } from "react";
import { Link, useNavigate } from "react-router-dom";
import StyledPageNumBox from "./style";
import { SELECT_LIST } from "../../constants/SelectList";
import { HandlePageType } from "../../types/types";
import HomeIcon from "../../assets/icons/home.png";
import LeftIcon from "../../assets/icons/left.png";
import RightIcon from "../../assets/icons/right.png";

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
          style={{ marginTop: "7px", width: "20px", height: "20px" }}
          onClick={() => {
            localStorage.clear();
          }}
        >
          <img src={HomeIcon} width={35} height={35} alt="homeIcon" />
        </button>
      </Link>
      <button type="button" onClick={handlePagePrev}>
        <img src={LeftIcon} width={35} height={35} alt="LeftIcon" />
      </button>
      <div>
        <span>{pageNum}</span>
        <span> / </span>
        <span>{SELECT_LIST.length}</span>
      </div>
      <button type="button" onClick={handlePageNext}>
        <img src={RightIcon} width={35} height={35} alt="RightIcon" />
      </button>
    </StyledPageNumBox>
  );
}

export default PageNum;
