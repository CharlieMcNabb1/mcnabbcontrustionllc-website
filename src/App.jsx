import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Phone } from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'
import { contact, services } from './site'

const titles = {
  '/': 'McNabb Construction LLC | Home Remodeling in South Austin, TX',
  '/kitchen-remodel': 'Kitchen Remodel | McNabb Construction LLC',
  '/bathroom-remodel': 'Bathroom Remodel | McNabb Construction LLC',
  '/home-remodeling': 'Home Remodeling | McNabb Construction LLC',
  '/photo-gallery': 'Photo Gallery | McNabb Construction LLC',
  '/testimonials': 'Testimonials | McNabb Construction LLC',
  '/contact-us': 'Contact Us | McNabb Construction LLC',
  '/privacy-policy': 'Privacy Policy | McNabb Construction LLC',
}

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = titles[pathname.replace(/\/$/, '') || '/'] ?? titles['/']
  }, [pathname])

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kitchen-remodel" element={<ServicePage service={services.kitchen} />} />
          <Route path="/bathroom-remodel" element={<ServicePage service={services.bathroom} />} />
          <Route path="/home-remodeling" element={<ServicePage service={services.home} />} />
          <Route path="/photo-gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      {/* Phone stays one tap away on small screens */}
      <a href={contact.phoneHref} className="btn btn-primary fixed right-4 bottom-4 z-30 h-12 shadow-[0_8px_24px_-8px_rgb(36_31_34/0.45)] sm:hidden">
        <Phone size={18} strokeWidth={1.75} aria-hidden="true" />
        Call
      </a>
    </>
  )
}
