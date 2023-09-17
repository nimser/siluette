import { render, screen } from "@testing-library/react"
import App from "./App"

beforeEach(() => {
  render(<App />)
})
describe("happy path", () => {
  it.skip("should fill-up form and show customized avatar ", () => {
    // type name
    // pick team
    // upload avatar
    // pick three favorite techs
    // click Done
    // form should be hidden
  })
})

describe("App component", () => {
  it.skip("should render the UI", () => {
    expect(screen.getByText(/Customize your avatar/)).toBeInTheDocument()
  })

  it.skip("should preview name when typing", () => {
    //
  })
  it.skip("should set team color in preview when selecting team", () => {
    //
  })
  it.skip("should preview image when uploading", () => {
    //
  })
  it.skip("should set icons for interrests when selected", () => {
    //
  })
  it.skip("should prevent clicking Done if Some info isn't set", () => {
    //
  })
})
