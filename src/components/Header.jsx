import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import { asset, contact, nav } from '../site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link to="/" className="shrink-0" aria-label="McNabb Construction LLC, home">
          <img src={asset('images/logo-1.png')} alt="McNabb Construction LLC" width="700" height="341" className="h-14 w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-[0.9375rem] transition-colors ${isActive ? 'text-ink font-medium' : 'text-ink-2 hover:text-ink'}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={contact.phoneHref} className="btn btn-primary hidden h-11 sm:inline-flex">
            <Phone size={18} strokeWidth={1.75} aria-hidden="true" />
            <span className="tabular-nums">{contact.phone}</span>
          </a>
          <button
            type="button"
            className="btn btn-ghost h-11 w-11 px-0 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-line bg-paper lg:hidden">
          <ul className="container-page py-3">
            {[{ to: '/', label: 'Home' }, ...nav].map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end
                  className={({ isActive }) => `block py-3 text-lg ${isActive ? 'font-medium text-ink' : 'text-ink-2'}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
