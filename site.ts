export const PHONE_DISPLAY = "+91 76781 48496";
export const PHONE_RAW = "917678148496";

export const waLink = (
  message = "Hi Karan! I run ads and I need scroll-stopping ad scripts. Can we talk about a project?",
) => `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(message)}`;

export const NAV = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_ROTATE = [
  "stop the scroll.",
  "kill the CPA.",
  "print ROAS.",
  "hook in 3 seconds.",
  "sell without begging.",
];

export const SERVICES = [
  {
    tag: "01",
    icon: "🎬",
    title: "UGC & Creator Scripts",
    body: "Talking-head scripts built for TikTok, Reels & Shorts. Native tone, brutal hooks, retention beats every 3 seconds.",
    points: ["Hook + retention map", "Shot-by-shot direction", "3 CTA variants"],
    accent: "from-lime/25",
  },
  {
    tag: "02",
    icon: "📈",
    title: "Direct Response VSLs",
    body: "Long-form video sales letters using PAS, 4Ps and story-selling frameworks that carry cold traffic to checkout.",
    points: ["Big-idea angle", "Objection stack", "Offer close"],
    accent: "from-flame/25",
  },
  {
    tag: "03",
    icon: "🧲",
    title: "Hook Banks",
    body: "25–50 tested hook lines per angle so your editor never runs out of variations to test this week.",
    points: ["Pattern-interrupts", "Curiosity gaps", "Proof-led openers"],
    accent: "from-violetk/25",
  },
  {
    tag: "04",
    icon: "🧠",
    title: "Angle & Avatar Research",
    body: "Review mining, competitor teardowns and voice-of-customer docs. Your ads speak the words your buyer already thinks.",
    points: ["VOC swipe doc", "Competitor teardown", "Angle matrix"],
    accent: "from-lime/25",
  },
  {
    tag: "05",
    icon: "🛒",
    title: "Static & Carousel Copy",
    body: "Meta statics, image ads and carousels — headline, primary text and description written to earn the click.",
    points: ["3 headline sets", "Primary text A/B", "Landing match"],
    accent: "from-flame/25",
  },
  {
    tag: "06",
    icon: "🚀",
    title: "Creative Strategy Retainer",
    body: "Monthly script engine: fresh angles, iterations on winners, and a testing roadmap your media buyer can run blind.",
    points: ["12–20 scripts / mo", "Weekly iteration", "Slack + Loom access"],
    accent: "from-violetk/25",
  },
];

export const SCRIPTS = [
  {
    niche: "Skincare / D2C",
    metric: "3.9x ROAS",
    weak: "Our serum is made with premium natural ingredients for glowing skin.",
    strong:
      "I stopped using 7 products. I kept ONE. Day 14 — look at my cheek. No filter, no ring light, no dermatologist bill.",
    note: "Loss-based hook + visual proof in the first 3 seconds.",
  },
  {
    niche: "SaaS / B2B",
    metric: "-41% CPL",
    weak: "The all-in-one platform to manage your business operations.",
    strong:
      "Your ops team is doing ₹4L worth of copy-paste every month. Here's the 6-minute setup that deleted that job forever.",
    note: "Quantified pain beats a feature list every single time.",
  },
  {
    niche: "Fitness Coach",
    metric: "5.2x ROAS",
    weak: "Join my 12-week transformation program and get in the best shape.",
    strong:
      "Nobody tells 34-year-olds this: it's not your metabolism. It's these 3 evening habits. Fix them and the belly goes on its own.",
    note: "Callout + myth-break = qualified clicks, cheaper leads.",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Deep-dive brief",
    body: "A 20-minute call + a form. Offer, avatar, past winners, angles that already flopped. No guesswork after this.",
  },
  {
    step: "02",
    title: "Research raid",
    body: "I mine reviews, Reddit threads, DMs and competitor ad libraries to steal the exact language your buyer uses.",
  },
  {
    step: "03",
    title: "Angle matrix",
    body: "You get 4–6 distinct angles mapped to awareness stages — so we're testing strategy, not random creatives.",
  },
  {
    step: "04",
    title: "Scripts delivered",
    body: "Shot-by-shot docs with hook, b-roll, on-screen text and CTA. Your editor opens it and just... builds.",
  },
  {
    step: "05",
    title: "Iterate on winners",
    body: "You send data, I ship variations of what worked. Winning ads get 5 children, losers get buried fast.",
  },
];

export const STATS = [
  { value: 640, suffix: "+", label: "Ad scripts written" },
  { value: 92, suffix: "M+", label: "Views driven on paid" },
  { value: 4.3, suffix: "x", label: "Avg. ROAS on winners", decimals: 1 },
  { value: 68, suffix: "", label: "Brands & agencies served" },
];

export const TESTIMONIALS = [
  {
    quote:
      "We tested 6 of KK's hooks in one week. Two of them became our top spenders and our CPA dropped 37%. He writes like a media buyer, not a copywriter.",
    name: "Rohit Malhotra",
    role: "Performance Lead, D2C Skincare",
  },
  {
    quote:
      "Fastest turnaround I've had. Full shot-by-shot script docs my editors didn't ask a single question about. That alone is worth the retainer.",
    name: "Sana Qureshi",
    role: "Founder, Growth Agency (Dubai)",
  },
  {
    quote:
      "Our VSL was flat for months. He rewrote the first 90 seconds and watch-time doubled. Same offer, same traffic, different money.",
    name: "Dev Anand",
    role: "CMO, Online Education",
  },
  {
    quote:
      "He gave us 40 hooks in 48 hours and 9 of them beat our control. Testing has honestly become fun again.",
    name: "Aisha Kapoor",
    role: "Media Buyer, Fashion Brand",
  },
];

export const FAQS = [
  {
    q: "How fast do I get my scripts?",
    a: "First batch lands in 48–72 hours after the brief call. Retainer clients get a rolling weekly drop every Monday.",
  },
  {
    q: "Do you write for my niche?",
    a: "D2C, skincare, supplements, SaaS, coaching, fintech, real estate, apps and local services — 68 brands so far. If I'm not the right fit, I'll say so on the call.",
  },
  {
    q: "What exactly do I receive?",
    a: "A shot-by-shot Google Doc: hook variations, scene direction, spoken lines, on-screen text, b-roll notes and 3 CTA options. Editor-ready.",
  },
  {
    q: "Do you offer revisions?",
    a: "Two rounds on every script, free. And if a script underperforms after a fair test, I rewrite the angle at no cost.",
  },
  {
    q: "What does it cost?",
    a: "Single scripts start small; most brands take the monthly script engine. Ping me on WhatsApp with your offer and I'll send exact numbers in a few minutes.",
  },
];
