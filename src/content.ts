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
      { src: "/shots/manajoy.jpg", device: "desktop" },
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
    slug: "wisar",
    title: "Wisar",
    tagline: {
      uz: "Dasturlash va ingliz tili o'rganish platformasi",
      en: "Programming & English learning platform",
    },
    badge: { uz: "Jonli mahsulot · Yakka", en: "Live product · Solo" },
    description: {
      uz: "O'zbek tilidagi bepul ta'lim platformasi — noldan senior+ gacha to'liq full-stack dasturlash kursi, 499+ maqola va 34+ bo'lim, ingliz tili va IELTS moduli. Interaktiv mashqlar, SM-2 spaced repetition flashcardlari, kunlik planner va streak tizimi bilan bilimni amaliyotga bog'laydi. Ushbu platformani boshidan oxirigacha o'zim ishlab chiqdim va real domenda ishga tushirdim.",
      en: "A free Uzbek-language learning platform — a full-stack programming course from zero to senior+, 499+ articles across 34+ sections, plus English and IELTS modules. It ties theory to practice with interactive exercises, SM-2 spaced-repetition flashcards, a daily planner and a streak system. I built this platform end-to-end on my own and shipped it on a real domain.",
    },
    highlights: {
      uz: [
        "499+ maqola, 34+ bo'lim — noldan senior+ gacha kurs",
        "Interaktiv mashqlar: kod yozish, quiz, bo'sh joyni to'ldirish",
        "SM-2 algoritmi asosidagi spaced repetition flashcard tizimi",
        "IELTS Coach — mock testlar va progress kuzatuvi",
        "Kunlik planner, streak va progress dashboard (haftalik hisobot, sertifikat)",
      ],
      en: [
        "499+ articles across 34+ sections — a zero-to-senior+ course",
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
    slug: "mathacademy",
    title: "MathAcademy Digital Campus",
    images: [{ src: "/shots/mathacademy.jpg", device: "desktop" }],
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
      "Redis",
      "React 18",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "TanStack Query",
      "Framer Motion",
      "Vite",
    ],
    live: "https://mathacademy-2-web.vercel.app",
    github: "https://github.com/Sarvarbek0704/mathacademy_2",
    demo: {
      label: { uz: "Demo hisoblar", en: "Demo credentials" },
      entries: [
        { role: "Admin", email: "mathacademy / demo", password: "Demo@1234" },
        {
          role: "Ota-ona",
          email: "mathacademy-MA-DEMO",
          password: "Demo@1234",
        },
      ],
    },
    year: "2026",
    category: { uz: "Ta'lim · LMS", en: "Education · LMS" },
  },
  {
    slug: "smdshop",
    title: "SMD Shop",
    images: [{ src: "/shots/smdshop.jpg", device: "desktop" }],
    tagline: {
      uz: "To'liq stack e-commerce platforma",
      en: "Full-stack e-commerce marketplace",
    },
    description: {
      uz: "O'zbekiston bozori uchun ishlab chiqilgan to'liq funksional e-commerce platforma. 4 ta rol — Admin, Sotuvchi, Xaridor, Kuryer — har biri uchun alohida dashboard. Socket.io orqali real-time chat. Payme, Click va Uzum to'lov tizimlari uchun to'liq simulyator (15 daqiqalik token, PIN klaviaturasi, webhook endpointlar).",
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
      "PostgreSQL (Neon)",
      "Socket.io",
      "React 19",
      "TypeScript",
      "TailwindCSS 4",
      "RTK Query",
      "Framer Motion",
    ],
    live: "https://online-shop-puce-xi.vercel.app",
    github: "https://github.com/Sarvarbek0704/online-shop",
    demo: {
      label: { uz: "Demo hisoblar", en: "Demo credentials" },
      entries: [
        { role: "Admin", email: "demo.admin@smd.uz", password: "Demo12345!" },
        { role: "Seller", email: "demo.seller@smd.uz", password: "Demo12345!" },
        { role: "Buyer", email: "demo.user@smd.uz", password: "Demo12345!" },
      ],
    },
    year: "2026",
    category: {
      uz: "E-commerce · Marketplace",
      en: "E-commerce · Marketplace",
    },
  },
  {
    slug: "helix",
    title: "Helix",
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
    live: "https://helix-healthcare.vercel.app",
    github: "https://github.com/Sarvarbek0704/helix",
    demo: {
      label: { uz: "Demo hisoblar", en: "Demo credentials" },
      entries: [
        { role: "Admin", email: "demo.admin@helix.uz", password: "Demo@12345" },
        {
          role: "Doctor",
          email: "demo.doctor@helix.uz",
          password: "Demo@12345",
        },
        {
          role: "Nurse",
          email: "demo.nurse@helix.uz",
          password: "Demo@12345",
        },
        {
          role: "LabTech",
          email: "demo.labtech@helix.uz",
          password: "Demo@12345",
        },
        {
          role: "Patient",
          email: "demo.patient@helix.uz",
          password: "Demo@12345",
        },
      ],
    },
    year: "2026",
    category: { uz: "Tibbiyot · HealthTech", en: "Healthcare · HealthTech" },
  },
  {
    slug: "nexus",
    title: "Nexus",
    images: [{ src: "/shots/nexus.jpg", device: "desktop" }],
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
    live: "https://nexus-beryl-nu.vercel.app",
    github: "https://github.com/Sarvarbek0704/nexus",
    demo: {
      label: { uz: "Demo hisoblar", en: "Demo credentials" },
      entries: [
        {
          role: "Admin",
          email: "demo.admin@nexus.dev",
          password: "Demo@1234",
        },
        {
          role: "Freelancer",
          email: "demo.freelancer@nexus.dev",
          password: "Demo@1234",
        },
        {
          role: "Client",
          email: "demo.client@nexus.dev",
          password: "Demo@1234",
        },
        {
          role: "Agency owner",
          email: "demo.agency@nexus.dev",
          password: "Demo@1234",
        },
      ],
    },
    year: "2026",
    category: { uz: "Marketplace · FinTech", en: "Marketplace · FinTech" },
  },
  {
    slug: "meridian",
    title: "Meridian",
    images: [{ src: "/shots/meridian.jpg", device: "desktop" }],
    tagline: {
      uz: "Sayohat rejalashtirish platformasi",
      en: "Travel planning platform",
    },
    description: {
      uz: "Wanderlog va TripIt tipidagi to'liq sayohat rejalashtirish platformasi. Foydalanuvchilar ko'p-kunlik sayohatlar tuzadi, kun-kun itinerary builder bilan reja chizadi, guruh xarajatlarini avtomatik bo'ladi va sayohat sherigi (buddy) topadi. 15 ta dunyoning eng mashhur destinatsiyalari katalogi va sharhlar tizimi.",
      en: "Wanderlog/TripIt-style travel planning platform. Users plan multi-day trips, build day-by-day itineraries, automatically split group expenses, and find travel buddies. Curated catalog of 15 world destinations with a full review system.",
    },
    highlights: {
      uz: [
        "Kun-kun itinerary builder (drag-and-drop)",
        "Guruh xarajatlarini avtomatik bo'lish (greedy algoritm)",
        "Travel buddy finder — AI orqali tavsiyalar",
        "15 ta destination katalog va sharhlar",
        "OTP email autentifikatsiya, real-time bildirishnomalar",
      ],
      en: [
        "Day-by-day drag-and-drop itinerary builder",
        "Automatic group expense splitting (greedy algorithm)",
        "Travel buddy finder with AI-matched suggestions",
        "15-destination curated catalog with reviews",
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
    live: "https://meridian-beta-eight.vercel.app",
    github: "https://github.com/Sarvarbek0704/meridian",
    demo: {
      label: { uz: "Demo hisoblar", en: "Demo credentials" },
      entries: [
        {
          role: "Admin",
          email: "demo.admin@meridian.app",
          password: "Demo@2024",
        },
        {
          role: "User",
          email: "demo@meridian.app",
          password: "Demo@2024",
        },
      ],
    },
    year: "2026",
    category: { uz: "Sayohat · Lifestyle", en: "Travel · Lifestyle" },
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    tagline: {
      uz: "Jamoa vazifa boshqaruvi platformasi (PWA)",
      en: "Team task management platform (PWA)",
    },
    description: {
      uz: "Trello tipidagi Kanban platforma. Drag-and-drop board, ko'p workspace, polyglot persistence (PostgreSQL + MongoDB). Telegram bot orqali bildirishnomalar, cron jobs orqali deadline tekshiruvi, Markdown izohlar, fayl yuklash, CSV eksport. PWA — mobil qurilmaga o'rnatish mumkin va offline ishlaydi.",
      en: "Trello-style Kanban platform with drag-and-drop, multi-workspace support, and polyglot persistence (PostgreSQL + MongoDB). Telegram bot for notifications, deadline-checker cron jobs, Markdown comments, file attachments, CSV export. Installable as a Progressive Web App with offline support.",
    },
    highlights: {
      uz: [
        "Drag-and-drop Kanban board, ko'p workspace",
        "Polyglot DB — PostgreSQL + MongoDB",
        "Telegram bot orqali real-time bildirishnomalar",
        "PWA — mobil qurilmada offline ishlaydi",
        "Global command palette (Ctrl+K), CSV eksport",
      ],
      en: [
        "Drag-and-drop Kanban with multi-workspace",
        "Polyglot persistence — PostgreSQL + MongoDB",
        "Real-time notifications via Telegram bot",
        "Installable PWA with offline support",
        "Global command palette (Ctrl+K), CSV export",
      ],
    },
    stack: [
      "Node.js",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "Mongoose",
      "MongoDB",
      "React 18",
      "TypeScript",
      "Redux Toolkit",
      "TanStack Query",
      "shadcn/ui",
    ],
    live: "https://taskflow-lovat-one.vercel.app",
    github: "https://github.com/Sarvarbek0704/taskflow",
    demo: {
      label: { uz: "Demo hisoblar", en: "Demo credentials" },
      entries: [
        {
          role: "Owner",
          email: "demo.owner@taskflow.uz",
          password: "DemoOwner@2024!",
        },
        {
          role: "Admin",
          email: "demo.admin@taskflow.uz",
          password: "DemoAdmin@2024!",
        },
        {
          role: "Member",
          email: "demo.member@taskflow.uz",
          password: "DemoMember@2024!",
        },
      ],
    },
    year: "2026",
    category: { uz: "Productivity · SaaS", en: "Productivity · SaaS" },
  },
  {
    slug: "library",
    title: "Library",
    images: [{ src: "/shots/library.jpg", device: "desktop" }],
    tagline: {
      uz: "Onlayn kutubxona boshqaruv tizimi",
      en: "Online library management system",
    },
    description: {
      uz: "Onlayn kutubxona platforma — foydalanuvchilar kitoblarni bron qiladi, oladi va qaytaradi. 3 ta rol: User, Admin, Super Admin. SMS OTP autentifikatsiya, a'zolik (Membership) tariflari va to'lov tizimi, kitob qaytarish so'rovlari, navbat (waitlist) tizimi, sharhlar va reyting.",
      en: "Online library platform where users can book, borrow, and return books. Three roles — User, Admin, Super Admin. SMS OTP authentication, membership plans with payments, return-request workflow, waitlist system, reviews and ratings.",
    },
    highlights: {
      uz: [
        "3 ta rol, granular admin huquqlari",
        "SMS OTP autentifikatsiya (dev rejimida devOtp UI da)",
        "A'zolik tariflari (ELITE, PRO, PREMIUM) va to\'lovlar",
        "Kitob bron qilish, qaytarish, waitlist navbati",
        "Cron jobs — muddati o'tgan bronlar va deadline ogohlantirishlar",
      ],
      en: [
        "3 roles with granular admin permissions",
        "SMS OTP authentication (devOtp UI in dev mode)",
        "Membership tiers (ELITE, PRO, PREMIUM) with payments",
        "Book booking, returns, waitlist queue",
        "Cron jobs for overdue bookings and deadline alerts",
      ],
    },
    stack: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "React 18",
      "TypeScript",
      "Redux Toolkit",
      "TanStack Query",
      "Radix UI",
      "TailwindCSS",
      "Recharts",
    ],
    live: "https://library-one-phi.vercel.app",
    github: "https://github.com/Sarvarbek0704/library",
    demo: {
      label: { uz: "Demo hisoblar", en: "Demo credentials" },
      entries: [
        { role: "User", email: "+998900000003", password: "demo1234" },
        { role: "Admin", email: "+998900000002", password: "demo1234" },
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
    "WebSocket",
    "JWT / OAuth",
    "Prisma",
    "TypeORM",
    "Sequelize",
  ],
  databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  tools: [
    "Git",
    "Docker",
    "CI/CD",
    "Vercel",
    "Render",
    "Railway",
    "Netlify",
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
      uz: "Toshkentda yashovchi Full-Stack Web Developerman. Hozir ManaJoy'da frontend dasturchi sifatida ishlayapman — real foydalanuvchili marketplace va uning admin panelini rivojlantiraman. Bundan tashqari boshidan oxirigacha o'zim qurgan wisar.uz ta'lim platformasi va yana 7 ta to'liq stack loyiham bor.",
      en: "Full-Stack Web Developer based in Tashkent. I currently work as a frontend developer at ManaJoy, building a real-world marketplace and its admin panel. Alongside that I've built the wisar.uz learning platform and 7 more full-stack projects end-to-end on my own.",
    },
    cta1: { uz: "Loyihalarimni ko'ring", en: "View my work" },
    cta2: { uz: "Bog'lanish", en: "Get in touch" },
    available: { uz: "Ish uchun ochiqman", en: "Open to work" },
  },
  work: {
    eyebrow: { uz: "01 — Loyihalar", en: "01 — Selected Work" },
    title: { uz: "Mening loyihalarim", en: "Featured projects" },
    subtitle: {
      uz: "To'qqizta loyiha — ManaJoy (ish joyimda jamoada quradigan jonli marketplace) va Wisar (o'zim yakka qurgan jonli ta'lim platformasi) real domenlarda ishlaydi, qolgan yettitasini esa boshidan oxirigacha yakka o'zim qurib deploy qildim.",
      en: "Nine projects — ManaJoy (a live marketplace I build with a team at work) and Wisar (a live learning platform I built solo) run on real domains, plus seven more I built and deployed end-to-end on my own.",
    },
    viewLive: { uz: "Saytni ochish", en: "Live site" },
    viewCode: { uz: "Kodni ko'rish", en: "Source code" },
    privateCode: { uz: "Kod yopiq", en: "Private code" },
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
      uz: "Ishdan tashqari boshidan oxirigacha o'zim qurgan real ta'lim platformam wisar.uz jonli ishlaydi, shuningdek yakka ishlab chiqqan 7 ta to'liq stack loyiham bor — tibbiyot, e-commerce, ta'lim, freelance marketplace, sayohat, jamoa boshqaruvi va kutubxona sohalarida. Har birida multi-tenant DB, RBAC, JWT, real-time va to'lov oqimlarini o'zim ishlab chiqdim. Hozir kuchli jamoalar bilan katta masshtabli ishlarga ham ochiqman.",
      en: "Outside of work my own learning platform wisar.uz is live, and I've shipped 7 more full-stack projects solo — across healthcare, e-commerce, education, freelance marketplaces, travel, team collaboration and library management — each covering multi-tenant DB schemas, RBAC, JWT, real-time features and payment flows. I'm also open to larger-scale work with strong teams.",
    },
    facts: {
      uz: [
        { k: "Joylashuv", v: "Toshkent, O'zbekiston" },
        { k: "Hozirgi ish", v: "Frontend Dev · ManaJoy" },
        { k: "Tajriba", v: "9 loyiha · 2 real mahsulot" },
        { k: "Ta'lim", v: "TDIU + Najot Ta'lim" },
        { k: "Mavjudligi", v: "Yangi imkoniyatlarga ochiq" },
      ],
      en: [
        { k: "Location", v: "Tashkent, Uzbekistan" },
        { k: "Current role", v: "Frontend Dev · ManaJoy" },
        { k: "Experience", v: "9 projects · 2 live products" },
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
      uz: "React, TypeScript va Tailwind yordamida qurilgan",
      en: "Built with React, TypeScript, and Tailwind",
    },
  },
};
