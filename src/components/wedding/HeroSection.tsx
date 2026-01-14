import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

const HeroSection = () => {
  const { images } = weddingConfig;

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.heroBackground}
          className="w-full h-full object-cover object-[92%_38%]"
          alt="Wedding Background"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-32 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center"
        >
          <img
            src={images.heroMain}
            className="w-10/12 md:w-1/3 max-w-lg shadow-xl rounded-sm mb-6"
            alt="Couple Names"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
