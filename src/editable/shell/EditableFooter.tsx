'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="border-t border-white/10 bg-[#05090e] text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.7fr_.7fr]">
          <div>
            <Link href="/" className="text-4xl font-black tracking-[-.04em] text-white sm:text-5xl">{SITE_CONFIG.name}</Link>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/62">Professional media distribution, press release publishing, and campaign visibility tools for brands, agencies, founders, and publishers.</p>
            <form action="/signup" className="mt-8 flex max-w-xl rounded-full border border-white/14 bg-white/[.04] p-1">
              <input name="email" type="email" placeholder="Email for campaign updates" className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40" />
              <button className="rounded-full bg-[var(--slot4-accent)] px-5 text-xs font-black uppercase tracking-[.14em] text-[#04100f]">Subscribe</button>
            </form>
          </div>
          <div>
            <h3 className="border-b border-white/20 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">Explore</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/media-distribution" className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Campaigns<ArrowRight className="h-4 w-4" /></Link>
              <Link href="/search" className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Search<ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
          <div>
            <h3 className="border-b border-white/20 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">Platform</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/about" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">About</Link>
              <Link href="/contact" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Contact</Link>
              {session ? (
                <>
                  <span className="text-sm font-black uppercase tracking-[.08em] text-white/55">{session.name}</span>
                  <Link href="/create" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Publish</Link>
                  <button onClick={logout} className="text-left text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Logout</button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Log in</Link>
                  <Link href="/signup" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Sign up</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-[10px] font-black uppercase tracking-[.18em] text-white/45">Copyright {year} {SITE_CONFIG.name}. Media distribution and campaign visibility.</div>
    </footer>
  )
}
