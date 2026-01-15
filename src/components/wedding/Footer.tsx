import { weddingConfig } from "@/config/weddingConfig";

const Footer = () => {
  const { footer } = weddingConfig;

  return (
    <footer className="py-8 bg-secondary text-center pb-24 md:pb-8">
      <p className="text-muted-foreground text-sm mb-4">{footer.poweredByText}</p>
      <img
        src={footer.logo}
        className="h-10 sm:h-12 mx-auto mb-4 object-contain"
        alt="Wedding Planner Logo"
      />
      <a
        href={footer.linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        {footer.linkText}
      </a>
    </footer>
  );
};

export default Footer;
