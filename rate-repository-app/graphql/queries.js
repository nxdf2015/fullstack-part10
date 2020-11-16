import { gql } from 'apollo-boost';


export  const ALL_REPOSITORIES =gql`query {
    repositories{ 
   edges{ 
   node {
     id
     fullName
     description
     language
     forksCount
     stargazersCount
     ratingAverage
     reviewCount
     ownerAvatarUrl
   }}}
   }`;



   export const AUTHORIZED=gql`query authorizedUser { 
    authorizedUser{
      id
      username}
  }`;