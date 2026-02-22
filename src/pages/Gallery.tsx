import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import artTempete from "@/assets/art-tempete-en-mer.jpg";
import artBateau from "@/assets/art-bateau-echoue.jpg";
import artCalligraphie from "@/assets/art-calligraphie-japonaise.jpg";
import artEruption from "@/assets/art-eruption-volcanique.jpg";

const artworks = [
  { id: 1, title: "Tempête en mer", technique: "Acrylique sur toile", style: "Abstrait", image: artTempete },
  { id: 2, title: "Bateau échoué en flamme", technique: "Acrylique sur toile", style: "Abstrait", image: artBateau },
  { id: 3, title: "Calligraphie Japonaise revisitée n°1", technique: "Acrylique sur toile", style: "Abstrait", image: artCalligraphie },
  { id: 4, title: "Éruption Volcanique", technique: "Acrylique sur toile", style: "Abstrait", image: artEruption },
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

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Galerie artistique</h1>
          <div className="space-y-4 text-muted-foreground text-lg mb-12 max-w-3xl">
            <p>
              La peinture abstraite fait partie de mon équilibre. Elle représente un espace d'expression et de recul, un lieu où l'intuition, la structure et le mouvement dialoguent librement.
            </p>
            <p>
              À travers la création, j'explore d'autres manières de lire une situation, de percevoir les tensions et d'envisager des équilibres possibles.
            </p>
            <p className="text-base">
              Dans mon activité de consultant et formateur, cette dimension créative nourrit ma capacité à appréhender la complexité, adopter plusieurs angles d'analyse et accompagner les transformations avec souplesse et discernement.
            </p>
            <p className="text-base font-medium text-foreground italic">
              Créer, structurer, transformer : ces dynamiques se retrouvent autant dans l'art que dans le management.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {artworks.map((art, i) => (
              <motion.div
                key={art.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onClick={() => setSelected(art)}
                className="aspect-[4/5] rounded-xl cursor-pointer overflow-hidden group relative"
              >
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-end p-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-primary-foreground font-medium text-sm">{art.title}</p>
                    <p className="text-primary-foreground/70 text-xs">{art.technique}</p>
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
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors z-10"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/60 to-transparent">
                <h3 className="text-primary-foreground text-xl font-semibold">{selected.title}</h3>
                <p className="text-primary-foreground/80 text-sm mt-1">{selected.technique} · {selected.style}</p>
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
