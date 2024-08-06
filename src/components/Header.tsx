import ArrowTopRightOnSquare from "./ArrowTopRightOnSquareIcon";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => (
  <div className="flex flex-row justify-between items-center p-4">
    <h1 className="text-2xl font-semibold text-white">RegexBot</h1>
    <a href="https://regexr.com" target="_blank" rel="noreferrer">
      <button className="btn btn-link">
        Go to RegExr
        <ArrowTopRightOnSquare />
      </button>
    </a>
  </div>
);

export default Header;
