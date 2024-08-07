import Image from "next/image";
import ArrowTopRightOnSquare from "./ArrowTopRightOnSquareIcon";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => (
  <div className="flex flex-row justify-between items-center p-4">
    <div className="flex items-center gap-2">
      <Image
        src="/regexbot-logo.png"
        alt="RegexBot Logo"
        width={50}
        height={50}
      />
      <h1 className="text-2xl font-semibold text-white">RegexBot</h1>
    </div>
    <a href="https://regexr.com" target="_blank" rel="noreferrer">
      <button className="btn btn-link">
        Test your regex on Regexr.com
        <ArrowTopRightOnSquare />
      </button>
    </a>
  </div>
);

export default Header;
