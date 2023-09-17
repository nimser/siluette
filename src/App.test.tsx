import { render, screen } from "@testing-library/react"
import App from "./App"
describe("test the App root component", () => {
  it("should render the UI", () => {
    render(<App />)
    expect(screen.getByText(/Customize your avatar/)).toBeInTheDocument()
  })
})
