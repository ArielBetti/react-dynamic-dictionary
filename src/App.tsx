import { useMemo } from "react";

// context
import { useContextReturn } from "./context";

// dictionaries
import { dictionaries } from "./dictionary/dictionaries";

// hooks
import { useDictionary } from "./dictionary/hooks";

// components
import {
  Card,
  Code,
  Paragraph,
  Selector,
  ThemeSelector,
  Word,
} from "./components";

// ::
const App = () => {
  const { selectedLanguage } = useContextReturn();
  const dictionary = useDictionary();

  const languageOptions = useMemo(
    () =>
      Object.entries(dictionaries)?.map((item) => ({
        name: item[0],
        dictionary: item[1],
      })),
    [dictionaries, selectedLanguage]
  );

  return (
    <div className="flex items-start justify-start flex-col h-full gap-2 container mx-auto px-4 max-w-3xl py-20">
      <div className="pt-3 z-30 bg-base-100/80 backdrop-blur-md px-4 mx-auto fixed top-0 left-0 w-full flex items-center justify-center">
        <div className="max-w-3xl w-full flex items-top justify-between px-4">
          <div className="tabs pb-5">
            {languageOptions.map((option) => (
              <Selector
                optionValue={option.name}
                isActive={option.name === selectedLanguage}
              />
            ))}
          </div>
          <ThemeSelector />
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-10 prose">
        <h2>{dictionary.apresentation.title}</h2>
        <p className="border-b-2 border-primary w-fit">
          {dictionary.apresentation.description}
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex m-0 p-0 flex-wrap gap-2 items-start justify-start">
          <Card />
          <Card />
          <Card />
        </div>
        <section className="gap-2 flex flex-col m-0 p-4 w-full bg-base-200 shadow-md rounded-sm">
          <div className="flex flex-wrap gap-2 max-w-lg">
            <Paragraph text={dictionary.title} />
            <Paragraph text={dictionary.description} />
            <Paragraph text={dictionary.aboutMe.title} />
            <Paragraph text={dictionary.aboutMe.text} />
            <Paragraph text={dictionary.test} />
          </div>
        </section>
        <section className="gap-2 flex flex-col m-0 p-4 w-full bg-base-200 shadow-md rounded-sm">
          <div className="flex m-0 p-0 flex-wrap gap-2 items-start justify-start">
            {dictionary.randomWords.map((word) => (
              <Word word={word.text} />
            ))}
          </div>
        </section>
        <Code />
      </div>
    </div>
  );
};

export default App;
