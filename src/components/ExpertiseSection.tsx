import { motion } from "framer-motion";
import { Users, TrendingUp, HeadphonesIcon, UserCheck, Handshake, Wrench } from "lucide-react";

const pillars = [
  {
    icon: UserCheck,
    title: "Management & posture managériale",
    desc: "Faire évoluer la posture des managers pour renforcer l'engagement, la responsabilité et la clarté des décisions.",
    items: [
      "Développement du leadership",
      "Gestion des équipes et des conflits",
      "Communication managériale",
      "Feedback et responsabilisation",
    ],
  },
  {
    icon: TrendingUp,
    title: "Conduite du changement",
    desc: "Structurer les transformations pour obtenir l'adhésion plutôt que la résistance.",
    items: [
      "Accompagnement des équipes en phase de transition",
      "Clarification des rôles et du cadre",
      "Gestion des tensions liées au changement",
      "Alignement stratégique et opérationnel",
    ],
  },
  {
    icon: HeadphonesIcon,
    title: "Relation client & performance",
    desc: "Développer une culture orientée service et résultats.",
    items: [
      "Pilotage d'activité",
      "Qualité de service",
      "Organisation des équipes",
      "Optimisation des processus opérationnels",
    ],
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
        <h2 className="section-title text-foreground">Conseil & accompagnement</h2>
        <div className="w-12 h-0.5 bg-primary mb-4" />
        <p className="section-subtitle max-w-3xl">
          J'accompagne cabinets de conseil, organismes de formation et PME dans leurs enjeux de transformation managériale, de performance collective et de structuration organisationnelle.
        </p>
        <p className="text-muted-foreground text-sm mt-3 max-w-3xl">
          Mon intervention peut s'inscrire dans un cadre ponctuel ou régulier, en renfort d'équipes existantes ou dans le cadre de missions spécifiques.
        </p>
      </motion.div>

      {/* 3 pillars */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-7 rounded-xl bg-card border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <p.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
            <ul className="space-y-1.5">
              {p.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Ma posture + Modalités */}
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-7 rounded-xl bg-warm-white border border-border"
        >
          <div className="flex items-center gap-3 mb-4">
            <Handshake size={20} className="text-primary" />
            <h3 className="font-semibold text-foreground">Ma posture</h3>
          </div>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>Issu du terrain, j'interviens avec une approche pragmatique et structurée.</p>
            <p>Je privilégie la clarté du cadre, la responsabilisation des acteurs et la mise en œuvre concrète des actions.</p>
            <p className="font-medium text-foreground">Mon objectif : produire des effets durables, au-delà de l'intervention.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-7 rounded-xl bg-warm-white border border-border"
        >
          <div className="flex items-center gap-3 mb-4">
            <Wrench size={20} className="text-primary" />
            <h3 className="font-semibold text-foreground">Modalités d'intervention</h3>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Missions ponctuelles ou accompagnements récurrents</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Interventions quelques jours par mois</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Animation de séminaires et ateliers</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Formation-action</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Accompagnement individuel ou collectif</li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ExpertiseSection;
