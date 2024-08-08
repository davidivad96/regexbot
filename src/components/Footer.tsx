type FooterProps = {};

const Footer: React.FC<FooterProps> = () => (
  <footer className="sticky bottom-0 w-full text-center p-4 bg-base-100 z-10 border-t-[1px] border-t-slate-800">
    <a href="https://x.com/dfodev" target="_blank" rel="noreferrer">
      <h2 className="text-sm font-semibold text-white">Built by @dfodev</h2>
    </a>
  </footer>
);

export default Footer;
