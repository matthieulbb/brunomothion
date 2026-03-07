import { Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-8 sm:py-12 px-4 sm:px-6 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between">
      <div className="text-center md:text-left">
        <p className="font-display font-semibold text-base sm:text-lg">Bruno Mothion</p>
        <p className="text-xs sm:text-sm opacity-70 mt-1">Conseil, Formation & Accompagnement</p>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/brunomothion/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="mailto:brunomothionconseiletformation@gmail.com"
          className="p-2 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors"
          aria-label="Email"
        >
          <Mail size={18} />
        </a>
      </div>
      <p className="text-xs opacity-50 text-center">© {new Date().getFullYear()} Bruno Mothion. Tous droits réservés.</p>
    </div>
  </footer>
);

export default Footer;
