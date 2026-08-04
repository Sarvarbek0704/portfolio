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
  email: 'sarvarbek.sodiqov.dev@gmail.com',
  github: 'github.com/Sarvarbek0704',
  linkedin: 'linkedin.com/in/sarvarbek-sodiqov',
  telegram: '@SarvarbekSodiqov',
}

const L = {
  en: {
    loc: 'Tashkent, Uzbekistan',
    summary:
      "Full-Stack Web Developer, currently a frontend developer at ManaJoy — a nationwide marketplace and its admin panel, built with React, Next.js and TypeScript. Fourteen production-grade full-stack applications outside work, each self-hosted on a VPS with Docker, Nginx, PostgreSQL and automated HTTPS; one live-teaching platform has a paying client. Areas of work: multi-tenant schemas, RBAC, JWT, real-time features, escrow flows, OAuth, clean architecture and security.",
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
        desc: 'Customer-facing marketplace and internal admin panel for a nationwide platform (discounts, stores, services, loyalty). Product and store catalogs, "nearby stores" maps and geolocation via MapLibre GL, order tracking, loyalty/points and reservation flows. Team environment led by a project manager.',
        stack: 'React · Next.js · TypeScript · TailwindCSS · shadcn/ui · MapLibre GL · TanStack Query · React Hook Form · Zod',
      },
      {
        role: 'Najot Ta’lim — Full-Stack Developer',
        period: 'Oct 2025 — Mar 2026',
        desc: 'Six months of full-stack web development at the training academy: features across frontend and backend with React, Node.js/NestJS and PostgreSQL, from requirements to shipped, reviewed code.',
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
      "Full-Stack Web Developer. Hozirda ManaJoy'da frontend dasturchi — O'zbekiston bo'ylab ishlaydigan marketplace va uning admin paneli React, Next.js va TypeScript'da. Ish tashqarisida 14 ta production darajadagi to'liq stack ilova, har biri VPS serverda Docker, Nginx, PostgreSQL va avtomatik HTTPS bilan joylashtirilgan; bittasi — jonli dars platformasi — to'lovchi mijozga ega. Yo'nalishlar: multi-tenant sxemalar, RBAC, JWT, real-time, escrow, OAuth, toza arxitektura va xavfsizlik.",
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
        desc: "O'zbekiston bo'ylab ishlaydigan marketplace (chegirmalar, do'konlar, xizmatlar, loyalty) mijozlar sayti va ichki admin paneli. Mahsulot va do'kon kataloglari, MapLibre GL bilan \"yaqin do'konlar\" xaritasi va geolokatsiya, buyurtma kuzatuvi, loyalty va bron oqimlari. Project manager rahbarligida, jamoada.",
        stack: 'React · Next.js · TypeScript · TailwindCSS · shadcn/ui · MapLibre GL · TanStack Query · React Hook Form · Zod',
      },
      {
        role: 'Najot Ta’lim — Full-Stack dasturchi',
        period: '2025-okt — 2026-mart',
        desc: "O'qilgan akademiyada 6 oy full-stack dasturlash: React, Node.js/NestJS va PostgreSQL bilan frontend va backend funksiyalari — talabdan tortib yetkazilgan, review qilingan kodgacha.",
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

/* project catalog (en + uz) — all live and self-hosted on a VPS */
const P = {
  zehn: {
    en: { title: 'Zehn — Retrieval-Grounded (RAG) Assistant over Uzbek Corpora', url: 'zehn.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/zehn',
      desc: 'RAG assistant over Uzbek document corpora — Uzbek-aware hybrid retrieval (vector + full-text, RRF) on pgvector, cited grounded answers, and an evaluation harness measuring retrieval and answer quality.',
      stack: 'NestJS · Next.js · PostgreSQL + pgvector · Hybrid retrieval (RRF) · SSE · BullMQ · TypeScript' },
    uz: { title: 'Zehn — O‘zbekcha korpus ustidan iqtibosli RAG-assistant', url: 'zehn.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/zehn',
      desc: "O'zbek hujjat korpusi ustidan RAG-assistant — o'zbekcha hybrid qidiruv (vektor + full-text, RRF) pgvector ustida, iqtibosli grounded javob va retrieval/javob sifatini o'lchaydigan eval harness.",
      stack: 'NestJS · Next.js · PostgreSQL + pgvector · Hybrid retrieval (RRF) · SSE · BullMQ · TypeScript' },
  },
  manzara: {
    en: { title: 'Manzara — Property-Market Intelligence (Data Engineering)', url: 'manzara.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/manzara',
      desc: "Property-market data pipeline for Uzbekistan — scraping, dirty-data normalisation and entity resolution (measured precision/recall), with district-level price analytics and a valuation tool.",
      stack: 'NestJS · Next.js · PostgreSQL + pg_trgm · Playwright · Entity resolution · BullMQ · TypeScript' },
    uz: { title: 'Manzara — Ko‘chmas mulk bozor analitikasi (Data Engineering)', url: 'manzara.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/manzara',
      desc: "Ko'chmas mulk bozori uchun data pipeline — scraping, iflos ma'lumot normalizatsiyasi va entity resolution (o'lchangan precision/recall), tuman narx analitikasi va valuation.",
      stack: 'NestJS · Next.js · PostgreSQL + pg_trgm · Playwright · Entity resolution · BullMQ · TypeScript' },
  },
  multilevel: {
    en: { title: 'Multilevel — CEFR Exam-Prep Platform with AI Grading', url: 'multilevel.wisar.uz · github.com/Sarvarbek0704/multilevel-wisar',
      desc: 'CEFR exam-prep platform with AI grading for Writing/Speaking (CEFR level, band scores, feedback), mock exams, spaced-repetition vocabulary and a Telegram bot.',
      stack: 'NestJS · Next.js · PostgreSQL + Prisma · Gemini AI · Telegram Bot API · JWT + email OTP · TypeScript' },
    uz: { title: 'Multilevel — AI baholashli CEFR imtihon platformasi', url: 'multilevel.wisar.uz · github.com/Sarvarbek0704/multilevel-wisar',
      desc: "AI baholashli CEFR imtihon platformasi — Writing/Speaking uchun AI baho (CEFR daraja, band, izoh), mock imtihonlar, spaced-repetition so'z yodlash va Telegram bot.",
      stack: 'NestJS · Next.js · PostgreSQL + Prisma · Gemini AI · Telegram Bot API · JWT + email OTP · TypeScript' },
  },
  ustoz: {
    en: { title: 'Ustoz — Live-Teaching Platform (WebRTC) · has a paying client', url: 'ustoz.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/ustoz',
      desc: 'Live-teaching platform (WebRTC) with a paying client — recorded classes, auto-graded quizzes, teacher-graded assignments and attendance tracking.',
      stack: 'Next.js · LiveKit (WebRTC) · Prisma · PostgreSQL · NextAuth · Cloudflare R2 · TypeScript' },
    uz: { title: "Ustoz — Jonli dars platformasi (WebRTC) · to'lovchi mijozli", url: 'ustoz.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/ustoz',
      desc: "Jonli dars platformasi (WebRTC), to'lovchi mijozli — yozib olinadigan darslar, avto-baholanadigan testlar, ustoz baholaydigan uy ishlari va davomat.",
      stack: 'Next.js · LiveKit (WebRTC) · Prisma · PostgreSQL · NextAuth · Cloudflare R2 · TypeScript' },
  },
  ziyo: {
    en: { title: 'Ziyo — Multi-tenant School Management System (SIS + LMS)', url: 'ziyo.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/ziyo',
      desc: 'Multi-tenant school management system (SIS + LMS) — 56 database models, granular RBAC, JWT with refresh-token rotation, and tenant isolation enforced at the data layer.',
      stack: 'NestJS · Prisma · PostgreSQL · React · TypeScript · TanStack Query · TailwindCSS' },
    uz: { title: 'Ziyo — Multi-tenant maktab boshqaruv tizimi (SIS + LMS)', url: 'ziyo.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/ziyo',
      desc: "Multi-tenant maktab boshqaruv tizimi (SIS + LMS) — 56 DB modeli, granular RBAC, refresh-token rotatsiyali JWT va data qatlamida tenant izolyatsiyasi.",
      stack: 'NestJS · Prisma · PostgreSQL · React · TypeScript · TanStack Query · TailwindCSS' },
  },
  nexus: {
    en: { title: 'Nexus — Freelance & Agency Marketplace', url: 'nexus.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/nexus',
      desc: 'Freelance & agency marketplace — milestone-based escrow (debt-settlement algorithm), four roles, Google/GitHub OAuth and a dispute-resolution module.',
      stack: 'NestJS · TypeORM · PostgreSQL · Next.js · TypeScript · RTK Query · TailwindCSS' },
    uz: { title: 'Nexus — Freelance marketplace', url: 'nexus.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/nexus',
      desc: "Freelance & agentlik marketplace — milestone escrow (debt-settlement algoritmi), 4 rol, Google/GitHub OAuth va nizolarni hal qilish moduli.",
      stack: 'NestJS · TypeORM · PostgreSQL · Next.js · TypeScript · RTK Query · TailwindCSS' },
  },
  kelvin: {
    en: { title: 'Kelvin — Lighting-Store E-Commerce Platform', url: 'kelvin.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/kelvin',
      desc: 'Lighting-store e-commerce platform — faceted product search, atomic stock reservation, POS and CRM, with a transactional outbox and order saga.',
      stack: 'NestJS · Prisma · PostgreSQL · Meilisearch · Redis · React · TypeScript' },
    uz: { title: "Kelvin — Yoritish do'koni e-commerce platformasi", url: 'kelvin.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/kelvin',
      desc: "Yoritish do'koni e-commerce platformasi — fasetli qidiruv, atomik zaxira, POS va CRM, transactional outbox va buyurtma saga.",
      stack: 'NestJS · Prisma · PostgreSQL · Meilisearch · Redis · React · TypeScript' },
  },
  birga: {
    en: { title: 'Birga — Real-time Collaborative Editor (CRDT)', url: 'birga.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/birga',
      desc: 'Real-time collaborative editor — a from-scratch sequence CRDT plus Yjs, live cursors and offline-first sync over WebSocket.',
      stack: 'Next.js · TypeScript · Yjs + custom CRDT · WebSocket · Node.js · PostgreSQL' },
    uz: { title: "Birga — Real-time hamkorlik muharriri (CRDT)", url: 'birga.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/birga',
      desc: "Real-time hamkorlikda muharrir — noldan yozilgan sequence CRDT va Yjs, jonli kursorlar va WebSocket orqali offline-first sync.",
      stack: 'Next.js · TypeScript · Yjs + custom CRDT · WebSocket · Node.js · PostgreSQL' },
  },
  wisar: {
    en: { title: 'Wisar — Programming & English Learning Platform', url: 'wisar.uz',
      desc: 'Free Uzbek-language EdTech platform — a zero-to-senior+ programming course (706+ articles), an IELTS coach, spaced-repetition flashcards and progress tracking.',
      stack: 'Next.js · React · TypeScript · TailwindCSS · Redux Toolkit · TanStack Query' },
    uz: { title: "Wisar — Dasturlash va ingliz tili platformasi", url: 'wisar.uz',
      desc: "O'zbek tilidagi bepul EdTech platforma — noldan senior+ gacha dasturlash kursi (706+ maqola), IELTS coach, spaced-repetition flashcardlar va progress.",
      stack: 'Next.js · React · TypeScript · TailwindCSS · Redux Toolkit · TanStack Query' },
  },
  helix: {
    en: { title: 'Helix — Healthcare Management Platform', url: 'helix.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/helix',
      desc: 'Healthcare management platform modelling the full clinical workflow across five roles (appointment → consultation → prescription → lab → billing → insurance).',
      stack: 'NestJS · TypeORM · PostgreSQL · Next.js · TypeScript · RTK Query · TailwindCSS' },
    uz: { title: 'Helix — Tibbiyot boshqaruv platformasi', url: 'helix.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/helix',
      desc: "Tibbiyot boshqaruv platformasi — 5 rol bo'ylab to'liq klinik oqim (qabul → ko'rik → retsept → laboratoriya → hisob-kitob → sug'urta).",
      stack: 'NestJS · TypeORM · PostgreSQL · Next.js · TypeScript · RTK Query · TailwindCSS' },
  },
  karvon: {
    en: { title: 'Karvon — Multi-vendor E-Commerce Marketplace', url: 'karvon.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/karvon',
      desc: 'Multi-vendor e-commerce marketplace — four roles, real-time chat, and a simulated Payme/Click/Uzum payment system with webhooks.',
      stack: 'NestJS · TypeORM · PostgreSQL · Socket.io · React · TypeScript · TailwindCSS' },
    uz: { title: 'Karvon — Ko\'p sotuvchili e-commerce marketplace', url: 'karvon.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/karvon',
      desc: "Ko'p sotuvchili e-commerce marketplace — 4 rol, real-time chat va webhook bilan simulyatsiya qilingan Payme/Click/Uzum to'lov tizimi.",
      stack: 'NestJS · TypeORM · PostgreSQL · Socket.io · React · TypeScript · TailwindCSS' },
  },
  trellis: {
    en: { title: 'Trellis — Multi-tenant Team Project-Management Platform', url: 'trellis.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/trellis',
      desc: 'Multi-tenant team project-management platform (Jira/Linear-style) — Kanban/list/calendar views, real-time collaboration and tested tenant isolation.',
      stack: 'NestJS · TypeORM · PostgreSQL · BullMQ · Socket.io · Next.js · TypeScript' },
    uz: { title: 'Trellis — Multi-tenant jamoa loyiha-boshqaruv platformasi', url: 'trellis.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/trellis',
      desc: "Multi-tenant jamoa loyiha-boshqaruv platformasi (Jira/Linear uslubida) — Kanban/list/calendar, real-time hamkorlik va tekshirilgan tenant izolyatsiyasi.",
      stack: 'NestJS · TypeORM · PostgreSQL · BullMQ · Socket.io · Next.js · TypeScript' },
  },
  meridian: {
    en: { title: 'Meridian — Travel Planning Platform', url: 'meridian.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/meridian',
      desc: 'Travel-planning platform — a drag-and-drop itinerary builder, group expense splitting and a travel-buddy finder.',
      stack: 'NestJS · TypeORM · PostgreSQL · Next.js · TypeScript · RTK Query · Nodemailer' },
    uz: { title: 'Meridian — Sayohat rejalashtirish', url: 'meridian.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/meridian',
      desc: "Sayohat rejalashtirish platformasi — drag-and-drop itinerary builder, guruh xarajatlarini bo'lish va travel-buddy finder.",
      stack: 'NestJS · TypeORM · PostgreSQL · Next.js · TypeScript · RTK Query · Nodemailer' },
  },
  javon: {
    en: { title: 'Javon — Online Library Platform', url: 'javon.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/javon',
      desc: 'Online library platform — multi-library, membership tiers with payments, a booking/return workflow, waitlists and overdue-reminder cron jobs.',
      stack: 'NestJS · Prisma · PostgreSQL · React · TypeScript · Redux Toolkit · TailwindCSS' },
    uz: { title: 'Javon — Onlayn kutubxona platformasi', url: 'javon.sarvarbek-sodiqov.uz · github.com/Sarvarbek0704/javon',
      desc: "Onlayn kutubxona platformasi — ko'p kutubxona, to'lovli a'zolik, bron/qaytarish oqimi, waitlist va muddati o'tgan bronlar uchun cron.",
      stack: 'NestJS · Prisma · PostgreSQL · React · TypeScript · Redux Toolkit · TailwindCSS' },
  },
}

const ALL_PROJECTS = ['zehn', 'manzara', 'multilevel', 'ustoz', 'ziyo', 'nexus', 'kelvin', 'birga', 'wisar', 'helix', 'karvon', 'trellis', 'meridian', 'javon']
const RESUME_PROJECTS = ALL_PROJECTS
const CV_PROJECTS = ALL_PROJECTS

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
