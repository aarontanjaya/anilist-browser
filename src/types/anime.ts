export interface IAnimeListItem {
  id?: number | null;
  title?: ITitle | null;
  type?: string | null;
  genres?: (string | null)[] | null;
  coverImage?: IResponseImage | null;
}

export interface ITitle {
  romaji?: string | null;
  english?: string | null;
}

export interface IResponseImage {
  medium?: string | null;
  large?: string | null;
}

export interface IAnime {
  id?: number | null;
  title?: ITitle | null;
  type?: string | null;
  genres?: (string | null)[] | null;
  coverImage?: IResponseImage | null;
  season?: Seasons | null;
  status?: MediaStatus | null;
  description?: string | null;
  episodes?: number | null;
  countryOfOrigin?: string | null;
  popularity?: number | null;
  averageScore?: number | null;
}

export interface ICharacter {
  voiceActors?: (IVoiceActor | null)[] | null;
  role?: Role | null;
  id?: number | null;
  node?: ICharacterNode | null;
}

export interface IVoiceActor {
  image?: IResponseImage | null;
  language?: string | null;
  name?: IName | null;
  id?: number | null;
}

export interface ICharacterNode {
  image?: IResponseImage | null;
  name?: IName | null;
  id?: number | null;
}
export interface IName {
  first?: string | null;
  last?: string | null;
  full?: string | null;
  native?: string | null;
}

export type Role = 'MAIN' | 'SUPPORTING' | 'BACKGROUND';
export type Seasons = 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL';
export type MediaStatus =
  | 'FINISHED'
  | 'RELEASING'
  | 'NOT_YET_RELEASED'
  | 'CANCELLED'
  | 'HIATUS';
