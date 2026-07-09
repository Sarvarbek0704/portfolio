import { useEffect } from 'react'
import { ArrowUpRight, Check, ExternalLink, Github, Lock, X } from 'lucide-react'
import { t, type Lang, type Project } from './content'

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
        className="relative max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-t-3xl bg-white shadow-2xl dark:bg-ink-900 sm:rounded-3xl animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-ink-200 bg-white/95 px-6 py-5 backdrop-blur dark:border-ink-800 dark:bg-ink-900/95 sm:px-8">
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
        <div className="overflow-y-auto px-6 py-6 sm:px-8" style={{ maxHeight: 'calc(92vh - 90px)' }}>
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
