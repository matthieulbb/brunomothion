import { motion } from "framer-motion";
import { BookOpen, Presentation, Users2, Target, GraduationCap } from "lucide-react";

const themes = [
  { icon: Presentation, title: "Management opérationnel" },
  { icon: Users2, title: "Posture managériale et leadership" },
  { icon: Target, title: "Pilotage d'activité et performance" },
  { icon: BookOpen, title: "Relation client" },
  { icon: GraduationCap, title: "Expertise technico-commerciale" },
];

const pedagogie = [
  "Des études de cas issues de situations réelles",
  "Des mises en situation concrètes",
  "Des échanges structurés autour d'expériences terrain",
  "Une articulation claire entre théorie et pratique",
];

const SchoolsSection = () => (
  <section id="schools" className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 md:py-28 bg-warm-white">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-foreground">Interventions écoles</h2>
        <div className="w-12 h-0.5 bg-primary mb-6 sm:mb-8" />
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 max-w-3xl">
          J'interviens dans des écoles de commerce et de management, du BTS au Mastère, pour transmettre une expertise issue du terrain à travers une pédagogie active et professionnalisante.
        </p>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 max-w-3xl">
          Mon objectif est simple : permettre aux étudiants de comprendre les réalités du management et du pilotage d'activité, au-delà des concepts théoriques.
        </p>

        {/* Thématiques enseignées */}
        <h3 className="font-semibold text-foreground mb-4 sm:mb-5 text-sm sm:text-base">Thématiques enseignées</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {themes.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg border border-border bg-card"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <d.icon size={18} className="text-primary sm:hidden" />
                <d.icon size={20} className="text-primary hidden sm:block" />
              </div>
              <span className="font-medium text-foreground text-xs sm:text-sm">{d.title}</span>
            </motion.div>
          ))}
        </div>

        {/* Ma pédagogie */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
          <div className="p-5 sm:p-7 rounded-xl bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Ma pédagogie</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Mes interventions reposent sur :</p>
            <ul className="space-y-2">
              {pedagogie.map((item) => (
                <li key={item} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
              Je veille à aligner mes contenus avec les référentiels RNCP et les exigences académiques.
            </p>
          </div>

          <div className="p-5 sm:p-7 rounded-xl bg-card border border-border flex flex-col justify-center">
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Finalité</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Former des étudiants capables d'analyser une situation, de prendre position et d'agir avec responsabilité dans des environnements professionnels exigeants.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SchoolsSection;
