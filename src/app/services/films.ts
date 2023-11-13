import { api } from "./api"
import { FilmModel } from "../models/films.interface"

const oneHour = 60 * 60

interface FilmsResponse {
  count: number
  next: string | null
  previous: string | null
  results: Array<FilmModel>
}

export const filmsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getFilms: build.query<FilmsResponse, void>({
      query: () => "films",
      providesTags: ["Films"],
      transformResponse: (response: FilmsResponse) => {
        // Transform each film to include an id derived from the url
        return {
          ...response,
          results: response.results.map((film) => ({
            ...film,
            id: Number((film.url || "").split("/").filter(Boolean).pop()),
          })),
        }
      },
      keepUnusedDataFor: oneHour,
    }),
    getFilm: build.query<FilmModel, void>({
      query: (id) => `films/${id}`,
      providesTags: ["Film"],
      keepUnusedDataFor: oneHour,
    }),
  }),
})

export const { useGetFilmsQuery, useGetFilmQuery } = filmsApi
