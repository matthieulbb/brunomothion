import { Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12 px-6 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <p className="font-display font-semibold text-lg">Bruno Mothion</p>
        <p className="text-sm opacity-70 mt-1">Consultant Formateur & Artiste Peintre</p>
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
          href="mailto:contact@brunomothion.com"
          className="p-2 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors"
          aria-label="Email"
        >
          <Mail size={18} />
        </a>
      </div>
      <p className="text-xs opacity-50">© {new Date().getFullYear()} Bruno Mothion. Tous droits réservés.</p>
    </div>
  </footer>
);

export default Footer;
