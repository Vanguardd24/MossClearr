
export enum ServiceType {
  PAVING = 'Paving & Restoration',
  SOFTWASH = 'Soft-Wash Cleaning',
  GARDEN = 'Garden Landscaping',
  MAINTENANCE = 'Seasonal Maintenance'
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  service: ServiceType;
  message: string;
  photo: File | null;
}

export interface FAQItem {
  question: string;
  answer: string;
}
