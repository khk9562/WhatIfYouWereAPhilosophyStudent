import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    localStorage.setItem("page", String(pageNum));
  }, [pageNum]);

  return (
    <nav>
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
    </nav>
  );
}

export default PageNum;
