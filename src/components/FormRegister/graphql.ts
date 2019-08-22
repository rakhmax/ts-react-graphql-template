import { gql } from 'apollo-boost';

export const mutations = {
  CREATE_USER: gql`
    mutation ($input: AuthInput) {
      createUser(userInput: $input) {
        username
      }
      authUser(userInput: $input) {
        userId
        token
        tokenExpiration
      }
    }
  `
}