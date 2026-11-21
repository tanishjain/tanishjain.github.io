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
  {
    name: 'China',
    years: [2025],
    notes: [
      {
        title: 'Come into the kitchen',
        paragraphs: [
          "I went into a tiny restaurant with a note in Mandarin. It explained that I was vegetarian and covered things like fish sauce and oyster sauce. The woman running the place looked it over. She didn't have anything for me on the menu, so she waved me into the kitchen.",
          "She started making a stir-fry, holding up each ingredient and bottle of sauce for me to check. I'd look at the label, pull out my translation app if I needed it, and give her a nod. It turned out to be one of the best stir-fries I've had.",
          "When I sat down to eat, the guy at the next table seemed to ask if he could get one too. She pointed at me, then motioned for him to come into the kitchen.",
        ],
      },
    ],
  },
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
  {
    name: 'Spain',
    years: [2014],
    notes: [
      {
        title: 'A grocery run in Córdoba',
        paragraphs: [
          "My mom and I went out in Córdoba to get a few things for a late lunch. We were cooking a lot on that family trip, and I think we were going to make khichdi. That's how we found out about siesta. The restaurants were shut, and so was the big supermarket.",
          "We eventually found a tiny grocery shop run by one man. We only needed rice, bread, and some produce. The labels were all in Spanish, and we spoke none. Some things came in paper bags, so we couldn't even tell what was inside.",
          "More customers came in and started helping. Two women spoke a little English, and before long it felt like the whole shop was working through our list with us. When we found everything, everyone cheered.",
          "Then the owner told us the total in Spanish and we got stuck again. An older woman tapped me on the shoulder, took the exact amount out of her purse, and held it up for me. I counted out the same amount.",
        ],
      },
    ],
  },
  { name: 'Switzerland', years: [2014] },
  { name: 'Taiwan', years: [2025] },
  { name: 'Thailand', years: [2023] },
  { name: 'United Kingdom', years: [2017, 2023, 2025] },
  { name: 'Vatican City', years: [2014] },
];
