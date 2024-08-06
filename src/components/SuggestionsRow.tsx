import { SUGGESTIONS } from "@/constants";

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
          <p className="text-sm text-center text-white">{suggestion}</p>
        </div>
      </div>
    ))}
  </div>
);

export default SuggestionsRow;
