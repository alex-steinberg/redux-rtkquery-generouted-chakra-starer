/// <reference types="vitest/globals" />
import "@testing-library/jest-dom"

import { server } from "./tests/mocks/server"

beforeAll(() => server.listen({ onUnhandledRequest: "error" }))
beforeEach(() => server.resetHandlers())
afterAll(() => server.close())
