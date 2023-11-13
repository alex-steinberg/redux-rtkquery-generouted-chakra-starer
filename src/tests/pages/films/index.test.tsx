import React from "react"
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { expect } from "vitest"
import { store } from "../../../app/store"
import StarWarsFilms from "../../../pages/films"

beforeEach(() => {
  // mock useNavigate
  vi.mock("../../../router.ts", async () => {
    return {
      useNavigate: vi.fn(),
    }
  })
})

test("films route works", async () => {
  render(
    <Provider store={store}>
      <StarWarsFilms />
    </Provider>,
  )
  const header = await screen.findByText(/Films/i)
  expect(header).toBeInTheDocument()
})
