import React from "react";
import { twMerge } from "tailwind-merge";
import { useContextReturn } from "../context";

type TSelectorProps = {
  isActive: boolean;
  optionValue: string;
};

const Selector = ({ isActive, optionValue }: TSelectorProps) => {
  const { setLanguage } = useContextReturn();

  return (
    <button
      className={twMerge("tab tab-bordered", isActive && `tab-active`)}
      onClick={() => setLanguage(optionValue)}
    >
      {optionValue}
    </button>
  );
};

export default Selector;
