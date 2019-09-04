import { gql } from 'apollo-boost'

export const mutations = {
  LOGIN_USER: gql`
    mutation ($input: AuthInput) {
      authUser(userInput: $input) {
        userId
        token
        tokenExpiration
      }
    }
  `,
}
