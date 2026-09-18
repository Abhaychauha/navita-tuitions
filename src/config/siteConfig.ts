export const siteConfig = {
  businessName: "Navita Tuitions",
  tagline: "Build Strong Foundations. Achieve Better Results.",
  subheadline: "Personalised tuition for students from Grade 1 to Grade 10 across ICSE, CBSE, State Board and NIOS — with focused academic support, regular practice and exam preparation.",
  
  // Contact Information
  phone: "088672 87115",
  phoneTel: "tel:08867287115",
  phoneFormatted: "+91 88672 87115",
  whatsappNumber: "918867287115",
  email: "contact@navitatuitions.com",
  
  // Address
  address: {
    line1: "23, 2nd Floor, Rajarajeshwari Complex",
    line2: "9th Cross, CJ Venkatesh Das Road",
    landmark: "Opposite New Rajshree Medicals",
    area: "Padmanabhanagar",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560070",
    fullAddress: "23, 2nd Floor, Rajarajeshwari Complex, 9th Cross, CJ Venkatesh Das Road, Opposite New Rajshree Medicals, Padmanabhanagar, Bengaluru, Karnataka 560070"
  },
  
  // Maps & Location
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.756285437877!2d77.5583273!3d12.9182103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159048a1f81d%3A0x6a1005a30591ad0f!2sPadmanabhanagar%2C%20Bengaluru%2C%20Karnataka%20560070!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  googleMapsDirectionsUrl: "https://maps.google.com/?q=23,+2nd+Floor,+Rajarajeshwari+Complex,+9th+Cross,+CJ+Venkatesh+Das+Road,+Padmanabhanagar,+Bengaluru+560070",
  
  // Worksheet Pricing Model (Configurable)
  worksheetPrice: {
    amount: 499,
    currency: "INR",
    displayPrice: "₹499",
    period: "One-Time All-Access",
    title: "Complete Worksheet Library Access",
    benefits: [
      "Instant access to all current and future premium worksheets",
      "Unlimited high-resolution printable PDF downloads",
      "Covering Grades 1–10 (ICSE, CBSE, State Board, NIOS)",
      "Mathematics, English Grammar, Science, and Computer Applications",
      "Lifetime account access with zero recurring monthly fees"
    ]
  },

  // Free Consultation Policy
  freeConsultationOffer: true,
  freeConsultationText: "Book a Free Consultation",
  
  // WhatsApp Message Generator
  getWhatsAppUrl: (customText?: string) => {
    const defaultText = "Hello Navita Tuitions, I would like to enquire about tuition classes & worksheets for my child.";
    const text = encodeURIComponent(customText || defaultText);
    return `https://wa.me/918867287115?text=${text}`;
  },

  // Streamlined 7 Core Navigation Items
  navLinks: [
    { name: "Home", path: "/" },
    { name: "Worksheets", path: "/worksheets" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Reviews", path: "/reviews" },
    { name: "FAQ", path: "/faq" },
  ],

  // Nearby Areas Served
  neighbourhoods: [
    "Padmanabhanagar",
    "Banashankari 2nd & 3rd Stage",
    "Kumaraswamy Layout",
    "Uttarahalli",
    "Girinagar",
    "Chikkalasandra",
    "Kathriguppe",
    "Jayanagar",
    "JP Nagar"
  ]
};
