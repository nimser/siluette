import { Checkbox, FormControlLabel, FormGroup } from "@mui/material"

export interface CheckboxAttributes {
  id: number
  label: string
  disabled: boolean
  checked: boolean
}
interface CheckboxGroupProps {
  checkboxes: CheckboxAttributes[]
  onUpdate?: (id: number) => void
  className?: string
}

const CheckBoxGroup = ({
  checkboxes,
  className,
  onUpdate,
}: CheckboxGroupProps) => {
  return (
    <FormGroup className={className}>
      {checkboxes.map((checkbox, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox
              checked={checkbox.checked}
              onChange={onUpdate?.bind(null, checkbox.id)}
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
