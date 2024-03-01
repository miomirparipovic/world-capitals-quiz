export interface Country {
  altSpellings: string[];
  area: number;
  capital: string[];
  capitalInfo: { latlng: number[] };
  car: { signs: string[]; side: string };
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc?: string; // Added cioc property
  coatOfArms: { png: string; svg: string }; // Updated coatOfArms type
  continents: string[];
  currencies: Record<string, { [key: string]: any }>;
  demonyms: Record<string, { [key: string]: any }>;
  fifa?: string; // Added fifa property
  flag: string;
  flags: { png: string; svg: string; alt: string }; // Updated flags type
  gini: { 2013: number }; // Updated gini type
  idd: { root: string; suffixes: string[] };
  independent: boolean;
  landlocked: boolean;
  languages: Record<string, string>;
  latlng: number[];
  maps: { googleMaps: string; openStreetMaps: string };
  name: {
    common: string;
    official: string;
    nativeName: Record<string, string>;
  };
  population: number;
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: Record<string, Record<string, string>>;
  unMember: boolean;
}
