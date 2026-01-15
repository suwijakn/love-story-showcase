import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

const RSVPSection = () => {
  const { rsvp, images } = weddingConfig;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        {/* R.S.V.P Header - styled text with dots */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-serif font-light tracking-[0.3em] mb-8"
        >
          R . S . V . P
        </motion.h2>

        {/* Thai Message - serif italic */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 font-serif italic text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-foreground"
        >
          "{rsvp.message}"
        </motion.p>

        {/* Subtitle - serif italic uppercase */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 font-serif italic uppercase text-lg tracking-[0.15em]"
        >
          {rsvp.subtitle}
        </motion.p>

        {/* Button - outline style with rounded pill */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          href={rsvp.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 border border-foreground text-foreground rounded-full hover:bg-foreground hover:text-background transition-colors duration-300 text-sm font-light tracking-wider"
        >
          {rsvp.buttonText}
        </motion.a>

        {/* Photo section */}
        <motion.div
          initial={{ opacity: 0, rotate: -2 }}
          whileInView={{ opacity: 1, rotate: -2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-lg mx-auto"
        >
          <img
            src={images.rsvpPhoto}
            className="w-full shadow-xl border-4 border-white rounded"
            alt="Couple Photo"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPSection;
