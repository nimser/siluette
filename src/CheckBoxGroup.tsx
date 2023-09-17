import { Checkbox, FormControlLabel, FormGroup } from "@mui/material"
import { ChangeEvent, useState } from "react"

interface CheckboxGroupProps {
  items: string[]
}

const CheckBoxGroup = ({ items }: CheckboxGroupProps) => {
  const [checkboxes, setCheckboxes] = useState(
    items.map((label, index) => ({
      id: index + 1,
      label,
      disabled: false,
      checked: false,
    }))
  )

  const handleCheckboxChange = (checkboxId: number) => {
    const updatedCheckboxes = checkboxes.map((checkbox) => {
      if (checkbox.id === checkboxId) {
        return { ...checkbox, checked: !checkbox.checked }
      }
      return checkbox
    })

    const checkedCount = updatedCheckboxes.filter(
      (checkbox) => checkbox.checked
    ).length

    const updatedCheckboxesWithDisabled = updatedCheckboxes.map((checkbox) => ({
      ...checkbox,
      disabled: checkedCount >= 3 && !checkbox.checked,
    }))

    setCheckboxes(updatedCheckboxesWithDisabled)
  }

  return (
    <FormGroup>
      {checkboxes.map((checkbox) => (
        <FormControlLabel
          control={
            <Checkbox
              checked={checkbox.checked}
              onChange={handleCheckboxChange.bind(null, checkbox.id)}
              disabled={checkbox.disabled}
              inputProps={{
                "aria-label": checkbox.label,
              }}
            />
          }
          label={checkbox.label}
        />
      ))}
    </FormGroup>
  )
}

export default CheckBoxGroup
