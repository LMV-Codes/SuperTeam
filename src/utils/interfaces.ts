export interface HeroData {
  id: string;
  name: string;
  powerstats: {
    combat: string;
    durability: string;
    intelligence: string;
    power: string;
    speed: string;
    strength: string;
  };
  appearance: {
    gender: string;
    race: string;
    "eye-color": string;
    "hair-color": string;
    height: string[];
    weight: string[];
  };
  race: string;
  biography: {
    alignment: string;
    aliases: string[];
    "full-name": string;
    "alter-egos": string;
    "place-of-birth": string;
    publisher: string;
  };
  image: { url: string };
  connections: { "group-affiliations": string; relatives: string };
  work: { occupation: string; base: string };
}
