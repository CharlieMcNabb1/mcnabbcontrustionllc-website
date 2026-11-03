import { Link, useLocation } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { contact, nav } from '../site'
import ContactForm from './ContactForm'

export default function Footer() {
  const { pathname } = useLocation()
  // These pages already have their own form
  const showForm = !['/contact-us', '/testimonials'].includes(pathname)
  const row = 'flex items-center gap-3 text-white/80 transition-colors hover:text-white'

  const details = (
    <div className="grid gap-10 sm:grid-cols-2">
      <ul className="flex flex-col gap-3">
        {/* The form variant already shows the phone as its button */}
        {!showForm && <li><a className={row} href={contact.phoneHref}><Phone size={18} strokeWidth={1.75} aria-hidden="true" /><span className="tabular-nums">{contact.phone}</span></a></li>}
        <li><a className={row} href={`mailto:${contact.email}`}><Mail size={18} strokeWidth={1.75} aria-hidden="true" />{contact.email}</a></li>
        <li className="flex items-center gap-3 text-white/80"><MapPin size={18} strokeWidth={1.75} aria-hidden="true" />{contact.city}</li>
        <li><a className={row} href={contact.facebook} target="_blank" rel="noreferrer"><FacebookIcon />Facebook</a></li>
      </ul>
      <nav aria-label="Footer">
        <ul className="flex flex-col gap-3">
          {nav.map((item) => (
            <li key={item.to}><Link to={item.to} className="text-white/70 transition-colors hover:text-white">{item.label}</Link></li>
          ))}
        </ul>
      </nav>
    </div>
  )

  return (
    <footer className="on-dark bg-night text-white">
      {showForm ? (
        <div className="container-page grid gap-14 py-16 md:py-24 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="text-3xl leading-tight font-semibold md:text-4xl">Contact us today for your free estimate</h2>
              <p className="mt-3 text-white/75">Call or send a message to schedule a free design consultation with Keith and the McNabb Construction team</p>
              <a href={contact.phoneHref} className="btn btn-primary mt-8">
                <Phone size={18} strokeWidth={1.75} aria-hidden="true" />
                <span className="tabular-nums">{contact.phone}</span>
              </a>
            </div>
            <div className="hidden lg:block">{details}</div>
          </div>
          <div>
            <h3 className="mb-6 text-xl font-semibold">Get started today</h3>
            <ContactForm dark />
          </div>
          <div className="lg:hidden">{details}</div>
        </div>
      ) : (
        <div className="container-page grid gap-10 py-14 md:py-16 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <h2 className="text-2xl font-semibold">McNabb Construction LLC</h2>
            <p className="mt-2 max-w-md text-white/70">Licensed, bonded and insured general contractor serving Driftwood, Dripping Springs and the South Austin area</p>
          </div>
          {details}
        </div>
      )}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-sm text-white/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} McNabb Construction LLC</p>
          <Link to="/privacy-policy" className="transition-colors hover:text-white">Privacy policy</Link>
        </div>
      </div>
    </footer>
  )
}

// lucide dropped brand icons; this matches its 18px / 1.75 stroke
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
