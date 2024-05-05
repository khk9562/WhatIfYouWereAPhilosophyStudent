import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Layout/Container";
import PageNum from "../components/PageNum";
import SelectButton from "../components/SelectButton";
import Question from "../components/Question";
import { SELECT_LIST } from "../constants/SelectList";

function Select() {
  const [pageNum, setPageNum] = useState<number>(1);
  const [quest, setQuest] = useState<string>("");
  const [selets, setSelects] = useState<any>();

  useEffect(() => {
    let page = localStorage.getItem("page");
    setPageNum(Number(page));
  }, []);

  useEffect(() => {
    const currentPageData = SELECT_LIST.find((item) => item.page == pageNum);
    console.log("currentPageData", currentPageData);

    if (currentPageData) {
      setQuest(currentPageData.title);
      setSelects(currentPageData.contents);
    }
  }, [pageNum]);

  return (
    <Container>
      <PageNum pageNum={pageNum} setPageNum={setPageNum} />
      <Question>{quest}</Question>

      <div
        style={{
          width: "95%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "18px",
          margin: "12px",
        }}
      >
        {selets?.map((item: any, index: number) => (
          <SelectButton>{item.text}</SelectButton>
        ))}
      </div>
    </Container>
  );
}

export default Select;
