import PageHeader from '../components/PageHeader'
import { contact } from '../site'

export default function Privacy() {
  return (
    <>
      <PageHeader title="Privacy policy" />
      <section className="container-page py-16 md:py-20">
        <div className="max-w-[40rem] space-y-5 text-ink-2">
          <p>Our website address is mcnabbconstructionllc.com.</p>
          <p>This site does not use accounts, comments or advertising cookies. The contact forms open your own email app with your message filled in, so nothing you type is stored by this website. We only receive what you choose to send.</p>
          <p>We use the details you send us, such as your name, email and phone number, only to reply to you about your project. We don’t sell or share them.</p>
          <p>To ask us to delete any correspondence we hold about you, email <a className="text-brand-deep underline" href={`mailto:${contact.email}`}>{contact.email}</a>.</p>
        </div>
      </section>
    </>
  )
}
