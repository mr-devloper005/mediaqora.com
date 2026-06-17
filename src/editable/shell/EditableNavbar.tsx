'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05090e]/92 text-white shadow-[0_12px_40px_rgba(0,0,0,.28)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/12 bg-white/[.06]">
              <img src="/favicon.png" alt="" className="h-11 w-11 object-contain" />
            </span>
            <span className="truncate text-2xl font-black tracking-[-.04em] text-white sm:text-3xl">
              {SITE_CONFIG.name}
            </span>
          </Link>
        </div>

        <div className="flex shrink-0 items-center justify-end gap-4">
          {session ? (
            <>

              <span className="hidden max-w-36 truncate rounded-full bg-white/[.07] px-3 py-2 text-xs font-black text-white/82 sm:block">{session.name}</span>
              <button type="button" onClick={logout} className="hidden text-xs font-black uppercase tracking-[.12em] text-white/62 transition hover:text-[var(--slot4-accent)] sm:block">Logout</button>
            </>
          ) : <Link href="/login" className="hidden text-xs font-black uppercase tracking-[.12em] text-white/78 transition hover:text-[var(--slot4-accent)] sm:block">Log in</Link>}
          <Link href={session ? '/create' : '/signup'} className="rounded-full bg-[var(--slot4-accent)] px-4 py-3 text-[10px] font-black uppercase tracking-[.14em] text-[#04100f] transition hover:bg-white sm:px-6">
            {session ? 'Publish' : 'Sign up'}
          </Link>
        </div>
      </div>

      <div className="border-t border-white/8 bg-black/20 text-white">
        <div className="mx-auto flex min-h-[50px] max-w-[1200px] items-center px-4 sm:px-6 lg:px-8">
          <nav className="hidden gap-6 text-xs font-black uppercase tracking-[.14em] text-white/62 lg:flex">
            <Link href="/media-distribution" className="hover:text-[var(--slot4-accent)]">News</Link>
            <Link href="/about" className="hover:text-[var(--slot4-accent)]">About</Link>
            <Link href="/contact" className="hover:text-[var(--slot4-accent)]">Contact</Link>
            <Link href="/search" className="hover:text-[var(--slot4-accent)]">Search</Link>
          </nav>
          <form action="/search" className="ml-auto flex min-w-0 flex-1 items-center rounded-full border border-white/12 bg-white/[.04] lg:max-w-[320px] lg:flex-none">
            <Search className="ml-4 h-4 w-4 text-[var(--slot4-accent)]" />
            <input name="q" type="search" placeholder="Search campaigns" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-xs font-bold outline-none placeholder:text-white/38" />
          </form>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#071219] px-4 py-4 lg:hidden">
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, { label: 'Campaigns', href: '/media-distribution' }, { label: 'Search', href: '/search' }, { label: 'Contact', href: '/contact' }, ...(session ? [{ label: `Profile: ${session.name}`, href: '/create' }, { label: 'Create', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl bg-white/[.06] px-4 py-3 text-sm font-black uppercase tracking-[.1em] text-white">{item.label}</Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-2xl bg-white/[.06] px-4 py-3 text-left text-sm font-black uppercase tracking-[.1em] text-white">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
