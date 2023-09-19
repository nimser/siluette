import styles from "./Preview.module.css"
import defaultAvatar from "/defaultAvatar.png"
import { Character } from "./App"
import { Icon } from "@iconify/react"
import { Button } from "@mui/material"
import { Dispatch, SetStateAction } from "react"

interface PreviewProps {
  character: Character
  setDone: Dispatch<SetStateAction<boolean>>
  done: boolean
}

const Preview = ({ character, setDone, done }: PreviewProps) => {
  return (
    <div className={styles.preview}>
      <h2 data-testid="name-preview">{character.name}</h2>
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
      {!done &&
        character.name &&
        character.favorites &&
        character.team &&
        character.avatar && (
          <Button
            onClick={() => setDone(true)}
            variant="contained"
            color="primary"
            component="span"
          >
            Done !
          </Button>
        )}
    </div>
  )
}

export default Preview
