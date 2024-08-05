type ResultCardProps = {
  completion: string;
  isLoading: boolean;
};

const ResultCard: React.FC<ResultCardProps> = ({ completion, isLoading }) => (
  <div className="card glass h-48 cursor-pointer">
    <div className="card-body justify-center items-center text-center">
      {isLoading && <span className="loading loading-spinner loading-xs" />}
      <h1 className="card-title">{completion}</h1>
      <h2 className="opacity-60">
        Make sure to check the outputs before using them
      </h2>
    </div>
  </div>
);

export default ResultCard;
