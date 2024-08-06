import { SUGGESTIONS } from "@/utils/constants";
import ArrowUpRight from "./ArrowUpRightIcon";

type SuggestionsRowProps = {
  handleSuggestionClick: (text: string) => Promise<void>;
};

const SuggestionsRow: React.FC<SuggestionsRowProps> = ({
  handleSuggestionClick,
}) => (
  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
    {SUGGESTIONS.map((suggestion) => (
      <div
        key={suggestion}
        className="card bg-secondary cursor-pointer"
        onClick={() => handleSuggestionClick(suggestion)}
      >
        <div className="card-body">
          <p className="text-sm text-center text-white font-semibold">
            {suggestion}
          </p>
          <div className="absolute top-2 right-2">
            <ArrowUpRight />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default SuggestionsRow;
