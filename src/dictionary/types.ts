export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

export type TDictionary = {
  apresentation: {
    title: string;
    description: string;
  };
  title: string;
  description: string;
  aboutMe: {
    title: string;
    text: string;
  };
  test: string;
  randomWords: {
    text: string;
  }[];
};
