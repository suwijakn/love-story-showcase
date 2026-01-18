import HeroSection from "@/components/wedding/HeroSection";
import Divider from "@/components/wedding/Divider";
import IntroCards from "@/components/wedding/IntroCards";
import CountdownSection from "@/components/wedding/CountdownSection";
import LargePhotoSection from "@/components/wedding/LargePhotoSection";
import GallerySection from "@/components/wedding/GallerySection";
import RSVPSection from "@/components/wedding/RSVPSection";
import LocationSection from "@/components/wedding/LocationSection";
import Footer from "@/components/wedding/Footer";
import MobileNav from "@/components/wedding/MobileNav";
import { weddingConfig } from "@/config/weddingConfig";

const Index = () => {
  return (
    <div className="relative pb-16 md:pb-0">
      <HeroSection />
      {/* <Divider src={weddingConfig.images.divider1} />
      <IntroCards /> */}
      <CountdownSection />
      <LargePhotoSection />
      <GallerySection />
      <RSVPSection />
      <LocationSection />
      {/* <Footer /> */}
      <MobileNav />
    </div>
  );
};

export default Index;
