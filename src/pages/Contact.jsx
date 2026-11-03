import { Mail, MapPin, Phone } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ContactForm from '../components/ContactForm'
import { contact } from '../site'

export default function Contact() {
  const row = 'flex items-center gap-3 text-lg'
  return (
    <>
      <PageHeader title="Contact us">
        If you’re ready to remodel your home, schedule your complimentary design consultation with McNabb Construction today.
      </PageHeader>

      <section className="container-page grid gap-14 py-16 md:py-24 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <h2 className="text-2xl font-semibold">Call or email</h2>
          <ul className="mt-6 flex flex-col gap-4">
            <li><a href={contact.phoneHref} className={`${row} font-medium tabular-nums hover:text-brand-deep`}><Phone size={18} strokeWidth={1.75} aria-hidden="true" className="text-ink-3" />{contact.phone}</a></li>
            <li><a href={`mailto:${contact.email}`} className={`${row} hover:text-brand-deep`}><Mail size={18} strokeWidth={1.75} aria-hidden="true" className="text-ink-3" />{contact.email}</a></li>
            <li className={`${row} text-ink-2`}><MapPin size={18} strokeWidth={1.75} aria-hidden="true" className="text-ink-3" />{contact.city}</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Or send a message</h2>
          <p className="mt-2 mb-8 text-ink-2">Tell us about your project and we’ll get back to you about a free estimate</p>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
