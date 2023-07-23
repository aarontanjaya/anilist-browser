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
}
