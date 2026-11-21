interface TravelNote {
  slug: string;
  title: string;
  year?: number;
  paragraphs: string[];
  link?: { label: string; href: string };
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
        slug: 'come-into-the-kitchen',
        title: 'Come into the kitchen',
        year: 2025,
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
  {
    name: 'Ecuador',
    years: [2024],
    notes: [
      {
        slug: 'quito-empanada',
        title: 'A 50-cent empanada in Quito',
        year: 2024,
        paragraphs: [
          "We had one full day in Quito on our way to the Galápagos. We'd flown in the night before and were leaving early the next morning. Ecuador was under a state of emergency, and Quito was so quiet that I was a little on edge. I mostly kept my phone in my pocket and went by what we saw as we walked.",
          "On the walk from the Basílica del Voto Nacional toward Plaza Grande, we came across a tiny shop with a woman selling empanadas. I asked for a cheese one. It was bigger than my palm, cost 50 cents, and is still the best empanada I've had.",
          "I don't remember a name for the shop. I think it was on the right as we walked toward the plaza. If I ever go back to Quito, I'm taking that walk again.",
        ],
      },
      {
        slug: 'dinner-at-ayora',
        title: 'Dinner at Ayora',
        year: 2024,
        paragraphs: [
          "A few friends and I were walking through Puerto Ayora when we stopped outside Ayora Resto Wine, a new tapas spot on Santa Cruz. We were trying to look up reviews when the chef came out to say hello. He told us they were still waiting for the restaurant to show up on Google Maps.",
          "The chef was Andrés Arrata, who won the third season of MasterChef Ecuador. We got talking about India. He'd spent part of the pandemic in Haridwar, and my friends and I are from India, so we had plenty to talk about before we sat down.",
          "It turned out to be one of the best meals of the trip. The mushroom dish was my favorite. I wish I'd written down what it was called. If you're on Santa Cruz, I'd go.",
        ],
        link: { label: 'Ayora Resto Wine menu and location', href: 'https://linktr.ee/ayora.restowine' },
      },
      {
        slug: 'ales-place-puerto-ayora',
        title: "Ale's place in Puerto Ayora",
        year: 2024,
        paragraphs: [
          "We stayed at Ale's place on Santa Cruz, a quiet little apartment in Puerto Ayora. I remember the dusty streets and being greeted by her two dogs, Muney and Hope.",
          "On our first day, Ale asked if we wanted a rundown of what to do in town. She got out a sheet of paper, drew us a map, and talked us through her recommendations as she went. It was one of the best introductions I've had to a new place.",
          "If I go back to Puerto Ayora, I'd stay with Ale again.",
        ],
      },
    ],
  },
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
        slug: 'cordoba-grocery-run',
        title: 'A grocery run in Córdoba',
        year: 2014,
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
