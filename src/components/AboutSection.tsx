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
            Passionné par la transformation des organisations et la transmission des savoirs, 
            j'accompagne depuis plus de 20 ans les entreprises et les grandes écoles dans leurs 
            enjeux stratégiques et opérationnels.
          </p>
          <p>
            Mon parcours m'a conduit du conseil en stratégie à la formation, en passant par 
            des fonctions de direction. Cette richesse d'expériences me permet d'apporter une 
            vision pragmatique et innovante à chaque mission.
          </p>
          <p>
            Parallèlement, la peinture est mon autre langage. Elle nourrit ma créativité et 
            enrichit ma pratique professionnelle d'une sensibilité artistique unique.
          </p>
        </div>
        <a
          href="https://linkedin.com"
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
