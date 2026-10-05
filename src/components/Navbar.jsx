import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Overview',  href: '#overview' },
  { label: 'Workflow',  href: '#workflow' },
  { label: 'Output',    href: '#output'   },
  { label: 'Live Demo', href: '#demo'     },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const offset = 80
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#" className={styles.logo} aria-label="Tech Pulse home">
          TECH PULSE
        </a>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.navLink}
                  onClick={(e) => handleNav(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <a
          href="#demo"
          className={`btn btn-primary ${styles.ctaBtn}`}
          onClick={(e) => handleNav(e, '#demo')}
        >
          TEST LIVE DEMO &rarr;
        </a>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          aria-label="Toggle mobile menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={(e) => handleNav(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#demo"
                className={`btn btn-primary ${styles.mobileCta}`}
                onClick={(e) => handleNav(e, '#demo')}
              >
                TEST LIVE DEMO &rarr;
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
