/*
  ============================================================
  PROJECTS — the only file you need to edit to add a website.
  ============================================================

  To add a new project:
    1. Copy one whole entry below (from its opening { to its closing },).
    2. Paste it at the TOP of the list (newest first) and edit the values.
    3. Give it a unique "slug" (lowercase, dashes, no spaces). Its page will be:
         project.html?p=your-slug
    4. Put the screenshots in  images/projects/your-slug/
       and update the "cover" and "screenshots" paths.
    5. Set "sample" to false (or delete that line) for real projects.

  Notes:
    - "url" is the live website. Leave it as "" to show "Live link coming soon".
    - "screenshots" type is "desktop" or "mobile" (controls the frame shown).
    - Keep the quotes and commas exactly as they are in the examples.
*/

window.PROJECTS = [
  {
    slug: "akwaaba-eatery",
    name: "Akwaaba Eatery",
    category: "Restaurant",
    location: "Accra",
    year: 2026,
    package: "Starter",
    summary: "A mouth-watering one-page site with menu, opening hours and one-tap WhatsApp ordering.",
    description: "Akwaaba Eatery needed a simple way for hungry customers to find their menu, location and opening hours, and to place orders without calling. I built a fast single-page site with the full menu, a Google Map and a WhatsApp order button that pre-fills the customer's message.",
    whatIDid: [
      "Design and build of a one-page website",
      "Menu section that is easy to update",
      "WhatsApp ordering button and Google Map",
      "Domain, hosting and business email set-up"
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Google Maps"],
    url: "",
    cover: "images/projects/akwaaba-eatery/desktop.svg",
    screenshots: [
      { src: "images/projects/akwaaba-eatery/desktop.svg", alt: "Akwaaba Eatery homepage on desktop", type: "desktop" },
      { src: "images/projects/akwaaba-eatery/mobile.svg", alt: "Akwaaba Eatery homepage on a phone", type: "mobile" }
    ],
    sample: true
  },
  {
    slug: "kente-threads",
    name: "Kente Threads",
    category: "Online shop",
    location: "Kumasi",
    year: 2026,
    package: "Growth",
    summary: "An online fashion store taking Mobile Money payments, with nationwide delivery options.",
    description: "Kente Threads was selling on Instagram and wanted its own shop. I set up an online store with product categories, size options, Mobile Money and card checkout, and delivery zones across Ghana, so orders arrive organised instead of in DMs.",
    whatIDid: [
      "Custom online shop design and build",
      "Mobile Money and card payments",
      "Delivery zones and order emails",
      "Training so the owner can add products"
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
    url: "",
    cover: "images/projects/kente-threads/desktop.svg",
    screenshots: [
      { src: "images/projects/kente-threads/desktop.svg", alt: "Kente Threads shop on desktop", type: "desktop" },
      { src: "images/projects/kente-threads/mobile.svg", alt: "Kente Threads shop on a phone", type: "mobile" }
    ],
    sample: true
  },
  {
    slug: "nanas-beauty-lounge",
    name: "Nana's Beauty Lounge",
    category: "Salon & beauty",
    location: "Tema",
    year: 2025,
    package: "Business",
    summary: "A stylish salon website with a price list, photo gallery and appointment requests.",
    description: "Nana's Beauty Lounge wanted to look as polished online as it does in person. The site shows services and prices, a gallery of recent work and an appointment request form, and it ranks for searches like 'salon in Tema'.",
    whatIDid: [
      "Five-page website design and build",
      "Services and price list pages",
      "Photo gallery of recent work",
      "Basic SEO and Google Business Profile link"
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    url: "",
    cover: "images/projects/nanas-beauty-lounge/desktop.svg",
    screenshots: [
      { src: "images/projects/nanas-beauty-lounge/desktop.svg", alt: "Nana's Beauty Lounge homepage on desktop", type: "desktop" },
      { src: "images/projects/nanas-beauty-lounge/mobile.svg", alt: "Nana's Beauty Lounge homepage on a phone", type: "mobile" }
    ],
    sample: true
  },
  {
    slug: "volta-build",
    name: "Volta Build & Co.",
    category: "Construction",
    location: "Ho",
    year: 2025,
    package: "Business",
    summary: "A corporate site that shows completed projects and wins contract enquiries.",
    description: "Volta Build & Co. needed credibility when bidding for contracts. I built a corporate website with a portfolio of completed buildings, service pages and a quote request form that goes straight to the director's inbox.",
    whatIDid: [
      "Corporate website design and build",
      "Project portfolio with photo galleries",
      "Quote request form",
      "Basic SEO and fast image loading"
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    url: "",
    cover: "images/projects/volta-build/desktop.svg",
    screenshots: [
      { src: "images/projects/volta-build/desktop.svg", alt: "Volta Build & Co. homepage on desktop", type: "desktop" },
      { src: "images/projects/volta-build/mobile.svg", alt: "Volta Build & Co. homepage on a phone", type: "mobile" }
    ],
    sample: true
  },
  {
    slug: "brightpath-tutors",
    name: "BrightPath Tutors",
    category: "Education",
    location: "Accra",
    year: 2024,
    package: "Starter",
    summary: "A clear, friendly site for a home-tutoring service, built to turn parents into enquiries.",
    description: "BrightPath Tutors wanted parents to understand their offer in seconds. The three-page site explains subjects and levels, shows tutor profiles and makes it easy to book a free first lesson on WhatsApp.",
    whatIDid: [
      "Three-page website design and build",
      "Tutor profiles and subjects page",
      "WhatsApp booking button",
      "Ongoing Care plan for monthly updates"
    ],
    tech: ["HTML5", "CSS3", "JavaScript"],
    url: "",
    cover: "images/projects/brightpath-tutors/desktop.svg",
    screenshots: [
      { src: "images/projects/brightpath-tutors/desktop.svg", alt: "BrightPath Tutors homepage on desktop", type: "desktop" },
      { src: "images/projects/brightpath-tutors/mobile.svg", alt: "BrightPath Tutors homepage on a phone", type: "mobile" }
    ],
    sample: true
  },
  {
    slug: "harbour-dental",
    name: "Harbour Dental Clinic",
    category: "Healthcare",
    location: "Takoradi",
    year: 2024,
    package: "Growth",
    summary: "A trustworthy clinic website with online appointment booking and service guides.",
    description: "Harbour Dental Clinic was losing time to phone bookings. I built a website with treatment guides, dentist profiles and an online booking system that shows available slots and sends reminders to patients.",
    whatIDid: [
      "Website design and build",
      "Custom online booking system",
      "Treatment information pages",
      "Basic SEO for local searches"
    ],
    tech: ["Laravel", "MySQL", "Tailwind CSS", "Google Maps"],
    url: "",
    cover: "images/projects/harbour-dental/desktop.svg",
    screenshots: [
      { src: "images/projects/harbour-dental/desktop.svg", alt: "Harbour Dental Clinic homepage on desktop", type: "desktop" },
      { src: "images/projects/harbour-dental/mobile.svg", alt: "Harbour Dental Clinic homepage on a phone", type: "mobile" }
    ],
    sample: true
  }
];
