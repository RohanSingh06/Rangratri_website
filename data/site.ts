/*
===========================================================
RANGRATRI SITE CONFIGURATION
Phase A — Code Correctness
Iteration: A4

Purpose:
- Centralize website-level metadata.
- Define the single source for primary navigation.
- Keep route paths consistent with the actual Next.js
  app/ directory structure.
- Centralize SEO keyword intelligence.
- Support Hindi, English, Hinglish and local search intent.
- Avoid visible keyword stuffing on the website.
===========================================================
*/

export const siteUrl = new URL("https://www.rangratrievents.in");

export const site = {
  url: siteUrl.origin,

  /*
  ---------------------------------------------------------
  BRAND
  ---------------------------------------------------------
  */

  brand: {
    name: "Rangratri Events",
    shortName: "Rangratri",
    handle: "@rangratri.events",
    city: "Katihar",
    state: "Bihar",
    country: "India",
  },

  /*
  ---------------------------------------------------------
  SEO / SITE METADATA
  ---------------------------------------------------------
  Keep the primary title concise.

  Do NOT place the entire keyword universe into the title.
  The keyword registry below is intended for:
  - page metadata
  - content planning
  - internal linking
  - FAQ generation
  - structured data
  - future landing pages
  ---------------------------------------------------------
  */

  title:
    "Best Dandiya Night in Katihar | Rangratri Navratri Mahautsav 2026",

  description:
    "Experience Rangratri Navratri Mahautsav 2026 — a premium Garba and Dandiya night in Katihar with music, DJ, festive lighting, food and unforgettable celebrations at Vardhan Banquet.",

  location: "Katihar, Bihar, India",

  /*
  ---------------------------------------------------------
  PRIMARY SEARCH INTENT
  ---------------------------------------------------------
  Highest-priority phrases for the main event.
  */

  seo: {
    primaryKeywords: [
      "Dandiya Night Katihar",
      "Dandiya Night in Katihar",
      "Garba Night Katihar",
      "Garba Night in Katihar",
      "Navratri Events Katihar",
      "Navratri Event Katihar",
      "Navratri Mahautsav Katihar",
      "Dandiya Tickets Katihar",
      "Garba Tickets Katihar",
      "Navratri Tickets Katihar",
      "Dandiya Pass Katihar",
      "Garba Pass Katihar",
      "Navratri Pass Katihar",
      "Dandiya Booking Katihar",
      "Garba Booking Katihar",
      "Navratri Booking Katihar",
      "Rangratri Katihar",
      "Rangratri Events",
      "Rangratri Navratri Mahautsav 2026",
    ],

    /*
    -------------------------------------------------------
    ADJECTIVE / COMMERCIAL INTENT
    -------------------------------------------------------
    */

    commercialKeywords: [
      "Best Dandiya Night Katihar",
      "Best Dandiya Night in Katihar",
      "Best Garba Night Katihar",
      "Best Garba Night in Katihar",
      "Best Navratri Event Katihar",
      "Best Navratri Events Katihar",
      "Best Navratri Celebration Katihar",
      "Best Dandiya Event Katihar",
      "Best Garba Event Katihar",
      "Best Dandiya Event in Katihar",
      "Best Garba Event in Katihar",
      "Premium Dandiya Night Katihar",
      "Premium Garba Night Katihar",
      "Premium Navratri Event Katihar",
      "Premium Navratri Celebration Katihar",
      "Premium Dandiya Event Katihar",
      "Premium Garba Event Katihar",
      "Royal Dandiya Night Katihar",
      "Royal Garba Night Katihar",
      "Royal Navratri Event Katihar",
      "Royal Dandiya Event Katihar",
      "Grand Dandiya Night Katihar",
      "Grand Garba Night Katihar",
      "Grand Navratri Event Katihar",
      "Grand Navratri Celebration Katihar",
      "Luxury Dandiya Night Katihar",
      "Luxury Garba Night Katihar",
      "Luxury Navratri Event Katihar",
      "Big Dandiya Night Katihar",
      "Big Garba Night Katihar",
      "Big Navratri Event Katihar",
      "Biggest Dandiya Night Katihar",
      "Biggest Garba Night Katihar",
      "Biggest Navratri Event Katihar",
      "Top Dandiya Event Katihar",
      "Top Garba Event Katihar",
      "Top Navratri Event Katihar",
      "Popular Dandiya Night Katihar",
      "Popular Garba Night Katihar",
      "Famous Dandiya Night Katihar",
      "Famous Garba Night Katihar",
      "Unforgettable Dandiya Night Katihar",
      "Unforgettable Garba Night Katihar",
    ],

    /*
    -------------------------------------------------------
    EVENT / YEAR KEYWORDS
    -------------------------------------------------------
    */

    eventKeywords: [
      "Navratri 2026 Katihar",
      "Navratri 2026 in Katihar",
      "Dandiya 2026 Katihar",
      "Dandiya Night 2026 Katihar",
      "Garba 2026 Katihar",
      "Garba Night 2026 Katihar",
      "Navratri Event 2026 Katihar",
      "Navratri Events 2026 Katihar",
      "Dandiya Event 2026 Katihar",
      "Garba Event 2026 Katihar",
      "Navratri Celebration 2026 Katihar",
      "Navratri Mahautsav 2026 Katihar",
      "Navratri Mahotsav 2026 Katihar",
      "Rangratri 2026",
      "Rangratri 2026 Katihar",
      "Rangratri Events 2026",
      "Rangratri Events Katihar 2026",
      "Rangratri Navratri 2026",
      "Rangratri Navratri Mahautsav",
      "20 October 2026 Katihar event",
      "20 October 2026 Katihar",
      "October 2026 events Katihar",
      "October 2026 Navratri Katihar",
      "October 2026 Dandiya Katihar",
      "October 2026 Garba Katihar",
    ],

    /*
    -------------------------------------------------------
    DANDIYA KEYWORDS
    -------------------------------------------------------
    */

    dandiyaKeywords: [
      "Dandiya Katihar",
      "Dandiya Night Katihar",
      "Dandiya Night in Katihar",
      "Dandiya event Katihar",
      "Dandiya events Katihar",
      "Dandiya program Katihar",
      "Dandiya function Katihar",
      "Dandiya celebration Katihar",
      "Dandiya celebration in Katihar",
      "Dandiya party Katihar",
      "Dandiya festival Katihar",
      "Dandiya festival in Katihar",
      "Dandiya show Katihar",
      "Dandiya dance Katihar",
      "Dandiya dance event Katihar",
      "Dandiya night near me",
      "Dandiya near me",
      "Dandiya event near me",
      "Dandiya night near Katihar",
      "Dandiya tickets Katihar",
      "Dandiya ticket Katihar",
      "Dandiya pass Katihar",
      "Dandiya passes Katihar",
      "Dandiya booking Katihar",
      "Dandiya booking online Katihar",
      "Dandiya tickets online Katihar",
      "Dandiya ticket booking Katihar",
      "Dandiya pass booking Katihar",
      "Dandiya entry pass Katihar",
      "Dandiya VIP pass Katihar",
      "Dandiya VIP tickets Katihar",
      "Dandiya couple pass Katihar",
      "Dandiya group pass Katihar",
      "Dandiya solo pass Katihar",
      "Dandiya night tickets Katihar",
      "Dandiya night passes Katihar",
      "Dandiya night booking Katihar",
      "Dandiya night Katihar tickets",
      "Dandiya night Katihar passes",
      "Dandiya night Katihar booking",
    ],

    /*
    -------------------------------------------------------
    GARBA KEYWORDS
    -------------------------------------------------------
    */

    garbaKeywords: [
      "Garba Katihar",
      "Garba Night Katihar",
      "Garba Night in Katihar",
      "Garba event Katihar",
      "Garba events Katihar",
      "Garba program Katihar",
      "Garba function Katihar",
      "Garba celebration Katihar",
      "Garba celebration in Katihar",
      "Garba party Katihar",
      "Garba festival Katihar",
      "Garba festival in Katihar",
      "Garba show Katihar",
      "Garba dance Katihar",
      "Garba dance event Katihar",
      "Garba night near me",
      "Garba near me",
      "Garba event near me",
      "Garba night near Katihar",
      "Garba tickets Katihar",
      "Garba ticket Katihar",
      "Garba pass Katihar",
      "Garba passes Katihar",
      "Garba booking Katihar",
      "Garba booking online Katihar",
      "Garba tickets online Katihar",
      "Garba ticket booking Katihar",
      "Garba pass booking Katihar",
      "Garba entry pass Katihar",
      "Garba VIP pass Katihar",
      "Garba VIP tickets Katihar",
      "Garba couple pass Katihar",
      "Garba group pass Katihar",
      "Garba solo pass Katihar",
      "Garba night tickets Katihar",
      "Garba night passes Katihar",
      "Garba night booking Katihar",
    ],

    /*
    -------------------------------------------------------
    NAVRATRI KEYWORDS
    -------------------------------------------------------
    */

    navratriKeywords: [
      "Navratri Katihar",
      "Navratri in Katihar",
      "Navratri event Katihar",
      "Navratri events Katihar",
      "Navratri program Katihar",
      "Navratri function Katihar",
      "Navratri celebration Katihar",
      "Navratri celebration in Katihar",
      "Navratri festival Katihar",
      "Navratri festival in Katihar",
      "Navratri party Katihar",
      "Navratri night Katihar",
      "Navratri night in Katihar",
      "Navratri show Katihar",
      "Navratri activities Katihar",
      "Navratri event near me",
      "Navratri near me",
      "Navratri celebration near me",
      "Navratri tickets Katihar",
      "Navratri ticket Katihar",
      "Navratri passes Katihar",
      "Navratri pass Katihar",
      "Navratri booking Katihar",
      "Navratri booking online Katihar",
      "Navratri tickets online Katihar",
      "Navratri ticket booking Katihar",
      "Navratri pass booking Katihar",
      "Navratri entry pass Katihar",
      "Navratri VIP pass Katihar",
      "Navratri VIP tickets Katihar",
      "Navratri couple pass Katihar",
      "Navratri group pass Katihar",
      "Navratri solo pass Katihar",
      "Navratri night tickets Katihar",
      "Navratri night passes Katihar",
      "Navratri night booking Katihar",
    ],

    /*
    -------------------------------------------------------
    HINDI KEYWORDS
    -------------------------------------------------------
    */

    hindiKeywords: [
      "डांडिया नाइट कटिहार",
      "डांडिया नाइट कटिहार 2026",
      "कटिहार डांडिया नाइट",
      "कटिहार में डांडिया नाइट",
      "कटिहार डांडिया",
      "डांडिया इवेंट कटिहार",
      "डांडिया कार्यक्रम कटिहार",
      "डांडिया फंक्शन कटिहार",
      "डांडिया टिकट कटिहार",
      "डांडिया टिकट बुकिंग कटिहार",
      "डांडिया पास कटिहार",
      "डांडिया पास बुकिंग कटिहार",
      "डांडिया नाइट टिकट कटिहार",
      "डांडिया नाइट पास कटिहार",
      "डांडिया नाइट बुकिंग कटिहार",
      "डांडिया मेरे पास",
      "डांडिया पास में",
      "डांडिया नाइट पास में",
      "डांडिया इवेंट पास में",
      "गरबा नाइट कटिहार",
      "गरबा नाइट कटिहार 2026",
      "कटिहार गरबा नाइट",
      "कटिहार में गरबा नाइट",
      "कटिहार गरबा",
      "गरबा इवेंट कटिहार",
      "गरबा कार्यक्रम कटिहार",
      "गरबा फंक्शन कटिहार",
      "गरबा टिकट कटिहार",
      "गरबा टिकट बुकिंग कटिहार",
      "गरबा पास कटिहार",
      "गरबा पास बुकिंग कटिहार",
      "गरबा नाइट टिकट कटिहार",
      "गरबा नाइट पास कटिहार",
      "गरबा नाइट बुकिंग कटिहार",
      "गरबा पास में",
      "गरबा नाइट पास में",
      "गरबा इवेंट पास में",
      "नवरात्रि इवेंट कटिहार",
      "नवरात्रि इवेंट कटिहार 2026",
      "कटिहार नवरात्रि इवेंट",
      "कटिहार में नवरात्रि इवेंट",
      "नवरात्रि कार्यक्रम कटिहार",
      "नवरात्रि प्रोग्राम कटिहार",
      "नवरात्रि फंक्शन कटिहार",
      "नवरात्रि उत्सव कटिहार",
      "नवरात्रि महोत्सव कटिहार",
      "नवरात्रि महोत्सव 2026 कटिहार",
      "नवरात्रि टिकट कटिहार",
      "नवरात्रि पास कटिहार",
      "नवरात्रि टिकट बुकिंग कटिहार",
      "नवरात्रि पास बुकिंग कटिहार",
      "नवरात्रि इवेंट टिकट कटिहार",
      "नवरात्रि इवेंट पास कटिहार",
      "नवरात्रि मेरे पास",
      "नवरात्रि पास में",
    ],

    /*
    -------------------------------------------------------
    HINGLISH / NATURAL SEARCH QUERIES
    -------------------------------------------------------
    These are useful for conversational search and FAQ content.
    */

    hinglishKeywords: [
      "Katihar me dandiya night",
      "Katihar me garba night",
      "Katihar me navratri event",
      "Katihar me dandiya kaha hai",
      "Katihar me garba kaha hai",
      "Katihar me navratri kaha hai",
      "Katihar me dandiya kab hai",
      "Katihar me garba kab hai",
      "Katihar me navratri kab hai",
      "Katihar dandiya ticket kaha milega",
      "Katihar garba ticket kaha milega",
      "Katihar navratri ticket kaha milega",
      "Katihar dandiya pass kaise book kare",
      "Katihar garba pass kaise book kare",
      "Katihar navratri pass kaise book kare",
      "Dandiya night ka ticket Katihar",
      "Garba night ka ticket Katihar",
      "Navratri event ka ticket Katihar",
      "Dandiya pass Katihar me kaha milega",
      "Garba pass Katihar me kaha milega",
      "Navratri pass Katihar me kaha milega",
      "best dandiya night in Katihar",
      "best garba night in Katihar",
      "best navratri event in Katihar",
      "premium dandiya night in Katihar",
      "premium garba night in Katihar",
      "premium navratri event in Katihar",
      "royal dandiya night in Katihar",
      "royal garba night in Katihar",
      "Katihar ka best dandiya event",
      "Katihar ka best garba event",
      "Katihar ka best navratri event",
    ],

    /*
    -------------------------------------------------------
    NEAR-ME / LOCAL INTENT
    -------------------------------------------------------
    */

    localIntentKeywords: [
      "Dandiya near me",
      "Garba near me",
      "Navratri near me",
      "Dandiya night near me",
      "Garba night near me",
      "Navratri event near me",
      "Navratri events near me",
      "Dandiya event near me",
      "Garba event near me",
      "Dandiya tickets near me",
      "Garba tickets near me",
      "Navratri tickets near me",
      "Dandiya passes near me",
      "Garba passes near me",
      "Navratri passes near me",
      "Dandiya booking near me",
      "Garba booking near me",
      "Navratri booking near me",
    ],

    /*
    -------------------------------------------------------
    KATIHAR GEOGRAPHIC VARIANTS
    -------------------------------------------------------
    */

    katiharKeywords: [
      "Katihar events",
      "Events in Katihar",
      "Events near Katihar",
      "Katihar event today",
      "Katihar upcoming events",
      "Upcoming events Katihar",
      "Katihar events 2026",
      "Events in Katihar 2026",
      "Katihar cultural events",
      "Katihar cultural event",
      "Katihar festival",
      "Katihar festival 2026",
      "Katihar celebration",
      "Katihar celebrations",
      "Katihar night event",
      "Katihar evening event",
      "Katihar entertainment",
      "Katihar entertainment events",
      "Katihar music event",
      "Katihar music events",
      "Katihar DJ event",
      "Katihar DJ night",
      "Katihar dance event",
      "Katihar dance night",
      "Katihar family event",
      "Katihar family events",
      "Katihar party",
      "Katihar party event",
      "Katihar festive event",
      "Katihar festive celebration",
    ],

    /*
    -------------------------------------------------------
    BIHAR / REGIONAL DISCOVERY
    -------------------------------------------------------
    */

    regionalKeywords: [
      "Dandiya Bihar",
      "Dandiya Night Bihar",
      "Garba Bihar",
      "Garba Night Bihar",
      "Navratri Events Bihar",
      "Navratri Bihar 2026",
      "Dandiya 2026 Bihar",
      "Garba 2026 Bihar",
      "Navratri 2026 Bihar",
      "Dandiya North Bihar",
      "Garba North Bihar",
      "Navratri North Bihar",
      "Dandiya Seemanchal",
      "Garba Seemanchal",
      "Navratri Seemanchal",
      "Dandiya Purnia",
      "Garba Purnia",
      "Navratri Purnia",
      "Dandiya Araria",
      "Garba Araria",
      "Navratri Araria",
      "Dandiya Kishanganj",
      "Garba Kishanganj",
      "Navratri Kishanganj",
      "Dandiya Forbesganj",
      "Garba Forbesganj",
      "Navratri Forbesganj",
    ],

    /*
    -------------------------------------------------------
    VENUE / LOCATION INTENT
    -------------------------------------------------------
    */

    venueKeywords: [
      "Vardhan Banquet Katihar",
      "Vardan Banquet Katihar",
      "Vardhan Banquet Hall Katihar",
      "Vardan Banquet Hall Katihar",
      "Vardhan Banquet Gami Tola",
      "Vardan Banquet Gami Tola",
      "Dandiya Vardhan Banquet",
      "Garba Vardhan Banquet",
      "Navratri Vardhan Banquet",
      "Dandiya Gami Tola Katihar",
      "Garba Gami Tola Katihar",
      "Navratri Gami Tola Katihar",
      "Dandiya near Vardhan Banquet",
      "Garba near Vardhan Banquet",
      "Navratri event Vardhan Banquet",
    ],

    /*
    -------------------------------------------------------
    TICKET / BOOKING INTENT
    -------------------------------------------------------
    */

    bookingKeywords: [
      "Book Dandiya tickets Katihar",
      "Book Garba tickets Katihar",
      "Book Navratri tickets Katihar",
      "Book Dandiya pass Katihar",
      "Book Garba pass Katihar",
      "Book Navratri pass Katihar",
      "Dandiya online booking Katihar",
      "Garba online booking Katihar",
      "Navratri online booking Katihar",
      "Dandiya ticket online Katihar",
      "Garba ticket online Katihar",
      "Navratri ticket online Katihar",
      "Dandiya pass online Katihar",
      "Garba pass online Katihar",
      "Navratri pass online Katihar",
      "Dandiya booking WhatsApp Katihar",
      "Garba booking WhatsApp Katihar",
      "Navratri booking WhatsApp Katihar",
      "Dandiya ticket price Katihar",
      "Garba ticket price Katihar",
      "Navratri ticket price Katihar",
      "Dandiya pass price Katihar",
      "Garba pass price Katihar",
      "Navratri pass price Katihar",
      "Dandiya ticket booking number Katihar",
      "Dandiya pass booking number Katihar",
      "Rangratri ticket booking",
      "Rangratri ticket price",
      "Rangratri pass price",
      "Rangratri pass booking",
      "Rangratri tickets",
    ],

    /*
    -------------------------------------------------------
    PASS TYPE / PRODUCT INTENT
    -------------------------------------------------------
    */

    passKeywords: [
      "Solo Dandiya Pass Katihar",
      "Couple Dandiya Pass Katihar",
      "Group Dandiya Pass Katihar",
      "VIP Dandiya Pass Katihar",
      "VIP Garba Pass Katihar",
      "VIP Navratri Pass Katihar",
      "Dandiya couple ticket Katihar",
      "Dandiya group ticket Katihar",
      "Dandiya solo ticket Katihar",
      "Garba couple ticket Katihar",
      "Garba group ticket Katihar",
      "Garba solo ticket Katihar",
      "Navratri couple ticket Katihar",
      "Navratri group ticket Katihar",
      "Navratri solo ticket Katihar",
      "Dandiya couple pass Katihar",
      "Dandiya group pass Katihar",
      "Dandiya solo pass Katihar",
      "Garba couple pass Katihar",
      "Garba group pass Katihar",
      "Garba solo pass Katihar",
    ],

    /*
    -------------------------------------------------------
    EXPERIENCE KEYWORDS
    -------------------------------------------------------
    */

    experienceKeywords: [
      "Dandiya with DJ Katihar",
      "Garba with DJ Katihar",
      "Navratri DJ night Katihar",
      "Dandiya DJ night Katihar",
      "Garba DJ night Katihar",
      "Dandiya music night Katihar",
      "Garba music night Katihar",
      "Navratri music night Katihar",
      "Dandiya dance party Katihar",
      "Garba dance party Katihar",
      "Navratri dance party Katihar",
      "Dandiya food Katihar",
      "Garba food Katihar",
      "Navratri food Katihar",
      "Dandiya photo booth Katihar",
      "Garba photo booth Katihar",
      "Navratri photo booth Katihar",
      "Dandiya family event Katihar",
      "Garba family event Katihar",
      "Navratri family event Katihar",
      "Dandiya event for couples Katihar",
      "Dandiya event for families Katihar",
      "Garba event for families Katihar",
      "Navratri event for families Katihar",
    ],

    /*
    -------------------------------------------------------
    DJ / MUSIC INTENT
    -------------------------------------------------------
    */

    musicKeywords: [
      "DJ Katihar",
      "DJ night Katihar",
      "DJ event Katihar",
      "DJ party Katihar",
      "DJ Navratri Katihar",
      "DJ Dandiya Katihar",
      "DJ Garba Katihar",
      "Dandiya DJ Katihar",
      "Garba DJ Katihar",
      "Navratri DJ Katihar",
      "Live DJ Katihar",
      "DJ night near me",
      "Dandiya music Katihar",
      "Garba music Katihar",
      "Navratri music Katihar",
      "DJ Vishal Katihar",
      "DJ Vishal Music Katihar",
    ],

    /*
    -------------------------------------------------------
    SOCIAL / BRAND SEARCH
    -------------------------------------------------------
    */

    brandKeywords: [
      "Rangratri",
      "Rangratri Events",
      "Rangratri Events Katihar",
      "Rangratri Katihar",
      "Rangratri 2026",
      "Rangratri Katihar 2026",
      "Rangratri Navratri",
      "Rangratri Navratri 2026",
      "Rangratri Mahautsav",
      "Rangratri Mahautsav 2026",
      "Rangratri Dandiya",
      "Rangratri Garba",
      "Rangratri tickets",
      "Rangratri passes",
      "Rangratri booking",
      "Rangratri ticket price",
      "Rangratri pass price",
      "Rangratri VIP pass",
      "Rangratri events Katihar Instagram",
      "Rangratri Katihar Instagram",
    ],

    /*
    -------------------------------------------------------
    SPELLING / TYPO / VARIANT SEARCHES
    -------------------------------------------------------
    These can occur naturally in search, but should NOT be
    visibly displayed as copy.
    */

    spellingVariants: [
      "Navratri Mahotsav Katihar",
      "Navratri Mahautsav Katihar",
      "Navratri Mahotsav 2026 Katihar",
      "Navratri Mahautsav 2026 Katihar",
      "Rangratri Events Katihar",
      "Rangratrievents Katihar",
      "Rangratri Event Katihar",
      "Vardan Banquet Katihar",
      "Vardhan Banquet Katihar",
      "Vardan Banquet Hall Katihar",
      "Vardhan Banquet Hall Katihar",
      "Dandiya night in Katihar",
      "Dandiya nite Katihar",
      "Garba nite Katihar",
      "Dandia Night Katihar",
      "Dandia Katihar",
      "Dandya Katihar",
      "Garba Katihar",
      "Navratri Katihar",
    ],

    /*
    -------------------------------------------------------
    DATE / TIME / LOCATION QUESTIONS
    -------------------------------------------------------
    Useful for FAQ and conversational search.
    */

    informationalKeywords: [
      "When is Dandiya Night in Katihar",
      "When is Garba Night in Katihar",
      "When is Navratri event in Katihar",
      "Dandiya Night Katihar date",
      "Garba Night Katihar date",
      "Navratri event Katihar date",
      "Dandiya Katihar date 2026",
      "Garba Katihar date 2026",
      "Navratri Katihar date 2026",
      "Dandiya Night Katihar time",
      "Garba Night Katihar time",
      "Navratri event Katihar time",
      "Where is Dandiya Night in Katihar",
      "Where is Garba Night in Katihar",
      "Where is Navratri event in Katihar",
      "Dandiya venue Katihar",
      "Garba venue Katihar",
      "Navratri venue Katihar",
      "Dandiya timing Katihar",
      "Garba timing Katihar",
      "Navratri timing Katihar",
    ],

    /*
    -------------------------------------------------------
    BOOKMYSHOW / TICKET PLATFORM SEARCH
    -------------------------------------------------------
    Keep these isolated so they can be used only if the
    event is actually listed on that platform.
    */

    ticketPlatformKeywords: [
      "BookMyShow Navratri Katihar",
      "BookMyShow Dandiya Katihar",
      "BookMyShow Garba Katihar",
      "BookMyShow Navratri 2026 Katihar",
      "BookMyShow Dandiya 2026 Katihar",
      "BookMyShow Garba 2026 Katihar",
      "Dandiya Katihar BookMyShow",
      "Garba Katihar BookMyShow",
      "Navratri Katihar BookMyShow",
    ],

    /*
    -------------------------------------------------------
    SOCIAL / DISCOVERY LONG-TAIL
    -------------------------------------------------------
    */

    longTailKeywords: [
      "best place for dandiya in Katihar",
      "best place for garba in Katihar",
      "best place to celebrate Navratri in Katihar",
      "where to play dandiya in Katihar",
      "where to play garba in Katihar",
      "where to celebrate Navratri in Katihar",
      "dandiya night for couples Katihar",
      "dandiya night for family Katihar",
      "garba night for couples Katihar",
      "garba night for family Katihar",
      "Navratri event for couples Katihar",
      "Navratri event for family Katihar",
      "best family Navratri event Katihar",
      "best couple dandiya event Katihar",
      "premium family event Katihar Navratri",
      "premium festive event Katihar",
      "grand festive event Katihar",
      "Indian cultural event Katihar",
      "cultural festival Katihar 2026",
      "traditional event Katihar 2026",
      "festival night Katihar 2026",
      "dance night Katihar 2026",
      "music night Katihar 2026",
    ],

    /*
    -------------------------------------------------------
    KEYWORD CLUSTERS
    -------------------------------------------------------
    Useful for generating future landing pages without
    putting every keyword into the homepage.
    */

    clusters: {
      dandiya: [
        "Dandiya Night Katihar",
        "Dandiya Tickets Katihar",
        "Dandiya Pass Katihar",
        "Dandiya Booking Katihar",
        "Dandiya near me",
      ],

      garba: [
        "Garba Night Katihar",
        "Garba Tickets Katihar",
        "Garba Pass Katihar",
        "Garba Booking Katihar",
        "Garba near me",
      ],

      navratri: [
        "Navratri Events Katihar",
        "Navratri Tickets Katihar",
        "Navratri Pass Katihar",
        "Navratri Booking Katihar",
        "Navratri near me",
      ],

      premium: [
        "Best Dandiya Night Katihar",
        "Premium Dandiya Night Katihar",
        "Royal Garba Night Katihar",
        "Premium Navratri Event Katihar",
        "Best Navratri Event Katihar",
      ],

      local: [
        "Katihar Events",
        "Events in Katihar",
        "Katihar Events 2026",
        "Katihar Cultural Events",
        "Katihar Festival 2026",
      ],

      brand: [
        "Rangratri Events",
        "Rangratri Katihar",
        "Rangratri 2026",
        "Rangratri Navratri 2026",
        "Rangratri Tickets",
        "Rangratri Passes",
      ],
    },
  },

  /*
  ---------------------------------------------------------
  PRIMARY LOCATION
  ---------------------------------------------------------
  */

  location: "Katihar, Bihar, India",

  /*
  ---------------------------------------------------------
  EVENT LOCATION VARIANTS
  ---------------------------------------------------------
  */

  locationKeywords: [
    "Katihar",
    "Katihar Bihar",
    "Katihar, Bihar",
    "Katihar India",
    "Gami Tola Katihar",
    "Gami Tola, Katihar",
    "Vardhan Banquet Katihar",
    "Vardan Banquet Katihar",
    "Vardhan Banquet Hall Katihar",
    "Vardan Banquet Hall Katihar",
  ],

  /*
  ---------------------------------------------------------
  PRIMARY NAVIGATION
  ---------------------------------------------------------
  IMPORTANT:
  Every href below must exactly match a real public route
  inside the Next.js app/ directory.
  ---------------------------------------------------------
  */

  navigation: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "About",
      href: "/about",
    },

    {
      label: "Event",
      href: "/navratri-mahautsav-2026",
    },

    {
      label: "Memories",
      href: "/memories",
    },

    {
      label: "Sponsorship",
      href: "/sponsorship",
    },

    {
      label: "Creator Competition",
      href: "/creators",
    },

    {
      label: "FAQ",
      href: "/faq",
    },

    {
      label: "Contact",
      href: "/contact",
    },
  ],
} as const;