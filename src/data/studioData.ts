import { ServiceItem, StudioFeature, GalleryPhoto, StudioShowcaseItem } from '../types';

export const BUSINESS_INFO = {
  name: 'PHOTO.HOUZ',
  subtitle: 'CREATORS STUDIO',
  tagline: 'Your Story. Our Studio.',
  supportingTagline: 'Unforgettable Moments.',
  closingLine: 'Create. Capture. Cherish.',
  description: 'A creative space where ideas come to life and memories are made.',
  aboutDetailed:
    'PHOTO.HOUZ is a creative space where ideas come to life and memories are made. From personal portraits and family milestones to professional brand photography, pre-wedding shoots, and creative productions, our studio offers the space and facilities to bring every vision to life.',
  gatheringCapacity: '35 to 40 Gathering Space',
  gatheringDescription: 'Perfect for small events, workshops, meetings, presentations, and more.',
  audienceStatement: 'Perfect for individual creators, brands, and families gathering.',
  phone: '9606960990',
  formattedPhone: '+91 96069 60990',
  whatsappUrl:
    'https://wa.me/919606960990?text=Hello%20PHOTO.HOUZ%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20studio%20session%20%2F%20gathering%20space.',
  location: 'Creators Studio, Premium Creative Hub',
  workingHours: 'Open Daily: 9:00 AM – 9:00 PM',
};

// Uploaded Asset Constants for clean reuse across components
export const STUDIO_IMAGES = {
  heroStudio: '/assets/aistudio/d7dd6aea-c2a8-4b94-b00a-56ac573bef8c_fd228380.jpeg',
  loungeConsultation: '/assets/aistudio/317e3088-5f79-4c66-b11a-31268cfa901e_d653324a.jpeg',
  podcastStudio: '/assets/aistudio/5a9b4a30-8a7b-4865-b0b6-1fb9da80c775_2765790a.jpeg',
  btsOctabox: '/assets/aistudio/a8d61f02-3440-40f9-b819-755cd7a8892d_06786176.jpeg',
  tripleBackdrops: '/assets/aistudio/d143db48-edb0-4ad7-943f-37fdb0b6d739_bb3c4865.jpeg',
  spaciousFloor: '/assets/aistudio/1a4e6643-89bd-485e-82ef-96c7f7734539_eaf8b1b9.jpeg',
  bridalPortrait: '/assets/aistudio/f1e7838d-468f-4fb4-97d2-4717b70faf4e_24e26b59.jpeg',
  gatheringWorkshop: '/assets/aistudio/3ef1f8b9-2499-4379-a6c5-54f079fefb05_a4417d8e.jpeg',
  originalPoster: '/assets/aistudio/Screenshot_20261101_184154_WhatsApp_3659fc38.jpg',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'model-shoots',
    title: 'Model Shoots',
    shortDesc: 'Editorial fashion and portfolio shoots designed for aspiring & established talent.',
    fullDesc:
      'High-impact agency-standard model portfolios, creative lookbooks, and composite cards with calibrated strobe lighting and creative textured backdrops.',
    category: 'portrait',
    imageUrl: STUDIO_IMAGES.bridalPortrait,
    features: ['High-key & low-key lighting', 'Multiple backdrop changes', 'Makeover room access', 'High-res retouched files'],
    duration: '2 to 4 Hours',
    deliverables: 'Curated digital proofs + retouched editorial selects',
  },
  {
    id: 'baby-shoots',
    title: 'Baby Shoots',
    shortDesc: 'Gentle, heartwarming baby and toddler sessions in a safe, temperature-controlled environment.',
    fullDesc:
      'Cherish your little one’s precious milestones. Our studio is sanitised, cozy, and equipped with safe props, soft diffused lighting, and comfortable seating for parents.',
    category: 'celebration',
    imageUrl:
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=80',
    features: ['Sanitized gentle environment', 'Soft non-flash continuous lights', 'Custom prop arrangements', 'Patience-first scheduling'],
    duration: '1.5 to 2.5 Hours',
    deliverables: 'Online proofing gallery + framed print options',
  },
  {
    id: 'maternity-shoots',
    title: 'Maternity Shoots',
    shortDesc: 'Graceful, timeless pregnancy portraits celebrating motherhood with elegance and warmth.',
    fullDesc:
      'Celebrate this transformative chapter with artistic studio lighting, flowing gown drapes, and intimate couple compositions in full privacy.',
    category: 'celebration',
    imageUrl:
      'https://images.unsplash.com/photo-1584297091622-af8e5fd64542?auto=format&fit=crop&w=1000&q=80',
    features: ['Private makeover dressing suite', 'Artistic silhouette & soft glows', 'Partner & family integration', 'Posing assistance'],
    duration: '2 Hours',
    deliverables: 'Full-resolution master gallery + album ready prints',
  },
  {
    id: 'bride-to-be',
    title: 'Bride-to-Be',
    shortDesc: 'Opulent bridal portraits showcasing bridal trousseau, jewelry, and radiant elegance.',
    fullDesc:
      'Capture your bridal aura before the big day with dedicated vanity mirrors, detailed jewelry lighting, and luxury editorial backdrops.',
    category: 'celebration',
    imageUrl: STUDIO_IMAGES.bridalPortrait,
    features: ['Dedicated bridal dressing suite', 'Fine jewelry accent lighting', 'Full-length & close-up compositions', 'Glam squad space'],
    duration: '2.5 to 3 Hours',
    deliverables: 'High-definition bridal album selects',
  },
  {
    id: 'groom-to-be',
    title: 'Groom-to-Be',
    shortDesc: 'Sharp, sophisticated portraits capturing masculine confidence, style, and celebration.',
    fullDesc:
      'Classic suit and ethnic wear sessions featuring dramatic rim lighting, moody vignettes, and elegant contemporary staging.',
    category: 'celebration',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',
    features: ['Crisp architectural lighting', 'Bespoke suit framing', 'Editorial groom styling', 'Expedited turnaround'],
    duration: '1.5 to 2 Hours',
    deliverables: 'Hand-retouched digital portraits',
  },
  {
    id: 'pre-wedding',
    title: 'Pre-Wedding',
    shortDesc: 'Cinematic romance and heartfelt connection staged in diverse studio atmospheres.',
    fullDesc:
      'Tell your couple’s origin story with multiple stylized setups—from romantic candlelit vibes and warm wood aesthetics to modern editorial minimalism.',
    category: 'celebration',
    imageUrl: STUDIO_IMAGES.loungeConsultation,
    features: ['Multiple costume & set changes', 'Cinematic video teasers', 'Curated mood board collaboration', 'Couples posing guide'],
    duration: '3 to 5 Hours',
    deliverables: 'Full digital reel + cinematic highlights',
  },
  {
    id: 'podcast-interviews',
    title: 'Podcast & Interviews',
    shortDesc: 'Acoustically optimized studio setup with broadcast audio and multi-camera 4K recording.',
    fullDesc:
      'Record your audio/video podcast, founder talk, or high-profile interview with professional microphones, studio sound monitors, and cozy seating.',
    category: 'audio',
    imageUrl: STUDIO_IMAGES.podcastStudio,
    features: ['Multi-mic broadcast setup', 'Sound-treated creator space', 'Multi-angle 4K video recording', 'Immediate raw file offload'],
    duration: 'Flexible Hourly Blocks',
    deliverables: 'Multi-track WAV audio + synced 4K camera reels',
  },
  {
    id: 'fashion-brand-shoots',
    title: 'Fashion & Brand Shoots',
    shortDesc: 'Commercial e-commerce, lookbooks, and advertising campaigns for modern brands.',
    fullDesc:
      'Elevate your brand presence with clean seamless paper backdrops, live client tethering monitor, steamer & garment racks, and production management.',
    category: 'commercial',
    imageUrl: STUDIO_IMAGES.btsOctabox,
    features: ['Live tethered monitor preview', 'Garment care & styling station', 'Continuous & flash setups', 'High-volume production workflow'],
    duration: 'Half-Day / Full-Day',
    deliverables: 'E-commerce ready cropped assets + campaign banners',
  },
];

export const STUDIO_FEATURES: StudioFeature[] = [
  {
    id: 'spacious-setup',
    title: 'Spacious Studio Setup',
    description: 'Generous floor plan with high ceilings, polished flooring, and unrestricted camera shooting distances for dynamic framing.',
    iconName: 'Maximize2',
    highlight: 'Expansive Shooting Floor',
  },
  {
    id: 'creative-backgrounds',
    title: 'Multiple Creative Backgrounds',
    description: 'Motorized seamless paper backdrops, warm timber slat walls, textured lime wash, cyclorama, and lifestyle interior corners.',
    iconName: 'Layers',
    highlight: 'Seamless & Textured Walls',
  },
  {
    id: 'professional-space',
    title: 'Professional Shooting Space',
    description: 'Precision grip, heavy-duty C-stands, boom arms, softbox modifiers, and lantern diffusers for flawless lighting control.',
    iconName: 'Camera',
    highlight: 'Industry-Standard Modifiers',
  },
  {
    id: 'makeover-room',
    title: 'Makeover Room',
    description: 'Dedicated private dressing suite with daylight-balanced Hollywood vanity bulbs, garment steamer, and comfortable styling stations.',
    iconName: 'Sparkles',
    highlight: 'Private Dressing & Vanity',
  },
  {
    id: 'photo-video',
    title: 'Photography & Videography Available',
    description: 'Book studio hire standalone or pair with our in-house veteran directors of photography, gaffers, and editors.',
    iconName: 'Video',
    highlight: 'In-House Creative Crew',
  },
  {
    id: 'projector',
    title: 'Projector for Conference or Meetings',
    description: 'High-lumen ultra HD presentation projector with motorized screen, ideal for pitch presentations, workshops, and team seminars.',
    iconName: 'Projector',
    highlight: 'Ultra-HD Presentation Ready',
  },
  {
    id: 'sound-system',
    title: 'Sound System Available',
    description: 'Acoustically tuned sound system and wireless microphones for creator workshops, musical playouts, and lively gatherings.',
    iconName: 'Volume2',
    highlight: 'Hi-Fi Audio & Microphones',
  },
];

export const STUDIO_SHOWCASE: StudioShowcaseItem[] = [
  {
    id: 'main-interior',
    title: 'Signature Creators Lounge & Floor',
    subtitle: 'Warm Aesthetic Ambiance',
    description:
      'Warm beige interior, signature spherical lantern softbox, mid-century modern armchair, circular jute rug, and natural fluted wood acoustic wall.',
    imageUrl: STUDIO_IMAGES.heroStudio,
    tag: 'Main Floor',
  },
  {
    id: 'gathering-hall',
    title: '35 to 40 Gathering & Workshop Hall',
    subtitle: 'Screenings, Meets & Masterclasses',
    description:
      'Versatile seating for 35 to 40 guests facing a motorized HD conference projector screen, festoon ambient lighting, and tuned audio system.',
    imageUrl: STUDIO_IMAGES.gatheringWorkshop,
    tag: 'Gathering Hall',
  },
  {
    id: 'podcast-setup',
    title: 'Creator Podcast & Interview Studio',
    subtitle: 'Acoustic Soundstage & Dual Mics',
    description:
      'Dedicated podcast lounge with bouclé armchairs, acoustic wood slats with warm LED lighting, and broadcast-grade microphone boom arms.',
    imageUrl: STUDIO_IMAGES.podcastStudio,
    tag: 'Podcast Studio',
  },
  {
    id: 'lighting-gear',
    title: 'Professional Shooting Space & Octabox',
    subtitle: 'Calibrated Strobe & Grip',
    description:
      'Full equipment grip with heavy-duty boom arms, large octabox softboxes, seamless backdrops, and tethered camera stations.',
    imageUrl: STUDIO_IMAGES.btsOctabox,
    tag: 'Shooting Space',
  },
  {
    id: 'creative-backgrounds',
    title: 'Multiple Creative Backgrounds',
    subtitle: 'Seamless Roll System',
    description:
      'Triple seamless backdrop rolls (clean white, warm beige, neutral gray) on C-stands with direct access to camera gear and lens shelf.',
    imageUrl: STUDIO_IMAGES.tripleBackdrops,
    tag: 'Backdrops',
  },
  {
    id: 'spacious-floor',
    title: 'Wide Cyclorama & Production Bay',
    subtitle: 'High Ceilings & Large Sets',
    description:
      'Spacious studio floor with ample clearance for model choreography, group portraits, commercial set builds, and full-body lighting.',
    imageUrl: STUDIO_IMAGES.spaciousFloor,
    tag: 'Spacious Setup',
  },
  {
    id: 'client-lounge',
    title: 'Client Styling & Consultation Lounge',
    subtitle: 'Elegance & Relaxation',
    description:
      'Curated bouclé seating, marble coffee table, brass floor lamp, and olive greenery for bridal consultations and creative pre-production.',
    imageUrl: STUDIO_IMAGES.loungeConsultation,
    tag: 'Client Lounge',
  },
  {
    id: 'bridal-editorial',
    title: 'Bridal & Editorial Portraiture',
    subtitle: 'Directional Lighting Mastery',
    description:
      'Fine art bridal and fashion portraits captured inside PHOTO.HOUZ, showcasing jewelry detail, skin tones, and rich golden fabrics.',
    imageUrl: STUDIO_IMAGES.bridalPortrait,
    tag: 'Portraits',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Bridal Radiance & Gold Trousseau',
    category: 'model',
    categoryLabel: 'Bride-to-Be',
    imageUrl: STUDIO_IMAGES.bridalPortrait,
    aspect: 'portrait',
    caption: 'Fine jewelry sparkle lighting and rich golden silk fabric portraiture.',
  },
  {
    id: 'gal-2',
    title: 'Creators Studio Signature Lounge',
    category: 'studio',
    categoryLabel: 'Studio Setup',
    imageUrl: STUDIO_IMAGES.heroStudio,
    aspect: 'landscape',
    caption: 'Mid-century armchair, lantern softbox, and dark wood slat backdrop.',
  },
  {
    id: 'gal-3',
    title: '35 to 40 Gathering & Workshop Hall',
    category: 'studio',
    categoryLabel: 'Gathering Space',
    imageUrl: STUDIO_IMAGES.gatheringWorkshop,
    aspect: 'landscape',
    caption: 'Conference seating facing motorized HD projector screen and string lights.',
  },
  {
    id: 'gal-4',
    title: 'Creator Podcast & Interview Studio',
    category: 'podcast',
    categoryLabel: 'Podcast & Audio',
    imageUrl: STUDIO_IMAGES.podcastStudio,
    aspect: 'portrait',
    caption: 'Broadcast microphones, bouclé armchairs, and warm illuminated wood slats.',
  },
  {
    id: 'gal-5',
    title: 'Professional Shooting Space with Octabox',
    category: 'model',
    categoryLabel: 'Fashion & Brand',
    imageUrl: STUDIO_IMAGES.btsOctabox,
    aspect: 'landscape',
    caption: 'Photographer setting up large softbox diffuser for seamless beige backdrop.',
  },
  {
    id: 'gal-6',
    title: 'Triple Seamless Creative Backgrounds',
    category: 'studio',
    categoryLabel: 'Backdrops',
    imageUrl: STUDIO_IMAGES.tripleBackdrops,
    aspect: 'landscape',
    caption: 'White, warm beige, and neutral gray seamless rolls ready for production.',
  },
  {
    id: 'gal-7',
    title: 'Wide Cyclorama Production Floor',
    category: 'studio',
    categoryLabel: 'Spacious Setup',
    imageUrl: STUDIO_IMAGES.spaciousFloor,
    aspect: 'landscape',
    caption: 'Generous shooting distance with softboxes and parabolic umbrellas.',
  },
  {
    id: 'gal-8',
    title: 'Client Styling & Consultation Nook',
    category: 'prewedding',
    categoryLabel: 'Creative Lounge',
    imageUrl: STUDIO_IMAGES.loungeConsultation,
    aspect: 'portrait',
    caption: 'Serene bouclé seating, marble table, brass arc lamp, and wainscoting.',
  },
  {
    id: 'gal-9',
    title: 'Sweet Newborn Slumber',
    category: 'baby',
    categoryLabel: 'Baby Shoots',
    imageUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=80',
    aspect: 'square',
    caption: 'Safe, sanitized studio cocoon with soft textured knits and gentle light.',
  },
  {
    id: 'gal-10',
    title: 'Timeless Maternity Grace',
    category: 'maternity',
    categoryLabel: 'Maternity Shoots',
    imageUrl: 'https://images.unsplash.com/photo-1584297091622-af8e5fd64542?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait',
    caption: 'Soft warm glow celebrating new life in serene studio comfort.',
  },
  {
    id: 'gal-11',
    title: 'Refined Groom Portraiture',
    category: 'model',
    categoryLabel: 'Groom-to-Be',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait',
    caption: 'Masculine rim lighting and classic bespoke tailoring focus.',
  },
  {
    id: 'gal-12',
    title: 'Romantic Pre-Wedding Harmony',
    category: 'prewedding',
    categoryLabel: 'Pre-Wedding',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80',
    aspect: 'landscape',
    caption: 'Intimate chemistry staged with subtle warm lighting and wood textures.',
  },
];
