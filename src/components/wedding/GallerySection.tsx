import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const GallerySection = () => {
  const { gallery } = weddingConfig;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [api, setApi] = useState<CarouselApi>();

  // Video tracking refs and state
  const videoRef = useRef<HTMLVideoElement>(null);
  const [timeVisible, setTimeVisible] = useState(0);
  const trackedMilestones = useRef<Set<number>>(new Set());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const openLightbox = (imgUrl: string) => {
    setCurrentImage(imgUrl);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  // Autoplay logic
  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [api]);

  // Video visibility tracking
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start timer if not already running
            if (!timerRef.current) {
              timerRef.current = setInterval(() => {
                setTimeVisible((prev) => prev + 1);
              }, 1000);
            }
          } else {
            // Stop timer
            if (timerRef.current) {
              clearInterval(timerRef.current);
              timerRef.current = null;
            }
          }
        });
      },
      { threshold: 0.5 } // Consider visible when 50% is in viewport
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Check milestones
  useEffect(() => {
    const milestones = [5, 15, 30, 45, 60, 90];
    
    milestones.forEach((milestone) => {
      if (timeVisible >= milestone && !trackedMilestones.current.has(milestone)) {
        trackedMilestones.current.add(milestone);
        if (window.sa_event) {
          window.sa_event("video_watched_milestone", { duration_seconds: milestone });
        }
      }
    });
  }, [timeVisible]);

  return (
    <section id="about-us" className="py-12 md:py-20 bg-background border-t border-border/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-normal mb-2">About Us</h2>
      </motion.div>

      {/* Video replaced by GIF */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col items-center mb-10 px-4"
      >
        <div className="w-full max-w-3xl rounded-lg overflow-hidden shadow-lg bg-muted flex items-center justify-center mb-4">
          <video
            ref={videoRef}
            src={gallery.snapshotSource}
            className="w-full h-auto object-contain"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <p className="text-center font-serif italic text-muted-foreground text-lg md:text-xl">
          Plot twist: It wasn't a prank. Now please RSVP 😌✨
        </p>
      </motion.div>

      {/* Image Carousel */}
      {/* <div className="container mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-2xl mx-auto"
          >
            <CarouselContent>
              {gallery.images.map((img, index) => (
                <CarouselItem key={index}>
                  <div 
                    className="cursor-pointer p-1"
                    onClick={() => openLightbox(img)}
                  >
                    <img
                      src={img}
                      className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg shadow-md hover:opacity-95 transition-opacity"
                      loading="lazy"
                      alt={`Gallery image ${index + 1}`}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </motion.div>
      </div> */}

      {/* Lightbox Modal */}
      {/* <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
            >
              <X size={36} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={currentImage}
              className="max-h-[85vh] max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] object-contain rounded shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              alt="Gallery Preview"
            />
          </motion.div>
        )}
      </AnimatePresence> */}
    </section>
  );
};

export default GallerySection;
