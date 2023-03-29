type TWordProps = {
  word: string;
};

export const Word = ({ word }: TWordProps) => {
  return (
    <p className="p-2 bg-base-300 text-base-content rounded-md shadow-md">
      {word}
    </p>
  );
};

export default Word;
