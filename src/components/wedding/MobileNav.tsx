import { useState, useEffect } from "react";
import { Calendar, Clock, Image, Heart, MapPin, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MusicPlayer from "./MusicPlayer";

const navItems = [
  { href: "#program", icon: Calendar, label: "Calendar" },
  { href: "#schedule", icon: Clock, label: "Schedule" },
  { href: "#gallery", icon: Image, label: "Gallery" },
  { href: "#rsvp", icon: Heart, label: "R.S.V.P", highlighted: true },
  { href: "#location", icon: MapPin, label: "Location" },
];

const MobileNav = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMusicVisible, setIsMusicVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-50 flex justify-around items-center h-16 md:hidden">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
                item.highlighted
                  ? "text-[hsl(var(--wedding-red))] relative"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-[hsl(var(--wedding-red))] active:text-[hsl(var(--wedding-red))]"
              }`}
            >
              {item.highlighted ? (
                <motion.div
                  animate={{ 
                    scale: [1, 1.15, 1],
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="mb-1"
                >
                  <Icon size={22} />
                </motion.div>
              ) : (
                <Icon size={20} className="mb-1" />
              )}
              <span className={`text-[10px] ${item.highlighted ? "font-medium" : ""}`}>
                {item.label}
              </span>
              {item.highlighted && (
                <motion.span 
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute top-1 right-1/2 translate-x-1/2 w-1.5 h-1.5 bg-[hsl(var(--wedding-red))] rounded-full" 
                />
              )}
            </a>
          );
        })}
      </nav>

      <MusicPlayer onClose={() => setIsMusicVisible(false)} />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {!isMusicVisible && showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-20 right-4 z-50 md:hidden w-10 h-10 rounded-full bg-background shadow-lg border border-border flex items-center justify-center text-muted-foreground hover:text-[hsl(var(--wedding-red))] hover:border-[hsl(var(--wedding-red))] transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
