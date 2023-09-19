import styles from "./Preview.module.css"
import defaultAvatar from "/defaultAvatar.png"
import { Character } from "./App"
import { Icon } from "@iconify/react"

interface PreviewProps {
  character: Character
}

const Preview = ({ character }: PreviewProps) => {
  return (
    <div className={styles.preview}>
      <h2>Preview</h2>
      <div className={styles.avatarContainer}>
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
        <div className={styles.avatarOverlay}>
          {character.favorites.map((fav, index) => (
            <div key={index}>
              <Icon
                className={styles.icon}
                width={30}
                icon={`devicon:${fav}`}
              />
            </div>
          ))}
        </div>
      </div>
      <h3 data-testid="name-preview">{character.name}</h3>
    </div>
  )
}

export default Preview
