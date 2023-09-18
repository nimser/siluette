import styles from "./Preview.module.css"
import defaultAvatar from "/defaultAvatar.png"
import { Character } from "./App"

interface PreviewProps {
  character: Character
}

const Preview = ({ character }: PreviewProps) => {
  return (
    <div className={styles.preview}>
      <h2>Preview</h2>
      <img
        src={character.avatar || defaultAvatar}
        alt="avatar"
        className={
          character.team
            ? `${styles.avatar} ${styles.team} ${styles[character.team]}`
            : `${styles.avatar}`
        }
        data-testid="avatar"
      />
      <h3 data-testid="name-preview">{character.name}</h3>
    </div>
  )
}

export default Preview
