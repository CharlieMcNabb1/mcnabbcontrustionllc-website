import { useId, useState } from 'react'
import { contact } from '../site'

// shortcut: no backend yet, so submit opens the visitor's email app pre-filled; swap for Formspree/Netlify Forms when hosting is decided
export default function ContactForm({ subject = 'Free estimate request', messageLabel = 'Tell us about your project', submitLabel = 'Send message', dark = false }) {
  const [sent, setSent] = useState(false)
  const id = useId()

  function onSubmit(e) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const body = [
      `Name: ${f.get('name')}`,
      `Email: ${f.get('email')}`,
      ...(f.get('phone') ? [`Phone: ${f.get('phone')}`] : []),
      '',
      f.get('message'),
    ].join('\n')
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const label = `mb-1.5 block text-sm font-medium ${dark ? 'text-white/85' : 'text-ink-2'}`

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor={`${id}-name`} className={label}>Name</label>
        <input id={`${id}-name`} name="name" required autoComplete="name" className="field" />
      </div>
      <div>
        <label htmlFor={`${id}-phone`} className={label}>
          Phone <span className={dark ? 'text-white/60' : 'text-ink-3'}>(optional)</span>
        </label>
        <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" className="field tabular-nums" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor={`${id}-email`} className={label}>Email</label>
        <input id={`${id}-email`} name="email" type="email" required autoComplete="email" className="field" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor={`${id}-message`} className={label}>{messageLabel}</label>
        <textarea id={`${id}-message`} name="message" rows={4} required className="field resize-y" />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:col-span-2">
        <button type="submit" className="btn btn-primary">{submitLabel}</button>
        <p className={`text-sm ${dark ? 'text-white/70' : 'text-ink-3'}`} aria-live="polite">
          {sent ? (
            <>Your email app should open with the message ready to send. If it didn’t, email <a className="underline" href={`mailto:${contact.email}`}>{contact.email}</a></>
          ) : (
            'Opens your email app with the message filled in'
          )}
        </p>
      </div>
    </form>
  )
}
