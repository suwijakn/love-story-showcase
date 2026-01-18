// ============================================
// WEDDING CONFIGURATION FILE
// Edit this file to customize your wedding invitation
// ============================================

import heroMainImageBlack from "@/assets/logo_TS-Monogram.png";
import heroMainImage from "@/assets/TS-Monogram-white.png";
import heroBackgroundImage from "@/assets/hero_background-anime.jpg";
// import heroBackgroundImage from "@/assets/hero_background-improved-blue.png";
// import heroBackgroundImage from "@/assets/hero_background-improved.png";
import schedule from "@/assets/schedule.png";

export const weddingConfig = {
  // ============================================
  // COUPLE INFORMATION
  // ============================================
  couple: {
    person1: {
      name: "Pinky",
      fullName: "Thawanya",
    },
    person2: {
      name: "Guy",
      fullName: "Suwijak",
    },
  },

// ============================================
  // WEDDING DATE & TIME
  // ============================================
  event: {
    date: new Date("2026-02-20T18:00:00"), // Updated date/time
    dateDisplay: "20 February 2026",       // Updated display text
    time: "18:00 - 21:00",                 // Updated time
    calendarFile: "/wedding-event.ics",    
  },

  // ============================================
  // VENUE INFORMATION
  // ============================================
  venue: {
    name: "Rin at Raintree, Sila Hall",
    address: "276 Soi Rama IX 17, Bang Kapi, Huai Khwang, Bangkok 10310",
    // This uses a search-based embed that works without a specific API key
    mapEmbedUrl: "https://maps.google.com/maps?q=Rin%20at%20Raintree%20Bangkok&t=&z=15&ie=UTF8&iwloc=&output=embed",
    // This link will open Google Maps with the destination pre-filled
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Rin+at+Raintree+Bangkok",
  },

  // ============================================
  // RSVP INFORMATION
  // ============================================
  rsvp: {
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeSm2ywJBxV6uqrbjHFUQbNLG6SuVDqo_hfoJjRI2AD5lCPiw/viewform?usp=sf_link",
    message: "เพื่อให้เราสามารถวางแผนในการดูแลท่าน ซึ่งเป็นแขกคนสำคัญได้อย่างเต็มที่ ขอรบกวนทุกท่านทำแบบตอบรับการเข้าร่วมงานให้เราด้วยนะคะ/ครับ",
    buttonText: "กดเพื่อลงทะเบียนเข้าร่วมงาน",
    subtitle: "Hope to see you at our wedding",
  },

  // ============================================
  // HERO SECTION IMAGES
  // ============================================
  images: {
    heroBackground: heroBackgroundImage,
    heroMain: heroMainImage,
    divider1: "https://e-card.manitawedding.com/wp-content/uploads/2024/12/Asset-18.png",
    divider2: "https://e-card.manitawedding.com/wp-content/uploads/2024/12/Asset-21.png",
    divider3: schedule,
    introCard1: "https://e-card.manitawedding.com/wp-content/uploads/2024/12/R17-052_01.png",
    introCard2: "https://e-card.manitawedding.com/wp-content/uploads/2024/12/R17-052_02.png",
    programIcon: heroMainImageBlack,
    dateText: "https://e-card.manitawedding.com/wp-content/uploads/2025/05/LINE_20250522_161709.png",
    namesText: "https://e-card.manitawedding.com/wp-content/uploads/2025/06/R17-052.png",
    largePhoto: "https://e-card.manitawedding.com/wp-content/uploads/2024/12/Photo_R17-051-10-scaled.jpg",
    rsvpHeader: "https://e-card.manitawedding.com/wp-content/uploads/2025/07/Asset-25-768x154-1.png",
    rsvpPhoto: "https://e-card.manitawedding.com/wp-content/uploads/2024/11/R17-050-5-1-scaled.jpg",
  },

  // ============================================
  // GALLERY SECTION
  // ============================================
  gallery: {
    videoUrl: "https://www.youtube-nocookie.com/embed/3sxwcJh4Q5s?si=ykUmNZ-EQPnqgZfC&controls=0",
    images: [
      "https://e-card.manitawedding.com/wp-content/uploads/2024/12/Photo_R17-051-2-scaled.jpg",
      "https://e-card.manitawedding.com/wp-content/uploads/2024/12/Photo_R17-051-3-scaled.jpg",
      "https://e-card.manitawedding.com/wp-content/uploads/2024/12/Photo_R17-051-4-scaled.jpg",
      "https://e-card.manitawedding.com/wp-content/uploads/2024/12/Photo_R17-051-5-scaled.jpg",
      "https://e-card.manitawedding.com/wp-content/uploads/2024/12/Photo_R17-051-6-scaled.jpg",
      "https://e-card.manitawedding.com/wp-content/uploads/2024/12/Photo_R17-051-7-scaled.jpg",
      "https://e-card.manitawedding.com/wp-content/uploads/2024/12/Photo_R17-051-8-scaled.jpg",
      "https://e-card.manitawedding.com/wp-content/uploads/2024/12/Photo_R17-051-9-scaled.jpg",
      "https://e-card.manitawedding.com/wp-content/uploads/2024/12/Photo_R17-051-10-scaled.jpg",
      "https://e-card.manitawedding.com/wp-content/uploads/2024/12/Photo_R17-051-11-scaled.jpg",
      "https://e-card.manitawedding.com/wp-content/uploads/2024/12/Photo_R17-051-12-scaled.jpg",
      "https://e-card.manitawedding.com/wp-content/uploads/2024/12/Photo_R17-051-13-scaled.jpg",
    ],
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    poweredByText: "Powered by",
    logo: "https://e-card.manitawedding.com/wp-content/uploads/2022/10/LogoManita_New_2020.png",
    linkText: "การ์ดแต่งงานมานิตาเวดดิ้ง",
    linkUrl: "https://www.manitawedding.com/",
  },
};

export type WeddingConfig = typeof weddingConfig;
