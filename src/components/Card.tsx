import { twMerge } from "tailwind-merge";
import { useDictionary } from "../dictionary/hooks";

type TCardProps = {
  mergeClassName?: string;
};

const Card = ({ mergeClassName }: TCardProps) => {
  const { title, description } = useDictionary();

  return (
    <div
      className={twMerge(
        "card bg-primary text-primary-content min-h-[80px] shadow-md rounded-md w-full md:max-w-[240px] max-w-full",
        mergeClassName
      )}
    >
      <div className="flex flex-col items-start justify-start card-body">
        <p className="card-title">{title}</p>

        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
