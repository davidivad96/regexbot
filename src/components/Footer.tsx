type FooterProps = {};

const Footer: React.FC<FooterProps> = () => (
  <div className="sticky bottom-0 w-full text-center p-4 bg-base-100 z-10">
    <a href="https://x.com/dfodev" target="_blank" rel="noreferrer">
      <h2 className="text-sm font-semibold text-white">Built by @dfodev</h2>
    </a>
  </div>
);

export default Footer;
