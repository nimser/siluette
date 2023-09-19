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
  const [done, setDone] = useState(false)
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
        <div
          className={`${styles.transitionContainer} ${done ? styles.done : ""}`}
        >
          <Form formData={characterData} setFormData={setCharacterData} />
        </div>
        <Preview character={characterData} setDone={setDone} done={done} />
      </div>
    </>
  )
}

export default App
