import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const photo = readFileSync(join(__dirname, 'photo.b64'), 'utf8').trim()

/* ----------------------------- DATA ----------------------------- */

const contact = {
  name: 'Sarvarbek Sodiqov',
  title: 'FULL-STACK WEB DEVELOPER',
  phone: '+998 90 087 77 80',
  email: 'coolsarvar2007@gmail.com',
  github: 'github.com/Sarvarbek0704',
  linkedin: 'linkedin.com/in/sarvarbek-sodiqov-a085a23b7',
  telegram: '@SarvarbekSodiqov',
}

const L = {
  en: {
    loc: 'Tashkent, Uzbekistan',
    summary:
      "Full-Stack Web Developer, currently a frontend developer at ManaJoy building a nationwide marketplace and its admin panel with React, Next.js and TypeScript. Beyond my job I've shipped nine production-grade full-stack applications end-to-end — and I don't just write them, I deploy and operate them: each runs on my own VPS with Docker, Nginx, PostgreSQL and automated HTTPS. One, a live-teaching platform, has a paying client. I'm fluent in multi-tenant schemas, RBAC, JWT, real-time features, escrow flows and OAuth, and I care about clean architecture, security and actually shipping.",
    skillsLabel: 'TECHNICAL SKILLS',
    workLabel: 'WORK EXPERIENCE',
    projectsLabel: 'FEATURED PROJECTS',
    eduLabel: 'EDUCATION',
    langLabel: 'LANGUAGES',
    aboutLabel: 'PROFILE',
    profileLabel: 'PROFILE',
    techLabel: 'TECHNOLOGIES',
    contactLabel: 'CONTACT',
    present: 'Present',
    skills: [
      ['Frontend', 'React · Next.js · TypeScript · Redux Toolkit · RTK Query · TanStack Query · Tailwind CSS · SCSS · Vite'],
      ['Backend', 'Node.js · NestJS · Express · REST API · GraphQL · WebSocket · JWT / OAuth · Prisma · TypeORM · Sequelize'],
      ['Databases', 'PostgreSQL · MongoDB · MySQL · Redis'],
      ['DevOps & Tools', 'Git · Docker · Nginx · Linux (VPS) · Let’s Encrypt · CI/CD · Swagger · Figma'],
    ],
    work: [
      {
        role: 'ManaJoy — Frontend Developer',
        period: 'May 2026 — Present',
        desc: 'Building the customer-facing marketplace and internal admin panel for a nationwide platform (discounts, stores, services, loyalty). Product and store catalogs, "nearby stores" maps and geolocation via MapLibre GL, order tracking, loyalty/points and reservation flows. Working within a team led by a project manager.',
        stack: 'React · Next.js · TypeScript · TailwindCSS · shadcn/ui · MapLibre GL · TanStack Query · React Hook Form · Zod',
      },
      {
        role: 'Najot Ta’lim — Full-Stack Developer',
        period: 'Oct 2025 — Mar 2026',
        desc: 'Full-stack web development for six months at the academy where I trained: built and maintained features across the frontend and backend with React, Node.js/NestJS and PostgreSQL, working from requirements to shipped, reviewed code.',
        stack: 'React · Node.js · NestJS · TypeScript · PostgreSQL',
      },
    ],
    education: [
      { place: 'Tashkent State University of Economics', period: '2024 — Present', lines: ['Faculty of Digital Economy & Information Technologies · Information Security', '3rd-year student, part-time / extramural program'] },
      { place: 'Najot Ta’lim — Coding Academy', period: '2025 — 2026', lines: ['Full-Stack Web Development Bootcamp (Node.js + React)', '8-month intensive program · Certified'] },
    ],
    languages: [['Uzbek', 'Native'], ['English', 'A2–B1 (Intermediate)'], ['Russian', 'A2–B1 (Intermediate)']],
  },
  uz: {
    loc: "Toshkent, O'zbekiston",
    summary:
      "Full-Stack Web Developer. Hozir ManaJoy'da frontend dasturchi — O'zbekiston bo'ylab ishlaydigan marketplace va uning admin panelini React, Next.js va TypeScript'da rivojlantiraman. Ishdan tashqari 9 ta production darajadagi to'liq stack ilovani boshidan oxirigacha qurdim — va ularni faqat yozmayman, o'zim deploy qilib ishlataman: har biri o'z VPS serverimda Docker, Nginx, PostgreSQL va avtomatik HTTPS bilan ishlaydi. Bittasi — jonli dars platformasi — to'lovchi mijozga ega. Multi-tenant sxemalar, RBAC, JWT, real-time, escrow va OAuth bilan erkin ishlayman; toza arxitektura, xavfsizlik va mahsulotni yetkazishga jiddiy qarayman.",
    skillsLabel: "TEXNIK KO'NIKMALAR",
    workLabel: 'ISH TAJRIBASI',
    projectsLabel: 'ASOSIY LOYIHALAR',
    eduLabel: "TA'LIM",
    langLabel: 'TILLAR',
    aboutLabel: 'MEN HAQIMDA',
    profileLabel: 'PROFIL',
    techLabel: 'TEXNOLOGIYALAR',
    contactLabel: 'ALOQA',
    present: 'hozir',
    skills: [
      ['Frontend', 'React · Next.js · TypeScript · Redux Toolkit · RTK Query · TanStack Query · Tailwind CSS · SCSS · Vite'],
      ['Backend', 'Node.js · NestJS · Express · REST API · GraphQL · WebSocket · JWT · Prisma · TypeORM · Sequelize'],
      ["Ma'lumotlar bazasi", 'PostgreSQL · MongoDB · MySQL · Redis'],
      ['DevOps va vositalar', 'Git · Docker · Nginx · Linux (VPS) · Let’s Encrypt · CI/CD · Swagger · Figma'],
    ],
    work: [
      {
        role: 'ManaJoy — Frontend dasturchi',
        period: '2026-may — hozir',
        desc: "O'zbekiston bo'ylab ishlaydigan marketplace (chegirmalar, do'konlar, xizmatlar, loyalty) mijozlar sayti va ichki admin panelini rivojlantiraman. Mahsulot va do'kon kataloglari, MapLibre GL bilan \"yaqin do'konlar\" xaritasi va geolokatsiya, buyurtma kuzatuvi, loyalty va bron oqimlari. Project manager rahbarligida jamoada ishlayman.",
        stack: 'React · Next.js · TypeScript · TailwindCSS · shadcn/ui · MapLibre GL · TanStack Query · React Hook Form · Zod',
      },
      {
        role: 'Najot Ta’lim — Full-Stack dasturchi',
        period: '2025-okt — 2026-mart',
        desc: "O'zim o'qigan akademiyada 6 oy full-stack dasturchi: React, Node.js/NestJS va PostgreSQL bilan frontend va backend funksiyalarini qurdim va rivojlantirdim — talabdan tortib yetkazilgan, review qilingan kodgacha.",
        stack: 'React · Node.js · NestJS · TypeScript · PostgreSQL',
      },
    ],
    education: [
      { place: 'Toshkent Davlat Iqtisodiyot Universiteti', period: '2024 — hozir', lines: ['Raqamli iqtisodiyot va axborot texnologiyalari fakulteti · Axborot xavfsizligi', '3-kurs talabasi, sirtqi ta’lim shakli'] },
      { place: 'Najot Ta’lim', period: '2025 — 2026', lines: ['Bootcamp: Full-Stack Web Development (Node.js + React)', '8 oylik intensiv kurs · Sertifikatlangan'] },
    ],
    languages: [["O'zbek", 'Ona tili'], ['Ingliz', 'A2–B1'], ['Rus', 'A2–B1']],
  },
}

/* project catalog (en + uz) — all live and self-hosted on my own VPS */
const P = {
  wisar: {
    en: { title: 'Wisar — Programming & English Learning Platform', url: 'wisar.uz',
      desc: 'A free Uzbek-language EdTech platform I built and shipped end-to-end: a zero-to-senior+ programming course with 706+ articles across 41+ sections, interactive coding exercises and quizzes, SM-2 spaced-repetition flashcards, an IELTS coach with mock tests, a daily planner, streaks and a progress dashboard with certificates.',
      stack: 'Next.js · React · TypeScript · TailwindCSS · Redux Toolkit · TanStack Query · Framer Motion' },
    uz: { title: "Wisar — Dasturlash va ingliz tili platformasi", url: 'wisar.uz',
      desc: "O'zbek tilidagi bepul ta'lim platformasi, boshidan oxirigacha o'zim qurdim: noldan senior+ gacha dasturlash kursi (706+ maqola, 41+ bo'lim), interaktiv mashqlar va quizlar, SM-2 spaced repetition flashcardlari, IELTS coach (mock testlar), kunlik planner, streak va sertifikatli progress dashboard.",
      stack: 'Next.js · React · TypeScript · TailwindCSS · Redux Toolkit · TanStack Query · Framer Motion' },
  },
  ziyo: {
    en: { title: 'Ziyo — Multi-tenant School Management System (SIS + LMS)', url: 'ziyo.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/ziyo',
      desc: 'Full-featured Student Information & Learning system on a multi-tenant architecture: 56 database models, 28 feature modules, granular RBAC, JWT auth with refresh-token rotation, brute-force protection and audit logging. 30+ staff pages and a dedicated 12-page guardian portal — tenant isolation enforced by the data layer.',
      stack: 'NestJS 11 · Prisma 7 · PostgreSQL · React 18 · TypeScript · TailwindCSS · shadcn/ui · TanStack Query · Vite' },
    uz: { title: 'Ziyo — Multi-tenant maktab boshqaruv tizimi (SIS + LMS)', url: 'ziyo.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/ziyo',
      desc: "Ta'lim muassasalari uchun multi-tenant SIS/LMS: 56 ta DB modeli, 28 ta modul, granular RBAC, JWT (access + refresh rotation), brute-force himoya, audit log. 30+ xodim sahifasi va 12 sahifalik ota-ona paneli — tenant izolyatsiyasi ma'lumot qatlamida majburlanadi.",
      stack: 'NestJS 11 · Prisma 7 · PostgreSQL · React 18 · TypeScript · TailwindCSS · shadcn/ui · TanStack Query · Vite' },
  },
  ustoz: {
    en: { title: 'Ustoz — Live-Teaching Platform (WebRTC) · has a paying client', url: 'ustoz.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/ustoz',
      desc: 'A real, sellable product with a paying client: teachers run live group classes over WebRTC (LiveKit), sessions are recorded to durable storage and rewatched by enrolled students, with auto-graded quizzes, teacher-graded assignments, attendance and watch-tracking. Interface in Uzbek, Russian and English.',
      stack: 'Next.js 16 · LiveKit (WebRTC) · Prisma · PostgreSQL · NextAuth · Cloudflare R2 (S3) · TypeScript · TailwindCSS' },
    uz: { title: "Ustoz — Jonli dars platformasi (WebRTC) · to'lovchi mijozli", url: 'ustoz.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/ustoz',
      desc: "To'lovchi mijozi bor real mahsulot: ustozlar WebRTC (LiveKit) orqali jonli guruh darslari o'tadi, darslar saqlanib enrollment orqali qayta ko'riladi, avtomatik baholanadigan testlar, ustoz baholaydigan uy ishlari, davomat va watch-tracking. Interfeys o'zbek, rus va ingliz tillarida.",
      stack: 'Next.js 16 · LiveKit (WebRTC) · Prisma · PostgreSQL · NextAuth · Cloudflare R2 (S3) · TypeScript · TailwindCSS' },
  },
  nexus: {
    en: { title: 'Nexus — Freelance & Agency Marketplace', url: 'nexus.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/nexus',
      desc: 'Upwork-style marketplace with four roles (Client, Freelancer, Agency Owner, Admin), 25 entities, and a milestone-based escrow payment system using a greedy debt-settlement algorithm. JWT auth alongside Google and GitHub OAuth (Passport.js), platform commission tracking, full dispute resolution module and in-app messaging.',
      stack: 'NestJS 10 · TypeORM · PostgreSQL · Next.js 14 · TypeScript · Redux Toolkit + RTK Query · TailwindCSS · Recharts' },
    uz: { title: 'Nexus — Freelance marketplace', url: 'nexus.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/nexus',
      desc: "Upwork tipidagi platforma: 4 ta rol (Klient, Freelanser, Agentlik egasi, Admin), 25 ta entity, milestone asosidagi escrow to'lov tizimi (greedy debt-settlement algoritmi), JWT + Google va GitHub OAuth (Passport.js), platforma komissiyasi, nizo hal qilish moduli, ichki messaging.",
      stack: 'NestJS 10 · TypeORM · PostgreSQL · Next.js 14 · TypeScript · Redux Toolkit + RTK Query · TailwindCSS · Recharts' },
  },
  helix: {
    en: { title: 'Helix — Healthcare Management Platform', url: 'helix.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/helix',
      desc: 'Full-stack hospital and clinic management system serving five roles (Patient, Doctor, Nurse, Lab Technician, Admin) with role-specific dashboards. Models the complete clinical workflow: appointment → consultation → medical record → prescription → lab order → results → billing → insurance claim. 18 entities, vitals tracking, OTP email verification.',
      stack: 'NestJS 10 · TypeORM · PostgreSQL · Next.js 14 · TypeScript · RTK Query · TailwindCSS · Framer Motion' },
    uz: { title: 'Helix — Tibbiyot boshqaruv platformasi', url: 'helix.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/helix',
      desc: "Klinika va kasalxonalar uchun to'liq tibbiyot tizimi: 5 ta rol uchun alohida dashboardlar (Bemor, Shifokor, Hamshira, Lab texnik, Admin), 18 ta entity, to'liq klinik workflow (qabul → ko'rik → tibbiy yozuv → retsept → lab → natija → hisob-faktura → sug'urta), hayotiy ko'rsatkichlar tracking, OTP email tasdiqlash.",
      stack: 'NestJS 10 · TypeORM · PostgreSQL · Next.js 14 · TypeScript · RTK Query · TailwindCSS · Framer Motion' },
  },
  karvon: {
    en: { title: 'Karvon — Multi-vendor E-Commerce Marketplace', url: 'karvon.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/karvon',
      desc: 'Complete e-commerce marketplace for the Uzbek market with four roles (Admin, Seller, Buyer, Courier), 26 entities, real-time chat via Socket.io, and a fully simulated Payme/Click/Uzum payment system with token-based payment pages and webhook endpoints. Image optimization via Sharp.',
      stack: 'NestJS 11 · TypeORM · PostgreSQL · Socket.io · React 19 · TypeScript · TailwindCSS 4 · RTK Query · Framer Motion' },
    uz: { title: 'Karvon — Ko\'p sotuvchili e-commerce marketplace', url: 'karvon.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/karvon',
      desc: "O'zbekiston bozori uchun to'liq funksional e-commerce: 4 ta rol (Admin, Sotuvchi, Xaridor, Kuryer), 26 ta entity, Socket.io real-time chat, Payme/Click/Uzum simulyator to'lov tizimi (token, webhook), Sharp bilan rasm optimizatsiyasi.",
      stack: 'NestJS 11 · TypeORM · PostgreSQL · Socket.io · React 19 · TypeScript · TailwindCSS 4 · RTK Query · Framer Motion' },
  },
  trellis: {
    en: { title: 'Trellis — Multi-tenant Team Project-Management Platform', url: 'trellis.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/trellis',
      desc: 'A focused Jira/Linear alternative with tested tenant isolation: Kanban, list and calendar views, real-time collaboration via Socket.io, role-based access, workspace invitations, time tracking, reporting, API keys and signed webhooks, and background jobs via BullMQ. Many teams on one deployment, each workspace isolated.',
      stack: 'NestJS 10 · TypeORM · PostgreSQL · BullMQ · Redis · Socket.io · Next.js 14 · TypeScript · TanStack Query · TailwindCSS' },
    uz: { title: 'Trellis — Multi-tenant jamoa loyiha-boshqaruv platformasi', url: 'trellis.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/trellis',
      desc: "Jira/Linear uslubidagi platforma (testlangan tenant izolyatsiyasi): Kanban/ro'yxat/kalendar ko'rinishlari, real-time hamkorlik (Socket.io), RBAC, workspace taklifnomalari, vaqt hisobi, hisobotlar, API kalitlar va imzolangan webhooklar, BullMQ fon vazifalari. Bitta deploymentda ko'p jamoa, har workspace izolyatsiyada.",
      stack: 'NestJS 10 · TypeORM · PostgreSQL · BullMQ · Redis · Socket.io · Next.js 14 · TypeScript · TanStack Query · TailwindCSS' },
  },
  meridian: {
    en: { title: 'Meridian — Travel Planning Platform', url: 'meridian.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/meridian',
      desc: 'Wanderlog/TripIt-style platform: multi-day trip creation, day-by-day drag-and-drop itinerary builder, group expense splitting via a greedy minimum-transaction algorithm, travel-buddy finder with matched suggestions, a 20-destination curated catalog, OTP email auth and a full review system.',
      stack: 'NestJS 10 · TypeORM · PostgreSQL · Next.js 14 · TypeScript · RTK Query · TailwindCSS · Nodemailer · Framer Motion' },
    uz: { title: 'Meridian — Sayohat rejalashtirish', url: 'meridian.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/meridian',
      desc: "Wanderlog/TripIt tipidagi platforma: trip yaratish, kun-kun itinerary builder (drag-and-drop), guruh xarajatlarini avtomatik bo'lish (greedy minimum-transaction algoritmi), travel buddy finder, 20 ta destination katalog, OTP email autentifikatsiya, sharhlar tizimi.",
      stack: 'NestJS 10 · TypeORM · PostgreSQL · Next.js 14 · TypeScript · RTK Query · TailwindCSS · Nodemailer · Framer Motion' },
  },
  javon: {
    en: { title: 'Javon — Online Library Platform', url: 'javon.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/javon',
      desc: 'Online library platform with three roles (User, Admin, Super Admin) across many libraries: phone + password authentication, membership tiers with a payment flow, book booking and return-request workflow, a waitlist system, reviews and ratings, plus cron jobs for overdue bookings and deadline alerts.',
      stack: 'NestJS · Prisma 7 · PostgreSQL · React 18 · TypeScript · Redux Toolkit · TanStack Query · Radix UI · TailwindCSS · Recharts' },
    uz: { title: 'Javon — Onlayn kutubxona platformasi', url: 'javon.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/javon',
      desc: "Onlayn kutubxona platforma (ko'p kutubxona): 3 ta rol (User, Admin, Super Admin), telefon + parol autentifikatsiya, a'zolik tariflari va to'lov tizimi, kitob bron qilish, qaytarish so'rovlari, waitlist (navbat), sharhlar va reyting, cron jobs (muddati o'tgan bronlar, deadline ogohlantirishlar).",
      stack: 'NestJS · Prisma 7 · PostgreSQL · React 18 · TypeScript · Redux Toolkit · TanStack Query · Radix UI · TailwindCSS · Recharts' },
  },
}

const RESUME_PROJECTS = ['wisar', 'ziyo', 'ustoz', 'nexus']
const CV_PROJECTS = ['wisar', 'ziyo', 'ustoz', 'nexus', 'helix', 'karvon', 'trellis', 'meridian']

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/* --------------------- SINGLE-COLUMN TEMPLATE --------------------- */

function single({ lang, mode }) {
  const d = L[lang]
  const keys = mode === 'resume' ? RESUME_PROJECTS : CV_PROJECTS
  const bodyFont = mode === 'resume' ? '9.6px' : '10px'
  const gap = mode === 'resume' ? '9px' : '12px'

  const projectHtml = keys.map((k) => {
    const p = P[k][lang]
    return `<div class="proj">
      <div class="proj-head"><span class="proj-title">${esc(p.title)}</span><span class="proj-url">${esc(p.url)}</span></div>
      <div class="proj-desc">${esc(p.desc)}</div>
      <div class="stack">${esc(p.stack)}</div>
    </div>`
  }).join('')

  const workHtml = d.work.map((w) => `<div class="proj">
      <div class="proj-head"><span class="proj-title">${esc(w.role)}</span><span class="proj-period">${esc(w.period)}</span></div>
      <div class="proj-desc">${esc(w.desc)}</div>
      <div class="stack">${esc(w.stack)}</div>
    </div>`).join('')

  const skillsHtml = d.skills.map(([k, v]) => `<div class="srow"><div class="slabel">${esc(k)}</div><div class="sval">${esc(v)}</div></div>`).join('')

  const eduHtml = d.education.map((e) => `<div class="edu-item"><div class="edu-head"><span class="edu-place">${esc(e.place)}</span><span class="edu-period">${esc(e.period)}</span></div>${e.lines.map((l) => `<div class="edu-line">${esc(l)}</div>`).join('')}</div>`).join('')
  const langHtml = d.languages.map(([k, v]) => `<div class="lang-row"><span class="lang-k">${esc(k)}</span><span class="lang-v">${esc(v)}</span></div>`).join('')

  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><style>
  @page { size: A4; margin: 13mm 14mm; }
  * { box-sizing: border-box; }
  html,body { margin:0; padding:0; }
  body { font-family: Arial, "Helvetica Neue", Helvetica, sans-serif; color:#18181b; font-size:${bodyFont}; line-height:1.5; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  .name { font-size:27px; font-weight:800; letter-spacing:-0.5px; margin:0; }
  .title { font-size:11px; letter-spacing:3px; color:#6b7280; font-weight:600; margin:4px 0 10px; }
  .contact { color:#3f3f46; font-size:${bodyFont}; }
  .contact span { color:#a1a1aa; margin:0 7px 0 3px; }
  .rule { border-bottom:1.6px solid #18181b; margin:9px 0 11px; }
  .summary { text-align:justify; color:#27272a; margin:0 0 ${gap}; }
  .sec { margin-top:${gap}; }
  .sec-h { font-size:11px; font-weight:700; letter-spacing:2.5px; color:#18181b; border-bottom:1px solid #d4d4d8; padding-bottom:4px; margin-bottom:7px; }
  .srow { display:flex; gap:14px; margin-bottom:4px; }
  .slabel { width:120px; flex:none; font-weight:700; color:#18181b; }
  .sval { color:#3f3f46; }
  .proj { margin-bottom:${mode==='resume'?'7px':'9px'}; page-break-inside:avoid; }
  .proj-head { display:flex; justify-content:space-between; align-items:baseline; gap:12px; }
  .proj-title { font-weight:700; color:#18181b; }
  .proj-url { color:#2563eb; font-size:8.6px; white-space:nowrap; }
  .proj-period { color:#6b7280; font-size:9px; font-weight:600; white-space:nowrap; }
  .proj-desc { color:#3f3f46; margin:2px 0; }
  .stack { color:#71717a; font-style:italic; font-size:8.8px; }
  .two { display:flex; gap:34px; }
  .two > div { flex:1; }
  .edu-item { margin-bottom:6px; }
  .edu-head { display:flex; justify-content:space-between; gap:10px; }
  .edu-place { font-weight:700; }
  .edu-period { color:#6b7280; white-space:nowrap; }
  .edu-line { color:#3f3f46; font-size:9px; }
  .lang-row { display:flex; justify-content:space-between; margin-bottom:5px; }
  .lang-k { font-weight:700; }
  .lang-v { color:#3f3f46; }
  </style></head><body>
  <div class="name">${esc(contact.name)}</div>
  <div class="title">${esc(contact.title)}</div>
  <div class="contact">${esc(d.loc)} <span>•</span> ${esc(contact.phone)} <span>•</span> ${esc(contact.email)} <span>•</span> ${esc(contact.github)} <span>•</span> ${esc(contact.linkedin)} <span>•</span> Telegram: ${esc(contact.telegram)}</div>
  <div class="rule"></div>
  <div class="summary">${esc(d.summary)}</div>

  <div class="sec"><div class="sec-h">${esc(d.workLabel)}</div>${workHtml}</div>
  <div class="sec"><div class="sec-h">${esc(d.skillsLabel)}</div>${skillsHtml}</div>
  <div class="sec"><div class="sec-h">${esc(d.projectsLabel)}</div>${projectHtml}</div>
  <div class="sec two">
    <div><div class="sec-h">${esc(d.eduLabel)}</div>${eduHtml}</div>
    <div><div class="sec-h">${esc(d.langLabel)}</div>${langHtml}</div>
  </div>
  </body></html>`
}

/* ------------------------- SIDEBAR TEMPLATE ------------------------- */

function sidebar({ lang }) {
  const d = L[lang]
  const keys = CV_PROJECTS

  const chips = (arr) => arr.map((s) => `<span class="chip">${esc(s)}</span>`).join('')
  const feCore = ['React', 'Next.js', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'TanStack Query', 'Tailwind CSS', 'SCSS', 'Vite']
  const beCore = ['Node.js', 'NestJS', 'Express', 'REST API', 'GraphQL', 'WebSocket', 'JWT', 'Prisma', 'TypeORM']
  const dbCore = ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis']
  const opsCore = ['Git', 'Docker', 'Nginx', 'Linux (VPS)', "Let's Encrypt", 'CI/CD', 'Figma']

  const projectHtml = keys.map((k) => {
    const p = P[k][lang]
    return `<div class="proj">
      <div class="proj-title">${esc(p.title)}</div>
      <div class="proj-url">${esc(p.url)}</div>
      <div class="proj-desc">${esc(p.desc)}</div>
      <div class="stack">${esc(p.stack)}</div>
    </div>`
  }).join('')

  const workHtml = d.work.map((w) => `<div class="proj">
      <div class="proj-title">${esc(w.role)}</div>
      <div class="proj-url">${esc(w.period)}</div>
      <div class="proj-desc">${esc(w.desc)}</div>
      <div class="stack">${esc(w.stack)}</div>
    </div>`).join('')

  const eduHtml = d.education.map((e) => `<div class="edu-item"><div class="edu-head"><span class="edu-place">${esc(e.place)}</span><span class="edu-period">${esc(e.period)}</span></div>${e.lines.map((l) => `<div class="edu-line">${esc(l)}</div>`).join('')}</div>`).join('')

  const feLabel = lang === 'uz' ? 'Frontend' : 'Frontend'
  const beLabel = lang === 'uz' ? 'Backend' : 'Backend'
  const dbLabel = lang === 'uz' ? "Ma'lumotlar bazasi" : 'Databases'
  const opsLabel = lang === 'uz' ? 'DevOps va vositalar' : 'DevOps & Tools'

  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; }
  html,body { margin:0; padding:0; }
  body { font-family: Arial, "Helvetica Neue", Helvetica, sans-serif; color:#18181b; font-size:10px; line-height:1.5; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  .sidebar { position:fixed; top:0; left:0; width:70mm; height:297mm; overflow:hidden; background:linear-gradient(180deg,#1e293b 0%,#0f172a 100%); color:#e2e8f0; padding:11mm 8mm; }
  .photo { width:32mm; height:32mm; border-radius:50%; object-fit:cover; display:block; margin:0 auto 4.5mm; border:2px solid rgba(255,255,255,.25); }
  .s-name { text-align:center; font-size:18px; font-weight:800; color:#fff; line-height:1.12; }
  .s-title { text-align:center; font-size:8.4px; letter-spacing:2px; color:#94a3b8; font-weight:600; margin-top:4px; }
  .s-div { border-top:1px solid rgba(255,255,255,.15); margin:3.6mm 0; }
  .s-h { font-size:9.6px; font-weight:700; letter-spacing:2px; color:#e2e8f0; margin:0 0 2.4mm; }
  .c-row { margin-bottom:1.9mm; }
  .c-k { font-size:7.2px; letter-spacing:1px; color:#64748b; text-transform:uppercase; }
  .c-v { font-size:8.6px; color:#e2e8f0; word-break:break-word; }
  .grp { margin-bottom:2.3mm; }
  .grp-l { font-size:8.6px; font-weight:700; color:#fff; margin-bottom:1.4mm; }
  .chips { display:flex; flex-wrap:wrap; gap:1.1mm; }
  .chip { border:1px solid rgba(255,255,255,.28); border-radius:3px; padding:0.45mm 1.4mm; font-size:7.6px; color:#cbd5e1; }
  .lang-row { display:flex; justify-content:space-between; margin-bottom:1.3mm; font-size:8.6px; }
  .lang-k { color:#fff; font-weight:600; }
  .lang-v { color:#94a3b8; }

  .main { margin-left:70mm; padding:16mm 12mm 14mm; }
  .m-h { font-size:13px; font-weight:800; letter-spacing:2px; color:#18181b; border-bottom:1.4px solid #cbd5e1; padding-bottom:4px; margin:0 0 7px; }
  .m-sec { margin-bottom:12px; }
  .about { text-align:justify; color:#27272a; }
  .proj { margin-bottom:9px; page-break-inside:avoid; }
  .proj-title { font-weight:700; color:#18181b; font-size:10.5px; }
  .proj-url { color:#2563eb; font-size:8.4px; margin:1px 0; }
  .proj-desc { color:#3f3f46; margin:2px 0; }
  .stack { color:#71717a; font-style:italic; font-size:8.6px; }
  .edu-item { margin-bottom:6px; }
  .edu-head { display:flex; justify-content:space-between; gap:10px; }
  .edu-place { font-weight:700; }
  .edu-period { color:#6b7280; white-space:nowrap; }
  .edu-line { color:#3f3f46; font-size:9px; }
  </style></head><body>
  <div class="sidebar">
    <img class="photo" src="${photo}" alt="">
    <div class="s-name">Sarvarbek<br>Sodiqov</div>
    <div class="s-title">${esc(contact.title)}</div>
    <div class="s-div"></div>
    <div class="s-h">${esc(d.contactLabel)}</div>
    <div class="c-row"><div class="c-k">TEL</div><div class="c-v">${esc(contact.phone)}</div></div>
    <div class="c-row"><div class="c-k">EMAIL</div><div class="c-v">${esc(contact.email)}</div></div>
    <div class="c-row"><div class="c-k">TG</div><div class="c-v">${esc(contact.telegram)}</div></div>
    <div class="c-row"><div class="c-k">${lang === 'uz' ? 'MANZIL' : 'LOCATION'}</div><div class="c-v">${esc(d.loc)}</div></div>
    <div class="s-div"></div>
    <div class="s-h">${esc(d.profileLabel)}</div>
    <div class="c-row"><div class="c-k">GITHUB</div><div class="c-v">${esc(contact.github)}</div></div>
    <div class="c-row"><div class="c-k">LINKEDIN</div><div class="c-v">${esc(contact.linkedin)}</div></div>
    <div class="s-div"></div>
    <div class="s-h">${esc(d.techLabel)}</div>
    <div class="grp"><div class="grp-l">${feLabel}</div><div class="chips">${chips(feCore)}</div></div>
    <div class="grp"><div class="grp-l">${beLabel}</div><div class="chips">${chips(beCore)}</div></div>
    <div class="grp"><div class="grp-l">${dbLabel}</div><div class="chips">${chips(dbCore)}</div></div>
    <div class="grp"><div class="grp-l">${opsLabel}</div><div class="chips">${chips(opsCore)}</div></div>
    <div class="s-div"></div>
    <div class="s-h">${esc(d.langLabel)}</div>
    ${d.languages.map(([k, v]) => `<div class="lang-row"><span class="lang-k">${esc(k)}</span><span class="lang-v">${esc(v)}</span></div>`).join('')}
  </div>
  <div class="main">
    <div class="m-sec"><div class="m-h">${esc(d.aboutLabel)}</div><div class="about">${esc(d.summary)}</div></div>
    <div class="m-sec"><div class="m-h">${esc(d.workLabel)}</div>${workHtml}</div>
    <div class="m-sec"><div class="m-h">${esc(d.projectsLabel)}</div>${projectHtml}</div>
    <div class="m-sec"><div class="m-h">${esc(d.eduLabel)}</div>${eduHtml}</div>
  </div>
  </body></html>`
}

/* ----------------------------- EMIT ----------------------------- */
const out = join(__dirname, 'out')
writeFileSync(join(out, 'Resume-en.html'), single({ lang: 'en', mode: 'resume' }))
writeFileSync(join(out, 'Resume-uz.html'), single({ lang: 'uz', mode: 'resume' }))
writeFileSync(join(out, 'CV-en.html'), single({ lang: 'en', mode: 'cv' }))
writeFileSync(join(out, 'CV-uz.html'), sidebar({ lang: 'uz' }))
console.log('generated 4 html files')
