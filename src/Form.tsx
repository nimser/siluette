import styles from "./Form.module.css"
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"
import { Character } from "./App"
import CheckBoxGroup, { CheckboxAttributes } from "./CheckBoxGroup"
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react"

const CHECKBOX_ENTRIES = [
  { id: 1, label: "React", disabled: false, checked: false },
  { id: 2, label: "Typescript", disabled: false, checked: false },
  { id: 3, label: "Express", disabled: false, checked: false },
  { id: 4, label: "Figma", disabled: false, checked: false },
  { id: 5, label: "Docker", disabled: false, checked: false },
  { id: 6, label: "Github", disabled: false, checked: false },
]

const GROUPS = ["Web Devs", "Designers", "DevOps"]
interface FormProps {
  formData: Character
  setFormData?: Dispatch<SetStateAction<Character>>
  className?: string
}

const Form = ({ formData, setFormData, className }: FormProps) => {
  useEffect(() => {
    updateFavorites()
  })
  const [checkboxes, setCheckboxes] =
    useState<CheckboxAttributes[]>(CHECKBOX_ENTRIES)

  const updateFormData = (name: string, value: string | string[]) => {
    setFormData?.({
      ...formData,
      [name as string]: value,
    })
  }

  const handleCheckboxChange = (checkboxId: number) => {
    const updatedCheckboxes = checkboxes.map((checkbox) =>
      checkbox.id === checkboxId
        ? { ...checkbox, checked: !checkbox.checked }
        : checkbox
    )

    const checkedCount = updatedCheckboxes.filter(
      (checkbox) => checkbox.checked
    ).length

    const updatedCheckboxesWithDisabled = updatedCheckboxes.map((checkbox) => ({
      ...checkbox,
      disabled: checkedCount >= 3 && !checkbox.checked,
    }))

    setCheckboxes(updatedCheckboxesWithDisabled)
  }

  const updateFavorites = () => {
    updateFormData(
      "favorites",
      checkboxes.filter((c) => c.checked).map((c) => c.label.toLowerCase())
    )
  }

  return (
    <div className={styles.form}>
      <TextField
        value={formData.name}
        label="Name"
        name="name"
        variant="outlined"
        onChange={({ target: { name, value } }) => updateFormData(name, value)}
      />
      <FormControl fullWidth>
        <InputLabel id="select-team-label">Team</InputLabel>
        <Select
          labelId="select-team-label"
          value={formData.team}
          label="Team"
          name="team"
          data-testid="select-team"
          onChange={({ target: { name, value } }) =>
            updateFormData(name, value)
          }
        >
          {GROUPS.map((group, index) => (
            <MenuItem key={index} value={group.toLowerCase().replace(/ /, "")}>
              {group}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Input
        type="file"
        name="avatar"
        inputProps={{ accept: "image/*", "data-testid": "upload" }}
        onChange={({
          target: { name, files },
        }: ChangeEvent<HTMLInputElement>) =>
          files?.length && updateFormData(name, URL.createObjectURL(files[0]))
        }
        style={{ display: "none" }}
        id="file-upload-input"
      />
      <label htmlFor="file-upload-input">
        <Button variant="contained" color="primary" component="span">
          Upload Avatar
        </Button>
      </label>
      <CheckBoxGroup
        checkboxes={checkboxes}
        className={styles.checkboxGroup}
        onUpdate={handleCheckboxChange}
      />
    </div>
  )
}

export default Form
