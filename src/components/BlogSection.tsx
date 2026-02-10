import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Les clés d'une transformation réussie",
    date: "15 Janvier 2026",
    summary: "Comment accompagner le changement en entreprise tout en préservant l'engagement des équipes.",
  },
  {
    title: "Enseigner autrement en école de commerce",
    date: "8 Décembre 2025",
    summary: "Retour d'expérience sur l'intégration de cas pratiques terrain dans les cursus académiques.",
  },
  {
    title: "Art et management : des synergies insoupçonnées",
    date: "22 Novembre 2025",
    summary: "Comment la pratique artistique enrichit la vision managériale et stimule la créativité.",
  },
];

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
        <h2 className="section-title text-foreground">Blog</h2>
        <div className="w-12 h-0.5 bg-primary" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-6 rounded-xl bg-card border border-border hover:shadow-md hover:border-primary/20 transition-all cursor-pointer"
          >
            <time className="text-xs font-medium text-primary tracking-wide uppercase">
              {post.date}
            </time>
            <h3 className="font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {post.summary}
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
              Lire la suite <ArrowRight size={12} />
            </span>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
