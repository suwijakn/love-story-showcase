import { motion } from "framer-motion";

interface DividerProps {
  src: string;
  className?: string;
}

const Divider = ({ src, className = "w-11/12 md:w-1/2" }: DividerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full flex justify-center py-8"
    >
      <img src={src} className={`opacity-80 object-contain max-w-full ${className}`} alt="Decoration" />
    </motion.div>
  );
};

export default Divider;
