import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import SplitText from '../components/bits/SplitText'
import { asset, contact, services, testimonials } from '../site'

const offerings = [
  'Kitchen remodeling',
  'Bathroom remodeling',
  'Garage & attic conversions',
  'Wine cellar construction',
  'Mother in law suite additions',
  'Flooring, window and door installation',
]

export default function Home() {
  const quote = testimonials[0]

  return (
    <>
      <section className="on-dark relative isolate overflow-hidden bg-night text-white">
        <img
          src={asset('images/banner1.jpg')}
          alt=""
          width="1600"
          height="1067"
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(24_20_22/0.86)_0%,rgb(24_20_22/0.62)_45%,rgb(24_20_22/0.1)_100%)]" />
        <div className="container-page flex min-h-[min(82svh,46rem)] flex-col justify-center py-24">
          <div className="max-w-2xl">
            <SplitText
              tag="h1"
              text="Home remodeling contractors in the South Austin, TX area"
              splitType="words"
              textAlign="left"
              delay={45}
              duration={0.9}
              ease="power3.out"
              from={{ opacity: 0, y: 28 }}
              to={{ opacity: 1, y: 0 }}
              rootMargin="0px"
              className="text-4xl leading-[1.08] font-semibold tracking-[-0.02em] sm:text-5xl lg:text-6xl"
            />
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Licensed, bonded and insured remodeling in Driftwood, Dripping Springs and South Austin
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={contact.phoneHref} className="btn btn-primary">
                <Phone size={18} strokeWidth={1.75} aria-hidden="true" />
                Call for a free estimate
              </a>
              <Link to="/photo-gallery" className="btn btn-ghost-dark">See our work</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
        <div className="lg:order-2">
          <img
            src={asset('images/IMG_2205.jpg')}
            alt="Remodeled kitchen with gray cabinets, quartz counters and a glass mosaic backsplash"
            width="1600"
            height="1200"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-xl object-cover lg:sticky lg:top-28"
          />
        </div>
        <div className="max-w-[38rem]">
          <h2 className="text-3xl leading-tight font-semibold md:text-4xl">Transform your house into your dream home</h2>

          <h3 className="mt-10 text-xl font-semibold">Update your kitchen with new cabinets & countertops</h3>
          <p className="mt-3 text-ink-2">
            Is your kitchen starting to feel dated or cramped? Maybe you’re running out of storage space for the array of cooking and baking gadgets you’ve collected over the years. If you’re ready to give your kitchen the face-lift it needs, get in touch with the licensed and insured contractors at McNabb Construction. We’re dedicated to providing the communities of Driftwood and Dripping Springs, TX, as well as the larger South Austin area, with expert kitchen remodeling services, including everything from the design process to putting the finishing touches on the completed project.
          </p>

          <h3 className="mt-10 text-xl font-semibold">Discover your home’s true potential</h3>
          <p className="mt-3 text-ink-2">
            Think your aging home could be a diamond in the rough? We’ll help you chip away the old exterior to reveal the beauty underneath with our comprehensive home remodeling solutions. Share your vision for your home with the professional team at McNabb Construction and work closely with us to create a design you love. We’ll do everything, including:
          </p>
          <ul className="mt-6 grid border-t border-line sm:grid-cols-2 sm:gap-x-8">
            {offerings.map((o) => (
              <li key={o} className="border-b border-line py-3 font-medium">{o}</li>
            ))}
            <li className="border-b border-line py-3 text-ink-3">And so much more</li>
          </ul>

          <p className="mt-8 text-ink-2">
            McNabb Construction is here for you at every juncture of the design and construction process. If you need assistance with selecting colors, materials or layouts, our professional team is always available to answer your questions and help you make informed, intelligent decisions. To get started on your home remodel, contact the McNabb Construction office around South Austin to schedule your free design consultation.
          </p>
        </div>
      </section>

      <section className="bg-stone py-20 md:py-28">
        <div className="container-page">
          <h2 className="text-3xl font-semibold md:text-4xl">What we remodel</h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
            {Object.values(services).map((s) => (
              <li key={s.path}>
                <Link to={s.path} className="group relative block overflow-hidden rounded-xl">
                  <img src={s.tile} alt="" loading="lazy" className="aspect-[4/5] w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgb(24_20_22/0.82),rgb(24_20_22/0))] px-6 pt-20 pb-6 text-white">
                    <span className="flex items-center justify-between text-xl font-semibold [font-stretch:112%]">
                      {s.name}
                      <ArrowRight size={20} strokeWidth={1.75} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <figure className="mx-auto max-w-3xl">
          <blockquote className="text-2xl leading-snug font-medium text-ink md:text-3xl [font-stretch:105%]">
            “{quote.quote}”
          </blockquote>
          <figcaption className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-ink-2">
            <span className="font-medium text-ink">{quote.name}</span>
            <Link to="/testimonials" className="text-brand-deep underline">Read more from our clients</Link>
          </figcaption>
        </figure>
      </section>

    </>
  )
}
