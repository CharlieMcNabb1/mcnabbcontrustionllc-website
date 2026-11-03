// Prefixes public/ files with the deploy base path (GitHub Pages serves from a sub-path)
export const asset = (path) => import.meta.env.BASE_URL + path

export const contact = {
  phone: '512-567-5904',
  phoneHref: 'tel:+15125675904',
  email: 'keithmcnabb@mac.com',
  city: 'Driftwood, TX 78619',
  facebook: 'https://www.facebook.com/pages/McNabb-Construction/1602621026659881',
}

export const nav = [
  { to: '/kitchen-remodel', label: 'Kitchen remodel' },
  { to: '/bathroom-remodel', label: 'Bathroom remodel' },
  { to: '/home-remodeling', label: 'Home remodeling' },
  { to: '/photo-gallery', label: 'Photo gallery' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact-us', label: 'Contact' },
]

const img = (name, width, height, alt) => ({ id: name, img: asset(`images/${name}.jpg`), width, height, alt })

// Order follows the original gallery page, then the photos that only appeared on other pages
export const gallery = [
  img('before_pic_1_', 600, 450, 'Galley kitchen with cherry cabinets before the remodel'),
  img('769564_24', 622, 829, 'Dated bathroom with a yellow-tiled shower before the remodel'),
  img('769588_24', 622, 833, 'Remodeled bathroom with a glass shower and soaking tub'),
  img('IMG_2195', 1200, 1600, 'Walk-in shower in slate tile with a mosaic accent stripe'),
  img('IMG_2196', 1200, 1600, 'Slate shower with a recessed niche and pebble floor'),
  img('IMG_2200', 1600, 1200, 'Custom wood dining table beside a built-in banquette'),
  img('749488_24-1', 622, 467, 'Sage green kitchen with a granite island'),
  img('IMG_2205', 1600, 1200, 'Gray kitchen with quartz counters and a glass mosaic backsplash'),
  img('McNabb-21', 479, 640, 'Wine cellar with wood racking and an iron chandelier'),
  img('Pic1', 640, 480, 'Limestone ranch house with a standing-seam metal roof'),
  img('Pic2', 640, 480, 'Sunroom lined with windows'),
  img('Pic4', 640, 480, 'Stucco outbuilding under live oaks'),
  img('Pic6', 480, 640, 'Powder room with patterned wallpaper and a vessel sink'),
  img('treehouse_1_', 320, 240, 'Treehouse with a red metal roof built into an oak'),
  img('1', 1280, 960, 'Cedar deck with a built-in hot tub surround'),
  img('2', 1280, 960, 'Cedar hot tub surround with steps'),
  img('3', 1280, 960, 'Cedar deck with an iron railing'),
  img('4', 1280, 960, 'Finished cedar deck overlooking the yard'),
  img('mc', 960, 1280, 'Hallway with hand-scraped wood floors'),
  img('mc1', 960, 1280, 'Living room with dark wood floors and a stone fireplace'),
  img('mc2', 1280, 960, 'Family room with a river rock fireplace'),
  img('mc3', 960, 1280, 'Kitchen with a black and white checkered floor'),
  img('mc4', 960, 1280, 'Cherry kitchen cabinets with stainless appliances'),
  img('mc5', 960, 1280, 'Kitchen sink wall with white counters and a pantry beyond'),
  img('mc6', 960, 1280, 'Laundry room and pantry with open shelving'),
  img('mc7', 1280, 960, 'Kitchen counters along a checkered floor'),
  img('mc8-e1562159503413', 960, 1280, 'River rock fireplace with a timber mantel'),
  img('mc9', 960, 1280, 'Floor-to-ceiling river rock fireplace'),
  img('mc10', 960, 1280, 'River rock fireplace with a raised hearth'),
  img('banner1', 1600, 1067, 'Bright white kitchen with a granite island'),
  img('IMG_2217', 1200, 1600, 'Professional range set in gray cabinetry'),
  img('McNabb-1', 1060, 1500, 'Double vanity with rustic framed mirrors'),
  img('New-After-Kitchen-Dining-Area-1', 1060, 1500, 'Open kitchen and dining area with wood floors'),
  img('homeremodel', 450, 300, 'House framed in green sheathing during a remodel'),
  img('kitchen1', 450, 300, 'Granite counter with a stacked-stone backsplash'),
  img('bathroom1', 450, 300, 'Glass shower and tub in a remodeled bathroom'),
]

export const services = {
  kitchen: {
    path: '/kitchen-remodel',
    name: 'Kitchen remodel',
    title: 'Treat yourself to the kitchen of your dreams in South Austin',
    subtitle: 'Kitchen remodeling services in Driftwood, Dripping Springs and the surrounding Texas areas',
    image: { src: asset('images/IMG_2217.jpg'), alt: 'Professional range set in gray cabinetry with a glass mosaic backsplash' },
    tile: asset('images/mc4.jpg'),
    body: [
      'Kitchens are easily one of the most used rooms in the house. After all, if you’re making your own meals, every single one is going to come out of it. So if your kitchen is starting to feel too small or is showing its age with old appliances, creaky cabinets and scuffed floors, it’s time to call McNabb Construction. We are a licensed, bonded and insured general contractor in Driftwood, Texas committed to providing top-notch home remodeling services.',
      'Share your vision of your dream kitchen with our design experts, and we’ll work with you to recreate that vision in a way that fits your needs, requirements and budget. If you have questions along the way, we’re always available to help. We’ll answer your questions about:',
    ],
    list: [
      ['Color choices', 'Select colors for your walls, countertops, flooring and cabinets that complement each other.'],
      ['Material selections', 'Choose building materials that are beautiful, durable and affordable so that they last for years to come without killing your wallet.'],
      ['Layout ideas', 'Design your kitchen with functionality in mind so the cooking and baking process is as streamlined as possible.'],
    ],
    closing: 'To get started on your kitchen remodel, get in touch with McNabb Construction to discuss your needs with a professional today. We serve the entire South Austin area.',
  },
  bathroom: {
    path: '/bathroom-remodel',
    name: 'Bathroom remodel',
    title: 'Breathe new life into your bathroom',
    subtitle: 'Trust the contractors at McNabb Construction in Driftwood, TX',
    image: { src: asset('images/McNabb-1.jpg'), alt: 'Double vanity with rustic framed mirrors and wall sconces' },
    tile: asset('images/IMG_2195.jpg'),
    body: [
      'If the bedroom to bathroom ratio at your Driftwood or Dripping Springs, Texas home isn’t close to equal, you may want to consider building an additional bathroom. Doing so can drastically increase your home’s value, especially if you’re equipping your home with both a tub and a shower to increase functionality for children and adults.',
      'If your bathroom situation is under control, but it’s time for an update or some serious upgrades, turn to the professional designers and contractors at McNabb Construction. We’ve got years of experience working with Texas area homeowners like you to renovate dated bathrooms. We’ll come in and work closely with you to create a design you love. That might include:',
    ],
    list: [['New flooring'], ['Updated fixtures'], ['New showers, tubs or toilets'], ['Modern wall colors'], ['New windows and doors'], ['Energy efficient lighting options']],
    closing: 'Ready to see how your cramped and dated bathroom could benefit from a remodel executed by McNabb Construction? Call our office today to schedule your free design consultation with our team of experts in the South Austin area.',
  },
  home: {
    path: '/home-remodeling',
    name: 'Home remodeling',
    title: 'Transform your South Austin home with help from McNabb Construction',
    subtitle: 'Comprehensive home remodeling services in Driftwood, TX',
    image: { src: asset('images/New-After-Kitchen-Dining-Area-1.jpg'), alt: 'Open kitchen and dining area with wood floors after a remodel' },
    tile: asset('images/mc9.jpg'),
    body: [
      'In addition to specialty kitchen and bathroom remodels, the team of professional contractors at McNabb Construction regularly works with Driftwood and Dripping Springs homeowners to perform whole-house remodels. No job is too big or too small for us to take on, so contact us for your next residential remodeling project. We’ll work with you to perform the following tasks:',
    ],
    list: [['Garage & attic conversion'], ['Wine cellar construction'], ['Out building construction'], ['Mother in law suite construction'], ['Room additions'], ['New flooring installation'], ['Window and door installation'], ['Trim work'], ['And much, much more']],
    closing: 'No matter what it looks like at the moment, your home has the potential to transform into the house of your dreams. All it takes is a vision, professional designers and a savvy contractor to make it happen. Just come to us with your project, with or without design ideas, and we’ll sit down with you to hammer out the details of your remodel. McNabb Construction has years of experience helping homeowners bring their visions to life, and you can be next. We’re one easy phone call away. Call our Driftwood, TX office today to discuss your goals and schedule a free design consultation.',
  },
}

export const testimonials = [
  {
    name: 'Jim M.',
    quote: 'Keith McNabb built the house we moved into 2 years ago. It was built on time and under budget. The cabinetry in the kitchen is made of pecan and is beautiful and one of a kind. His eye for design is an added plus. He will do what he says he will do and stands by his word. Refreshing.',
  },
  {
    name: 'Satisfied client',
    quote: 'McNabb Construction was thorough in their work from the construction details to the accounting for our project. The company finished on time and under our budget. The conduct of the contractor and his subs was very professional. We would recommend McNabb Construction without reservation.',
  },
  {
    name: 'Glen C.',
    quote: 'I would recommend McNabb Construction on any project you may have. He has built my 6 car garage and apartment, as well as my house. We could not be happier. Keith is very hands on with all the phases of construction. He is knowledgeable and helpful in making some of those harder decisions that are not always easy to make. He is also willing to help on those things that come with being a homeowner, odds and ends around the house that seem to arise.',
  },
]
