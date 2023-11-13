import { http, HttpResponse } from "msw"

export const handlers = [
  http.get("https://swapi.dev/api/films", () => {
    return HttpResponse.json({
      results: [
        {
          episode_id: 1,
          title: "A New Hope",
          opening_crawl: "It is a period of civil war.",
        },
      ],
    })
  }),
]
