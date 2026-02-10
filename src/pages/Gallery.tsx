import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const artworks = [
  { id: 1, title: "Horizon bleu", dimensions: "80 × 60 cm", color: "hsl(200, 30%, 55%)" },
  { id: 2, title: "Terre ocre", dimensions: "100 × 80 cm", color: "hsl(35, 45%, 55%)" },
  { id: 3, title: "Lumière d'automne", dimensions: "60 × 60 cm", color: "hsl(30, 50%, 60%)" },
  { id: 4, title: "Reflets", dimensions: "90 × 70 cm", color: "hsl(190, 25%, 50%)" },
  { id: 5, title: "Abstraction noire", dimensions: "120 × 80 cm", color: "hsl(0, 0%, 25%)" },
  { id: 6, title: "Sérénité", dimensions: "70 × 50 cm", color: "hsl(160, 20%, 55%)" },
  { id: 7, title: "Éclat doré", dimensions: "80 × 80 cm", color: "hsl(45, 50%, 60%)" },
  { id: 8, title: "Brume matinale", dimensions: "100 × 70 cm", color: "hsl(210, 15%, 70%)" },
  { id: 9, title: "Flammes", dimensions: "60 × 90 cm", color: "hsl(10, 55%, 50%)" },
  { id: 10, title: "Méditation", dimensions: "80 × 100 cm", color: "hsl(260, 15%, 45%)" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<(typeof artworks)[0] | null>(null);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 section-padding">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-blue-grey-dark mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Retour au site
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Galerie Artiste</h1>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl">
            Une sélection de mes œuvres récentes, entre abstraction et émotion.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {artworks.map((art, i) => (
              <motion.div
                key={art.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                onClick={() => setSelected(art)}
                className="aspect-[4/5] rounded-xl cursor-pointer overflow-hidden group relative"
                style={{ backgroundColor: art.color }}
              >
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-end p-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-primary-foreground font-medium text-sm">{art.title}</p>
                    <p className="text-primary-foreground/70 text-xs">{art.dimensions}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full aspect-[4/5] rounded-2xl overflow-hidden"
              style={{ backgroundColor: selected.color }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors z-10"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/60 to-transparent">
                <h3 className="text-primary-foreground text-xl font-semibold">{selected.title}</h3>
                <p className="text-primary-foreground/80 text-sm mt-1">{selected.dimensions}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default Gallery;
