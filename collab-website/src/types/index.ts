// This file exports TypeScript types and interfaces used throughout the application for type safety.

export interface Influencer {
  name: string;
  category: string;
  followers: string;
  engagement: string;
  image: string;
}

export interface ChartData {
  labels: string[];
  data: number[];
}

export interface MenuItem {
  label: string;
  href: string;
}