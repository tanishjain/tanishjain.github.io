interface TravelNote {
  slug: string;
  title: string;
  year?: number;
  paragraphs: string[];
  links?: { label: string; href: string }[];
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
  {
    name: 'Canada',
    years: [2017, 2022, 2025],
    notes: [
      {
        slug: 'a-walk-outside-the-cn-tower',
        title: 'A walk outside the CN Tower',
        year: 2025,
        paragraphs: [
          "A friend was headed to Toronto for a conference and had a nice hotel room already taken care of, so I tagged along. We had a couple of things planned and figured out the rest as we went. One day we looked up the CN Tower's EdgeWalk. The next day we booked it and went.",
          "The guides were great. They got us into our harnesses and took us out onto the ledge that goes around the outside of the tower. Once you're out there, you can see Toronto in every direction. It's probably the best view of the city I've had, and I'd recommend it in a heartbeat.",
          "I've since mapped out other tower walks around the world. I want to see how many I can get to.",
        ],
        links: [{ label: 'EdgeWalk at the CN Tower', href: 'https://www.cntower.ca/brave-the-edgewalk' }],
      },
    ],
  },
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
          "When I sat down to eat, the guy at the next table seemed to ask if he could get one too. She pointed at me and motioned for me to come back into the kitchen, as if she'd need my help making the next one.",
        ],
      },
      {
        slug: 'until-sunrise-in-shanghai',
        title: 'Until sunrise in Shanghai',
        year: 2025,
        paragraphs: [
          "A friend and I started the evening at Fu He Hui, a Buddhist-inspired vegetarian restaurant with two Michelin stars when we went. I loved how much they got out of such simple ingredients. The flavors were subtle, and there was a lot going on in each dish. My friend eats meat and loved it too. We had the whole tasting menu and left comfortably full, still up for a night out.",
          "We met a friend who lives in Shanghai for drinks at FLAIR, the rooftop bar at the Ritz-Carlton in Pudong. I'd go back for the drinks and the view of the Bund. Afterward we crossed the river, picked up some local drinks and snacks, and stayed out talking until the sun came up over the Shanghai skyline.",
          "Our friend had been debating whether to fly to Taiwan for a wedding. By morning the flight prices had dropped, and we were just tipsy enough to be very sure she should go. We asked what she was going to wear. She'd had a dress in her purse the whole time.",
          "She went straight to the airport. My friend and I went back to the hotel to get some sleep. I still don't know how she kept going.",
        ],
        links: [
          { label: 'Fu He Hui', href: 'https://guide.michelin.com/en/shanghai-municipality/shanghai/restaurant/fu-he-hui' },
          { label: 'FLAIR Rooftop Restaurant & Bar', href: 'https://www.flairrooftopbarshanghai.com/' },
        ],
      },
    ],
  },
  { name: 'Costa Rica', years: [2026] },
  {
    name: 'Czechia',
    years: [2014],
    notes: [
      {
        slug: 'prague-at-segway-speed',
        title: 'Prague at Segway speed',
        year: 2014,
        paragraphs: [
          "We had a short stay in Prague and wanted to see as much as we could. A guy in one of the squares offered us a Segway tour. We hadn't really ridden Segways before, and he made it sound like exactly what we needed. Before long, we'd followed him into his shop.",
          "The tour was quick, all right. We'd pull up somewhere, get a sentence or two, and be rolling toward the next stop before anyone could ask a question. We covered a fair bit of Prague. I couldn't tell you much about it.",
          "Back at the shop, we found out the guide was dating the guy who'd sold us the tour. We tried to tell him it had felt rushed. He took it personally, things got heated, and we figured we'd seen enough.",
          "These days, I check the reviews before I say yes to the pitch.",
        ],
      },
    ],
  },
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
          "On the walk from the Basílica del Voto Nacional toward Plaza Grande, we came across a tiny shop with a woman selling empanadas. I asked for two, one with vegetables and one with cheese. They were bigger than my palm and cost 50 cents each. They're still the best empanadas I've had.",
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
        links: [{ label: 'Ayora Resto Wine menu and location', href: 'https://linktr.ee/ayora.restowine' }],
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
        links: [{ label: "Ale's Airbnb & Design listing", href: 'https://www.airbnb.com/rooms/1017409916808506956' }],
      },
    ],
  },
  {
    name: 'France',
    years: [2014, 2019],
    notes: [
      {
        slug: 'three-rounds-of-caprese',
        title: 'Three rounds of caprese in Paris',
        year: 2019,
        paragraphs: [
          "My teammate and I were in Paris to pick up second prize at the USAIRE Student Awards. The awards were part of USAIRE's Thanksgiving dinner, held under the patronage of Florence Parly, France's armed forces minister at the time. It was a proper sit-down dinner with a room full of aerospace and defense executives. It felt like a pretty big deal.",
          "The dessert was excellent. My teammate and I are both vegetarian, and our main was the same plate everyone else got with the meat taken off. That left us with gravy and vegetables. By the time we got back to the hotel, we were jet-lagged and still starving.",
          "It was late and hardly anything was open on Uber Eats. We found a bakery that had caprese sandwiches and ordered one each. Maybe it was the hunger. At the time it felt like the best caprese sandwich I'd ever had.",
          "We were still hungry, so we placed the exact same order again. A little later, we did it a third time. Same bakery, same two sandwiches, three separate deliveries in one night.",
        ],
        links: [{ label: '2019 USAIRE Student Awards results', href: 'https://usairestudentawards.org/usaire-student-awards-2019/' }],
      },
    ],
  },
  { name: 'Germany', years: [2014] },
  {
    name: 'Guatemala',
    years: [2026],
    notes: [
      {
        slug: 'dinner-at-sublime',
        title: 'Dinner at Sublime in Guatemala City',
        year: 2026,
        paragraphs: [
          "A friend I was traveling with found Sublime in Guatemala City. He's serious about food, and I'm glad I went with his pick. The 12-course tasting menu draws on different parts of Guatemala. Each dish comes with a bit of history about the place that inspired it.",
          "If you're vegetarian, I'd call ahead and ask for a vegetarian tasting menu. This is where I'd go for a dinner worth splurging on.",
        ],
        links: [{ label: 'Sublime menu and reservations', href: 'https://www.relaischateaux.com/us/restaurant/sublime-restaurant/' }],
      },
      {
        slug: 'fuego-above-the-clouds',
        title: 'Fuego above the clouds',
        year: 2026,
        paragraphs: [
          "We could already see Fuego erupting from base camp on Acatenango. Our group kept going toward Fuego, and it felt like every two steps up the loose volcanic sand sent me sliding one step back. At that elevation, I felt every step. As we got closer, I could feel the ground rumble when Fuego erupted.",
          "By the time we reached our viewpoint, it was nearly dusk. Fuego was erupting right in front of us, the sky had turned orange, and the clouds were below us. Acatenango rose behind us, and off to one side, Agua was peeking through the clouds. I took photos and still wish they could convey what it felt like to stand there. It's one of the most mesmerizing things I've ever seen.",
          "I'd make the trip to Acatenango just to watch Fuego. We did the extra hike when we went. Turns out Guatemala's disaster agency has restricted the climb up Fuego, so check the latest access rules and volcanic activity before you go.",
        ],
        links: [
          { label: 'Fuego access restrictions', href: 'https://agn.gt/ascenso-al-volcan-de-fuego-permanece-restringido' },
          { label: 'Latest volcanic activity from INSIVUMEH', href: 'https://insivumeh.gob.gt/vulca-boletin-diario/' },
        ],
      },
    ],
  },
  {
    name: 'Hong Kong',
    years: [2006, 2016, 2019, 2025, 2026],
    notes: [
      {
        slug: 'hong-kong-without-a-plan',
        title: 'Hong Kong without a plan',
        year: 2025,
        paragraphs: [
          "I landed in Hong Kong early one morning in late November and had a flight out that night. My friend who lives there wasn't around, so I had the day to myself. The one thing I wanted to do was catch the sunrise from the Peak.",
          "I took the train into town and a cab the rest of the way. I'd been to the Peak before. This was the first time I'd been up there so early, watching the city go from dark to light. It was so quiet I felt like I had the view to myself. That put me in a good mood for the rest of the day.",
          "I took the tram down and wandered through Admiralty and Central, stopping whenever something looked good. At some point I crossed over to Tsim Sha Tsui and did the same thing in Kowloon. It was just me, whatever street I ended up on, and whatever I felt like eating.",
          "By evening it was time to head back to the airport. I can't remember the names of the places I ate that day. It might be the best day of eating I've ever had in Hong Kong.",
        ],
      },
    ],
  },
  { name: 'Italy', years: [2014] },
  { name: 'Jordan', years: [2024] },
  {
    name: 'Kenya',
    years: [2026],
    notes: [
      {
        slug: 'indian-food-at-shayona',
        title: 'Indian food at Shayona in Nairobi',
        year: 2026,
        paragraphs: [
          "If you're in Nairobi and craving Indian food, I'd go to Shayona in Parklands. It's a vegetarian restaurant with a big menu, and everything we tried was excellent.",
        ],
        links: [{ label: 'Shayona Vegetarian Restaurant', href: 'https://www.facebook.com/people/Baps-Shayona-Restaurant-Nairobi/100076665077216/' }],
      },
      {
        slug: 'the-cliff-at-lake-nakuru',
        title: 'The Cliff at Lake Nakuru',
        year: 2026,
        paragraphs: [
          "It was a long, dusty drive from the Maasai Mara to Lake Nakuru, and we were exhausted when we arrived at The Cliff. The staff made us feel at home right away. The rooms face the lake, and watching the sunrise from there was lovely.",
          "The chef was happy to cook whatever we were in the mood for. They even surprised us with dishes they'd made based on what they thought we'd like.",
          "We felt like staying in, so we asked if we could roast some corn on the cob over the bonfire. The staff did it for us, with lemon and Indian masalas. If you're visiting Lake Nakuru, I'd stay at The Cliff. I'd happily spend another evening by that fire.",
        ],
        links: [{ label: 'The Cliff at Lake Nakuru', href: 'https://www.wilder-group.com/the-cliff' }],
      },
      {
        slug: 'rooting-for-the-wildebeest',
        title: 'Rooting for the wildebeest',
        year: 2026,
        paragraphs: [
          "We were hoping to see a hunt in the Maasai Mara. Early on our second morning, we saw a huge herd of wildebeest on the move. It was migration season, so there were plenty of them around. Then the herd started to break up, and we spotted two hyenas.",
          "One of the hyenas started circling. Through our binoculars, we watched them single out a young wildebeest and take off after it. I'd been so excited to see a hunt, and now I was rooting for the wildebeest. They ran so far that we lost sight of them.",
          "When we saw them again, they were much closer. The young wildebeest tore past our vehicle, making a racket, with the hyena well behind. The wildebeest had got away. That was pretty much my ideal outcome. The hyena, I imagine, would have preferred breakfast.",
        ],
      },
    ],
  },
  {
    name: 'Macau',
    years: [2025],
    notes: [
      {
        slug: 'a-late-lunch-in-macau',
        title: 'A late lunch in Macau',
        year: 2025,
        paragraphs: [
          "A friend and I were looking for a late lunch in Macau. We're both vegetarian, and most of the places we'd looked up had already closed for the afternoon. We found a place called Sum Yuen on Google Maps. The pin brought us to Pou Tai Sin Un, a Buddhist monastery in Taipa. The street was so quiet that when we walked in, I wondered if we'd got the wrong idea entirely.",
          "Then we spotted a sign for food and followed it to a dining room. They were about to close and still let us in. It turned out to be an all-you-can-eat vegetarian buffet, and we made the most of it. We had noodles, sautéed vegetables, salad, and pretty much everything else we could fit on our plates.",
          "It was one of the cheapest meals I've had on a trip, and we left very full. I'd go back for another lunch at the temple. I'd just aim to get there a bit earlier.",
        ],
        links: [{ label: 'Pou Tai Sin Un visitor information', href: 'https://www.macaotourism.gov.mo/en/sightseeing/temples/pou-tai-sin-un' }],
      },
    ],
  },
  {
    name: 'Malaysia',
    years: [2019],
    notes: [
      {
        slug: 'getting-to-our-room-in-langkawi',
        title: 'Getting to our room in Langkawi',
        year: 2019,
        paragraphs: [
          "On a family trip to Langkawi, we stayed at a resort with little chalets on stilts in the rainforest. One evening, just after sunset, we decided to walk back from the restaurant. A golf cart driver would've known how to shoo away any animals in the way. On foot, we had to figure that part out ourselves. My parents' chalet was the first one we came to.",
          "My mom had just started up the stairs when she yelped. A big monitor lizard was standing there. The two chalets next to hers had been dark a second earlier. Both sets of lights came on.",
          "My brother and I walked a little farther in to our chalet. I shone my flashlight at the door and spotted a big gecko right next to it. My brother hadn't seen it, so I asked him to open the door. I was inside the second he did.",
          "Going in and out of our room felt like a little adventure of its own. We never quite knew what would be waiting outside.",
        ],
      },
    ],
  },
  {
    name: 'Mexico',
    years: [2025],
    notes: [
      {
        slug: 'tostielotes-in-guadalajara',
        title: 'Tostielotes in Guadalajara',
        year: 2025,
        paragraphs: [
          "There was live music in Guadalajara's main square and a bunch of food stalls. One of them had Tostielotes, a snack a friend had told me to look for. They start with a bag of Tostitos and add corn, sour cream and spices. As soon as I saw it, I knew we had to get one.",
          "I caught the price in Spanish and repeated it to my friend. He converted it to dollars and paid. We'd already walked away when he said, 'Wait, isn't that a lot?' I think it came to five or six dollars for a little bag. We'd just arrived in Mexico, and I was pretty sure we'd paid the tourist price.",
          "It was delicious. I'd watched how they put it together, and I've been making it at home ever since. I think I got my money's worth.",
        ],
      },
    ],
  },
  { name: 'Monaco', years: [2014] },
  { name: 'Netherlands', years: [2014] },
  { name: 'Peru', years: [2024] },
  { name: 'Serbia', years: [2023] },
  {
    name: 'Singapore',
    years: [2015, 2019],
    notes: [
      {
        slug: 'singapore-late-night-print-run',
        title: 'A late-night print run',
        year: 2015,
        paragraphs: [
          "My team had qualified in the UAE for the F1 in Schools World Finals in Singapore. We'd printed our booth posters in Dubai on the day we flew out. That night on Sentosa, jet-lagged and getting ready for the next morning, we finally unrolled them. The colors had come out so pale they barely looked like our team colors.",
          "It was around 11 p.m. Most print shops were closed, and the few places we could find that were still open could only do A4. We needed full-size posters. We finally found a listing for someone who could print them. It had no reviews. We headed to the mainland anyway.",
          "The address turned out to be a restaurant. We asked the owner about poster printing, and he told us we were in the right place. We gave him the file. I wondered if we were getting scammed. At that point we'd run out of options, so we paid him anyway.",
          "He came through. We had our posters in time for the booth. So if you ever need something printed late at night in Singapore and the address leads you to a restaurant, maybe you're in the right place.",
        ],
      },
    ],
  },
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
  {
    name: 'Switzerland',
    years: [2014],
    notes: [
      {
        slug: 'vada-pav-at-titlis',
        title: 'Vada pav at the foot of Titlis',
        year: 2014,
        paragraphs: [
          "We were partway through a family trip across Europe when we went up Mount Titlis. The air was crisp, and by then we were craving Indian food. When we came back down and saw a stall selling vada pav, it felt like perfect timing.",
          "There was a long line, and I remember the price being steep for a vada pav. We got one anyway. The filling tasted like a potato patty. It was one of the worst vada pavs I've had. I'd skip that stall if I went back.",
          "My mom and I came up with a business plan on the spot. We'd open our own stall, put a proper vada in the pav, and charge a vada pav price. We're still in the planning phase.",
        ],
      },
      {
        slug: 'a-detour-to-rhine-falls',
        title: 'A detour to Rhine Falls',
        year: 2014,
        paragraphs: [
          "We were at the station in Bern, planning to head toward Jungfrau. The weather looked bad, so we switched plans and decided to go toward the Matterhorn instead. Then that train was delayed. At first it was ten or fifteen minutes. Eventually it was over an hour. After everything we'd heard about Swiss trains, that was a surprise.",
          "A friend had posted photos of Rhine Falls on Facebook about a month earlier. I remembered them while we were standing there, so we took a train toward Zurich and went to see the falls. We also took a boat ride on Lake Zurich, which our Eurail passes covered on that trip.",
          "It took bad summer weather and a Swiss train running more than an hour late to give us one of my favorite days in Switzerland.",
        ],
        links: [
          { label: 'Visiting Rhine Falls', href: 'https://rheinfall.ch/en/' },
          { label: 'Lake Zurich boat trips', href: 'https://www.zsg.ch/en/' },
        ],
      },
    ],
  },
  { name: 'Taiwan', years: [2025] },
  {
    name: 'Thailand',
    years: [2006, 2023],
    notes: [
      {
        slug: 'bangkok-tuk-tuk',
        title: 'A tuk-tuk out of the market',
        year: 2023,
        paragraphs: [
          "I was in Bangkok with a few friends to teach a two-week AI program at a school. We'd go out and explore after teaching. One evening we were at a busy market trying to get back to the hotel. Nobody was accepting our ride on the apps, so we went looking for a tuk-tuk.",
          "The first driver quoted us a fare my friends were ready to pay. I thought it was way too high. I'd done enough bargaining in India and on other trips to give it a try, so I offered less than half. He said no, and I moved on. My friends looked at me like I'd just turned down the last ride out of the market. Given the traffic and how few tuk-tuks we'd seen, they had a point.",
          "At the next tuk-tuk, I started even lower. We went back and forth and landed at about the same price I'd offered the first driver. This time the driver said yes. We tipped him a little extra for taking the whole group and finally got out of the market.",
        ],
      },
    ],
  },
  {
    name: 'United Kingdom',
    years: [2017, 2023, 2025],
    notes: [
      {
        slug: 'momos-in-oxford',
        title: 'Momos in Oxford',
        year: 2025,
        paragraphs: [
          "I loved Oxford on my first visit. The old buildings, cobblestone streets and little shops give the city so much character. I was less prepared for the food prices, which felt a lot like London's.",
          "Some of the best food I had in Oxford was at Gloucester Green Market. If you go, get the momos from Momo King.",
          "Taste Tibet in East Oxford is another spot for momos. If you get a chance to talk to Yeshi and Julie, ask them how they met and started the restaurant. It's a lovely story.",
        ],
        links: [
          { label: 'Momo King at Gloucester Green Market', href: 'https://oxfordoutdoormarket.co.uk/meet-the-traders' },
          { label: 'Taste Tibet', href: 'https://tastetibet.com/' },
        ],
      },
    ],
  },
  { name: 'Vatican City', years: [2014] },
];
