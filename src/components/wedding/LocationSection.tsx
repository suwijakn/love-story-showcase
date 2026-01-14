import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";

const LocationSection = () => {
  const { venue } = weddingConfig;

  return (
    <section id="location" className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <MapPin className="w-10 h-10 text-primary mx-auto mb-2" />
          <h2 className="text-3xl font-serif font-light">The Venue</h2>
          <h3 className="text-2xl font-medium mt-2">{venue.name}</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full h-96 bg-muted rounded-lg overflow-hidden shadow-inner mb-6"
        >
          <iframe
            src={venue.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Venue Map"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground mb-6 flex items-center justify-center gap-2"
        >
          <MapPin size={16} />
          {venue.address}
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          href={venue.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline w-full md:w-auto"
        >
          Direction
        </motion.a>
      </div>
    </section>
  );
};

export default LocationSection;
