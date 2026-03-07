import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 md:py-28 bg-warm-white">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-foreground">À propos</h2>
        <div className="w-12 h-0.5 bg-primary mb-6 sm:mb-8" />
        <div className="space-y-4 sm:space-y-5 text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg">
          <p>
            Après plus de vingt ans à des postes de direction au sein d'environnements exigeants, j'ai choisi de mettre mon expérience opérationnelle au service des organisations et des équipes.
          </p>
          <p>
            J'ai piloté des centres de relation client de plusieurs centaines de collaborateurs, conduit des transformations organisationnelles et accompagné des managers confrontés à des enjeux de performance, d'engagement et de changement.
          </p>
          <p>
            À un moment clé de mon parcours, j'ai choisi de prendre du recul pour aligner pleinement mon engagement professionnel avec mes convictions. Cette étape a profondément renforcé ma manière d'exercer le management et l'accompagnement : avec davantage de clarté, d'exigence et une bienveillance assumée.
          </p>
          <p className="font-medium text-foreground italic">
            Le terrain m'a appris une conviction essentielle : la performance durable repose autant sur la solidité du cadre que sur la qualité de la posture managériale.
          </p>
          <p>
            Aujourd'hui, j'interviens comme consultant et formateur auprès de cabinets de conseil, d'organismes de formation et de PME. Je suis engagé dans la transmission du savoir et dans le soin apporté aux personnes que j'accompagne. Mon approche conjugue exigence professionnelle, bienveillance active et pragmatisme opérationnel.
          </p>
          <p>
            En parallèle, j'enseigne dans des écoles de commerce afin de transmettre une expertise issue du réel, à travers une pédagogie structurée, responsabilisante et professionnalisante.
          </p>
          <p>
            La peinture abstraite fait également partie de mon équilibre. Elle nourrit ma créativité et ma capacité à prendre du recul — deux qualités essentielles dans l'accompagnement des transformations humaines et organisationnelles.
          </p>
        </div>
        <a
          href="https://www.linkedin.com/in/brunomothion/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 sm:mt-8 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-blue-grey-dark transition-colors"
        >
          <Linkedin size={16} />
          Voir mon profil LinkedIn
        </a>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
