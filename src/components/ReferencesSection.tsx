import { motion } from "framer-motion";

const clients = [
  "Audencia",
  "Excelia",
  "ESSCA",
  "KEDGE",
  "TBS Education",
  "EM Normandie",
  "NEOMA",
  "SKEMA",
];

const ReferencesSection = () => (
  <section id="references" className="py-16 px-6 md:px-12 bg-sand">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="section-title text-foreground">Ils me font confiance</h2>
        <div className="w-12 h-0.5 bg-primary mx-auto" />
      </motion.div>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {clients.map((client, i) => (
          <motion.div
            key={client}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="px-6 py-3 rounded-lg bg-card border border-border text-muted-foreground font-semibold text-sm tracking-wide"
          >
            {client}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReferencesSection;
