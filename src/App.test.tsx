import { getByTestId, render, screen } from "@testing-library/react"
import App from "./App"
import userEvent, { UserEvent } from "@testing-library/user-event"

let user: UserEvent

beforeEach(() => {
  user = userEvent.setup()
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
  it("should render the UI", () => {
    expect(screen.getByText(/Customize your avatar/)).toBeInTheDocument()
  })

  it("should preview name when typing", async () => {
    const nameInput = screen.getByLabelText("Name")
    const namePreview = screen.getByTestId("name-preview")
    await user.type(nameInput, "Kiroko")

    expect(nameInput).toHaveValue("Kiroko")
    expect(namePreview).toHaveTextContent("Kiroko")
  })
  it("should load a default avatar", () => {
    expect(screen.getByTestId("avatar")).toHaveAttribute(
      "src",
      "/defaultAvatar.png"
    )
  })
  it("should set team color in preview when selecting team", async () => {
    const avatar = screen.getByTestId("avatar")
    // const select = screen.getByTestId("select-team")
    await user.click(
      screen.getByRole("button", {
        name: /team ​/i,
      })
    )
    const designerOption = screen.getByRole("option", {
      name: /designers/i,
    })
    await user.click(designerOption)
    expect(avatar).toHaveClass("team team-designers")
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
