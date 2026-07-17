import { useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Github,
  Images,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Send,
  Sun,
  X,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { projects, skills, t, type Lang, type Project } from './content'
import ProjectModal from './ProjectModal'

function useDarkMode() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])
  return [dark, setDark] as const
}

function useLang() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en'
    return (localStorage.getItem('lang') as Lang) || 'en'
  })
  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])
  return [lang, setLang] as const
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>('')
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(',')])
  return active
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function ProjectThumb({ p, className }: { p: Project; className?: string }) {
  const cover = p.images?.find((s) => s.device === 'desktop') ?? p.images?.[0]
  return (
    <div className={`relative overflow-hidden bg-ink-100 dark:bg-ink-800 ${className ?? ''}`}>
      {cover ? (
        <img
          src={cover.src}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-100 via-ink-50 to-ink-200 dark:from-ink-800 dark:via-ink-900 dark:to-ink-950">
          <span className="font-display text-3xl font-extrabold tracking-tight text-ink-400 dark:text-ink-500">
            {p.title}
          </span>
        </div>
      )}
      {p.images && p.images.length > 1 && (
        <span className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
          <Images size={11} /> {p.images.length}
        </span>
      )}
    </div>
  )
}

export default function App() {
  const [dark, setDark] = useDarkMode()
  const [lang, setLang] = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const [resumeOpen, setResumeOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<string | null>(null)

  const project = useMemo(
    () => projects.find((p) => p.slug === activeProject) || null,
    [activeProject],
  )

  const activeSection = useActiveSection(['work', 'about', 'skills', 'contact'])

  return (
    <div className="min-h-screen bg-white text-ink-900 transition-colors dark:bg-ink-950 dark:text-ink-100">
      <Header
        lang={lang}
        setLang={setLang}
        dark={dark}
        setDark={setDark}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onResumeClick={() => setResumeOpen(true)}
        active={activeSection}
      />

      <main>
        <Hero lang={lang} onResumeClick={() => setResumeOpen(true)} />
        <Work lang={lang} onOpenProject={setActiveProject} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Experience lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />

      {project && <ProjectModal project={project} lang={lang} onClose={() => setActiveProject(null)} />}
      {resumeOpen && <ResumeDialog lang={lang} onClose={() => setResumeOpen(false)} />}
    </div>
  )
}

/* ---------- HEADER ---------- */

function Header({
  lang,
  setLang,
  dark,
  setDark,
  menuOpen,
  setMenuOpen,
  onResumeClick,
  active,
}: {
  lang: Lang
  setLang: (l: Lang) => void
  dark: boolean
  setDark: (b: boolean) => void
  menuOpen: boolean
  setMenuOpen: (b: boolean) => void
  onResumeClick: () => void
  active: string
}) {
  const links = [
    { id: 'work', label: t.nav.work[lang] },
    { id: 'about', label: t.nav.about[lang] },
    { id: 'skills', label: t.nav.skills[lang] },
    { id: 'contact', label: t.nav.contact[lang] },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-ink-200/60 bg-white/80 backdrop-blur-md transition-colors dark:border-ink-800/60 dark:bg-ink-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-900 text-sm font-bold text-white transition-transform group-hover:scale-105 dark:bg-ink-100 dark:text-ink-900">
            SS
          </span>
          <span className="font-display text-base font-bold tracking-tight">Sarvarbek Sodiqov</span>
        </a>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative text-sm font-medium transition-colors ${
                active === l.id
                  ? 'text-ink-900 dark:text-ink-100'
                  : 'text-ink-600 hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-100'
              }`}
            >
              {l.label}
              {active === l.id && (
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-ink-900 dark:bg-ink-100" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === 'uz' ? 'en' : 'uz')}
            className="hidden h-9 items-center gap-1 rounded-full border border-ink-200 px-3 text-xs font-semibold uppercase tracking-wider text-ink-700 transition-colors hover:bg-ink-50 sm:flex dark:border-ink-700 dark:text-ink-300 dark:hover:bg-ink-900"
            aria-label="Toggle language"
          >
            <span className={lang === 'uz' ? 'text-ink-900 dark:text-ink-100' : 'opacity-40'}>UZ</span>
            <span className="opacity-40">/</span>
            <span className={lang === 'en' ? 'text-ink-900 dark:text-ink-100' : 'opacity-40'}>EN</span>
          </button>

          <button
            onClick={() => setDark(!dark)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition-colors hover:bg-ink-50 dark:border-ink-700 dark:text-ink-300 dark:hover:bg-ink-900"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={onResumeClick}
            className="hidden h-9 items-center gap-1.5 rounded-full bg-ink-900 px-4 text-xs font-semibold text-white transition-colors hover:bg-ink-800 sm:flex dark:bg-ink-100 dark:text-ink-900 dark:hover:bg-white"
          >
            <Download size={13} />
            {t.nav.resume[lang]}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-700 md:hidden dark:border-ink-700 dark:text-ink-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-ink-200/60 bg-white px-5 py-4 md:hidden dark:border-ink-800/60 dark:bg-ink-950">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-50 dark:text-ink-300 dark:hover:bg-ink-900"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <button
                onClick={() => setLang(lang === 'uz' ? 'en' : 'uz')}
                className="flex h-9 items-center gap-1 rounded-full border border-ink-200 px-3 text-xs font-semibold uppercase tracking-wider text-ink-700 dark:border-ink-700 dark:text-ink-300"
              >
                <span className={lang === 'uz' ? '' : 'opacity-40'}>UZ</span>
                <span className="opacity-40">/</span>
                <span className={lang === 'en' ? '' : 'opacity-40'}>EN</span>
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false)
                  onResumeClick()
                }}
                className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-full bg-ink-900 px-4 text-xs font-semibold text-white dark:bg-ink-100 dark:text-ink-900"
              >
                <Download size={13} />
                {t.nav.resume[lang]}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

/* ---------- HERO ---------- */

function Hero({ lang, onResumeClick }: { lang: Lang; onResumeClick: () => void }) {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-60" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent dark:via-ink-800" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-40">
        <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-500 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t.hero.available[lang]}
            </div>

            <p className="mb-3 text-base font-medium text-ink-500 animate-fade-up" style={{ animationDelay: '50ms' }}>
              {t.hero.greeting[lang]}
            </p>
            <h1
              className="mb-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl animate-fade-up"
              style={{ animationDelay: '120ms' }}
            >
              Sarvarbek <br className="hidden sm:block" />
              <span className="text-ink-500 dark:text-ink-400">Sodiqov.</span>
            </h1>

            <div
              className="mb-6 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-ink-600 dark:text-ink-400 animate-fade-up"
              style={{ animationDelay: '200ms' }}
            >
              <span className="rounded-full border border-ink-200 px-3 py-1 dark:border-ink-700">
                {t.hero.role[lang]}
              </span>
              <span className="rounded-full border border-ink-200 px-3 py-1 dark:border-ink-700">
                {lang === 'uz' ? 'Frontend · ManaJoy' : 'Frontend · ManaJoy'}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {t.hero.based[lang]}
              </span>
            </div>

            <p
              className="mb-8 mx-auto max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg dark:text-ink-400 animate-fade-up"
              style={{ animationDelay: '280ms' }}
            >
              {t.hero.intro[lang]}
            </p>

            <div className="flex flex-wrap justify-center gap-3 animate-fade-up" style={{ animationDelay: '360ms' }}>
              <a
                href="#work"
                className="group flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:gap-3 hover:bg-ink-800 dark:bg-ink-100 dark:text-ink-900 dark:hover:bg-white"
              >
                {t.hero.cta1[lang]}
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-full border border-ink-300 px-5 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-ink-50 dark:border-ink-700 dark:text-ink-100 dark:hover:bg-ink-900"
              >
                {t.hero.cta2[lang]}
              </a>
              <button
                onClick={onResumeClick}
                className="flex items-center gap-2 rounded-full px-3 py-3 text-sm font-semibold text-ink-700 transition-colors hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-100"
              >
                <Download size={15} />
                {t.nav.resume[lang]}
              </button>
            </div>
          </div>
        </div>
    </section>
  )
}

/* ---------- WORK ---------- */

function Work({ lang, onOpenProject }: { lang: Lang; onOpenProject: (slug: string) => void }) {
  return (
    <section id="work" className="border-t border-ink-200 py-20 sm:py-28 dark:border-ink-800">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader eyebrow={t.work.eyebrow[lang]} title={t.work.title[lang]} subtitle={t.work.subtitle[lang]} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.button
              key={p.slug}
              onClick={() => onOpenProject(p.slug)}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white text-left transition-all hover:-translate-y-1 hover:border-ink-400 hover:shadow-xl hover:shadow-ink-900/5 dark:border-ink-800 dark:bg-ink-900 dark:hover:border-ink-600 dark:hover:shadow-black/40"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectThumb p={p} className="aspect-[16/10] w-full border-b border-ink-200 dark:border-ink-800" />
              <div className="flex flex-1 flex-col p-7">
              {/* Top row */}
              <div className="mb-6 flex items-start justify-between gap-3">
                <div>
                  {p.badge ? (
                    <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-700 dark:text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {p.badge[lang]}
                    </span>
                  ) : p.selfHosted ? (
                    <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-700 dark:text-emerald-400">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </span>
                      {t.work.selfHosted[lang]}
                    </span>
                  ) : null}
                  <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-ink-500 dark:text-ink-400">
                    {p.category[lang]} · {p.year}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">{p.title}</h3>
                </div>
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-ink-50 text-ink-500 transition-all group-hover:bg-ink-900 group-hover:text-white dark:bg-ink-800 dark:text-ink-400 dark:group-hover:bg-ink-100 dark:group-hover:text-ink-900">
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

              {/* Tagline */}
              <p className="mb-6 text-base font-medium text-ink-700 dark:text-ink-300">{p.tagline[lang]}</p>

              {/* Stack tags */}
              <div className="mt-auto flex flex-wrap gap-1.5">
                {p.stack.slice(0, 5).map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-ink-100 px-2 py-0.5 text-[11px] font-medium text-ink-700 dark:bg-ink-800 dark:text-ink-300"
                  >
                    {s}
                  </span>
                ))}
                {p.stack.length > 5 && (
                  <span className="rounded-md px-2 py-0.5 text-[11px] font-medium text-ink-500 dark:text-ink-400">
                    +{p.stack.length - 5}
                  </span>
                )}
              </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- ABOUT ---------- */

function About({ lang }: { lang: Lang }) {
  return (
    <section id="about" className="border-t border-ink-200 py-20 sm:py-28 dark:border-ink-800">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader eyebrow={t.about.eyebrow[lang]} title={t.about.title[lang]} />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-5 text-base leading-relaxed text-ink-700 sm:text-lg dark:text-ink-300">
            <p>{t.about.p1[lang]}</p>
            <p>{t.about.p2[lang]}</p>
            <p>{t.about.p3[lang]}</p>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-ink-50/50 p-6 dark:border-ink-800 dark:bg-ink-900/50">
            <ul className="divide-y divide-ink-200 dark:divide-ink-800">
              {t.about.facts[lang].map((f) => (
                <li key={f.k} className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0">
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-500">{f.k}</span>
                  <span className="text-right text-sm font-medium text-ink-900 dark:text-ink-100">{f.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- SKILLS ---------- */

function Skills({ lang }: { lang: Lang }) {
  const groups = [
    { key: 'frontend' as const, items: skills.frontend },
    { key: 'backend' as const, items: skills.backend },
    { key: 'databases' as const, items: skills.databases },
    { key: 'tools' as const, items: skills.tools },
  ]
  return (
    <section id="skills" className="border-t border-ink-200 py-20 sm:py-28 dark:border-ink-800">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader eyebrow={t.skills.eyebrow[lang]} title={t.skills.title[lang]} subtitle={t.skills.subtitle[lang]} />

        <div className="mt-12 space-y-8">
          {groups.map((g) => (
            <div key={g.key} className="grid items-baseline gap-4 border-t border-ink-200 pt-6 sm:grid-cols-[180px_1fr] dark:border-ink-800">
              <h3 className="font-display text-lg font-bold tracking-tight">{t.skills.groups[g.key][lang]}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-ink-200 bg-white px-3 py-1.5 text-sm font-medium text-ink-700 transition-colors hover:border-ink-400 hover:text-ink-900 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-300 dark:hover:border-ink-500 dark:hover:text-ink-100"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- EXPERIENCE / EDUCATION ---------- */

function Experience({ lang }: { lang: Lang }) {
  const groups = [
    { label: t.experience.workLabel[lang], items: t.experience.work[lang] },
    { label: t.experience.eduLabel[lang], items: t.experience.education[lang] },
  ]
  return (
    <section id="experience" className="border-t border-ink-200 py-20 sm:py-28 dark:border-ink-800">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader eyebrow={t.experience.eyebrow[lang]} title={t.experience.title[lang]} />

        <div className="mt-12 space-y-14">
          {groups.map((g) => (
            <div key={g.label}>
              <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-ink-500">{g.label}</h3>
              <div className="space-y-8">
                {g.items.map((item, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 gap-2 border-t border-ink-200 pt-6 sm:grid-cols-[180px_1fr] sm:gap-8 dark:border-ink-800"
                  >
                    <div className="text-sm font-semibold uppercase tracking-wider text-ink-500">{item.period}</div>
                    <div>
                      <h4 className="font-display text-xl font-bold tracking-tight">{item.place}</h4>
                      <div className="mt-1 text-sm font-medium text-ink-600 dark:text-ink-400">{item.role}</div>
                      <p className="mt-3 text-base leading-relaxed text-ink-700 dark:text-ink-300">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- CONTACT ---------- */

function Contact({ lang }: { lang: Lang }) {
  const items = [
    { label: t.contact.email[lang], value: 'coolsarvar2007@gmail.com', href: 'mailto:coolsarvar2007@gmail.com', icon: Mail },
    { label: t.contact.telegram[lang], value: '@SarvarbekSodiqov', href: 'https://t.me/SarvarbekSodiqov', icon: Send },
    { label: t.contact.phone[lang], value: '+998 90 087 77 80', href: 'tel:+998900877780', icon: Phone },
    { label: t.contact.github[lang], value: 'Sarvarbek0704', href: 'https://github.com/Sarvarbek0704', icon: Github },
    { label: t.contact.linkedin[lang], value: 'sarvarbek-sodiqov', href: 'https://www.linkedin.com/in/sarvarbek-sodiqov-a085a23b7/', icon: Linkedin },
  ]
  return (
    <section id="contact" className="border-t border-ink-200 py-20 sm:py-28 dark:border-ink-800">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader eyebrow={t.contact.eyebrow[lang]} title={t.contact.title[lang]} subtitle={t.contact.subtitle[lang]} />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-ink-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-ink-400 hover:shadow-lg hover:shadow-ink-900/5 dark:border-ink-800 dark:bg-ink-900 dark:hover:border-ink-600 dark:hover:shadow-black/40"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-ink-100 text-ink-700 dark:bg-ink-800 dark:text-ink-300">
                <c.icon size={18} />
              </span>
              <div className="flex-1 overflow-hidden">
                <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">{c.label}</div>
                <div className="truncate font-medium">{c.value}</div>
              </div>
              <ArrowUpRight size={16} className="flex-shrink-0 text-ink-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- FOOTER ---------- */

function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="border-t border-ink-200 py-10 dark:border-ink-800">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 sm:flex-row sm:items-center sm:px-8">
        <p className="text-sm text-ink-500">{t.footer.rights[lang]}</p>
        <p className="text-sm text-ink-500">{t.footer.built[lang]}</p>
      </div>
    </footer>
  )
}

/* ---------- SECTION HEADER ---------- */

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <Reveal className="max-w-2xl">
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">{eyebrow}</div>
      <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg dark:text-ink-400">{subtitle}</p>}
    </Reveal>
  )
}

/* ---------- RESUME DIALOG ---------- */

function ResumeDialog({ lang, onClose }: { lang: Lang; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-ink-900 animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-ink-200 px-6 py-4 dark:border-ink-800">
          <h3 className="font-display text-lg font-bold">{t.resume.title[lang]}</h3>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-ink-500 hover:bg-ink-100 dark:hover:bg-ink-800"
          >
            <X size={16} />
          </button>
        </div>
        <div className="space-y-2 p-4">
          {t.resume.options[lang].map((o) => (
            <a
              key={o.file}
              href={o.file}
              download
              className="group flex items-center gap-3 rounded-xl border border-ink-200 px-4 py-3 transition-all hover:border-ink-400 hover:bg-ink-50 dark:border-ink-800 dark:hover:border-ink-600 dark:hover:bg-ink-800"
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-ink-900 text-white transition-colors dark:bg-ink-100 dark:text-ink-900">
                <Download size={14} />
              </span>
              <span className="flex-1 text-sm font-medium">{o.label}</span>
              <ArrowUpRight size={15} className="text-ink-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
