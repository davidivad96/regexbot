import Image from "next/image";
import ArrowTopRightOnSquare from "./ArrowTopRightOnSquareIcon";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => (
  <header className="sticky top-0 w-full flex flex-row justify-between items-center p-4 bg-base-100 z-10 border-b-[1px] border-b-slate-800">
    <div className="flex items-center gap-2">
      <Image
        src="/regexbot-logo.png"
        alt="RegexBot Logo"
        width={50}
        height={50}
      />
      <span className="text-2xl font-semibold text-white">RegexBot</span>
    </div>
    <a href="https://regexr.com" target="_blank" rel="noreferrer">
      <button className="btn btn-link">
        Test your regex on Regexr.com
        <ArrowTopRightOnSquare />
      </button>
    </a>
  </header>
);

export default Header;
