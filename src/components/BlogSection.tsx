import { motion } from "framer-motion";
import { Construction } from "lucide-react";

const BlogSection = () => (
  <section id="blog" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="section-title text-foreground">Ressources</h2>
        <div className="w-12 h-0.5 bg-primary" />
      </motion.div>

      <div className="text-center py-16">
        <Construction size={40} className="text-primary mx-auto mb-4" />
        <p className="text-muted-foreground text-lg font-medium">Work in progress</p>
        <p className="text-muted-foreground text-sm mt-2">Contenus à venir prochainement.</p>
      </div>
    </div>
  </section>
);

export default BlogSection;
