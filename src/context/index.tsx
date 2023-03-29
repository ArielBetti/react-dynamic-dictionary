import {
  createContext,
  ReactNode,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

// dictionary
import selectDictionary from "../dictionary";

// import: types
import { RecursivePartial, TDictionary } from "../dictionary/types";

// constants: theme
import { themes } from "../themes";

export type TContextReturn = {
  dictionary: TDictionary;
  selectedLanguage?: string;
  setLanguage: (lang: string) => void;
  selectedTheme: string;
  themes: string[];
  setTheme: (theme: string) => void;
};

// types: context
type TContextProps = {
  lang?: string;
  children: ReactNode;
};

// context ::
export const Context = createContext<RecursivePartial<TContextReturn>>({});

export const ContextProvider = ({ lang = "pt", children }: TContextProps) => {
  const [currentTheme, setCurrentTheme] = useState(
    window?.localStorage?.getItem("theme") || "dracula"
  );

  const [dictionaryLanguage, setDictionaryLanguage] = useState<string>(
    lang || "pt"
  );

  const contextValue = useMemo(
    () => ({
      dictionary: selectDictionary(dictionaryLanguage),
      setLanguage: (selectLang: string) => {
        setDictionaryLanguage(selectLang);
      },
      themes: themes,
      selectedTheme: currentTheme,
      setTheme: (theme: string) => {
        setCurrentTheme(theme);
        window?.localStorage.setItem("theme", theme);
      },
      selectedLanguage: dictionaryLanguage,
    }),
    [dictionaryLanguage, currentTheme]
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useContextReturn = () => useContext(Context) as TContextReturn;
