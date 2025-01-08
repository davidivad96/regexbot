import { useState } from "react";
import CheckCircleIcon from "./CheckCircleIcon";
import ClipboardIcon from "./ClipboardIcon";

type ResultCardProps = {
  completion: string;
  isLoading: boolean;
};

const ResultCard: React.FC<ResultCardProps> = ({ completion, isLoading }) => {
  const [isCopied, setIsCopied] = useState(false);

  const toggleCopied = () => setIsCopied((currentIsCopied) => !currentIsCopied);

  const handleCopy = () => {
    navigator.clipboard.writeText(completion);
    toggleCopied();
    setTimeout(toggleCopied, 2000);
  };

  return (
    <div
      className="card glass h-48 cursor-pointer hover:scale-[1.03] transform duration-300"
      onClick={handleCopy}
    >
      <div className="card-body justify-center items-center text-center">
        {isLoading && <span className="loading loading-spinner loading-xs" />}
        <span className="card-title max-w-full line-clamp-3">{completion}</span>
        <span className="opacity-60">
          Make sure to check the output before using it
        </span>
        <div
          className={`absolute right-2 bottom-2 ${
            isCopied ? "tooltip tooltip-open tooltip-primary" : ""
          }`}
          data-tip="Copied to clipboard!"
        >
          <div className="card-actions">
            <label className="swap swap-rotate" htmlFor="clipboard-checkbox">
              <input
                id="clipboard-checkbox"
                type="checkbox"
                checked={isCopied}
                onChange={handleCopy}
              />
              <ClipboardIcon />
              <CheckCircleIcon />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
