const Roles = {
  Damage: "damage",
  Support: "support",
  Tank: "tank",
} as const;

const Heroes = {
  Ana: {
    id: "ana",
    name: "Ana",
    role: Roles.Support,
    birthday: "01/01",
    age: 62,
    base: "Cairo, Egypt",
    description:
      "One of the founding members of Overwatch, Ana uses her skills and expertise to defend her home and the people she cares for.",
  },
  Ashe: {
    id: "ashe",
    name: "Ashe",
    role: Roles.Damage,
    birthday: "01/10",
    age: 41,
    base: "Deadlock Gorge, Arizona, USA",
    description:
      "Ashe is the ambitious and calculating leader of the Deadlock Rebels Gang and a respected figure in the criminal underworld.",
  },
  Baptiste: {
    id: "baptiste",
    name: "Baptiste",
    role: Roles.Support,
    birthday: "12/03",
    age: 38,
    base: "Tortuga, Haiti (formerly), Watchpoint: Gibraltar",
    description:
      "An elite combat medic and ex-Talon operative, Baptiste now uses his skills to help those whose lives have been impacted by war.",
  },
  Bastion: {
    id: "bastion",
    name: "Bastion",
    role: Roles.Damage,
    birthday: null,
    age: 32,
    base: "Gothenburg, Sweden",
    description:
      "Once a frontline combatant in the devastating Omnic Crisis, this curious Bastion unit now explores the world, fascinated by nature but wary of a fearful humanity.",
  },
  Brigitte: {
    id: "brigitte",
    name: "Brigitte",
    role: Roles.Support,
    birthday: "22/09",
    age: 25,
    base: "Gothenburg, Sweden (formerly), Watchpoint: Gibraltar",
    description:
      "No longer sitting on the sidelines, Brigitte Lindholm has taken up arms to defend those in need of protection.",
  },
  Cassidy: {
    id: "cassidy",
    name: "Cassidy",
    role: Roles.Damage,
    birthday: "31/07",
    age: 39,
    base: "Santa Fe, New Mexico, USA (formerly), Watchpoint: Gibraltar",
    description:
      "Armed with his Peacekeeper revolver, the outlaw Cole Cassidy doles out justice on his own terms.",
  },
  Doomfist: {
    id: "doomfist",
    name: "Doomfist",
    role: Roles.Tank,
    birthday: "25/05",
    age: 47,
    base: "Oyo, Nigeria (formerly), Rome, Italy",
    description:
      "Doomfist is the calculating leader of Talon, a terrorist organization and paramilitary force that works in direct opposition to Overwatch.",
  },
  Dva: {
    id: "dva",
    name: "D.Va",
    role: Roles.Tank,
    birthday: "22/06",
    age: 21,
    base: "MEKA Base, Busan, South Korea (formerly), Watchpoint: Gibraltar",
    description:
      "D.Va is a former professional gamer who now uses her skills to pilot a state-of-the-art mech in defense of her homeland.",
  },
  Echo: {
    id: "echo",
    name: "Echo",
    role: Roles.Damage,
    birthday: "05/02",
    age: 14,
    base: "Switzerland (formerly), United States (formerly), Watchpoint: Gibraltar",
    description:
      "Echo is a multirole, adaptive robot with the most sophisticated artificial intelligence in the world, originally designed by Dr. Mina Liao for use during combat missions with Overwatch.",
  },
  Freja: {
    id: "freja",
    name: "Freja",
    role: Roles.Damage,
    birthday: "06/09",
    age: 34,
    base: "Copenhagen, Denmark (formerly); Unknown",
    description:
      "A search and rescue operative turned bounty hunter, Freja can find anyone for the right price.",
  },
  Genji: {
    id: "genji",
    name: "Genji",
    role: Roles.Damage,
    birthday: "28/10",
    age: 37,
    base: "Hanamura, Japan (formerly), Shambali Monastery, Nepal (formerly), Watchpoint: Gibraltar",
    description:
      "The cyborg ninja Genji Shimada has made peace with the augmented body he once rejected, and in doing so, he has discovered a higher humanity.",
  },
  Hanzo: {
    id: "hanzo",
    name: "Hanzo",
    role: Roles.Damage,
    birthday: "03/11",
    age: 40,
    base: "Hanamura, Japan (formerly)",
    description:
      "Mastering his skills as a bowman and an assassin, Hanzo Shimada strives to prove himself as a warrior without peer.",
  },
  Hazard: {
    id: "hazard",
    name: "Hazard",
    role: Roles.Tank,
    birthday: "11/11",
    age: 24,
    base: "Glasgow, Scotland (Formerly), Unknown",
    description:
      "A radical disruptor and an unstoppable weapon, Hazard has rocketed to fame in the criminal underworld as he fights to tear the system down.",
  },
  Illari: {
    id: "illari",
    name: "Illari",
    role: Roles.Support,
    birthday: "21/12",
    age: 18,
    base: "Runasapi, Peru",
    description:
      "As the last of the Inti Warriors, Illari is a vessel for the power of the sun. She’ll do anything to make up for her past.",
  },
  JunkerQueen: {
    id: "junker-queen",
    name: "JunkerQueen",
    role: Roles.Tank,
    birthday: "14/06",
    age: 31,
    base: "Junkertown, Australia",
    description:
      "Armed with her axe, Carnage, and her electromagnetic gauntlet, the cutthroat leader of the Junkers is on a mission to rule the world.",
  },
  Junkrat: {
    id: "junkrat",
    name: "Junkrat",
    role: Roles.Damage,
    birthday: "29/02",
    age: 27,
    base: "Junkertown, Australia (formerly)",
    description:
      "Junkrat is an explosives-obsessed demolitionist who lives to cause chaos and destruction.",
  },
  Juno: {
    id: "juno",
    name: "Juno",
    role: Roles.Support,
    birthday: "22/03",
    age: 19,
    base: "Red Promise Colony, Mars (formerly), Watchpoint: Gibraltar",
    description:
      "The first human born on Mars, Juno uses her space-age technology to solve any problem that enters her orbit. She is determined to one day save her home planet.",
  },
  Kiriko: {
    id: "kiriko",
    name: "Kiriko",
    role: Roles.Support,
    birthday: "07/07",
    age: 21,
    base: "Kanezaka, Japan",
    description:
      "As Miko of the Kanezaka shrine and daughter of the Shimada's former swordmaster, Kiriko Kamori channels both her spiritual and ninja skills to heal her fractured city.",
  },
  Lifeweaver: {
    id: "lifeweaver",
    name: "Lifeweaver",
    role: Roles.Support,
    birthday: "28/04",
    age: 31,
    base: "Atlantic Arcology",
    description:
      "The brilliant creator of biolight, a technology that merges plant matter and hard light. He dreams of healing the world.",
  },
  Lucio: {
    id: "lucio",
    name: "Lúcio",
    role: Roles.Support,
    birthday: "20/03",
    age: 28,
    base: "Rio de Janeiro, Brazil",
    description:
      "Lúcio is an international celebrity who inspires social change through his music and activism.",
  },
  Mauga: {
    id: "mauga",
    name: "Mauga",
    role: Roles.Tank,
    birthday: "19/08",
    age: 37,
    base: "Apia, Samoa",
    description:
      "A charismatic and cunning Samoan warrior, Mauga thrives in the chaos of the battlefield and lives every day like it’s his last.",
  },
  Mei: {
    id: "mei",
    name: "Mei",
    role: Roles.Damage,
    birthday: "05/09",
    age: 33,
    base: "Xi'an, China (formerly)",
    description:
      "Mei is a scientist who has taken the fight to preserve the environment into her own hands.",
  },
  Mercy: {
    id: "mercy",
    name: "Mercy",
    role: Roles.Support,
    birthday: "13/05",
    age: 39,
    base: "Zürich, Switzerland (formerly), Watchpoint: Gibraltart",
    description:
      "A guardian angel to those who come under her care, Dr. Angela Ziegler is a peerless healer, a brilliant scientist, and a staunch advocate for peace.",
  },
  Moira: {
    id: "moira",
    name: "Moira",
    role: Roles.Support,
    birthday: "04/04",
    age: 50,
    base: "Oasis, Iraq",
    description:
      "Equal parts brilliant and controversial, scientist Moira O'Deorain is on the cutting edge of genetic engineering, searching for a way to rewrite the fundamental building blocks of life.",
  },
  Orisa: {
    id: "orisa",
    name: "Orisa",
    role: Roles.Tank,
    birthday: "09/05",
    age: 1,
    base: "Numbani, Africa",
    description:
      "Built from parts of one of Numbani's short-lived OR15 defense robots, Orisa is the city's newest protector, though she still has much to learn.",
  },
  Pharah: {
    id: "pharah",
    name: "Pharah",
    role: Roles.Damage,
    birthday: "15/04",
    age: 34,
    base: "Giza, Egypt (formerly), Watchpoint: Gibraltar",
    description:
      "Fareeha Amari's commitment to duty runs in her blood. She comes from a long line of highly decorated soldiers and burns with the desire to serve with honor.",
  },
  Ramattra: {
    id: "ramattra",
    name: "Ramattra",
    role: Roles.Tank,
    birthday: "29/03",
    age: 28,
    base: "Shambali Monastery, Nepal (formerly)",
    description:
      "The brutal leader of Null Sector will stop at nothing to see his vision for the world realized.",
  },
  Reaper: {
    id: "reaper",
    name: "Reaper",
    role: Roles.Damage,
    birthday: "14/12",
    age: 60,
    base: "Rome, Italy",
    description:
      "Some speak of a black-robed terrorist known only as the Reaper. His identity and motives are a mystery. What is known is that where he appears, death follows.",
  },
  Reinhardt: {
    id: "reinhardt",
    name: "Reinhardt",
    role: Roles.Tank,
    birthday: "26/06",
    age: 63,
    base: "Stuttgart, Germany (formerly), Watchpoint: Gibraltar",
    description:
      "Reinhardt Wilhelm styles himself as a champion of a bygone age, who lives by the knightly codes of valor, justice, and courage.",
  },
  Roadhog: {
    id: "roadhog",
    name: "Roadhog",
    role: Roles.Tank,
    birthday: "12/09",
    age: 50,
    base: "Junkertown, Australia (formerly)",
    description:
      "Roadhog is a powerful enforcer with a well-earned reputation for random and wanton destruction.",
  },
  Sigma: {
    id: "sigma",
    name: "Sigma",
    role: Roles.Tank,
    birthday: "15/13",
    age: 64,
    base: "The Hague, Netherlands (formerly), International Space Station (formerly)",
    description:
      "Brilliant astrophysicist Dr. Siebren de Kuiper's life changed forever when an experiment gone wrong gave him the ability to control gravity; now, Talon manipulates him to their own ends.",
  },
  Sojourn: {
    id: "sojourn",
    name: "Sojourn",
    role: Roles.Damage,
    birthday: "12/01",
    age: 51,
    base: "Toronto, Canada",
    description:
      "As a leader in the bygone days of Overwatch, Vivian Chase, callsign Sojourn, is determined to ensure its new heroes don’t repeat the mistakes of the past.",
  },
  Soldier76: {
    id: "soldier-76",
    name: "Soldier76",
    role: Roles.Damage,
    birthday: "27/01",
    age: 58,
    base: null,
    description:
      "The target of an international manhunt, the vigilante known as Soldier: 76 wages a personal war to expose the truth behind Overwatch's collapse.",
  },
  Sombra: {
    id: "sombra",
    name: "Sombra",
    role: Roles.Damage,
    birthday: "31/12",
    age: 32,
    base: "Dorado, Mexico",
    description:
      "One of the world's most notorious hackers, Sombra uses information to manipulate those in power.",
  },
  Symmetra: {
    id: "symmetra",
    name: "Symmetra",
    role: Roles.Damage,
    birthday: "02/10",
    age: 30,
    base: "Utopaea, India",
    description:
      "Symmetra literally bends reality. By manipulating hard-light constructs, she crafts the world as she wishes it to be, in hopes of engineering a perfect society.",
  },
  Torbjorn: {
    id: "torbjorn",
    name: "Torbjörn",
    role: Roles.Damage,
    birthday: "21/09",
    age: 59,
    base: "Gothenburg, Sweden",
    description:
      "At its height, Overwatch possessed one of the most advanced armaments on the planet, which could be traced to the workshop of an ingenious engineer named Torbjörn Lindholm.",
  },
  Tracer: {
    id: "tracer",
    name: "Tracer",
    role: Roles.Damage,
    birthday: "17/02",
    age: 28,
    base: "London, England, Watchpoint: Gibraltar",
    description:
      "The former Overwatch agent known as Tracer is a time-jumping adventurer and an irrepressible force for good.",
  },
  Venture: {
    id: "venture",
    name: "Venture",
    role: Roles.Damage,
    birthday: "06/08",
    age: 26,
    base: "Nova Scotia, Canada (Formerly), Roaming",
    description:
      "A globe-trotting archaeologist and explorer, Venture has a passion for solving history’s mysteries.",
  },
  Widowmaker: {
    id: "widowmaker",
    name: "Widowmaker",
    role: Roles.Damage,
    birthday: "19/11",
    age: 35,
    base: "Annecy, France",
    description:
      "Widowmaker is the perfect assassin: a patient, ruthlessly efficient killer who shows neither emotion nor remorse.",
  },
  Winston: {
    id: "winston",
    name: "Winston",
    role: Roles.Tank,
    birthday: "06/06",
    age: 31,
    base: "Horizon Lunar Colony (formerly), Watchpoint: Gibraltar",
    description:
      "A super-intelligent, genetically engineered gorilla, Winston is a brilliant scientist and a champion for humanity’s potential.",
  },
  WreckingBall: {
    id: "wrecking-ball",
    name: "WreckingBall",
    role: Roles.Tank,
    birthday: "15/10",
    age: 16,
    base: "Horizon Lunar Colony (formerly), Junkertown (formerly)",
    description:
      "A resourceful and highly intelligent mechanic and fighter, Wrecking Ball rose from the laboratories of Horizon Lunar Colony to become the Junker Queen’s champion.",
  },
  Zarya: {
    id: "zarya",
    name: "Zarya",
    role: Roles.Tank,
    birthday: "04/12",
    age: 30,
    base: "Krasnoyarsk Front (formerly), Novoanskoye Forward Base, Siberia, Russia (formerly), Watchpoint: Gibraltar",
    description:
      "Aleksandra Zaryanova is one of the world's strongest women, a celebrated athlete who sacrificed personal glory to protect her family, friends, and country in a time of war.",
  },
  Zenyatta: {
    id: "zenyatta",
    name: "Zenyatta",
    role: Roles.Support,
    birthday: "14/07",
    age: 33,
    base: "Shambali Monastery, Nepal (formerly)",
    description:
      "Zenyatta is an omnic monk who wanders the world in search of spiritual enlightenment. It is said that those who cross his path are never the same again.",
  },
} as const;

type HeroesNames = keyof typeof Heroes;

export { Heroes };
export type { HeroesNames };
