import { RecursivePartial, TDictionary } from "../types";

const dictionary: RecursivePartial<TDictionary> = {
  title: "Nice title here",
  description: "Nice description here",
  aboutMe: {
    title: "About me",
    text: "About text",
  },
  apresentation: {
    title: "Dynamic dictionary example",
    description: "Change the language and watch the magic happen",
  },
  randomWords: [
    { text: "cat" },
    { text: "house" },
    { text: "pineapple" },
    { text: "yellow" },
    { text: "party" },
    { text: "rain" },
    { text: "banana" },
    { text: "green" },
    { text: "friend" },
    { text: "beach" },
    { text: "summer" },
    { text: "travel" },
    { text: "work" },
    { text: "love" },
    { text: "money" },
    { text: "happiness" },
    { text: "health" },
    { text: "food" },
    { text: "drink" },
    { text: "sport" },
  ],
};

export default dictionary;
