import { Heroes } from "./heroes";
import { MiscelaneousFacts } from "./heroes/misc";
import { AnaFacts } from "./heroes/Ana";
import { AsheFacts } from "./heroes/Ashe";
import { BaptisteFacts } from "./heroes/Baptiste";
import { BastionFacts } from "./heroes/Bastion";
import { BrigitteFacts } from "./heroes/Brigitte";
import { CassidyFacts } from "./heroes/Cassidy";
import { DoomfistFacts } from "./heroes/Doomfist";
import { DvaFacts } from "./heroes/Dva";
import { EchoFacts } from "./heroes/Echo";
import { FrejaFacts } from "./heroes/Freja";
import { GenjiFacts } from "./heroes/Genji";
import { HanzoFacts } from "./heroes/Hanzo";
import { HazardFacts } from "./heroes/Hazard";
import { IllariFacts } from "./heroes/Illari";
import { JunkerQueenFacts } from "./heroes/JunkerQueen";
import { JunkratFacts } from "./heroes/Junkrat";
import { JunoFacts } from "./heroes/Juno";
import { KirikoFacts } from "./heroes/Kiriko";
import { LifeweaverFacts } from "./heroes/Lifeweaver";
import { LucioFacts } from "./heroes/Lucio";
import { MaugaFacts } from "./heroes/Mauga";
import { MeiFacts } from "./heroes/Mei";
import { MercyFacts } from "./heroes/Mercy";
import { MoiraFacts } from "./heroes/Moira";
import { OrisaFacts } from "./heroes/Orisa";
import { PharahFacts } from "./heroes/Pharah";
import { RamattraFacts } from "./heroes/Ramattra";
import { ReaperFacts } from "./heroes/Reaper";
import { ReinhardtFacts } from "./heroes/Reinhardt";
import { RoadhogFacts } from "./heroes/Roadhog";
import { SigmaFacts } from "./heroes/Sigma";
import { SojournFacts } from "./heroes/Sojourn";
import { Soldier76Facts } from "./heroes/Soldier76";
import { SombraFacts } from "./heroes/Sombra";
import { SymmetraFacts } from "./heroes/Symmetra";
import { TorbjornFacts } from "./heroes/Torbjorn";
import { TracerFacts } from "./heroes/Tracer";
import { VentureFacts } from "./heroes/Venture";
import { WidowmakerFacts } from "./heroes/Widowmaker";
import { WinstonFacts } from "./heroes/Winston";
import { WreckingBallFacts } from "./heroes/WreckingBall";
import { ZaryaFacts } from "./heroes/Zarya";
import { ZenyattaFacts } from "./heroes/Zenyatta";

import type { HeroesNames } from "./heroes";

type Fact = {
  hero?: HeroesNames;
  description: string;
};

const allFacts: Fact[] = [
  ...MiscelaneousFacts,
  ...AnaFacts,
  ...AsheFacts,
  ...BaptisteFacts,
  ...BastionFacts,
  ...BrigitteFacts,
  ...CassidyFacts,
  ...DoomfistFacts,
  ...DvaFacts,
  ...EchoFacts,
  ...FrejaFacts,
  ...GenjiFacts,
  ...HanzoFacts,
  ...HazardFacts,
  ...IllariFacts,
  ...JunkerQueenFacts,
  ...JunkratFacts,
  ...JunoFacts,
  ...KirikoFacts,
  ...LifeweaverFacts,
  ...LucioFacts,
  ...MaugaFacts,
  ...MeiFacts,
  ...MercyFacts,
  ...MoiraFacts,
  ...OrisaFacts,
  ...PharahFacts,
  ...RamattraFacts,
  ...ReaperFacts,
  ...ReinhardtFacts,
  ...RoadhogFacts,
  ...SigmaFacts,
  ...SojournFacts,
  ...Soldier76Facts,
  ...SombraFacts,
  ...SymmetraFacts,
  ...TorbjornFacts,
  ...TracerFacts,
  ...VentureFacts,
  ...WidowmakerFacts,
  ...WinstonFacts,
  ...WreckingBallFacts,
  ...ZaryaFacts,
  ...ZenyattaFacts,
] as const;

const Facts: Record<HeroesNames | "miscelaneous" | "all", Fact[]> = {
  all: allFacts,
  miscelaneous: MiscelaneousFacts,
  [Heroes.Ana.id]: AnaFacts,
  [Heroes.Ashe.id]: AsheFacts,
  [Heroes.Baptiste.id]: BaptisteFacts,
  [Heroes.Bastion.id]: BastionFacts,
  [Heroes.Brigitte.id]: BrigitteFacts,
  [Heroes.Cassidy.id]: CassidyFacts,
  [Heroes.Doomfist.id]: DoomfistFacts,
  [Heroes.Dva.id]: DvaFacts,
  [Heroes.Echo.id]: EchoFacts,
  [Heroes.Freja.id]: FrejaFacts,
  [Heroes.Genji.id]: GenjiFacts,
  [Heroes.Hanzo.id]: HanzoFacts,
  [Heroes.Hazard.id]: HazardFacts,
  [Heroes.Illari.id]: IllariFacts,
  [Heroes.JunkerQueen.id]: JunkerQueenFacts,
  [Heroes.Junkrat.id]: JunkratFacts,
  [Heroes.Juno.id]: JunoFacts,
  [Heroes.Kiriko.id]: KirikoFacts,
  [Heroes.Lifeweaver.id]: LifeweaverFacts,
  [Heroes.Lucio.id]: LucioFacts,
  [Heroes.Mauga.id]: MaugaFacts,
  [Heroes.Mei.id]: MeiFacts,
  [Heroes.Mercy.id]: MercyFacts,
  [Heroes.Moira.id]: MoiraFacts,
  [Heroes.Orisa.id]: OrisaFacts,
  [Heroes.Pharah.id]: PharahFacts,
  [Heroes.Ramattra.id]: RamattraFacts,
  [Heroes.Reaper.id]: ReaperFacts,
  [Heroes.Reinhardt.id]: ReinhardtFacts,
  [Heroes.Roadhog.id]: RoadhogFacts,
  [Heroes.Sigma.id]: SigmaFacts,
  [Heroes.Sojourn.id]: SojournFacts,
  [Heroes.Soldier76.id]: Soldier76Facts,
  [Heroes.Sombra.id]: SombraFacts,
  [Heroes.Symmetra.id]: SymmetraFacts,
  [Heroes.Torbjorn.id]: TorbjornFacts,
  [Heroes.Tracer.id]: TracerFacts,
  [Heroes.Venture.id]: VentureFacts,
  [Heroes.Widowmaker.id]: WidowmakerFacts,
  [Heroes.Winston.id]: WinstonFacts,
  [Heroes.WreckingBall.id]: WreckingBallFacts,
  [Heroes.Zarya.id]: ZaryaFacts,
  [Heroes.Zenyatta.id]: ZenyattaFacts,
} as const;

export { Facts };
export type { Fact };
