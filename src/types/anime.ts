export interface IAnimeListItem {
  id?: number | null;
  title?: ITitle | null;
  type?: string | null;
  genres?: (string | null)[] | null;
  coverImage?: ICoverImage | null;
}

export interface ITitle {
  romaji?: string | null;
  english?: string | null;
}

export interface ICoverImage {
  medium?: string | null;
  large?: string | null;
}

export interface IAnime {
  id?: number | null;
  title?: ITitle | null;
  type?: string | null;
  genres?: (string | null)[] | null;
  coverImage?: ICoverImage | null;
  season?: Seasons | null;
  status?: MediaStatus | null;
  description?: string | null;
  episodes?: number | null;
  countryOfOrigin?: string | null;
}

export type Seasons = 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL';
export type MediaStatus =
  | 'FINISHED'
  | 'RELEASING'
  | 'NOT_YET_RELEASED'
  | 'CANCELLED'
  | 'HIATUS';
