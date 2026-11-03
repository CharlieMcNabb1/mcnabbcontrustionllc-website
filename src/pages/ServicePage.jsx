import { Check } from 'lucide-react'
import PageHeader from '../components/PageHeader'

export default function ServicePage({ service: s }) {
  return (
    <>
      <PageHeader title={s.title}>{s.subtitle}</PageHeader>

      <section className="container-page grid gap-12 py-16 md:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-20">
        <article className="max-w-[40rem]">
          {s.body.map((p) => (
            <p key={p.slice(0, 24)} className="mb-5 text-ink-2">{p}</p>
          ))}
          <ul className="mt-8 flex flex-col gap-4">
            {s.list.map(([item, detail]) => (
              <li key={item} className="flex gap-3">
                <Check size={18} strokeWidth={1.75} aria-hidden="true" className="mt-1 shrink-0 text-brand-deep" />
                <span>
                  <span className="font-medium">{item}</span>
                  {detail && <span className="text-ink-2">: {detail}</span>}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-10 border-t border-line pt-8 text-ink-2">{s.closing}</p>
        </article>

        <img
          src={s.image.src}
          alt={s.image.alt}
          loading="lazy"
          className="aspect-[3/4] w-full rounded-xl object-cover lg:sticky lg:top-28"
        />
      </section>

    </>
  )
}
