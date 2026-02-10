import { motion } from "framer-motion";
import { BookOpen, Presentation, Users2, Compass } from "lucide-react";

const domains = [
  { icon: Presentation, title: "Marketing & Stratégie commerciale" },
  { icon: BookOpen, title: "Management & Leadership" },
  { icon: Users2, title: "Communication & Négociation" },
  { icon: Compass, title: "Entrepreneuriat & Innovation" },
];

const SchoolsSection = () => (
  <section id="schools" className="section-padding bg-warm-white">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-foreground">Intervenant Écoles</h2>
        <div className="w-12 h-0.5 bg-primary mb-8" />
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
          J'interviens dans les grandes écoles de commerce et d'ingénieurs pour transmettre 
          une expertise terrain aux étudiants en formation initiale et continue. Mes cours 
          allient théorie académique et cas pratiques issus de mon expérience professionnelle.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {domains.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-lg border border-border bg-card"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <d.icon size={20} className="text-primary" />
              </div>
              <span className="font-medium text-foreground">{d.title}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SchoolsSection;
