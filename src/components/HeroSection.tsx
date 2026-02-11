import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import profileImg from "@/assets/profile-bruno.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center section-padding pt-28 md:pt-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Consultant Formateur & Artiste
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground mb-6">
            Accompagner le changement,{" "}
            <span className="text-primary">transmettre l'expertise</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-10">
            Plus de 20 ans d'expérience au service de la transformation des organisations et de la transmission des savoirs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("#expertise")}
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-blue-grey-dark transition-colors"
            >
              <Briefcase size={18} />
              Expertise Consulting
            </button>
            <button
              onClick={() => scrollTo("#schools")}
              className="inline-flex items-center gap-3 px-6 py-3.5 border border-primary text-primary rounded-lg font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <GraduationCap size={18} />
              Intervenant Écoles
            </button>
          </div>
        </motion.div>

        {/* Right - Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={profileImg}
              alt="Bruno Mothion"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
