import PageHeader from '../components/PageHeader'
import ContactForm from '../components/ContactForm'
import { testimonials } from '../site'

export default function Testimonials() {
  return (
    <>
      <PageHeader title="Testimonials">What homeowners say after working with Keith and the McNabb Construction team</PageHeader>

      <section className="container-page py-16 md:py-24">
        <ul className="mx-auto flex max-w-3xl flex-col gap-14">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure>
                <blockquote className="text-xl leading-relaxed text-ink md:text-2xl md:leading-snug">“{t.quote}”</blockquote>
                <figcaption className="mt-4 font-medium text-ink-2">{t.name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line bg-stone py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <h2 className="text-3xl font-semibold">Leave us a review</h2>
            <p className="mt-3 max-w-md text-ink-2">We appreciate your feedback. If you worked with us, we’d love to hear how it went.</p>
          </div>
          <ContactForm subject="Review for McNabb Construction" messageLabel="Your review" submitLabel="Send review" />
        </div>
      </section>
    </>
  )
}
