import { useState } from "react"
import styles from "./App.module.css"
import Form from "./Form"
import Preview from "./Preview"

export interface Character {
  name: string
  team: string
  avatar: string | null
  favorites: string[]
}

function App() {
  const [characterData, setCharacterData] = useState<Character>({
    name: "",
    team: "",
    avatar: null,
    favorites: [],
  })

  return (
    <>
      <h1>Customize your avatar</h1>
      <div className={styles.container}>
        <Form formData={characterData} setFormData={setCharacterData} />
        <Preview character={characterData} />
      </div>
    </>
  )
}

export default App
