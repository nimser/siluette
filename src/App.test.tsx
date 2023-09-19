import { render, screen } from "@testing-library/react"
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
    await user.click(
      screen.getByRole("button", {
        name: /team ​/i,
      })
    )
    const designerOption = screen.getByRole("option", {
      name: /designers/i,
    })
    await user.click(designerOption)
    expect(avatar.className).toMatch(/designers/i)
  })
  it.skip("should preview image when uploading", async () => {
    const file = new File(["hello"], "hello.png", { type: "image/png" })
    const input = screen.getByTestId("upload") as HTMLInputElement
    await userEvent.upload(input, file)
    expect(input.files![0]).toBe(file)
    expect(screen.getByTestId("avatar").getAttribute("src")).toMatch(/hello/)
  })
  it("should set icons for interests when selected", async () => {
    const avatarBadge = screen.getByTestId("avatar-badge")
    const figmaBox = screen.getByLabelText("Figma")
    const reactBox = screen.getByLabelText("React")
    await user.click(figmaBox)
    await user.click(reactBox)
    expect(avatarBadge).toHaveLength(2)
  })
  it.skip("should prevent clicking Done if Some info isn't set", () => {
    //
  })
})
