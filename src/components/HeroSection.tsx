import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import profileImg from "@/assets/profile-bruno.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 md:px-12 lg:px-20 py-20 pt-24 sm:pt-28 md:pt-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground mb-4 sm:mb-6">
            Transformer les organisations.{" "}
            <span className="text-primary">Faire grandir les managers.</span>{" "}
            Transmettre l'expérience du terrain.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-md mb-8 sm:mb-10">
            Plus de 20 ans d'expérience en direction opérationnelle au service du management, de la relation client et de la transformation des organisations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => scrollTo("#expertise")}
              className="inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3 sm:py-3.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-blue-grey-dark transition-colors"
            >
              <Briefcase size={18} />
              Conseil & accompagnement
            </button>
            <button
              onClick={() => scrollTo("#schools")}
              className="inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3 sm:py-3.5 border border-primary text-primary rounded-lg font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <GraduationCap size={18} />
              Interventions écoles
            </button>
          </div>
        </motion.div>

        {/* Right - Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center md:justify-end order-1 md:order-2"
        >
          <div className="relative w-56 h-64 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={profileImg}
              alt="Bruno Mothion"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
