type FooterProps = {};

const Footer: React.FC<FooterProps> = () => (
  <div className="flex flex-row justify-center items-center p-4">
    <a href="https://x.com/dfodev" target="_blank" rel="noreferrer">
      <h2 className="text-sm font-semibold text-white">Built by @dfodev</h2>
    </a>
  </div>
);

export default Footer;
