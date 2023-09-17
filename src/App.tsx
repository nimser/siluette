import { ChangeEvent, useState } from "react"
import styles from "./App.module.css"
import Form from "./Form"
import Preview from "./Preview"
import { SelectChangeEvent } from "@mui/material"

export interface Character {
  name: string
  team: string
  avatar: string | null
  favorites: string[]
}

export type FormChangeEvent =
  | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  | SelectChangeEvent<unknown>
export type FormChangeHandler = (e: FormChangeEvent) => void

function App() {
  const [formData, setFormData] = useState<Character>({
    name: "",
    team: "",
    avatar: null,
    favorites: [],
  })

  const updateFormData = (e: FormChangeEvent) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name as string]: value,
    })
  }

  return (
    <>
      <h1>Customize your avatar</h1>
      <div className={styles.container}>
        <Form formData={formData} handleInputChange={updateFormData} />
        <Preview character={formData} />
      </div>
    </>
  )
}

export default App
