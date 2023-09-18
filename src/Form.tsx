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
import { Character, FormChangeHandler } from "./App"

interface FormProps {
  formData: Character
  handleInputChange: FormChangeHandler
}

const Form = ({ formData, handleInputChange }: FormProps) => (
  <div className={styles.form}>
    <TextField
      value={formData.name}
      label="Name"
      name="name"
      variant="outlined"
      onChange={handleInputChange}
    />
    <FormControl fullWidth>
      <InputLabel id="select-team-label">Team</InputLabel>
      <Select
        labelId="select-team-label"
        value={formData.team}
        label="Team"
        name="team"
        data-testid="select-team"
        onChange={handleInputChange}
      >
        <MenuItem value="webdevs">Web Devs</MenuItem>
        <MenuItem value="designers">Designers</MenuItem>
        <MenuItem value="devops">DevOps</MenuItem>
      </Select>
    </FormControl>
    <Input
      type="file"
      name="avatar"
      inputProps={{ accept: "image/*", "data-testid": "upload" }}
      onChange={handleInputChange}
      style={{ display: "none" }}
      id="file-upload-input"
    />
    <label htmlFor="file-upload-input">
      <Button variant="contained" color="primary" component="span">
        Upload File
      </Button>
    </label>
  </div>
)

export default Form
