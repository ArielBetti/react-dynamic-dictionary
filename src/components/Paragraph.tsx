const Paragraph = ({ text }: { text: string }) => {
  return (
    <p className="p-2 bg-base-300 text-base-content rounded-md shadow-md">
      {text}
    </p>
  );
};

export default Paragraph;
