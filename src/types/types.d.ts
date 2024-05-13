import React, { useState, useEffect, SetStateAction } from "react";

declare global {
  interface Window {
    Kakao: any;
  }
}

export interface ResultType {
  name: string;
  description: string;
  character: string;
}

export interface StringChildren {
  children: string;
}
export interface SelectButtonType {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
  pageNum: number;
  result: string;
  selections: any[];
}

export interface HandlePageType {
  pageNum: number;
  setPageNum: React.Dispatch<SetStateAction<number>>;
}

export interface KaKaoShareBtnType {
  kind: string;
  result: any;
}
