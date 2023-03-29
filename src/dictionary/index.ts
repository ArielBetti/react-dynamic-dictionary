import deepmerge from "ts-deepmerge";

// types
import { RecursivePartial, TDictionary } from "./types";

// dictionaries
import defaultDictionary from "./dictionaries/pt";
import { dictionaries } from "./dictionaries";

const selectDictionary = (lang: string): RecursivePartial<TDictionary> =>
  deepmerge(defaultDictionary(), lang !== "pt" ? dictionaries[lang] : {});
export default selectDictionary;
