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

export const GET_ANIME_DETAIL = gql(`
  query getAnime($id: Int){
      Media(id: $id, type: ANIME){
        id
        title{
          romaji
          english
        }
        type
        genres
        bannerImage
        coverImage{
          medium
          large
        }
        characters(sort: ID) {
          edges {
            voiceActors(language: JAPANESE) {
              image {
                medium
              }
              language
              name {
                first
                last
                full
                native
              }
              id
            }
            role
            node {
              image {
                medium
              }
              name {
                first
                last
                full
                native
              }
              id
            }
            id
          }
        }
        season
        status
        description
        episodes
        countryOfOrigin
        popularity
        averageScore
      }
  }
`);
