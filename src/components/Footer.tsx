type FooterProps = {};

const Footer: React.FC<FooterProps> = () => (
  <footer className="sticky bottom-0 w-full text-center p-4 bg-base-100 z-10 border-t-[1px] border-t-slate-800">
    <a href="https://x.com/dfodev" target="_blank">
      <h2 className="text-sm font-semibold text-white">Built by @dfodev:</h2>
    </a>
    <div className="flex flex-row justify-center items-center gap-2 mt-2">
      <a href="https://www.getretouchai.app/" target="_blank">
        <h2 className="text-sm font-semibold text-white link link-hover">
          RetouchAI
        </h2>
      </a>
      <div className="h-1 w-1 bg-white rounded-full" />
      <a href="https://www.wordly.es/" target="_blank">
        <h2 className="text-sm font-semibold text-white link link-hover">
          Wordly
        </h2>
      </a>
    </div>
  </footer>
);

export default Footer;
