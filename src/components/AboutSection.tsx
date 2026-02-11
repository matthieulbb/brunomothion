import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-padding bg-warm-white">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-foreground">À propos</h2>
        <div className="w-12 h-0.5 bg-primary mb-8" />
        <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
          <p>
            Originaire de Lyon, né en 1965, j'ai occupé des postes de manager et de direction 
            dans différents groupes pendant plus de 20 ans. Cette riche expérience m'a permis 
            de développer une expertise solide en stratégie d'entreprise, management et conduite 
            du changement.
          </p>
          <p>
            Aujourd'hui consultant formateur, j'accompagne les entreprises dans leurs 
            transformations stratégiques et opérationnelles. J'interviens également dans les 
            grandes écoles de commerce pour transmettre une expertise terrain aux étudiants 
            en formation initiale et continue.
          </p>
          <p>
            Parallèlement, la peinture est mon autre langage. Autodidacte orienté abstrait, 
            j'adore jouer avec les couleurs en créant des contrastes forts. Je travaille 
            principalement l'acrylique. Cette pratique artistique nourrit ma créativité et 
            enrichit ma vision professionnelle d'une sensibilité unique.
          </p>
        </div>
        <a
          href="https://www.linkedin.com/in/brunomothion/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-blue-grey-dark transition-colors"
        >
          <Linkedin size={16} />
          Voir mon profil LinkedIn
        </a>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
