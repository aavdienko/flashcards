import { baseApi } from './base-api'

const decksApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<any, void>({
      query: () => `v1/decks`,
    }),
  }),
})

export const { useGetDecksQuery } = decksApi
