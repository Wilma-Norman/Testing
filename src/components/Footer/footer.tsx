import styles from './footer.module.css'

const Footer = () => {
    return(
        <footer data-testid="footer" className={styles.textHolder}>
            <h4 className={styles.footerText}>Copywright 2024</h4>
        </footer>
    )
}

export default Footer