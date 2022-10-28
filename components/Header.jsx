import styles from "../styles/Home.module.css"

const Header = () => {
  return (
    <div>
        <h1 className={ styles.title }>
            <span>News</span> 9
        </h1>
        <p className={styles.description}>
            Reliable Source
        </p>
    </div>
  )
}

export default Header