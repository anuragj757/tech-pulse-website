import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={`bg-dark ${styles.footer}`}>
      <div className={`container ${styles.footerContainer}`}>
        
        <div className={styles.footerBrand}>
          <div className={styles.logo}>TECH PULSE</div>
          <p className={styles.tagline}>
            AI-powered technology news automation.
          </p>
          <div className={styles.authorInfo}>
            <p>Built by Anurag Jadhav</p>
            <p className={styles.degree}>B.Tech Data Science</p>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <a href="#" className={`link-editorial ${styles.footerLink}`}>LinkedIn</a>
          <a href="#" className={`link-editorial ${styles.footerLink}`}>GitHub</a>
        </div>

      </div>
    </footer>
  )
}
