type OriginProps = {
  name: string;
  url: string;
};

type LocationProps = {
  name: string;
  url: string;
};

type Episodes = Record<number, string>;

export type Character = {
  id: string;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: OriginProps;
  location: LocationProps;
  image: string;
  episodes: Episodes;
  url: string;
  created: string;
};
