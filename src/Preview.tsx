import styles from "./Preview.module.css"
import { Character } from "./App"

interface PreviewProps {
  character: Character
}

const Preview = ({ character }: PreviewProps) => {
  return (
    <div className={styles.preview}>
      <h2>Preview</h2>
      <h3 data-testid="name-preview">{character.name}</h3>
    </div>
  )
}

export default Preview
