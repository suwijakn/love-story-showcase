import { Heart, Calendar, Image, MapPin } from "lucide-react";

const navItems = [
  { href: "#home", icon: Heart, label: "Home" },
  { href: "#program", icon: Calendar, label: "Program" },
  { href: "#gallery", icon: Image, label: "Gallery" },
  { href: "#location", icon: MapPin, label: "Location" },
];

const MobileNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-50 flex justify-around items-center h-16 md:hidden">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.href}
            href={item.href}
            className="flex flex-col items-center justify-center text-muted-foreground hover:bg-muted w-full h-full active:text-primary transition-colors"
          >
            <Icon size={20} className="mb-1" />
            <span className="text-[10px]">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
};

export default MobileNav;
