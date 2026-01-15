import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";
import Divider from "./Divider";

const LargePhotoSection = () => {
  const { images } = weddingConfig;

  return (
    <section className="py-8">
      <Divider src={images.divider2} />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <img
          src={images.largePhoto}
          className="w-full object-cover max-h-[80vh] object-top"
          alt="Couple Photo"
        />
      </motion.div>

      <Divider src={images.divider3} className="w-11/12 md:w-3/4" />
    </section>
  );
};

export default LargePhotoSection;
