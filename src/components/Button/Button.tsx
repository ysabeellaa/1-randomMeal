import styles from './Button.module.scss'

interface IButton{
    onClick: () => void
}

export default function Button({onClick}: IButton) {
  return (
    <>
        <button className={styles.button} onClick={onClick}>Get a Random Meal!</button>
    </>
  )
}
