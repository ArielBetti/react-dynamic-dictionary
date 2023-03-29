import { RecursivePartial, TDictionary } from "../types";
import cnDictionary from "./cn";
import enDictionary from "./en";
import ptDictionary from "./pt";

interface DictionaryList {
  [key: string]: RecursivePartial<TDictionary>;
}

export const dictionaries: DictionaryList = {
  cn: cnDictionary,
  en: enDictionary,
  pt: ptDictionary(),
};
