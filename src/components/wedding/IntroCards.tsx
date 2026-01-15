import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

const IntroCards = () => {
  const { images } = weddingConfig;

  return (
    <section className="container mx-auto px-4 py-2 md:py-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full sm:w-10/12 md:w-5/12 text-center"
        >
          <img
            src={images.introCard1}
            className="w-full max-w-md mx-auto hover:scale-[1.02] transition-transform duration-500 object-contain"
            alt="Wedding Details 1"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full sm:w-10/12 md:w-5/12 text-center"
        >
          <img
            src={images.introCard2}
            className="w-full max-w-md mx-auto hover:scale-[1.02] transition-transform duration-500 object-contain"
            alt="Wedding Details 2"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default IntroCards;
