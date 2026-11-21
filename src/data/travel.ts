interface TravelNote {
  title: string;
  paragraphs: string[];
}

interface Place {
  name: string;
  cities?: string;
  years?: number[];
  notes?: TravelNote[];
}

export const placesLived: Place[] = [
  { name: 'India', cities: 'Mumbai' },
  { name: 'Oman', cities: 'Muscat' },
  { name: 'Qatar', cities: 'Doha' },
  { name: 'Bahrain' },
  { name: 'United Arab Emirates', cities: 'Dubai' },
  { name: 'United States', cities: 'San Diego and the Bay Area' },
];

export const placesVisited: Place[] = [
  { name: 'Austria', years: [2014] },
  { name: 'Belgium', years: [2014] },
  { name: 'Canada', years: [2017, 2022, 2025] },
  { name: 'China', years: [2025] },
  { name: 'Costa Rica', years: [2026] },
  { name: 'Czechia', years: [2014] },
  { name: 'Ecuador', years: [2024] },
  { name: 'France', years: [2014, 2019] },
  { name: 'Germany', years: [2014] },
  { name: 'Guatemala', years: [2026] },
  { name: 'Hong Kong', years: [2006, 2016, 2019, 2025, 2026] },
  { name: 'Italy', years: [2014] },
  { name: 'Jordan', years: [2024] },
  { name: 'Kenya', years: [2026] },
  { name: 'Macau', years: [2025] },
  { name: 'Malaysia', years: [2019] },
  { name: 'Mexico', years: [2025] },
  { name: 'Monaco', years: [2014] },
  { name: 'Netherlands', years: [2014] },
  { name: 'Peru', years: [2024] },
  { name: 'Serbia', years: [2023] },
  { name: 'Singapore', years: [2015, 2019] },
  { name: 'Spain', years: [2014] },
  { name: 'Switzerland', years: [2014] },
  { name: 'Taiwan', years: [2025] },
  { name: 'Thailand', years: [2023] },
  { name: 'United Kingdom', years: [2017, 2023, 2025] },
  { name: 'Vatican City', years: [2014] },
];
