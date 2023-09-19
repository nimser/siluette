import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import Form from "./Form"
describe("Form component", () => {
  it("should set max amount of choices based on props", async () => {
    const user = userEvent.setup()
    render(
      <Form formData={{ name: "", avatar: "", favorites: [], team: "" }} />
    )
    const firstBox = screen.getByLabelText("React")
    const secondBox = screen.getByLabelText("Typescript")
    const thirdBox = screen.getByLabelText("Figma")
    const fourthBox = screen.getByLabelText("Github")
    const fifthBox = screen.getByLabelText("Express")
    await user.click(firstBox)
    await user.click(secondBox)
    await user.click(thirdBox)

    // selected boxed aren't disabled
    expect(firstBox).not.toBeDisabled()

    // first three boxes are checked
    expect(firstBox).toBeChecked()
    expect(secondBox).toBeChecked()
    expect(thirdBox).toBeChecked()

    // last two boxes are disabled
    expect(fourthBox).toBeDisabled()
    expect(fifthBox).toBeDisabled()
  })
})
