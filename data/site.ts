/*
===========================================================
RANGRATRI SITE CONFIGURATION
Phase A — Code Correctness
Iteration: A5

Purpose:
- Centralize website-level metadata.
- Define the single source for primary navigation.
- Keep route paths consistent with the actual Next.js
  app/ directory structure.
- Centralize SEO keyword intelligence.
- Support Hindi, English, Hinglish and local search intent.
- Arrange keywords by estimated search priority.
- Retain competitive adjective keywords.
- Support future landing pages and content clusters.
- Avoid visible keyword stuffing on the website.

SEO PRIORITY MODEL
-----------------------------------------------------------
P1 = Very High probability / core local search intent
P2 = High probability / commercial + discovery intent
P3 = Medium probability / transactional + descriptive intent
P4 = Low probability / long-tail + competitive adjectives
P5 = Very Low / spelling / typo / variant coverage

IMPORTANT:
These are evidence-based priority tiers informed by the
previous year's local seasonal search/content signals.
They are NOT exact Google search-volume percentages.
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
  =========================================================
  SEO KEYWORD INTELLIGENCE
  =========================================================
  */

  seo: {
    /*
    -------------------------------------------------------
    PRIMARY KEYWORDS
    -------------------------------------------------------
    Ordered approximately by local search probability.

    P1 = Very High
    P2 = High
    P3 = Medium
    P4 = Long-tail / competitive
    P5 = Variants
    -------------------------------------------------------
    */

    primaryKeywords: [
      // ===================================================
      // P1 — VERY HIGH PROBABILITY
      // ===================================================

      "Dandiya Night Katihar",
      "Dandiya Katihar",
      "Dandiya Night in Katihar",
      "Garba Night Katihar",
      "Garba Katihar",
      "Garba Night in Katihar",
      "Navratri Event Katihar",
      "Navratri Events Katihar",
      "Navratri Katihar",
      "Dandiya Event Katihar",
      "Garba Event Katihar",
      "Navratri Celebration Katihar",

      "Dandiya Tickets Katihar",
      "Dandiya Ticket Katihar",
      "Garba Tickets Katihar",
      "Navratri Tickets Katihar",

      // ===================================================
      // P2 — HIGH PROBABILITY
      // ===================================================

      "Dandiya Pass Katihar",
      "Dandiya Passes Katihar",
      "Garba Pass Katihar",
      "Garba Passes Katihar",
      "Navratri Pass Katihar",
      "Navratri Passes Katihar",

      "Dandiya Booking Katihar",
      "Garba Booking Katihar",
      "Navratri Booking Katihar",

      "Dandiya Ticket Booking Katihar",
      "Garba Ticket Booking Katihar",
      "Navratri Ticket Booking Katihar",

      "Katihar Events",
      "Events in Katihar",
      "Katihar Upcoming Events",
      "Upcoming Events Katihar",

      "Navratri 2026 Katihar",
      "Dandiya 2026 Katihar",
      "Garba 2026 Katihar",

      // ===================================================
      // P3 — MEDIUM PROBABILITY
      // ===================================================

      "Dandiya Ticket Price Katihar",
      "Dandiya Pass Price Katihar",
      "Garba Ticket Price Katihar",
      "Garba Pass Price Katihar",
      "Navratri Ticket Price Katihar",
      "Navratri Pass Price Katihar",

      "Dandiya Booking Online Katihar",
      "Garba Booking Online Katihar",
      "Navratri Booking Online Katihar",

      "Dandiya Night Tickets Katihar",
      "Dandiya Night Passes Katihar",
      "Garba Night Tickets Katihar",
      "Garba Night Passes Katihar",
      "Navratri Night Tickets Katihar",

      "Dandiya Venue Katihar",
      "Garba Venue Katihar",
      "Navratri Venue Katihar",

      "Dandiya Night Booking Katihar",
      "Garba Night Booking Katihar",
      "Navratri Night Booking Katihar",

      // ===================================================
      // P4 — LOW / LONG-TAIL
      // ===================================================

      "Best Place for Dandiya in Katihar",
      "Best Place for Garba in Katihar",
      "Best Place to Celebrate Navratri in Katihar",
      "Where to Play Dandiya in Katihar",
      "Where to Play Garba in Katihar",
      "Where to Celebrate Navratri in Katihar",

      "Dandiya Night for Couples Katihar",
      "Dandiya Night for Family Katihar",
      "Garba Night for Couples Katihar",
      "Garba Night for Family Katihar",
      "Navratri Event for Couples Katihar",
      "Navratri Event for Family Katihar",

      // ===================================================
      // BRAND
      // ===================================================

      "Rangratri",
      "Rangratri Events",
      "Rangratri Katihar",
      "Rangratri Events Katihar",
      "Rangratri Navratri Mahautsav 2026",
      "Rangratri 2026",
    ],

    /*
    =======================================================
    COMPETITIVE / ADJECTIVE KEYWORDS
    =======================================================
    These are deliberately retained for differentiation.

    They should primarily support:
    - landing pages
    - headings where natural
    - FAQs
    - supporting copy
    - internal links
    - semantic relevance

    They should NOT all be inserted into one page.
    =======================================================
    */

    commercialKeywords: [
      // ---------------------------------------------------
      // P2 — HIGH-VALUE COMMERCIAL ADJECTIVES
      // ---------------------------------------------------

      "Best Dandiya Night Katihar",
      "Best Dandiya Night in Katihar",
      "Best Dandiya Event Katihar",
      "Best Dandiya Event in Katihar",

      "Best Garba Night Katihar",
      "Best Garba Night in Katihar",
      "Best Garba Event Katihar",
      "Best Garba Event in Katihar",

      "Best Navratri Event Katihar",
      "Best Navratri Events Katihar",
      "Best Navratri Celebration Katihar",

      "Top Dandiya Night Katihar",
      "Top Dandiya Event Katihar",
      "Top Garba Night Katihar",
      "Top Garba Event Katihar",
      "Top Navratri Event Katihar",

      // ---------------------------------------------------
      // P3 — PREMIUM POSITIONING
      // ---------------------------------------------------

      "Premium Dandiya Night Katihar",
      "Premium Dandiya Night in Katihar",
      "Premium Dandiya Event Katihar",
      "Premium Dandiya Experience Katihar",

      "Premium Garba Night Katihar",
      "Premium Garba Night in Katihar",
      "Premium Garba Event Katihar",
      "Premium Garba Experience Katihar",

      "Premium Navratri Event Katihar",
      "Premium Navratri Celebration Katihar",
      "Premium Navratri Experience Katihar",

      "Premium Festive Event Katihar",
      "Premium Festive Experience Katihar",
      "Premium Cultural Event Katihar",

      // ---------------------------------------------------
      // P3 — GRAND / ROYAL
      // ---------------------------------------------------

      "Grand Dandiya Night Katihar",
      "Grand Dandiya Night in Katihar",
      "Grand Dandiya Event Katihar",
      "Grand Dandiya Experience Katihar",

      "Grand Garba Night Katihar",
      "Grand Garba Night in Katihar",
      "Grand Garba Event Katihar",
      "Grand Garba Experience Katihar",

      "Grand Navratri Event Katihar",
      "Grand Navratri Celebration Katihar",
      "Grand Navratri Experience Katihar",

      "Grand Cultural Event Katihar",
      "Grand Festive Event Katihar",
      "Grand Festive Experience Katihar",

      "Royal Dandiya Night Katihar",
      "Royal Dandiya Night in Katihar",
      "Royal Dandiya Event Katihar",

      "Royal Garba Night Katihar",
      "Royal Garba Night in Katihar",
      "Royal Garba Event Katihar",

      "Royal Navratri Event Katihar",
      "Royal Navratri Celebration Katihar",

      // ---------------------------------------------------
      // P4 — LUXURY / ELITE
      // ---------------------------------------------------

      "Luxury Dandiya Night Katihar",
      "Luxury Dandiya Event Katihar",
      "Luxury Garba Night Katihar",
      "Luxury Garba Event Katihar",
      "Luxury Navratri Event Katihar",

      "Elite Dandiya Night Katihar",
      "Elite Dandiya Event Katihar",
      "Elite Garba Night Katihar",
      "Elite Garba Event Katihar",
      "Elite Navratri Event Katihar",

      // ---------------------------------------------------
      // P4 — BIG / MAJOR / POPULAR
      // ---------------------------------------------------

      "Big Dandiya Night Katihar",
      "Big Dandiya Event Katihar",
      "Big Garba Night Katihar",
      "Big Garba Event Katihar",
      "Big Navratri Event Katihar",

      "Major Dandiya Event Katihar",
      "Major Garba Event Katihar",
      "Major Navratri Event Katihar",

      "Popular Dandiya Night Katihar",
      "Popular Dandiya Event Katihar",
      "Popular Garba Night Katihar",
      "Popular Garba Event Katihar",

      // ---------------------------------------------------
      // P4 — EXPERIENCE / EMOTIONAL
      // ---------------------------------------------------

      "Ultimate Dandiya Night Katihar",
      "Ultimate Dandiya Experience Katihar",
      "Ultimate Garba Night Katihar",
      "Ultimate Garba Experience Katihar",
      "Ultimate Navratri Experience Katihar",

      "Unforgettable Dandiya Night Katihar",
      "Unforgettable Garba Night Katihar",
      "Unforgettable Navratri Night Katihar",

      "Exclusive Dandiya Night Katihar",
      "Exclusive Garba Night Katihar",
      "Exclusive Navratri Event Katihar",

      "Special Dandiya Night Katihar",
      "Special Garba Night Katihar",
      "Special Navratri Event Katihar",

      // ---------------------------------------------------
      // P4 — FAMILY / COUPLE POSITIONING
      // ---------------------------------------------------

      "Best Family Dandiya Event Katihar",
      "Best Family Garba Event Katihar",
      "Best Family Navratri Event Katihar",

      "Best Couple Dandiya Event Katihar",
      "Best Couple Garba Event Katihar",
      "Best Couple Navratri Event Katihar",

      "Premium Family Dandiya Event Katihar",
      "Premium Family Garba Event Katihar",
      "Premium Family Navratri Event Katihar",

      "Premium Couple Dandiya Night Katihar",
      "Premium Couple Garba Night Katihar",

      // ---------------------------------------------------
      // P4 — CULTURAL POSITIONING
      // ---------------------------------------------------

      "Traditional Dandiya Night Katihar",
      "Traditional Garba Night Katihar",
      "Traditional Navratri Celebration Katihar",

      "Cultural Dandiya Event Katihar",
      "Cultural Garba Event Katihar",
      "Cultural Navratri Event Katihar",

      "Indian Cultural Event Katihar",
      "Grand Cultural Festival Katihar",
    ],

    /*
    =======================================================
    EVENT / YEAR KEYWORDS
    =======================================================
    */

    eventKeywords: [
      // P1
      "Navratri 2026 Katihar",
      "Dandiya 2026 Katihar",
      "Dandiya Night 2026 Katihar",
      "Garba 2026 Katihar",
      "Garba Night 2026 Katihar",

      // P2
      "Navratri Event 2026 Katihar",
      "Navratri Events 2026 Katihar",
      "Dandiya Event 2026 Katihar",
      "Garba Event 2026 Katihar",
      "Navratri Celebration 2026 Katihar",

      // P3
      "Navratri Mahautsav 2026 Katihar",
      "Navratri Mahotsav 2026 Katihar",
      "Rangratri 2026",
      "Rangratri 2026 Katihar",
      "Rangratri Events 2026",
      "Rangratri Events Katihar 2026",
      "Rangratri Navratri 2026",
      "Rangratri Navratri Mahautsav",

      // Date
      "20 October 2026 Katihar event",
      "20 October 2026 Katihar",
      "October 2026 events Katihar",
      "October 2026 Navratri Katihar",
      "October 2026 Dandiya Katihar",
      "October 2026 Garba Katihar",
    ],

    /*
    =======================================================
    DANDIYA KEYWORDS
    =======================================================
    */

    dandiyaKeywords: [
      // P1
      "Dandiya Katihar",
      "Dandiya Night Katihar",
      "Dandiya Night in Katihar",
      "Dandiya Event Katihar",
      "Dandiya Events Katihar",
      "Dandiya Celebration Katihar",

      // P2
      "Dandiya Program Katihar",
      "Dandiya Function Katihar",
      "Dandiya Party Katihar",
      "Dandiya Festival Katihar",
      "Dandiya Show Katihar",
      "Dandiya Dance Katihar",
      "Dandiya Dance Event Katihar",

      // Near me
      "Dandiya Night Near Me",
      "Dandiya Near Me",
      "Dandiya Event Near Me",
      "Dandiya Night Near Katihar",

      // Tickets
      "Dandiya Tickets Katihar",
      "Dandiya Ticket Katihar",
      "Dandiya Pass Katihar",
      "Dandiya Passes Katihar",
      "Dandiya Booking Katihar",
      "Dandiya Booking Online Katihar",
      "Dandiya Tickets Online Katihar",
      "Dandiya Ticket Booking Katihar",
      "Dandiya Pass Booking Katihar",
      "Dandiya Entry Pass Katihar",

      // Pass types
      "Dandiya VIP Pass Katihar",
      "Dandiya VIP Tickets Katihar",
      "Dandiya Couple Pass Katihar",
      "Dandiya Group Pass Katihar",
      "Dandiya Solo Pass Katihar",

      // Night-specific
      "Dandiya Night Tickets Katihar",
      "Dandiya Night Passes Katihar",
      "Dandiya Night Booking Katihar",
      "Dandiya Night Katihar Tickets",
      "Dandiya Night Katihar Passes",
      "Dandiya Night Katihar Booking",
    ],

    /*
    =======================================================
    GARBA KEYWORDS
    =======================================================
    */

    garbaKeywords: [
      // P1
      "Garba Katihar",
      "Garba Night Katihar",
      "Garba Night in Katihar",
      "Garba Event Katihar",
      "Garba Events Katihar",
      "Garba Celebration Katihar",

      // P2
      "Garba Program Katihar",
      "Garba Function Katihar",
      "Garba Party Katihar",
      "Garba Festival Katihar",
      "Garba Show Katihar",
      "Garba Dance Katihar",
      "Garba Dance Event Katihar",

      // Near me
      "Garba Night Near Me",
      "Garba Near Me",
      "Garba Event Near Me",
      "Garba Night Near Katihar",

      // Tickets
      "Garba Tickets Katihar",
      "Garba Ticket Katihar",
      "Garba Pass Katihar",
      "Garba Passes Katihar",
      "Garba Booking Katihar",
      "Garba Booking Online Katihar",
      "Garba Tickets Online Katihar",
      "Garba Ticket Booking Katihar",
      "Garba Pass Booking Katihar",
      "Garba Entry Pass Katihar",

      // Pass types
      "Garba VIP Pass Katihar",
      "Garba VIP Tickets Katihar",
      "Garba Couple Pass Katihar",
      "Garba Group Pass Katihar",
      "Garba Solo Pass Katihar",

      // Night-specific
      "Garba Night Tickets Katihar",
      "Garba Night Passes Katihar",
      "Garba Night Booking Katihar",
    ],

    /*
    =======================================================
    NAVRATRI KEYWORDS
    =======================================================
    */

    navratriKeywords: [
      // P1
      "Navratri Katihar",
      "Navratri in Katihar",
      "Navratri Event Katihar",
      "Navratri Events Katihar",
      "Navratri Celebration Katihar",
      "Navratri Night Katihar",

      // P2
      "Navratri Program Katihar",
      "Navratri Function Katihar",
      "Navratri Festival Katihar",
      "Navratri Party Katihar",
      "Navratri Show Katihar",
      "Navratri Activities Katihar",

      // Near me
      "Navratri Event Near Me",
      "Navratri Near Me",
      "Navratri Celebration Near Me",

      // Tickets
      "Navratri Tickets Katihar",
      "Navratri Ticket Katihar",
      "Navratri Passes Katihar",
      "Navratri Pass Katihar",
      "Navratri Booking Katihar",
      "Navratri Booking Online Katihar",
      "Navratri Tickets Online Katihar",
      "Navratri Ticket Booking Katihar",
      "Navratri Pass Booking Katihar",
      "Navratri Entry Pass Katihar",

      // Pass types
      "Navratri VIP Pass Katihar",
      "Navratri VIP Tickets Katihar",
      "Navratri Couple Pass Katihar",
      "Navratri Group Pass Katihar",
      "Navratri Solo Pass Katihar",

      // Night
      "Navratri Night Tickets Katihar",
      "Navratri Night Passes Katihar",
      "Navratri Night Booking Katihar",
    ],

    /*
    =======================================================
    HINDI KEYWORDS
    =======================================================
    */

    hindiKeywords: [
      // ---------------------------------------------------
      // P1 — DANDIYA
      // ---------------------------------------------------

      "डांडिया नाइट कटिहार",
      "कटिहार डांडिया नाइट",
      "कटिहार में डांडिया नाइट",
      "कटिहार डांडिया",
      "डांडिया नाइट कटिहार 2026",

      // P2
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

      // Near me
      "डांडिया मेरे पास",
      "डांडिया पास में",
      "डांडिया नाइट पास में",
      "डांडिया इवेंट पास में",

      // ---------------------------------------------------
      // P1 — GARBA
      // ---------------------------------------------------

      "गरबा नाइट कटिहार",
      "कटिहार गरबा नाइट",
      "कटिहार में गरबा नाइट",
      "कटिहार गरबा",
      "गरबा नाइट कटिहार 2026",

      // P2
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

      // ---------------------------------------------------
      // P1 — NAVRATRI
      // ---------------------------------------------------

      "नवरात्रि इवेंट कटिहार",
      "कटिहार नवरात्रि इवेंट",
      "कटिहार में नवरात्रि इवेंट",
      "नवरात्रि इवेंट कटिहार 2026",

      // P2
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

      // Near me
      "नवरात्रि मेरे पास",
      "नवरात्रि पास में",

      // Competitive Hindi
      "कटिहार की बेस्ट डांडिया नाइट",
      "कटिहार की बेस्ट गरबा नाइट",
      "कटिहार का बेस्ट नवरात्रि इवेंट",
      "कटिहार की प्रीमियम डांडिया नाइट",
      "कटिहार की प्रीमियम गरबा नाइट",
      "कटिहार का ग्रैंड नवरात्रि इवेंट",
    ],

    /*
    =======================================================
    HINGLISH / NATURAL SEARCH
    =======================================================
    */

    hinglishKeywords: [
      // P1
      "Katihar me dandiya night",
      "Katihar me garba night",
      "Katihar me navratri event",

      // P2
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

      // Competitive
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

      "Katihar ka premium dandiya event",
      "Katihar ka grand dandiya night",
      "Katihar ka grand garba night",
    ],

    /*
    =======================================================
    NEAR-ME / LOCAL INTENT
    =======================================================
    */

    localIntentKeywords: [
      // P1
      "Dandiya Near Me",
      "Garba Near Me",
      "Navratri Near Me",
      "Dandiya Night Near Me",
      "Garba Night Near Me",
      "Navratri Event Near Me",

      // P2
      "Navratri Events Near Me",
      "Dandiya Event Near Me",
      "Garba Event Near Me",

      "Dandiya Tickets Near Me",
      "Garba Tickets Near Me",
      "Navratri Tickets Near Me",

      "Dandiya Passes Near Me",
      "Garba Passes Near Me",
      "Navratri Passes Near Me",

      "Dandiya Booking Near Me",
      "Garba Booking Near Me",
      "Navratri Booking Near Me",
    ],

    /*
    =======================================================
    KATIHAR GEOGRAPHIC DISCOVERY
    =======================================================
    */

    katiharKeywords: [
      // P1
      "Katihar Events",
      "Events in Katihar",
      "Katihar Upcoming Events",
      "Upcoming Events Katihar",

      // P2
      "Katihar Events 2026",
      "Events in Katihar 2026",
      "Katihar Cultural Events",
      "Katihar Cultural Event",
      "Katihar Festival",
      "Katihar Festival 2026",
      "Katihar Celebration",
      "Katihar Celebrations",

      // P3
      "Katihar Night Event",
      "Katihar Evening Event",
      "Katihar Entertainment",
      "Katihar Entertainment Events",
      "Katihar Music Event",
      "Katihar Music Events",
      "Katihar DJ Event",
      "Katihar DJ Night",
      "Katihar Dance Event",
      "Katihar Dance Night",

      // Long-tail
      "Katihar Family Event",
      "Katihar Family Events",
      "Katihar Party",
      "Katihar Party Event",
      "Katihar Festive Event",
      "Katihar Festive Celebration",
    ],

    /*
    =======================================================
    BIHAR / REGIONAL
    =======================================================
    */

    regionalKeywords: [
      // P3
      "Dandiya Bihar",
      "Dandiya Night Bihar",
      "Garba Bihar",
      "Garba Night Bihar",
      "Navratri Events Bihar",
      "Navratri Bihar 2026",

      "Dandiya 2026 Bihar",
      "Garba 2026 Bihar",
      "Navratri 2026 Bihar",

      // Regional
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
    =======================================================
    VENUE / LOCATION INTENT
    =======================================================
    */

    venueKeywords: [
      // P1 / P2
      "Vardhan Banquet Katihar",
      "Vardan Banquet Katihar",
      "Vardhan Banquet Hall Katihar",
      "Vardan Banquet Hall Katihar",

      "Vardhan Banquet Gami Tola",
      "Vardan Banquet Gami Tola",

      // Event + venue
      "Dandiya Vardhan Banquet",
      "Garba Vardhan Banquet",
      "Navratri Vardhan Banquet",

      "Dandiya Gami Tola Katihar",
      "Garba Gami Tola Katihar",
      "Navratri Gami Tola Katihar",

      "Dandiya Near Vardhan Banquet",
      "Garba Near Vardhan Banquet",
      "Navratri Event Vardhan Banquet",
    ],

    /*
    =======================================================
    TICKET / BOOKING INTENT
    =======================================================
    */

    bookingKeywords: [
      // P1
      "Book Dandiya Tickets Katihar",
      "Book Garba Tickets Katihar",
      "Book Navratri Tickets Katihar",

      // P2
      "Book Dandiya Pass Katihar",
      "Book Garba Pass Katihar",
      "Book Navratri Pass Katihar",

      "Dandiya Online Booking Katihar",
      "Garba Online Booking Katihar",
      "Navratri Online Booking Katihar",

      "Dandiya Ticket Online Katihar",
      "Garba Ticket Online Katihar",
      "Navratri Ticket Online Katihar",

      "Dandiya Pass Online Katihar",
      "Garba Pass Online Katihar",
      "Navratri Pass Online Katihar",

      // WhatsApp
      "Dandiya Booking WhatsApp Katihar",
      "Garba Booking WhatsApp Katihar",
      "Navratri Booking WhatsApp Katihar",

      // Price
      "Dandiya Ticket Price Katihar",
      "Garba Ticket Price Katihar",
      "Navratri Ticket Price Katihar",

      "Dandiya Pass Price Katihar",
      "Garba Pass Price Katihar",
      "Navratri Pass Price Katihar",

      // Contact
      "Dandiya Ticket Booking Number Katihar",
      "Dandiya Pass Booking Number Katihar",

      // Brand
      "Rangratri Ticket Booking",
      "Rangratri Ticket Price",
      "Rangratri Pass Price",
      "Rangratri Pass Booking",
      "Rangratri Tickets",
    ],

    /*
    =======================================================
    PASS TYPE / PRODUCT INTENT
    =======================================================
    */

    passKeywords: [
      // P2
      "Solo Dandiya Pass Katihar",
      "Couple Dandiya Pass Katihar",
      "Group Dandiya Pass Katihar",

      "Solo Garba Pass Katihar",
      "Couple Garba Pass Katihar",
      "Group Garba Pass Katihar",

      "Solo Navratri Pass Katihar",
      "Couple Navratri Pass Katihar",
      "Group Navratri Pass Katihar",

      // Other
      "VIP Dandiya Pass Katihar",
      "VIP Garba Pass Katihar",
      "VIP Navratri Pass Katihar",

      "Dandiya Couple Ticket Katihar",
      "Dandiya Group Ticket Katihar",
      "Dandiya Solo Ticket Katihar",

      "Garba Couple Ticket Katihar",
      "Garba Group Ticket Katihar",
      "Garba Solo Ticket Katihar",

      "Navratri Couple Ticket Katihar",
      "Navratri Group Ticket Katihar",
      "Navratri Solo Ticket Katihar",

      "Dandiya Couple Pass Katihar",
      "Dandiya Group Pass Katihar",
      "Dandiya Solo Pass Katihar",

      "Garba Couple Pass Katihar",
      "Garba Group Pass Katihar",
      "Garba Solo Pass Katihar",
    ],

    /*
    =======================================================
    EXPERIENCE KEYWORDS
    =======================================================
    */

    experienceKeywords: [
      // Music / entertainment
      "Dandiya with DJ Katihar",
      "Garba with DJ Katihar",
      "Navratri DJ Night Katihar",
      "Dandiya DJ Night Katihar",
      "Garba DJ Night Katihar",

      "Dandiya Music Night Katihar",
      "Garba Music Night Katihar",
      "Navratri Music Night Katihar",

      "Dandiya Dance Party Katihar",
      "Garba Dance Party Katihar",
      "Navratri Dance Party Katihar",

      // Food
      "Dandiya Food Katihar",
      "Garba Food Katihar",
      "Navratri Food Katihar",

      // Experience
      "Dandiya Photo Booth Katihar",
      "Garba Photo Booth Katihar",
      "Navratri Photo Booth Katihar",

      // Family
      "Dandiya Family Event Katihar",
      "Garba Family Event Katihar",
      "Navratri Family Event Katihar",

      // Couples
      "Dandiya Event for Couples Katihar",
      "Dandiya Event for Families Katihar",
      "Garba Event for Families Katihar",
      "Navratri Event for Families Katihar",
    ],

    /*
    =======================================================
    DJ / MUSIC INTENT
    =======================================================
    */

    musicKeywords: [
      "DJ Katihar",
      "DJ Night Katihar",
      "DJ Event Katihar",
      "DJ Party Katihar",

      "DJ Navratri Katihar",
      "DJ Dandiya Katihar",
      "DJ Garba Katihar",

      "Dandiya DJ Katihar",
      "Garba DJ Katihar",
      "Navratri DJ Katihar",

      "Live DJ Katihar",
      "DJ Night Near Me",

      "Dandiya Music Katihar",
      "Garba Music Katihar",
      "Navratri Music Katihar",

      "DJ Vishal Katihar",
      "DJ Vishal Music Katihar",
    ],

    /*
    =======================================================
    BRAND SEARCH
    =======================================================
    */

    brandKeywords: [
      // P1
      "Rangratri",
      "Rangratri Events",
      "Rangratri Events Katihar",
      "Rangratri Katihar",

      // P2
      "Rangratri 2026",
      "Rangratri Katihar 2026",
      "Rangratri Navratri",
      "Rangratri Navratri 2026",

      "Rangratri Mahautsav",
      "Rangratri Mahautsav 2026",

      // Event themes
      "Rangratri Dandiya",
      "Rangratri Garba",

      // Commercial
      "Rangratri Tickets",
      "Rangratri Passes",
      "Rangratri Booking",
      "Rangratri Ticket Price",
      "Rangratri Pass Price",
      "Rangratri VIP Pass",

      // Social
      "Rangratri Events Katihar Instagram",
      "Rangratri Katihar Instagram",
    ],

    /*
    =======================================================
    SPELLING / TYPO / VARIANTS
    =======================================================
    These should never be visibly displayed as copy.
    =======================================================
    */

    spellingVariants: [
      // Mahautsav / Mahotsav
      "Navratri Mahotsav Katihar",
      "Navratri Mahautsav Katihar",
      "Navratri Mahotsav 2026 Katihar",
      "Navratri Mahautsav 2026 Katihar",

      // Brand
      "Rangratri Events Katihar",
      "Rangratrievents Katihar",
      "Rangratri Event Katihar",

      // Venue
      "Vardan Banquet Katihar",
      "Vardhan Banquet Katihar",
      "Vardan Banquet Hall Katihar",
      "Vardhan Banquet Hall Katihar",

      // Dandiya
      "Dandiya night in Katihar",
      "Dandiya nite Katihar",
      "Dandia Night Katihar",
      "Dandia Katihar",
      "Dandya Katihar",

      // Garba
      "Garba nite Katihar",
      "Garba Katihar",

      // Navratri
      "Navratri Katihar",
    ],

    /*
    =======================================================
    INFORMATIONAL / QUESTION SEARCH
    =======================================================
    */

    informationalKeywords: [
      // Date
      "When is Dandiya Night in Katihar",
      "When is Garba Night in Katihar",
      "When is Navratri Event in Katihar",

      "Dandiya Night Katihar Date",
      "Garba Night Katihar Date",
      "Navratri Event Katihar Date",

      "Dandiya Katihar Date 2026",
      "Garba Katihar Date 2026",
      "Navratri Katihar Date 2026",

      // Time
      "Dandiya Night Katihar Time",
      "Garba Night Katihar Time",
      "Navratri Event Katihar Time",

      // Location
      "Where is Dandiya Night in Katihar",
      "Where is Garba Night in Katihar",
      "Where is Navratri Event in Katihar",

      "Dandiya Venue Katihar",
      "Garba Venue Katihar",
      "Navratri Venue Katihar",

      "Dandiya Timing Katihar",
      "Garba Timing Katihar",
      "Navratri Timing Katihar",
    ],

    /*
    =======================================================
    BOOKMYSHOW / THIRD-PARTY PLATFORM SEARCH
    =======================================================
    Keep isolated.
    Only use if the event is actually listed there.
    =======================================================
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
    =======================================================
    LONG-TAIL / DISCOVERY
    =======================================================
    */

    longTailKeywords: [
      // P3
      "Best Place for Dandiya in Katihar",
      "Best Place for Garba in Katihar",
      "Best Place to Celebrate Navratri in Katihar",

      "Where to Play Dandiya in Katihar",
      "Where to Play Garba in Katihar",
      "Where to Celebrate Navratri in Katihar",

      // Audience
      "Dandiya Night for Couples Katihar",
      "Dandiya Night for Family Katihar",
      "Garba Night for Couples Katihar",
      "Garba Night for Family Katihar",

      "Navratri Event for Couples Katihar",
      "Navratri Event for Family Katihar",

      "Best Family Navratri Event Katihar",
      "Best Couple Dandiya Event Katihar",

      // Competitive
      "Premium Family Event Katihar Navratri",
      "Premium Festive Event Katihar",
      "Grand Festive Event Katihar",

      // Cultural
      "Indian Cultural Event Katihar",
      "Cultural Festival Katihar 2026",
      "Traditional Event Katihar 2026",

      // Discovery
      "Festival Night Katihar 2026",
      "Dance Night Katihar 2026",
      "Music Night Katihar 2026",
    ],

    /*
    =======================================================
    EXPLICIT PRIORITY TIERS
    =======================================================
    Use these when selecting keywords for individual pages.

    This prevents every keyword from being treated equally.
    =======================================================
    */

    priorityTiers: {
      /*
      -------------------------------------------------------
      P1 — VERY HIGH PROBABILITY
      -------------------------------------------------------
      Core local demand.
      */

      p1: [
        "Dandiya Night Katihar",
        "Dandiya Katihar",
        "Dandiya Night in Katihar",
        "Garba Night Katihar",
        "Garba Katihar",
        "Garba Night in Katihar",
        "Navratri Event Katihar",
        "Navratri Events Katihar",
        "Navratri Katihar",
        "Dandiya Event Katihar",
        "Garba Event Katihar",
        "Dandiya Tickets Katihar",
        "Garba Tickets Katihar",
        "Navratri Tickets Katihar",
      ],

      /*
      -------------------------------------------------------
      P2 — HIGH PROBABILITY
      -------------------------------------------------------
      Transactional + discovery.
      */

      p2: [
        "Dandiya Pass Katihar",
        "Dandiya Passes Katihar",
        "Garba Pass Katihar",
        "Garba Passes Katihar",
        "Navratri Pass Katihar",
        "Navratri Passes Katihar",

        "Dandiya Booking Katihar",
        "Garba Booking Katihar",
        "Navratri Booking Katihar",

        "Dandiya Ticket Booking Katihar",
        "Garba Ticket Booking Katihar",
        "Navratri Ticket Booking Katihar",

        "Katihar Events",
        "Events in Katihar",
        "Katihar Upcoming Events",

        "Navratri 2026 Katihar",
        "Dandiya 2026 Katihar",
        "Garba 2026 Katihar",
      ],

      /*
      -------------------------------------------------------
      P3 — MEDIUM PROBABILITY
      -------------------------------------------------------
      Detailed transactional and descriptive queries.
      */

      p3: [
        "Dandiya Ticket Price Katihar",
        "Dandiya Pass Price Katihar",
        "Garba Ticket Price Katihar",
        "Garba Pass Price Katihar",
        "Navratri Ticket Price Katihar",
        "Navratri Pass Price Katihar",

        "Dandiya Booking Online Katihar",
        "Garba Booking Online Katihar",
        "Navratri Booking Online Katihar",

        "Dandiya Night Tickets Katihar",
        "Garba Night Tickets Katihar",
        "Navratri Night Tickets Katihar",

        "Dandiya Venue Katihar",
        "Garba Venue Katihar",
        "Navratri Venue Katihar",

        "Best Dandiya Night Katihar",
        "Best Garba Night Katihar",
        "Best Navratri Event Katihar",

        "Premium Dandiya Night Katihar",
        "Premium Garba Night Katihar",
        "Premium Navratri Event Katihar",
      ],

      /*
      -------------------------------------------------------
      P4 — LOW / LONG-TAIL / COMPETITIVE
      -------------------------------------------------------
      */

      p4: [
        "Grand Dandiya Night Katihar",
        "Grand Garba Night Katihar",
        "Grand Navratri Event Katihar",

        "Royal Dandiya Night Katihar",
        "Royal Garba Night Katihar",
        "Royal Navratri Event Katihar",

        "Luxury Dandiya Night Katihar",
        "Luxury Garba Night Katihar",
        "Luxury Navratri Event Katihar",

        "Top Dandiya Event Katihar",
        "Top Garba Event Katihar",
        "Top Navratri Event Katihar",

        "Best Place for Dandiya in Katihar",
        "Best Place for Garba in Katihar",
        "Where to Play Dandiya in Katihar",
        "Where to Play Garba in Katihar",

        "Dandiya Night for Couples Katihar",
        "Dandiya Night for Family Katihar",
        "Garba Night for Couples Katihar",
        "Garba Night for Family Katihar",
      ],

      /*
      -------------------------------------------------------
      P5 — VERY LOW / SPELLING / VARIANTS
      -------------------------------------------------------
      */

      p5: [
        "Dandia Night Katihar",
        "Dandia Katihar",
        "Dandya Katihar",
        "Dandiya nite Katihar",
        "Garba nite Katihar",
        "Navratri Mahotsav Katihar",
        "Navratri Mahautsav Katihar",
        "Vardan Banquet Katihar",
        "Vardan Banquet Hall Katihar",
        "Rangratrievents Katihar",
      ],
    },

    /*
    =======================================================
    KEYWORD CLUSTERS
    =======================================================
    */

    clusters: {
      /*
      -------------------------------------------------------
      DANDIYA
      -------------------------------------------------------
      */

      dandiya: [
        "Dandiya Night Katihar",
        "Dandiya Katihar",
        "Dandiya Event Katihar",
        "Dandiya Tickets Katihar",
        "Dandiya Pass Katihar",
        "Dandiya Booking Katihar",
        "Dandiya Near Me",
        "Best Dandiya Night Katihar",
        "Premium Dandiya Night Katihar",
        "Grand Dandiya Night Katihar",
      ],

      /*
      -------------------------------------------------------
      GARBA
      -------------------------------------------------------
      */

      garba: [
        "Garba Night Katihar",
        "Garba Katihar",
        "Garba Event Katihar",
        "Garba Tickets Katihar",
        "Garba Pass Katihar",
        "Garba Booking Katihar",
        "Garba Near Me",
        "Best Garba Night Katihar",
        "Premium Garba Night Katihar",
        "Grand Garba Night Katihar",
      ],

      /*
      -------------------------------------------------------
      NAVRATRI
      -------------------------------------------------------
      */

      navratri: [
        "Navratri Events Katihar",
        "Navratri Event Katihar",
        "Navratri Katihar",
        "Navratri Tickets Katihar",
        "Navratri Pass Katihar",
        "Navratri Booking Katihar",
        "Navratri Near Me",
        "Best Navratri Event Katihar",
        "Premium Navratri Event Katihar",
        "Grand Navratri Event Katihar",
      ],

      /*
      -------------------------------------------------------
      COMPETITIVE / PREMIUM
      -------------------------------------------------------
      */

      premium: [
        "Best Dandiya Night Katihar",
        "Best Dandiya Event Katihar",
        "Best Garba Night Katihar",
        "Best Garba Event Katihar",
        "Best Navratri Event Katihar",

        "Premium Dandiya Night Katihar",
        "Premium Garba Night Katihar",
        "Premium Navratri Event Katihar",

        "Royal Dandiya Night Katihar",
        "Royal Garba Night Katihar",
        "Royal Navratri Event Katihar",

        "Grand Dandiya Night Katihar",
        "Grand Garba Night Katihar",
        "Grand Navratri Event Katihar",

        "Luxury Dandiya Night Katihar",
        "Luxury Garba Night Katihar",
        "Luxury Navratri Event Katihar",
      ],

      /*
      -------------------------------------------------------
      LOCAL
      -------------------------------------------------------
      */

      local: [
        "Katihar Events",
        "Events in Katihar",
        "Katihar Events 2026",
        "Katihar Upcoming Events",
        "Katihar Cultural Events",
        "Katihar Festival 2026",
        "Katihar Entertainment Events",
        "Katihar Music Events",
        "Katihar Dance Event",
      ],

      /*
      -------------------------------------------------------
      BOOKING
      -------------------------------------------------------
      */

      booking: [
        "Dandiya Tickets Katihar",
        "Dandiya Pass Katihar",
        "Dandiya Booking Katihar",

        "Garba Tickets Katihar",
        "Garba Pass Katihar",
        "Garba Booking Katihar",

        "Navratri Tickets Katihar",
        "Navratri Pass Katihar",
        "Navratri Booking Katihar",

        "Dandiya Ticket Price Katihar",
        "Garba Ticket Price Katihar",
        "Navratri Ticket Price Katihar",
      ],

      /*
      -------------------------------------------------------
      BRAND
      -------------------------------------------------------
      */

      brand: [
        "Rangratri",
        "Rangratri Events",
        "Rangratri Events Katihar",
        "Rangratri Katihar",
        "Rangratri 2026",
        "Rangratri Navratri 2026",
        "Rangratri Tickets",
        "Rangratri Passes",
        "Rangratri Booking",
      ],
    },
  },

  /*
  =========================================================
  EVENT LOCATION VARIANTS
  =========================================================
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
  =========================================================
  PRIMARY NAVIGATION
  =========================================================
  IMPORTANT:
  Every href below must exactly match a real public route
  inside the Next.js app/ directory.
  =========================================================
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