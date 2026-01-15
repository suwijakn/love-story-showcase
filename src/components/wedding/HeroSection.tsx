import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

const HeroSection = () => {
  const { images } = weddingConfig;

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-start justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.heroBackground}
          className="w-full h-[125%] sm:h-full object-cover object-[center_top] sm:object-center"
          alt="Wedding Background"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-12 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center"
        >
          <img
            src={images.heroMain}
            className="w-[50%] sm:w-[40%] md:w-[30%] lg:w-[25%] max-w-md"
            alt="Couple Names"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
