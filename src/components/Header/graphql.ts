import { gql } from 'apollo-boost';

export const mutations = {
  createUser: gql`
    mutation createUser {
      createUser(userInput: {
        firstname: "lolka"
        lastname: "huelka"
        username: "lolka_huelka"
        email: "lolka@gmail.com"
        password: "lollipop"
      })
    }
  `
}

export const queries = {
  getAuthData: gql`
    query getAuthData {
      getAuthData(username: "rm", password: "lollipop"){
        userId
      }
    }
  `
}