import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

const RSVPSection = () => {
  const { rsvp, images } = weddingConfig;

  return (
    <section className="py-12 bg-warm-gray">
      <div className="container mx-auto px-4 text-center">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src={images.rsvpHeader}
          className="mx-auto w-full md:w-1/2 mb-8"
          alt="RSVP Header"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-muted-foreground italic max-w-2xl mx-auto"
        >
          "{rsvp.message}"
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 font-medium uppercase text-sm tracking-wide"
        >
          {rsvp.subtitle}
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          href={rsvp.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          {rsvp.buttonText}
        </motion.a>

        <motion.div
          initial={{ opacity: 0, rotate: -2 }}
          whileInView={{ opacity: 1, rotate: -2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-lg mx-auto"
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
