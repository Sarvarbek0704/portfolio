export type Lang = "uz" | "en";

export type Shot = { src: string; device: "desktop" | "mobile" };

export type Project = {
  slug: string;
  title: string;
  tagline: { uz: string; en: string };
  description: { uz: string; en: string };
  highlights: { uz: string[]; en: string[] };
  stack: string[];
  live?: string;
  github?: string;
  images?: Shot[];
  badge?: { uz: string; en: string };
  selfHosted?: boolean;
  demo?: {
    label: { uz: string; en: string };
    entries: { role: string; email: string; password: string }[];
  };
  year: string;
  category: { uz: string; en: string };
};

export const projects: Project[] = [
  {
    slug: "manajoy",
    title: "ManaJoy",
    images: [
      { src: "/shots/manajoy-desktop.jpg", device: "desktop" },
      { src: "/shots/manajoy-desktop-2.jpg", device: "desktop" },
      { src: "/shots/manajoy-mobile.jpg", device: "mobile" },
    ],
    tagline: {
      uz: "Onlayn marketplace — chegirmalar, do'konlar va xizmatlar",
      en: "Online marketplace — discounts, stores & services",
    },
    badge: { uz: "Ish joyi · Jamoa", en: "At work · Team" },
    description: {
      uz: "O'zbekiston bo'ylab ishlaydigan real onlayn marketplace. Mahsulotlar, yaqin do'konlar va xizmatlar (gaming zonalar, salonlar, sartaroshxonalar, sport, restoranlar — stol bron qilish bilan), loyalty kartalari va ball tizimi, sotuvchi bo'lish oqimi. Men 2026-maydan beri jamoada frontend dasturchi sifatida mijozlar sayti va ichki admin panelini rivojlantiraman.",
      en: "A real, in-production online marketplace serving all of Uzbekistan — products, nearby stores and services (gaming venues, salons, barbershops, sports, restaurants with table reservations), loyalty cards and a points system, and seller onboarding. Since May 2026 I've been building the customer-facing site and the internal admin panel as a frontend developer on the team.",
    },
    highlights: {
      uz: [
        "Mahsulot, do'kon va xizmatlar katalogi — qidiruv va filtrlash",
        "MapLibre GL bilan \"yaqin do'konlar\" xaritasi va geolokatsiya",
        "Loyalty — ballar, chegirma kartalari va aksiyalar",
        "Buyurtma kuzatuvi va xizmat/restoran bron qilish oqimi",
        "Ichki admin panel: mahsulot, do'kon, buyurtma boshqaruvi va statistika",
      ],
      en: [
        "Product, store and service catalog with search and filtering",
        "\"Nearby stores\" map and geolocation via MapLibre GL",
        "Loyalty — points, discount cards and promotions",
        "Order tracking and service/restaurant reservation flow",
        "Internal admin panel: product, store and order management with analytics",
      ],
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "MapLibre GL",
      "TanStack Query",
      "React Hook Form",
      "Zod",
    ],
    live: "https://manajoy.uz",
    year: "2026",
    category: { uz: "Marketplace · Xizmatlar", en: "Marketplace · Services" },
  },
  {
    slug: "ziyo",
    title: "Ziyo",
    images: [
      { src: "/shots/ziyo-desktop.jpg", device: "desktop" },
      { src: "/shots/ziyo-desktop-2.jpg", device: "desktop" },
      { src: "/shots/ziyo-mobile.jpg", device: "mobile" },
    ],
    selfHosted: true,
    tagline: {
      uz: "Multi-tenant ta'lim boshqaruv platformasi",
      en: "Multi-tenant Learning Management System",
    },
    description: {
      uz: "Ta'lim muassasalari uchun to'liq funksional LMS/SIS platforma. Har bir maktab o'z izolyatsiyalangan ma'lumotlariga ega (multi-tenant arxitektura). Xodimlar uchun 30+ sahifa: akademik boshqaruv, davomat, intizom, moliya, kommunikatsiya. Ota-onalar uchun alohida 12 sahifalik panel — farzandning baholari, davomati, to'lovlari.",
      en: "Full-featured Learning & Student Information System for educational institutions. Each school has its own isolated data (multi-tenant architecture). 30+ staff pages covering academics, attendance, discipline, finance, and communications. Dedicated 12-page guardian portal for grades, attendance, and payments.",
    },
    highlights: {
      uz: [
        "56 ta DB modeli, 28 ta funksional modul",
        "Granular RBAC tizimi (dinamik rollar va ruxsatlar)",
        "JWT (access + refresh) + brute-force himoya + audit log",
        "BLOCK_TEST uchun 189 ballik maxsus baholash tizimi",
        "Real-time davomat va to'lov bildirishnomalari",
      ],
      en: [
        "56 database models, 28 feature modules",
        "Granular RBAC with dynamic roles and permissions",
        "JWT (access + refresh) + brute-force protection + audit log",
        "Custom 189-point grading system for block tests",
        "Real-time attendance and payment notifications",
      ],
    },
    stack: [
      "NestJS 11",
      "Prisma 7",
      "PostgreSQL",
      "React 18",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "TanStack Query",
      "Framer Motion",
      "Vite",
    ],
    live: "https://ziyo.sarvarbek-sodiqov.uz",
    github: "https://github.com/Sarvarbek0704/ziyo",
    demo: {
      label: { uz: "Demo — maktab (tenant): mathacademy", en: "Demo — school (tenant): mathacademy" },
      entries: [
        { role: "Admin (read-only)", email: "demo", password: "Demo1234!" },
      ],
    },
    year: "2026",
    category: { uz: "Ta'lim · LMS", en: "Education · LMS" },
  },
  {
    slug: "nexus",
    title: "Nexus",
    images: [
      { src: "/shots/nexus-desktop.jpg", device: "desktop" },
      { src: "/shots/nexus-desktop-2.jpg", device: "desktop" },
      { src: "/shots/nexus-mobile.jpg", device: "mobile" },
    ],
    selfHosted: true,
    tagline: {
      uz: "Freelance va agentlik marketplace platformasi",
      en: "Freelance & agency marketplace",
    },
    description: {
      uz: "Upwork tipidagi to'liq funksional freelance marketplace. 4 ta rol — Klient, Freelanser, Agentlik egasi, Admin. Klientlar loyiha joylaydi, freelancerlar bid taklif qiladi, kelishuv asosida shartnoma tuziladi va milestone asosida escrow to'lov tizimi orqali ish bajariladi. Greedy debt-settlement algoritmi minimal tranzaksiya sonida hisob-kitobni yopadi.",
      en: "Upwork-style freelance marketplace with four roles — Client, Freelancer, Agency Owner, Admin. Clients post projects, freelancers submit bids, contracts are managed with milestone-based escrow payments. A greedy debt-settlement algorithm closes accounts with the minimum number of transactions.",
    },
    highlights: {
      uz: [
        "Milestone asosidagi escrow to'lov tizimi",
        "Greedy debt-settlement algoritmi",
        "JWT + Google OAuth + GitHub OAuth (Passport.js)",
        "To'liq nizo (dispute) hal qilish moduli",
        "Platforma komissiyasi va ichki messaging",
      ],
      en: [
        "Milestone-based escrow payment system",
        "Greedy debt-settlement algorithm",
        "JWT + Google OAuth + GitHub OAuth (Passport.js)",
        "Full dispute resolution module",
        "Platform commission and in-app messaging",
      ],
    },
    stack: [
      "NestJS 10",
      "TypeORM",
      "PostgreSQL",
      "Next.js 14",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "TailwindCSS",
      "Recharts",
    ],
    live: "https://nexus.sarvarbek-sodiqov.uz",
    github: "https://github.com/Sarvarbek0704/nexus",
    demo: {
      label: { uz: "Demo hisoblar", en: "Demo credentials" },
      entries: [
        { role: "Client", email: "demo.client@nexus.dev", password: "Demo@1234" },
        { role: "Freelancer", email: "demo.freelancer@nexus.dev", password: "Demo@1234" },
        { role: "Agency owner", email: "demo.agency@nexus.dev", password: "Demo@1234" },
        { role: "Admin", email: "demo.admin@nexus.dev", password: "Demo@1234" },
      ],
    },
    year: "2026",
    category: { uz: "Marketplace · FinTech", en: "Marketplace · FinTech" },
  },
  {
    slug: "ustoz",
    title: "Ustoz",
    images: [
      { src: "/shots/ustoz-desktop.jpg", device: "desktop" },
      { src: "/shots/ustoz-desktop-2.jpg", device: "desktop" },
      { src: "/shots/ustoz-mobile.jpg", device: "mobile" },
    ],
    tagline: {
      uz: "Jonli dars — WebRTC orqali sinf, yozib olinadi va qayta ko'riladi",
      en: "Live teaching — a real-time class over WebRTC, recorded and rewatchable",
    },
    badge: { uz: "Jonli mahsulot · Mijozli", en: "Live product · Has a client" },
    selfHosted: true,
    description: {
      uz: "Real ustozlar uchun ishlab chiqilgan, sotiladigan mahsulot — to'lovchi mijozi ham bor. Ustoz guruhga jonli (real-time) dars o'tadi, dars video sifatida saqlanadi va o'quvchilar uni ro'yxatdan o'tgan holda qayta ko'radi. Avtomatik baholanadigan testlar, ustoz baholaydigan uy ishlari, davomat va ko'rish (watch-tracking) nazorati — bu darsni to'liq kursga aylantiradi. Interfeys o'zbek, rus va ingliz tillarida. Men boshidan oxirigacha o'zim qurdim va o'z serverimda ishga tushirdim.",
      en: "A real, sellable product built for real teachers — it already has a paying client. A teacher runs a live (real-time) class over WebRTC, the session is recorded to durable storage, and enrolled students rewatch it — with auto-graded quizzes, teacher-graded assignments, attendance and watch-tracking that turn a lesson into a full course. Interface in Uzbek, Russian and English. I built it end-to-end and run it on my own server.",
    },
    highlights: {
      uz: [
        "LiveKit (WebRTC) bilan jonli guruh darslari, past kechikish",
        "Darslarni R2/S3 saqlashga yozib olish va enrollment orqali qayta ko'rish",
        "Avtomatik baholanadigan testlar va ustoz baholaydigan uy ishlari",
        "Davomat, ko'rish (watch-tracking) va nazorat/monitoring",
        "Uz / Ru / En interfeys, NextAuth autentifikatsiya",
      ],
      en: [
        "Live group classes over LiveKit (WebRTC), low latency",
        "Recording to R2/S3 storage, rewatch gated behind enrollment",
        "Auto-graded quizzes and teacher-graded assignments",
        "Attendance, watch-tracking and monitoring",
        "Uz / Ru / En interface, NextAuth authentication",
      ],
    },
    stack: [
      "Next.js 16",
      "LiveKit (WebRTC)",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Cloudflare R2 (S3)",
      "TypeScript",
      "TailwindCSS",
      "Zod",
    ],
    live: "https://ustoz.sarvarbek-sodiqov.uz",
    github: "https://github.com/Sarvarbek0704/ustoz",
    year: "2026",
    category: { uz: "Ta'lim · Jonli dars", en: "Education · Live teaching" },
  },
  {
    slug: "helix",
    title: "Helix",
    images: [
      { src: "/shots/helix-desktop.jpg", device: "desktop" },
      { src: "/shots/helix-desktop-2.jpg", device: "desktop" },
      { src: "/shots/helix-mobile.jpg", device: "mobile" },
    ],
    selfHosted: true,
    tagline: {
      uz: "Klinika va kasalxonalar uchun boshqaruv platformasi",
      en: "Healthcare management platform",
    },
    description: {
      uz: "Klinika va kasalxonalar uchun to'liq tibbiyot boshqaruv tizimi. 5 ta foydalanuvchi roli — Bemor, Shifokor, Hamshira, Lab texnik va Admin — har biri uchun mos dashboard. Bemorlar shifokorlardan qabul olishi, tibbiy yozuvlarni ko'rishi, retseptlarini va lab natijalarini kuzatishi mumkin. Shifokorlar haftalik jadval va qabul oqimini boshqaradi.",
      en: "Full-stack hospital and clinic management system serving five distinct roles — Patient, Doctor, Nurse, Lab Technician, Admin — each with a role-specific dashboard. Patients book appointments, view medical records, track prescriptions and lab results. Doctors manage schedules and the appointment flow.",
    },
    highlights: {
      uz: [
        "Klinik workflow: qabul → ko'rik → tibbiy yozuv → retsept → lab buyurtma → natija → hisob-faktura → sug'urta",
        "5 ta rol, 18 ta entity, role-based dashboardlar",
        "OTP email tasdiqlash, JWT (15 daq access + 7 kun refresh)",
        "Hayotiy ko'rsatkichlar tracking (BP, puls, harorat, BMI)",
        "Sug'urta plani va da'volar (claims) tizimi",
      ],
      en: [
        "Clinical workflow: appointment → consultation → record → prescription → lab order → results → billing → insurance",
        "5 roles, 18 entities, role-specific dashboards",
        "OTP email verification, JWT (15min access + 7d refresh)",
        "Vital signs tracking (BP, heart rate, temperature, BMI)",
        "Insurance plans and claims system",
      ],
    },
    stack: [
      "NestJS 10",
      "TypeORM",
      "PostgreSQL",
      "Next.js 14",
      "TypeScript",
      "RTK Query",
      "TailwindCSS",
      "Framer Motion",
    ],
    live: "https://helix.sarvarbek-sodiqov.uz",
    github: "https://github.com/Sarvarbek0704/helix",
    demo: {
      label: { uz: "Demo hisoblar", en: "Demo credentials" },
      entries: [
        { role: "Admin", email: "demo.admin@helix.uz", password: "Demo@12345" },
        { role: "Doctor", email: "demo.doctor@helix.uz", password: "Demo@12345" },
        { role: "Nurse", email: "demo.nurse@helix.uz", password: "Demo@12345" },
        { role: "LabTech", email: "demo.labtech@helix.uz", password: "Demo@12345" },
        { role: "Patient", email: "demo.patient@helix.uz", password: "Demo@12345" },
      ],
    },
    year: "2026",
    category: { uz: "Tibbiyot · HealthTech", en: "Healthcare · HealthTech" },
  },
  {
    slug: "wisar",
    title: "Wisar",
    images: [
      { src: "/shots/wisar-desktop.jpg", device: "desktop" },
      { src: "/shots/wisar-desktop-2.jpg", device: "desktop" },
      { src: "/shots/wisar-mobile.jpg", device: "mobile" },
    ],
    tagline: {
      uz: "Dasturlash va ingliz tili o'rganish platformasi",
      en: "Programming & English learning platform",
    },
    badge: { uz: "Jonli mahsulot · Yakka", en: "Live product · Solo" },
    selfHosted: true,
    description: {
      uz: "O'zbek tilidagi bepul ta'lim platformasi — noldan senior+ gacha to'liq full-stack dasturlash kursi, 706+ maqola va 41+ bo'lim, ingliz tili va IELTS moduli. Interaktiv mashqlar, SM-2 spaced repetition flashcardlari, kunlik planner va streak tizimi bilan bilimni amaliyotga bog'laydi. Ushbu platformani boshidan oxirigacha o'zim ishlab chiqdim va o'z serverimda, o'z domenimda ishga tushirdim.",
      en: "A free Uzbek-language learning platform — a full-stack programming course from zero to senior+, 706+ articles across 41+ sections, plus English and IELTS modules. It ties theory to practice with interactive exercises, SM-2 spaced-repetition flashcards, a daily planner and a streak system. I built this platform end-to-end on my own and run it on my own server, on my own domain.",
    },
    highlights: {
      uz: [
        "706+ maqola, 41+ bo'lim — noldan senior+ gacha kurs",
        "Interaktiv mashqlar: kod yozish, quiz, bo'sh joyni to'ldirish",
        "SM-2 algoritmi asosidagi spaced repetition flashcard tizimi",
        "IELTS Coach — mock testlar va progress kuzatuvi",
        "Kunlik planner, streak va progress dashboard (haftalik hisobot, sertifikat)",
      ],
      en: [
        "706+ articles across 41+ sections — a zero-to-senior+ course",
        "Interactive exercises: coding challenges, quizzes, fill-in-the-blank",
        "SM-2 spaced-repetition flashcard system",
        "IELTS Coach — mock tests and progress tracking",
        "Daily planner, streaks and a progress dashboard (weekly reports, certificates)",
      ],
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Redux Toolkit",
      "TanStack Query",
      "Framer Motion",
    ],
    live: "https://wisar.uz",
    year: "2026",
    category: { uz: "Ta'lim · EdTech", en: "Education · EdTech" },
  },
  {
    slug: "karvon",
    title: "Karvon",
    images: [
      { src: "/shots/karvon-desktop.jpg", device: "desktop" },
      { src: "/shots/karvon-desktop-2.jpg", device: "desktop" },
      { src: "/shots/karvon-mobile.jpg", device: "mobile" },
    ],
    selfHosted: true,
    tagline: {
      uz: "To'liq stack e-commerce platforma",
      en: "Full-stack e-commerce marketplace",
    },
    description: {
      uz: "O'zbekiston bozori uchun ishlab chiqilgan to'liq funksional e-commerce platforma. 4 ta rol — Admin, Sotuvchi, Xaridor, Kuryer — har biri uchun alohida dashboard. Socket.io orqali real-time chat. Payme, Click va Uzum to'lov tizimlari uchun to'liq simulyator (token asosidagi to'lov sahifalari, webhook endpointlar).",
      en: "Production-grade e-commerce platform built for the Uzbek market with four distinct roles — Admin, Seller, Buyer, Courier — each with its own dashboard. Real-time chat via Socket.io. Fully simulated Payme/Click/Uzum payment system with token-based payment pages and webhook endpoints.",
    },
    highlights: {
      uz: [
        "4 ta rol, 26 ta entity, to'liq RBAC",
        "Socket.io bilan real-time chat",
        "Payme / Click / Uzum simulyator to'lov tizimi",
        "Sharp orqali avtomatik rasm optimizatsiyasi",
        "Demo hisoblar uchun maxsus DemoGuard",
      ],
      en: [
        "4 roles, 26 entities, full RBAC",
        "Real-time chat with Socket.io",
        "Simulated Payme / Click / Uzum payment system",
        "Automatic image optimization via Sharp",
        "Custom DemoGuard for read-only demo accounts",
      ],
    },
    stack: [
      "NestJS 11",
      "TypeORM",
      "PostgreSQL",
      "Socket.io",
      "React 19",
      "TypeScript",
      "TailwindCSS 4",
      "RTK Query",
      "Framer Motion",
    ],
    live: "https://karvon.sarvarbek-sodiqov.uz",
    github: "https://github.com/Sarvarbek0704/karvon",
    demo: {
      label: { uz: "Demo hisoblar", en: "Demo credentials" },
      entries: [
        { role: "Admin", email: "demo.admin@karvon.uz", password: "Demo12345!" },
        { role: "Seller", email: "demo.seller@karvon.uz", password: "Demo12345!" },
        { role: "Buyer", email: "demo.user@karvon.uz", password: "Demo12345!" },
      ],
    },
    year: "2026",
    category: {
      uz: "E-commerce · Marketplace",
      en: "E-commerce · Marketplace",
    },
  },
  {
    slug: "trellis",
    title: "Trellis",
    images: [
      { src: "/shots/trellis-desktop.jpg", device: "desktop" },
      { src: "/shots/trellis-desktop-2.jpg", device: "desktop" },
      { src: "/shots/trellis-mobile.jpg", device: "mobile" },
    ],
    selfHosted: true,
    tagline: {
      uz: "Multi-tenant jamoa loyiha-boshqaruv platformasi",
      en: "Multi-tenant team project-management platform",
    },
    description: {
      uz: "Jira / Linear / ClickUp uslubidagi jamoa boshqaruv platformasi — tenant izolyatsiyasi haqiqatan testdan o'tkazilgan. Kanban, ro'yxat va kalendar ko'rinishlari; real-time hamkorlik (Socket.io); rolga asoslangan huquqlar; workspace taklifnomalari; vaqt hisobi; hisobotlar; API kalitlar va imzolangan webhook'lar — bitta deploymentда ko'plab jamoalar, har workspace ma'lumotlari izolyatsiyada. BullMQ bilan fon vazifalari. Interfeys uz/ru/en.",
      en: "A focused Jira / Linear / ClickUp alternative with tenant isolation that is actually tested. Kanban, list and calendar views; real-time collaboration (Socket.io); role-based access; workspace invitations; time tracking; reporting; API keys and signed webhooks — many teams on one deployment, each workspace's data isolated from the rest. Background jobs via BullMQ. Interface in Uzbek, Russian and English.",
    },
    highlights: {
      uz: [
        "Multi-tenant arxitektura — testlangan tenant izolyatsiyasi",
        "Kanban / ro'yxat / kalendar, real-time hamkorlik (Socket.io)",
        "Rolga asoslangan huquqlar va workspace taklifnomalari",
        "Vaqt hisobi, hisobotlar, API kalitlar va imzolangan webhook'lar",
        "BullMQ + Redis bilan fon vazifalari va navbatlar",
      ],
      en: [
        "Multi-tenant architecture with tested tenant isolation",
        "Kanban / list / calendar views, real-time collaboration (Socket.io)",
        "Role-based access and workspace invitations",
        "Time tracking, reporting, API keys and signed webhooks",
        "Background jobs and queues via BullMQ + Redis",
      ],
    },
    stack: [
      "NestJS 10",
      "TypeORM",
      "PostgreSQL",
      "BullMQ",
      "Redis",
      "Socket.io",
      "Next.js 14",
      "TypeScript",
      "TanStack Query",
      "TailwindCSS",
    ],
    live: "https://trellis.sarvarbek-sodiqov.uz",
    github: "https://github.com/Sarvarbek0704/trellis",
    demo: {
      label: { uz: "Demo hisoblar (workspace: Demo)", en: "Demo credentials (workspace: Demo)" },
      entries: [
        { role: "Owner", email: "admin@trellis.local", password: "Demo@1234" },
        { role: "Admin", email: "pm@trellis.local", password: "Demo@1234" },
        { role: "Member", email: "dev@trellis.local", password: "Demo@1234" },
      ],
    },
    year: "2026",
    category: { uz: "Productivity · SaaS", en: "Productivity · SaaS" },
  },
  {
    slug: "meridian",
    title: "Meridian",
    images: [
      { src: "/shots/meridian-desktop.jpg", device: "desktop" },
      { src: "/shots/meridian-desktop-2.jpg", device: "desktop" },
      { src: "/shots/meridian-mobile.jpg", device: "mobile" },
    ],
    selfHosted: true,
    tagline: {
      uz: "Sayohat rejalashtirish platformasi",
      en: "Travel planning platform",
    },
    description: {
      uz: "Wanderlog va TripIt tipidagi to'liq sayohat rejalashtirish platformasi. Foydalanuvchilar ko'p-kunlik sayohatlar tuzadi, kun-kun itinerary builder bilan reja chizadi, guruh xarajatlarini avtomatik bo'ladi va sayohat sherigi (buddy) topadi. 20 ta dunyoning eng mashhur destinatsiyalari katalogi va sharhlar tizimi.",
      en: "Wanderlog/TripIt-style travel planning platform. Users plan multi-day trips, build day-by-day itineraries, automatically split group expenses, and find travel buddies. Curated catalog of 20 world destinations with a full review system.",
    },
    highlights: {
      uz: [
        "Kun-kun itinerary builder (drag-and-drop)",
        "Guruh xarajatlarini avtomatik bo'lish (greedy algoritm)",
        "Travel buddy finder — mos sherik tavsiyalari",
        "20 ta destination katalog va sharhlar",
        "OTP email autentifikatsiya, real-time bildirishnomalar",
      ],
      en: [
        "Day-by-day drag-and-drop itinerary builder",
        "Automatic group expense splitting (greedy algorithm)",
        "Travel buddy finder with matched suggestions",
        "20-destination curated catalog with reviews",
        "OTP email authentication, real-time notifications",
      ],
    },
    stack: [
      "NestJS 10",
      "TypeORM",
      "PostgreSQL",
      "Next.js 14",
      "TypeScript",
      "RTK Query",
      "TailwindCSS",
      "Nodemailer",
      "Framer Motion",
    ],
    live: "https://meridian.sarvarbek-sodiqov.uz",
    github: "https://github.com/Sarvarbek0704/meridian",
    demo: {
      label: { uz: "Demo hisob", en: "Demo credentials" },
      entries: [
        { role: "User", email: "demo@meridian.app", password: "Demo@2024" },
      ],
    },
    year: "2026",
    category: { uz: "Sayohat · Lifestyle", en: "Travel · Lifestyle" },
  },
  {
    slug: "library",
    title: "Library",
    images: [
      { src: "/shots/library-desktop.jpg", device: "desktop" },
      { src: "/shots/library-desktop-2.jpg", device: "desktop" },
      { src: "/shots/library-mobile.jpg", device: "mobile" },
    ],
    selfHosted: true,
    tagline: {
      uz: "Onlayn kutubxona boshqaruv tizimi",
      en: "Online library management system",
    },
    description: {
      uz: "Onlayn kutubxona platforma — foydalanuvchilar kitoblarni bron qiladi, oladi va qaytaradi. 3 ta rol: User, Admin, Super Admin. Telefon + parol autentifikatsiya, a'zolik (Membership) tariflari va to'lov tizimi, kitob qaytarish so'rovlari, navbat (waitlist) tizimi, sharhlar va reyting.",
      en: "Online library platform where users can book, borrow, and return books. Three roles — User, Admin, Super Admin. Phone + password authentication, membership plans with payments, return-request workflow, waitlist system, reviews and ratings.",
    },
    highlights: {
      uz: [
        "3 ta rol, granular admin huquqlari",
        "Telefon + parol autentifikatsiya, SMS OTP moduli",
        "A'zolik tariflari (ELITE, PRO, PREMIUM) va to'lovlar",
        "Kitob bron qilish, qaytarish, waitlist navbati",
        "Cron jobs — muddati o'tgan bronlar va deadline ogohlantirishlar",
      ],
      en: [
        "3 roles with granular admin permissions",
        "Phone + password authentication, SMS OTP module",
        "Membership tiers (ELITE, PRO, PREMIUM) with payments",
        "Book booking, returns, waitlist queue",
        "Cron jobs for overdue bookings and deadline alerts",
      ],
    },
    stack: [
      "NestJS",
      "Prisma 7",
      "PostgreSQL",
      "React 18",
      "TypeScript",
      "Redux Toolkit",
      "TanStack Query",
      "Radix UI",
      "TailwindCSS",
      "Recharts",
    ],
    live: "https://library.sarvarbek-sodiqov.uz",
    github: "https://github.com/Sarvarbek0704/library",
    demo: {
      label: { uz: "Demo hisob (Admin)", en: "Demo credentials (Admin)" },
      entries: [
        { role: "Admin", email: "+998901112233", password: "Library@2026" },
      ],
    },
    year: "2026",
    category: { uz: "Ta'lim · Boshqaruv", en: "Education · Management" },
  },
];

export const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Redux Toolkit",
    "RTK Query",
    "TanStack Query",
    "Tailwind CSS",
    "SCSS",
    "styled-components",
    "Vite",
  ],
  backend: [
    "Node.js",
    "NestJS",
    "Express",
    "REST API",
    "GraphQL",
    "WebSocket / Socket.io",
    "JWT / OAuth",
    "Prisma",
    "TypeORM",
    "Sequelize",
  ],
  databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  tools: [
    "Git",
    "Docker",
    "Nginx",
    "Linux (VPS)",
    "Let's Encrypt / SSL",
    "CI/CD",
    "PostgreSQL admin",
    "Swagger",
    "Figma",
  ],
};

export const t = {
  nav: {
    work: { uz: "Loyihalar", en: "Work" },
    about: { uz: "Men haqimda", en: "About" },
    skills: { uz: "Ko'nikmalar", en: "Skills" },
    contact: { uz: "Aloqa", en: "Contact" },
    resume: { uz: "Resume", en: "Resume" },
  },
  hero: {
    greeting: { uz: "Salom, men", en: "Hello, I'm" },
    role: { uz: "Full-Stack Web Developer", en: "Full-Stack Web Developer" },
    based: { uz: "Toshkent, Oʻzbekiston", en: "Tashkent, Uzbekistan" },
    intro: {
      uz: "Toshkentda yashovchi Full-Stack Web Developerman. Hozir ManaJoy'da frontend dasturchi sifatida ishlayapman. Bundan tashqari 10 ta to'liq stack loyihamning hammasi jonli — o'z VPS serverimda, o'z domenimda, Docker, Nginx va PostgreSQL bilan o'zim deploy qilib, HTTPS bilan ishlab turibman. Faqat kod yozmayman — deploy qilaman va ishlatib turaman.",
      en: "Full-Stack Web Developer based in Tashkent. I currently work as a frontend developer at ManaJoy. Beyond that, all 10 of my full-stack projects are live — self-hosted on my own VPS, on my own domain, deployed by me with Docker, Nginx and PostgreSQL, running over HTTPS. I don't just write code — I ship and operate it.",
    },
    cta1: { uz: "Loyihalarimni ko'ring", en: "View my work" },
    cta2: { uz: "Bog'lanish", en: "Get in touch" },
    available: { uz: "Ish uchun ochiqman", en: "Open to work" },
  },
  work: {
    eyebrow: { uz: "01 — Loyihalar", en: "01 — Selected Work" },
    title: { uz: "Mening loyihalarim", en: "Featured projects" },
    subtitle: {
      uz: "O'nta to'liq stack loyiha — hammasi jonli ishlaydi. ManaJoy'ni ish joyimda jamoada quramiz; qolganlarini boshidan oxirigacha yakka o'zim qurib, o'z VPS serverimда (Docker, Nginx, PostgreSQL, HTTPS) deploy qildim. Demo hisoblar bilan hoziroq sinab ko'ring.",
      en: "Ten full-stack projects — all live. ManaJoy I build with a team at work; the rest I built end-to-end on my own and deployed to my own VPS (Docker, Nginx, PostgreSQL, HTTPS). Try them right now with the demo credentials.",
    },
    viewLive: { uz: "Saytni ochish", en: "Open live site" },
    viewCode: { uz: "Kodni ko'rish", en: "Source code" },
    privateCode: { uz: "Kod yopiq", en: "Private code" },
    selfHosted: { uz: "O'z serverimda jonli", en: "Live · self-hosted" },
    highlights: { uz: "Asosiy xususiyatlar", en: "Key features" },
    stack: { uz: "Texnologiyalar", en: "Tech stack" },
    closeBtn: { uz: "Yopish", en: "Close" },
  },
  about: {
    eyebrow: { uz: "02 — Men haqimda", en: "02 — About" },
    title: { uz: "Qisqacha biografiya", en: "A brief bio" },
    p1: {
      uz: "Men 19 yoshli Full-Stack Web Developerman, Toshkentda yashayman. Najot Ta'limda 8 oylik intensiv Full-Stack bootcamp kursini tugatdim va Toshkent Davlat Iqtisodiyot Universitetining Axborot xavfsizligi yo'nalishi 3-kursida sirtqi ta'lim shaklida o'qiyman.",
      en: "I'm a 19-year-old Full-Stack Web Developer based in Tashkent. I completed an 8-month intensive Full-Stack bootcamp at Najot Ta'lim and study Information Security as a part-time 3rd-year student at Tashkent State University of Economics.",
    },
    p2: {
      uz: "2026-yilning may oyidan beri ManaJoy'da frontend dasturchi sifatida ishlayapman — O'zbekiston bo'ylab ishlaydigan real marketplace va uning admin panelini jamoada, project manager rahbarligida rivojlantiraman. Bu menga real mahsulot, kod-review va jamoada ishlash tajribasini beryapti.",
      en: "Since May 2026 I've been working as a frontend developer at ManaJoy — building a real, nationwide marketplace and its admin panel with a team, led by a project manager. It's giving me hands-on experience with a real product, code review and teamwork.",
    },
    p3: {
      uz: "Ishdan tashqari 10 ta to'liq stack loyihamning hammasi jonli — tibbiyot, e-commerce, ta'lim, jonli dars, freelance marketplace, sayohat, jamoa boshqaruvi va kutubxona sohalarida. Har birida multi-tenant DB, RBAC, JWT, real-time va to'lov oqimlarini o'zim ishlab chiqdim. Muhimi — men ularni faqat yozmadim, balki o'z VPS serverimga Docker, Nginx va PostgreSQL bilan o'zim deploy qildim va HTTPS bilan ishlatib turibman. Ustoz — to'lovchi mijozi bor real mahsulot. Hozir kuchli jamoalar bilan katta masshtabli ishlarga ochiqman.",
      en: "Outside of work all 10 of my full-stack projects are live — across healthcare, e-commerce, education, live teaching, freelance marketplaces, travel, team collaboration and library management — each covering multi-tenant DB schemas, RBAC, JWT, real-time features and payment flows. What matters: I didn't just write them, I deployed them myself to my own VPS with Docker, Nginx and PostgreSQL, running over HTTPS. Ustoz is a real product with a paying client. I'm open to larger-scale work with strong teams.",
    },
    facts: {
      uz: [
        { k: "Joylashuv", v: "Toshkent, O'zbekiston" },
        { k: "Hozirgi ish", v: "Frontend Dev · ManaJoy" },
        { k: "Loyihalar", v: "10 jonli · 8 self-hosted" },
        { k: "Deploy", v: "Docker · Nginx · VPS" },
        { k: "Ta'lim", v: "TDIU + Najot Ta'lim" },
        { k: "Mavjudligi", v: "Yangi imkoniyatlarga ochiq" },
      ],
      en: [
        { k: "Location", v: "Tashkent, Uzbekistan" },
        { k: "Current role", v: "Frontend Dev · ManaJoy" },
        { k: "Projects", v: "10 live · 8 self-hosted" },
        { k: "Deployment", v: "Docker · Nginx · VPS" },
        { k: "Education", v: "TSUE + Najot Ta'lim" },
        { k: "Availability", v: "Open to opportunities" },
      ],
    },
  },
  skills: {
    eyebrow: { uz: "03 — Ko'nikmalar", en: "03 — Skills" },
    title: { uz: "Texnologiyalar", en: "Tech stack" },
    subtitle: {
      uz: "Har kuni ishlatadigan vositalarim. Ko'pchiligini chuqur bilaman, ba'zilarini hozircha asosiy darajada.",
      en: "Tools I work with daily. I know most deeply, some at a working level.",
    },
    groups: {
      frontend: { uz: "Frontend", en: "Frontend" },
      backend: { uz: "Backend", en: "Backend" },
      databases: { uz: "Ma'lumotlar bazasi", en: "Databases" },
      tools: { uz: "DevOps va vositalar", en: "DevOps & Tools" },
    },
  },
  experience: {
    eyebrow: { uz: "04 — Tajriba", en: "04 — Experience" },
    title: { uz: "Ish va ta'lim", en: "Experience & Education" },
    workLabel: { uz: "Ish tajribasi", en: "Work experience" },
    eduLabel: { uz: "Ta'lim", en: "Education" },
    work: {
      uz: [
        {
          place: "ManaJoy",
          role: "Frontend dasturchi",
          period: "2026-may — hozir",
          note: "O'zbekiston bo'ylab ishlaydigan onlayn marketplace (chegirmalar, do'konlar, xizmatlar, loyalty). Mijozlar sayti va ichki admin panelini React, Next.js va TypeScript'da rivojlantiraman — mahsulot va do'kon kataloglari, MapLibre bilan xarita, buyurtma va loyalty oqimlari. Project manager rahbarligida jamoada ishlayman.",
        },
      ],
      en: [
        {
          place: "ManaJoy",
          role: "Frontend Developer",
          period: "May 2026 — Present",
          note: "Nationwide online marketplace (discounts, stores, services, loyalty). I build the customer-facing site and the internal admin panel with React, Next.js and TypeScript — product and store catalogs, MapLibre maps, order and loyalty flows. Working within a team led by a project manager.",
        },
      ],
    },
    education: {
      uz: [
        {
          place: "Toshkent Davlat Iqtisodiyot Universiteti",
          role: "Bakalavr — Axborot xavfsizligi",
          period: "2024 — hozir",
          note: "Raqamli iqtisodiyot va axborot texnologiyalari fakulteti. 3-kurs talabasi, sirtqi ta'lim shaklida.",
        },
        {
          place: "Najot Ta'lim",
          role: "Full-Stack Web Development bootcamp",
          period: "2025 — 2026",
          note: "8 oylik intensiv kurs: Node.js, React, TypeScript, PostgreSQL, MongoDB. Sertifikatlangan.",
        },
      ],
      en: [
        {
          place: "Tashkent State University of Economics",
          role: "Bachelor's — Information Security",
          period: "2024 — Present",
          note: "Faculty of Digital Economy & Information Technologies. 3rd-year student, part-time / extramural program.",
        },
        {
          place: "Najot Ta'lim",
          role: "Full-Stack Web Development Bootcamp",
          period: "2025 — 2026",
          note: "8-month intensive program covering Node.js, React, TypeScript, PostgreSQL, MongoDB. Certified.",
        },
      ],
    },
  },
  contact: {
    eyebrow: { uz: "05 — Aloqa", en: "05 — Get in touch" },
    title: { uz: "Keling, gaplashaylik", en: "Let's talk" },
    subtitle: {
      uz: "Yangi imkoniyatlar, jamoa loyihalari yoki biror takliflaringiz bo'lsa yozing.",
      en: "Open to new opportunities, team projects, or just a friendly hello. I usually reply within a day.",
    },
    email: { uz: "Email", en: "Email" },
    telegram: { uz: "Telegram", en: "Telegram" },
    phone: { uz: "Telefon", en: "Phone" },
    github: { uz: "GitHub", en: "GitHub" },
    linkedin: { uz: "LinkedIn", en: "LinkedIn" },
  },
  resume: {
    title: { uz: "Resume yuklab olish", en: "Download resume" },
    options: {
      uz: [
        {
          label: "CV (O'zbek tilida) — 2 sahifa",
          file: "/Sarvarbek-Sodiqov-CV-uz.pdf",
        },
        {
          label: "CV (Ingliz tilida) — 2 sahifa",
          file: "/Sarvarbek-Sodiqov-CV-en.pdf",
        },
        {
          label: "Resume (O'zbek tilida) — 1 sahifa",
          file: "/Sarvarbek-Sodiqov-Resume-uz.pdf",
        },
        {
          label: "Resume (Ingliz tilida) — 1 sahifa",
          file: "/Sarvarbek-Sodiqov-Resume-en.pdf",
        },
      ],
      en: [
        { label: "CV (Uzbek) — 2 pages", file: "/Sarvarbek-Sodiqov-CV-uz.pdf" },
        {
          label: "CV (English) — 2 pages",
          file: "/Sarvarbek-Sodiqov-CV-en.pdf",
        },
        {
          label: "Resume (Uzbek) — 1 page",
          file: "/Sarvarbek-Sodiqov-Resume-uz.pdf",
        },
        {
          label: "Resume (English) — 1 page",
          file: "/Sarvarbek-Sodiqov-Resume-en.pdf",
        },
      ],
    },
  },
  footer: {
    rights: {
      uz: "© 2026 Sarvarbek Sodiqov. Barcha huquqlar himoyalangan.",
      en: "© 2026 Sarvarbek Sodiqov. All rights reserved.",
    },
    built: {
      uz: "React, TypeScript va Tailwind yordamida qurilgan — o'z serverimda hosted",
      en: "Built with React, TypeScript, and Tailwind — self-hosted on my own server",
    },
  },
};
