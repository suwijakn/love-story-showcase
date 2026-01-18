import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";
import { useCountdown } from "@/hooks/useCountdown";

const CountdownSection = () => {
  const { images, event } = weddingConfig;
  const timeRemaining = useCountdown(event.date);

  const countdownItems = [
    { value: timeRemaining.days, label: "Days" },
    { value: timeRemaining.hours, label: "Hours" },
    { value: timeRemaining.minutes, label: "Min" },
    { value: timeRemaining.seconds, label: "Sec" },
  ];

  return (
    <section id="program" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Decorative Icon */}
        {/* <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          src={images.programIcon}
          className="w-20 sm:w-24 md:w-32 mb-6 object-contain"
          alt="Program Icon"
        /> */}

        {/* Date Graphics */}
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          src={images.dateText}
          className="w-11/12 sm:w-4/5 md:w-2/3 max-w-2xl mb-4 object-contain"
          alt="Wedding Date"
        />
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          src={images.namesText}
          className="w-4/5 sm:w-2/3 md:w-1/2 max-w-xl mb-8 object-contain"
          alt="Couple Names"
        />

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-4 gap-2 md:gap-8 text-center mb-10 w-full max-w-2xl"
        >
          {countdownItems.map((item, index) => (
            <div key={item.label} className="flex flex-col">
              <motion.span
                key={item.value}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="text-3xl md:text-5xl font-extralight text-foreground tracking-wide"
              >
                {item.value.toString().padStart(2, "0")}
              </motion.span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Add to Calendar Button */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          href={event.calendarFile}
          className="btn-outline"
        >
          Add to Calendar
        </motion.a>
      </div>
    </section>
  );
};

export default CountdownSection;
