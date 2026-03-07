import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nom: "", prenom: "", email: "", sujet: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message envoyé", description: "Merci, je reviendrai vers vous rapidement." });
    setForm({ nom: "", prenom: "", email: "", sujet: "" });
  };

  return (
    <section id="contact" className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 md:py-28 bg-warm-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-foreground">Échangeons sur vos enjeux</h2>
          <div className="w-12 h-0.5 bg-primary mb-6 sm:mb-8" />

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Left - Info */}
            <div>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                <p>
                  Vous souhaitez renforcer la posture managériale de vos équipes, structurer une transformation ou intervenir dans un dispositif pédagogique ?
                </p>
                <p>
                  Je serai heureux d'échanger avec vous afin de comprendre votre contexte et vos objectifs.
                </p>
                <p className="font-medium text-foreground">
                  Chaque collaboration débute par un échange simple, direct et constructif.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start sm:items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                  <Mail size={16} className="text-primary shrink-0 mt-0.5 sm:mt-0" />
                  <a href="mailto:brunomothionconseiletformation@gmail.com" className="hover:text-foreground transition-colors break-all">
                    brunomothionconseiletformation@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                  <Phone size={16} className="text-primary shrink-0" />
                  <a href="tel:+33627285452" className="hover:text-foreground transition-colors">
                    06 27 28 54 52
                  </a>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                  <MapPin size={16} className="text-primary shrink-0" />
                  <span>Interventions en France</span>
                </div>
              </div>

              <p className="mt-6 sm:mt-8 text-xs sm:text-sm italic text-primary font-medium">
                "Progresser ensemble, Grandir avec bienveillance"
              </p>
            </div>

            {/* Right - Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-2 gap-3 sm:gap-5">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-1.5">Nom</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-1.5">Prénom</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.prenom}
                    onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-1.5">Sujet</label>
                <select
                  required
                  value={form.sujet}
                  onChange={(e) => setForm({ ...form, sujet: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="consulting">Consulting</option>
                  <option value="ecole">École</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-blue-grey-dark transition-colors w-full sm:w-auto justify-center"
              >
                <Send size={16} />
                Envoyer
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
