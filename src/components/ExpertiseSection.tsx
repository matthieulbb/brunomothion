import { motion } from "framer-motion";
import { Target, Users, TrendingUp, Lightbulb, Settings, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Stratégie d'entreprise",
    desc: "Définition et déploiement de plans stratégiques alignés sur vos ambitions.",
  },
  {
    icon: Users,
    title: "Management & Leadership",
    desc: "Accompagnement des dirigeants et managers dans leur posture et pratiques.",
  },
  {
    icon: TrendingUp,
    title: "Conduite du changement",
    desc: "Transformation organisationnelle avec adhésion des équipes.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Créativité",
    desc: "Stimulation de l'innovation par des méthodologies créatives.",
  },
  {
    icon: Settings,
    title: "Excellence opérationnelle",
    desc: "Optimisation des processus et amélioration continue.",
  },
  {
    icon: BarChart3,
    title: "Performance commerciale",
    desc: "Développement des compétences commerciales et stratégie de croissance.",
  },
];

const ExpertiseSection = () => (
  <section id="expertise" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <h2 className="section-title text-foreground">Consulting</h2>
        <div className="w-12 h-0.5 bg-primary mb-4" />
        <p className="section-subtitle">
          Des interventions sur mesure pour répondre aux défis de votre organisation.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-7 rounded-xl bg-card border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExpertiseSection;
