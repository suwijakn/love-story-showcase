import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";

const GallerySection = () => {
  const { gallery } = weddingConfig;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openLightbox = (imgUrl: string) => {
    setCurrentImage(imgUrl);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="gallery" className="py-12 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-normal mb-2">Gallery</h2>
      </motion.div>

      {/* Video */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center mb-10 px-4"
      >
        <div className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src={gallery.videoUrl}
            title="Wedding Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </motion.div>

      {/* Image Slider */}
      <div className="relative container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-2 px-4 pb-4"
        >
          {gallery.images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="flex-shrink-0 w-1/3 md:w-1/4 snap-start cursor-pointer"
              onClick={() => openLightbox(img)}
            >
              <img
                src={img}
                className="w-full h-64 md:h-80 object-cover rounded shadow-md hover:opacity-90 transition-opacity"
                loading="lazy"
                alt={`Gallery image ${index + 1}`}
              />
            </motion.div>
          ))}
        </motion.div>
        <p className="text-center text-muted-foreground text-xs mt-2 italic">
          Scroll to see more
        </p>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
            >
              <X size={36} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={currentImage}
              className="max-h-[90vh] max-w-full rounded shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              alt="Gallery Preview"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
