import { SUGGESTIONS } from "@/constants";

type SuggestionsRowProps = {
  handleSuggestionClick: (text: string) => Promise<void>;
};

const SuggestionsRow: React.FC<SuggestionsRowProps> = ({
  handleSuggestionClick,
}) => (
  <div className="flex flex-row justify-between items-center gap-4">
    {SUGGESTIONS.map((suggestion) => (
      <div
        key={suggestion}
        className="card bg-secondary cursor-pointer"
        onClick={() => handleSuggestionClick(suggestion)}
      >
        <div className="card-body">
          <p className="text-sm text-center text-white">{suggestion}</p>
        </div>
      </div>
    ))}
  </div>
);

export default SuggestionsRow;
