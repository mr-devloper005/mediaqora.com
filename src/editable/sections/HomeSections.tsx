import Link from 'next/link'
import { ArrowRight, BadgeCheck, BarChart3, CircleHelp, Globe2, Megaphone, Newspaper, RadioTower, Search, Send, ShieldCheck, Target } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { CompactIndexCard, getEditableCategory, getEditableExcerpt, postHref, RailPostCard } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const industries = ['Technology', 'Finance', 'Healthcare', 'Real estate', 'Consumer brands', 'SaaS', 'Education', 'Events']
const stats = [
  ['2.4M+', 'Potential monthly audience'],
  ['420+', 'Publisher and media touchpoints'],
  ['68', 'Industry categories'],
  ['24h', 'Campaign review rhythm'],
]
const network = [
  { icon: Newspaper, title: 'Press release publishing', body: 'Package announcements with the right headline, category, source, and publisher context.' },
  { icon: RadioTower, title: 'News syndication', body: 'Surface campaign-ready stories through a structured distribution archive and search experience.' },
  { icon: Target, title: 'Audience targeting', body: 'Organize launches by industry, region, media angle, and campaign objective.' },
]
const reasons = [
  { icon: ShieldCheck, title: 'Trust-first presentation', body: 'Clean metadata, status markers, and publisher context make every campaign easier to evaluate.' },
  { icon: BarChart3, title: 'Reach signals', body: 'Cards highlight reach, engagement, and distribution status before visitors open the full campaign.' },
  { icon: Globe2, title: 'Global visibility', body: 'The experience is built for brands that need discoverability across media, search, and partner channels.' },
]
const steps = ['Submit a newsroom-ready campaign brief', 'Review category, publisher, and media reach details', 'Publish and syndicate across active content surfaces', 'Track visibility signals and related campaign momentum']
const faqs = [
  ['Can I publish a press release?', 'Yes. Create a campaign submission with the announcement, category, source URL, summary, and supporting content.'],
  ['Who is this built for?', 'PR agencies, startups, publishers, marketers, founders, and teams that need a polished media distribution surface.'],
  ['Do homepage campaign cards use images?', 'No. Homepage cards are intentionally text-focused for a professional newsroom rhythm.'],
]

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function SectionHeading({ eyebrow, title, body, action }: { eyebrow: string; title: string; body?: string; action?: { href: string; label: string } }) {
  return (
    <div className="media-fade-up flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="media-eyebrow">{eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">{title}</h2>
        {body ? <p className="mt-4 max-w-2xl text-base leading-8 text-white/62">{body}</p> : null}
      </div>
      {action ? <Link href={action.href} className={`${dc.button.secondary} shrink-0`}>{action.label} <ArrowRight className="h-4 w-4" /></Link> : null}
    </div>
  )
}

function TextCampaignCard({ post, href, index, compact = false }: { post: SitePost; href: string; index: number; compact?: boolean }) {
  const reach = ['148K', '92K', '231K', '76K', '184K', '119K'][index % 6]
  const status = ['Syndicating', 'Published', 'In review'][index % 3]
  return (
    <Link href={href} className="group media-card block min-w-0 overflow-hidden rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--slot4-accent)] hover:shadow-[0_26px_90px_rgba(39,211,178,.12)]">
      <div className="flex items-center justify-between gap-3 text-[11px] font-black uppercase tracking-[.16em]">
        <span className="text-[var(--slot4-accent)]">{getEditableCategory(post)}</span>
        <span className="rounded-full bg-white/8 px-3 py-1 text-white/62">#{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3 className={`${compact ? 'text-xl' : 'text-2xl'} mt-5 line-clamp-3 font-black leading-tight tracking-[-.035em] text-white group-hover:text-[var(--slot4-accent)]`}>{post.title}</h3>
      <p className="mt-4 line-clamp-3 text-sm leading-7 text-white/58">{getEditableExcerpt(post, compact ? 110 : 150)}</p>
      <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-bold text-white/72">
        <span className="rounded-xl bg-white/6 px-3 py-2">Reach {reach}</span>
        <span className="rounded-xl bg-white/6 px-3 py-2">{status}</span>
      </div>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ') || `${SITE_CONFIG.name}: media distribution for modern brands.`
  const lead = posts[0]
  const spotlight = posts.slice(1, 4)

  return (
    <section className="media-shell overflow-hidden border-b border-white/10">
      <div className={`${dc.shell.section} grid min-h-[720px] gap-10 py-14 sm:py-20 lg:grid-cols-[1.02fr_.98fr] lg:items-center`}>
        <div className="media-fade-up">
          <p className="media-eyebrow">{pagesContent.home.hero.badge}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[.95] tracking-[-.05em] text-white sm:text-7xl lg:text-[5.7rem]">{heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">{pagesContent.home.hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/media-distribution" className={dc.button.accent}>View campaigns <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/create" className={dc.button.secondary}>Submit release</Link>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/12 bg-white/[.04] p-4">
                <p className="text-2xl font-black text-white">{value}</p>
                <p className="mt-1 text-xs font-bold leading-5 text-white/48">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="media-stagger grid gap-4">
          {lead ? <TextCampaignCard post={lead} href={postHref(primaryTask, lead, primaryRoute)} index={0} /> : null}
          <div className="grid gap-4 sm:grid-cols-2">
            {spotlight.map((post, index) => <TextCampaignCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 1} compact />)}
          </div>
          <form action="/search" className="media-glass mt-2 flex items-center gap-3 rounded-2xl p-3">
            <Search className="ml-2 h-5 w-5 text-[var(--slot4-accent)]" />
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm font-bold text-white outline-none placeholder:text-white/38" />
            <button className="rounded-xl bg-[var(--slot4-accent)] px-5 py-3 text-xs font-black uppercase tracking-[.12em] text-[#04100f]">Search</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(4, 12).length ? posts.slice(4, 12) : posts
  if (!railPosts.length) return null
  return (
    <section className="media-shell">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <SectionHeading eyebrow="Featured press releases" title="Campaigns built for publisher-ready discovery." body="Image-free cards keep the homepage focused on headlines, source context, campaign status, and media reach." action={{ href: primaryRoute, label: `Open ${taskLabel(primaryTask)}` }} />
        <div className="media-stagger mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {railPosts.map((post, index) => <RailPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const latest = posts.slice(0, 6)
  return (
    <section className="media-shell border-y border-white/10">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <SectionHeading eyebrow="Distribution network overview" title="From announcement to media reach, every campaign has a clearer path." />
        <div className="mt-8 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div className="media-card rounded-2xl p-6 sm:p-8">
            <p className="media-eyebrow">Media reach statistics</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
                  <p className="text-4xl font-black text-[var(--slot4-accent)]">{value}</p>
                  <p className="mt-2 text-sm font-bold text-white/58">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-4">
              {network.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl bg-white/[.04] p-4">
                  <item.icon className="mt-1 h-5 w-5 shrink-0 text-[var(--slot4-accent)]" />
                  <div>
                    <h3 className="font-black text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/56">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {latest.map((post, index) => <TextCampaignCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} compact />)}
            </div>
            <div className="media-card rounded-2xl p-6">
              <p className="media-eyebrow">Popular industries</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {industries.map((industry) => <Link key={industry} href={`/search?category=${encodeURIComponent(industry.toLowerCase())}`} className="rounded-full bg-white/[.06] px-4 py-2 text-sm font-bold text-white/72 transition hover:bg-[var(--slot4-accent)] hover:text-[#04100f]">{industry}</Link>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = collected.length ? collected : posts
  const recent = source.slice(0, 8)
  if (!recent.length) return null
  return (
    <section className="media-shell">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <SectionHeading eyebrow="Latest distributions" title="Recent campaigns moving through the media pipeline." />
            <div className="mt-6">
              {recent.slice(0, 6).map((post, index) => <CompactIndexCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
            </div>
          </div>
          <aside className="grid gap-5">
            <div className="media-card rounded-2xl p-6">
              <p className="media-eyebrow">How media distribution works</p>
              <div className="mt-5 grid gap-4">
                {steps.map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--slot4-accent)] text-xs font-black text-[#04100f]">{index + 1}</span>
                    <p className="text-sm font-bold leading-7 text-white/68">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="media-card rounded-2xl p-6">
              <p className="media-eyebrow">Why choose us</p>
              <div className="mt-5 grid gap-4">
                {reasons.map((reason) => (
                  <div key={reason.title} className="flex gap-4">
                    <reason.icon className="mt-1 h-5 w-5 shrink-0 text-[var(--slot4-accent)]" />
                    <div>
                      <h3 className="font-black text-white">{reason.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-white/56">{reason.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {faqs.map(([question, answer]) => (
            <div key={question} className="media-card rounded-2xl p-6">
              <CircleHelp className="h-5 w-5 text-[var(--slot4-accent)]" />
              <h3 className="mt-4 text-xl font-black text-white">{question}</h3>
              <p className="mt-3 text-sm leading-7 text-white/58">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="media-shell pb-16">
      <div className={`${dc.shell.section}`}>
        <div className="media-card grid gap-8 rounded-3xl p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="media-eyebrow">CTA section</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-[-.04em] text-white sm:text-6xl">Ready to amplify your next announcement?</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/62">Create a campaign, organize the release details, and make your story easier for journalists, publishers, and partners to evaluate.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/create" className={dc.button.accent}><Send className="h-4 w-4" /> Submit campaign</Link>
            <Link href="/contact" className={dc.button.secondary}><Megaphone className="h-4 w-4" /> Talk to us</Link>
          </div>
        </div>
        <div className="mt-8 grid gap-4 text-center text-sm font-black uppercase tracking-[.16em] text-white/42 sm:grid-cols-4">
          {['Trusted brands', 'Recent campaigns', 'Success stories', 'Media outreach'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[.03] px-4 py-5"><BadgeCheck className="mx-auto mb-3 h-5 w-5 text-[var(--slot4-accent)]" />{item}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
