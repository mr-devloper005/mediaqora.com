import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="media-shell">
        <section className="border-b border-white/10 text-white">
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <p className="text-xs font-black uppercase tracking-[0.28em]">{pagesContent.about.badge}</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl">
              Media distribution built for credible campaign visibility.
            </h1>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1200px] gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:px-8">
          <article className="media-card rounded-3xl p-7 sm:p-10 lg:p-12">
            <p className="media-eyebrow">About {SITE_CONFIG.name}</p>
            <p className="mt-6 text-3xl font-bold leading-[1.25] text-white sm:text-4xl">{pagesContent.about.description}</p>
            <div className="article-content mt-10 space-y-6">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="grid gap-5">
            {pagesContent.about.values.map((value, index) => (
              <div key={value.title} className="media-card rounded-3xl p-7 sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">0{index + 1}</p>
                <h2 className="mt-4 text-3xl font-black leading-tight text-white">{value.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/62">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>

        <section className="pb-14">
          <div className="media-card mx-auto flex max-w-[1200px] flex-col gap-6 rounded-3xl px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">Build campaigns that are easier for media partners to understand.</h2>
            <Link href="/media-distribution" className="inline-flex w-fit rounded-full bg-[var(--slot4-accent)] px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-[#04100f]">Explore campaigns</Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
