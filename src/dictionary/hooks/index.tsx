import React from "react";
import { useContextReturn } from "../../context";
import { TDictionary } from "../types";

export const useDictionary = (): TDictionary => {
  const { dictionary } = useContextReturn();

  return dictionary;
};
