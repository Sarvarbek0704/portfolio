import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Lock,
  Monitor,
  Server,
  Smartphone,
  X,
} from 'lucide-react'
import { t, type Lang, type Project, type Shot } from './content'

function Gallery({ images, title }: { images?: Shot[]; title: string }) {
  const hasDesktop = !!images?.some((s) => s.device === 'desktop')
  const hasMobile = !!images?.some((s) => s.device === 'mobile')
  const [device, setDevice] = useState<'desktop' | 'mobile'>(hasDesktop ? 'desktop' : 'mobile')
  const [i, setI] = useState(0)

  if (!images || images.length === 0) return null

  const list = images.filter((s) => s.device === device)
  const idx = Math.min(i, Math.max(0, list.length - 1))
  const many = list.length > 1
  const bothDevices = hasDesktop && hasMobile
  const isMobile = device === 'mobile'
  const go = (d: number) =>
    setI((prev) => (Math.min(prev, list.length - 1) + d + list.length) % list.length)

  return (
    <div className="mb-6">
      {bothDevices && (
        <div className="mb-3 inline-flex rounded-full border border-ink-200 p-0.5 dark:border-ink-800">
          {(['desktop', 'mobile'] as const).map((d) => (
            <button
              key={d}
              onClick={() => {
                setDevice(d)
                setI(0)
              }}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                device === d
                  ? 'bg-ink-900 text-white dark:bg-ink-100 dark:text-ink-900'
                  : 'text-ink-600 hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-100'
              }`}
            >
              {d === 'desktop' ? <Monitor size={13} /> : <Smartphone size={13} />}
              {d === 'desktop' ? 'Desktop' : 'Mobile'}
            </button>
          ))}
        </div>
      )}

      <div
        className={
          isMobile
            ? 'flex justify-center rounded-xl border border-ink-200 bg-ink-50 py-5 dark:border-ink-800 dark:bg-ink-900/50'
            : 'relative overflow-hidden rounded-xl border border-ink-200 dark:border-ink-800'
        }
      >
        {isMobile ? (
          <div className="w-[240px] overflow-hidden rounded-2xl border border-ink-300 shadow-lg dark:border-ink-700">
            <img
              src={list[idx]?.src}
              alt={`${title} — mobile ${idx + 1}`}
              className="block w-full object-cover object-top"
            />
          </div>
        ) : (
          <img
            src={list[idx]?.src}
            alt={`${title} — desktop ${idx + 1}`}
            className="aspect-[16/10] w-full object-cover object-top"
          />
        )}
        {many && !isMobile && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink-900 shadow transition-colors hover:bg-white dark:bg-ink-900/85 dark:text-ink-100"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink-900 shadow transition-colors hover:bg-white dark:bg-ink-900/85 dark:text-ink-100"
            >
              <ChevronRight size={18} />
            </button>
            <span className="absolute bottom-2 right-2 rounded-full bg-black/55 px-2 py-0.5 text-[11px] font-semibold text-white">
              {idx + 1} / {list.length}
            </span>
          </>
        )}
      </div>

      {many && (
        <div className="mt-2 flex justify-center gap-2 overflow-x-auto pb-1">
          {list.map((s, k) => (
            <button
              key={s.src}
              onClick={() => setI(k)}
              aria-label={`Screenshot ${k + 1}`}
              className={`flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                isMobile ? 'h-20 w-12' : 'h-14 w-24'
              } ${
                k === idx
                  ? 'border-ink-900 dark:border-ink-100'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={s.src} alt="" className="h-full w-full object-cover object-top" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function ProjectModal({
  project,
  lang,
  onClose,
}: {
  project: Project
  lang: Lang
  onClose: () => void
}) {
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
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center sm:p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl dark:bg-ink-900 sm:rounded-3xl animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-shrink-0 items-start justify-between gap-4 border-b border-ink-200 bg-white px-6 py-5 dark:border-ink-800 dark:bg-ink-900 sm:px-8">
          <div className="min-w-0">
            {project.badge && (
              <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-700 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {project.badge[lang]}
              </span>
            )}
            <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink-500">
              {project.category[lang]} · {project.year}
            </div>
            <h2 className="font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-ink-500 hover:bg-ink-100 dark:hover:bg-ink-800"
            aria-label={t.work.closeBtn[lang]}
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 sm:px-8">
          <Gallery key={project.slug} images={project.images} title={project.title} />
          <p className="text-lg font-medium text-ink-700 dark:text-ink-300">{project.tagline[lang]}</p>

          {/* Action buttons */}
          <div className="mt-5 flex flex-wrap gap-2.5">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:gap-2.5 hover:bg-ink-800 dark:bg-ink-100 dark:text-ink-900 dark:hover:bg-white"
              >
                <ExternalLink size={14} />
                {t.work.viewLive[lang]}
              </a>
            )}
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-ink-300 px-4 py-2 text-sm font-semibold text-ink-900 transition-colors hover:bg-ink-50 dark:border-ink-700 dark:text-ink-100 dark:hover:bg-ink-800"
              >
                <Github size={14} />
                {t.work.viewCode[lang]}
              </a>
            ) : (
              <span className="flex items-center gap-2 rounded-full border border-dashed border-ink-300 px-4 py-2 text-sm font-semibold text-ink-500 dark:border-ink-700 dark:text-ink-400">
                <Lock size={14} />
                {t.work.privateCode[lang]}
              </span>
            )}
          </div>

          {project.selfHosted && (
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
              <Server size={13} />
              {t.work.selfHosted[lang]} · Docker · Nginx · PostgreSQL
            </div>
          )}

          {/* Description */}
          <div className="mt-7">
            <p className="text-base leading-relaxed text-ink-700 dark:text-ink-300">{project.description[lang]}</p>
          </div>

          {/* Highlights */}
          <div className="mt-7">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-ink-500">
              {t.work.highlights[lang]}
            </h3>
            <ul className="space-y-2.5">
              {project.highlights[lang].map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-ink-900 text-white dark:bg-ink-100 dark:text-ink-900">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-ink-700 dark:text-ink-300">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div className="mt-7">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-ink-500">
              {t.work.stack[lang]}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-ink-100 px-2.5 py-1 text-xs font-medium text-ink-700 dark:bg-ink-800 dark:text-ink-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Demo credentials */}
          {project.demo && (
            <div className="mt-7 rounded-2xl border border-dashed border-ink-300 bg-ink-50/60 p-5 dark:border-ink-700 dark:bg-ink-800/40">
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-ink-700 dark:text-ink-300">
                {project.demo.label[lang]}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto flex items-center gap-1 text-[10px] font-semibold normal-case tracking-normal text-ink-500 hover:text-ink-900 dark:hover:text-ink-100"
                  >
                    {t.work.viewLive[lang]} <ArrowUpRight size={11} />
                  </a>
                )}
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[400px] text-xs">
                  <thead>
                    <tr className="border-b border-ink-200 text-ink-500 dark:border-ink-700">
                      <th className="pb-2 pr-3 text-left font-semibold uppercase tracking-wider">Role</th>
                      <th className="pb-2 pr-3 text-left font-semibold uppercase tracking-wider">Login</th>
                      <th className="pb-2 text-left font-semibold uppercase tracking-wider">Password</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-200/60 font-mono dark:divide-ink-800">
                    {project.demo.entries.map((e, i) => (
                      <tr key={i}>
                        <td className="py-2 pr-3 font-sans font-semibold text-ink-900 dark:text-ink-100">{e.role}</td>
                        <td className="py-2 pr-3 text-ink-700 dark:text-ink-300">{e.email}</td>
                        <td className="py-2 text-ink-700 dark:text-ink-300">{e.password}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
