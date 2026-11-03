import Masonry from '../components/bits/Masonry'
import PageHeader from '../components/PageHeader'
import { gallery } from '../site'

export default function Gallery() {
  return (
    <>
      <PageHeader title="Photo gallery">
        Kitchens, baths, fireplaces, decks and whole homes from around Driftwood, Dripping Springs and South Austin. Select any photo to see it larger.
      </PageHeader>
      <section className="container-page py-12 md:py-16">
        <Masonry
          items={gallery}
          // shortcut: column width is picked once on load, not on resize
          columnWidth={window.innerWidth < 640 ? 150 : 300}
          gap={12}
          radius={10}
          animateFrom="bottom"
          stagger={0.03}
          blurToFocus={false}
          hoverEffect="none"
          captions="none"
          draggable={false}
          lightbox
        />
      </section>
    </>
  )
}
