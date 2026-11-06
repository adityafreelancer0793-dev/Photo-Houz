export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'portrait' | 'celebration' | 'commercial' | 'audio';
  imageUrl: string;
  features: string[];
  duration: string;
  deliverables: string;
}

export interface StudioFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'model' | 'maternity' | 'baby' | 'prewedding' | 'podcast' | 'studio';
  categoryLabel: string;
  imageUrl: string;
  aspect: 'portrait' | 'landscape' | 'square';
  caption: string;
}

export interface StudioShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  tag: string;
  features?: string[];
  equipment?: string[];
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  estimatedGuests: string;
  notes: string;
}
