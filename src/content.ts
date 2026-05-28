export type Lang = "uz" | "en";

export type Project = {
  slug: string;
  title: string;
  tagline: { uz: string; en: string };
  description: { uz: string; en: string };
  highlights: { uz: string[]; en: string[] };
  stack: string[];
  live?: string;
  github: string;
  demo?: {
    label: { uz: string; en: string };
    entries: { role: string; email: string; password: string }[];
  };
  year: string;
  category: { uz: string; en: string };
};

export const projects: Project[] = [
  {
    slug: "mathacademy",
    title: "MathAcademy Digital Campus",
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
      uz: "Production darajadagi to'liq stack ilovalar quraman — tibbiyot, e-commerce, ta'lim, marketplace, sayohat va boshqa sohalarda. Toza arxitektura, xavfsizlik va foydalanuvchi tajribasiga jiddiy yondashaman.",
      en: "I build production-grade full-stack applications across healthcare, e-commerce, education, marketplaces, travel, and beyond. I care deeply about clean architecture, security, and user experience.",
    },
    cta1: { uz: "Loyihalarimni ko'ring", en: "View my work" },
    cta2: { uz: "Bog'lanish", en: "Get in touch" },
    available: { uz: "Ish uchun ochiqman", en: "Open to work" },
  },
  work: {
    eyebrow: { uz: "01 — Loyihalar", en: "01 — Selected Work" },
    title: { uz: "Mening loyihalarim", en: "Featured projects" },
    subtitle: {
      uz: "7 ta production darajadagi to'liq stack ilova — har biri solo qurilgan, deploy qilingan va to'liq test sifatida  ishlaydi.",
      en: "Seven production-grade full-stack applications — each built solo, deployed, and fully functional.",
    },
    viewLive: { uz: "Saytni ochish", en: "Live site" },
    viewCode: { uz: "Kodni ko'rish", en: "Source code" },
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
      uz: "So'nggi bir yil ichida boshidan oxirigacha o'zim qurgan 7 ta production darajadagi ilova bor — tibbiyot, e-commerce, ta'lim, freelance marketplace, sayohat rejalashtirish, jamoa boshqaruvi va kutubxona boshqaruvi sohalarida. Har bir loyihada multi-tenant DB sxemasidan tortib RBAC, JWT, real-time va escrow to'lovgacha hammasini o'zim ishlab chiqdim.",
      en: "Over the past year I've shipped 7 production-grade applications from scratch — across healthcare, e-commerce, education, freelance marketplaces, travel planning, team collaboration, and library management. Each one covers multi-tenant DB schemas, RBAC, JWT, real-time features, and escrow payment flows, all built end-to-end.",
    },
    p3: {
      uz: "Hozir tajribali jamoaga qo'shilib, real biznes muammolarini hal qilishga va katta masshtabli mahsulotlarda ishtirok etishga tayyorman. Tez o'rganaman, har bir yozgan kodimga javob beraman.",
      en: "Right now I'm looking to join an experienced team where I can solve real business problems and contribute to products at scale. I learn fast and take ownership of every line I ship.",
    },
    facts: {
      uz: [
        { k: "Joylashuv", v: "Toshkent, O'zbekiston" },
        { k: "Tajriba", v: "Yetti ta to'liq stack loyiha" },
        { k: "Ta'lim", v: "TDIU + Najot Ta'lim" },
        { k: "Mavjudligi", v: "Ish uchun ochiq" },
      ],
      en: [
        { k: "Location", v: "Tashkent, Uzbekistan" },
        { k: "Experience", v: "Seven full-stack projects" },
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
    eyebrow: { uz: "04 — Ta'lim", en: "04 — Education" },
    title: { uz: "Ta'lim yo'lim", en: "Education path" },
    items: {
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
