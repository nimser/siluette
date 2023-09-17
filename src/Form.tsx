import { TextField } from "@mui/material"
import { ChangeEventHandler } from "react"
import { Character } from "./App"

interface FormProps {
  formData: Character
  handleInputChange: ChangeEventHandler<HTMLInputElement>
}

const Form = ({ formData, handleInputChange }: FormProps) => (
  <div>
    <TextField
      value={formData.name}
      label="name"
      name="name"
      variant="outlined"
      onChange={handleInputChange}
    />
  </div>
)

export default Form
