import { useState } from 'react'
import styles from './NewsletterSection.module.css'

export default function NewsletterSection() {
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address.')
      return
    }

    setStatus('loading')
    setErrorMessage('')
    
    try {
      const response = await fetch('https://workflow.ccbp.in/webhook/tech-pulse-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          source: 'tech-pulse-website'
        })
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      setStatus('success')
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
      setErrorMessage('Failed to send request. Please try again.')
    }
  }

  const handleReset = () => {
    setStatus('idle')
    setEmail('')
    setErrorMessage('')
  }

  return (
    <>
      {/* 13. EMAIL OUTPUT SECTION */}
      <section id="output" className={`section ${styles.outputSection}`}>
        <div className="container">
          <div className={styles.outputHeader}>
            <h2 className="headline-section animate-fade-up">
              THE FINAL OUTPUT
            </h2>
            <p className={`text-secondary animate-fade-up delay-100 ${styles.outputSubtitle}`}>
              The result is a polished newsletter ready for delivery.
            </p>
          </div>

          <div className={`animate-fade-up delay-200 ${styles.outputVisual}`}>
            <div className={styles.emailCardLarge}>
              <div className={styles.outputBadge}>EXAMPLE EMAIL OUTPUT</div>
              
              <div className={styles.emailContent}>
                <div className={styles.emailBrand}>TECH PULSE</div>
                <div className={styles.emailTagline}>Today's top technology stories</div>
                
                <div className={styles.emailDivider}></div>
                
                <div className={styles.emailMeta}>
                  <span>Tech Pulse — Oct 3, 2026</span>
                  <span>Your daily snapshot of the tech world in 2-minute reads.</span>
                </div>

                <div className={styles.emailDivider}></div>

                <div className={styles.story}>
                  <div className={styles.storyNumber}>01</div>
                  <h3 className={styles.storyHeading}>Spotify-Backed Body-Scan Startup Expands to the U.S.</h3>
                  
                  <div className={styles.storySection}>
                    <div className={styles.storyLabel}>SUMMARY</div>
                    <p>Neko Health, co-founded by Daniel Ek, is opening its first US clinic to offer full-body preventive health scans using AI and extensive sensor technology.</p>
                  </div>
                  
                  <div className={styles.storySection}>
                    <div className={styles.storyLabel}>WHY IT MATTERS</div>
                    <p>This marks a significant expansion of AI-driven preventive healthcare into the American market, potentially shifting paradigms from reactive to proactive medicine.</p>
                  </div>
                  
                  <a href="#" className={`link-editorial ${styles.storyLink}`}>READ MORE &rarr;</a>
                </div>

                <div className={styles.story}>
                  <div className={styles.storyNumber}>02</div>
                  <h3 className={styles.storyHeading}>Anthropic Unveils Upgraded Claude 3.5 Sonnet</h3>
                  <div className={styles.storySection}>
                    <div className={styles.storyLabel}>SUMMARY</div>
                    <p>Anthropic has released an updated version of its Claude 3.5 Sonnet model, alongside a new feature called "Computer Use" that allows the AI to control mouse and keyboard.</p>
                  </div>
                  <a href="#" className={`link-editorial ${styles.storyLink}`}>READ MORE &rarr;</a>
                </div>
              </div>

              <div className={styles.emailFooterLarge}>
                <span className={styles.footerLabel}>GENERATED WITH AI</span>
                <span className={styles.footerLabel}>DELIVERED VIA GMAIL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. LIVE DEMO */}
      <section id="demo" className={`section-large bg-dark`}>
        <div className="container">
          <div className="label-small animate-fade-up">LIVE AUTOMATION</div>
          
          <div className={`grid-2 ${styles.demoGrid}`}>
            <div className={`animate-fade-up delay-100 ${styles.demoContent}`}>
              <h2 className="headline-section">
                GET TECH PULSE<br/>IN YOUR INBOX.
              </h2>
              <p className={`text-secondary ${styles.demoDescription}`}>
                Want to see the automation in action?<br/>Enter your email and trigger the workflow.
              </p>
            </div>

            <div className={`animate-fade-up delay-200 ${styles.demoFormContainer}`}>
              {status === 'success' ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>&#10003;</div>
                  <h3 className={styles.successHeading}>TECH PULSE IS ON ITS WAY.</h3>
                  <p className={styles.successText}>Check your inbox in a moment.</p>
                  <button onClick={handleReset} className={styles.resetBtn}>
                    SEND ANOTHER EMAIL &rarr;
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  {status === 'error' && (
                    <div className={styles.errorMessage}>
                      {errorMessage}
                    </div>
                  )}
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className={styles.input}
                    required
                    disabled={status === 'loading'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button 
                    type="submit" 
                    className={styles.submitBtn}
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'GENERATING YOUR TECH PULSE...' : 'SEND ME TECH PULSE \u2192'}
                  </button>
                  <p className={styles.formDisclaimer}>
                    Your email is used only to deliver the demo newsletter.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* 19. FINAL CTA */}
      <section className={`section-large ${styles.finalCtaSection}`}>
        <div className={`container ${styles.finalCtaContainer}`}>
          <h2 className="headline-hero animate-fade-up">
            SEE IT<br/>FOR YOURSELF.
          </h2>
          <p className={`text-secondary animate-fade-up delay-100 ${styles.finalCtaDesc}`}>
            Trigger the automation and receive a Tech Pulse newsletter in your inbox.
          </p>
          <div className="animate-fade-up delay-200">
            <a href="#demo" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>
              TEST LIVE DEMO &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
