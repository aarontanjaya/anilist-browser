import { gql } from '@/__generated__';
export const GET_ANIME_LIST = gql(`
  query getAnimeList($search: String, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(search: $search, type: ANIME, sort: FAVOURITES_DESC) {
        id
        title {
          romaji
          english
        }
        type
        genres
        coverImage {
          medium
        }
      }
    }
  }
`);
