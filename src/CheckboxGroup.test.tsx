import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import CheckboxGroup from "./CheckBoxGroup"
describe("CheckboxGroup component", () => {
  it("should set max amount of choices based on props", async () => {
    const user = userEvent.setup()
    render(<CheckboxGroup items={["one", "two", "three", "four", "five"]} />)
    const firstBox = screen.getByLabelText("one")
    console.log(firstBox)
    const secondBox = screen.getByLabelText("two")
    const thirdBox = screen.getByLabelText("three")
    const fourthBox = screen.getByLabelText("four")
    const fifthBox = screen.getByLabelText("five")
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
