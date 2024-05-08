import React, { useState, useEffect, SetStateAction } from "react";

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
