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
  page: number;
}

export interface HandlePageType {
  pageNum: number;
  setPageNum: React.Dispatch<SetStateAction<number>>;
}
