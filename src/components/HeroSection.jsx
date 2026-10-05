import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section id="overview" className={`section ${styles.heroSection}`}>
      <div className={`container ${styles.heroContainer}`}>
        
        {/* Left Column */}
        <div className={styles.heroContent}>
          <div className="label-small animate-fade-up">AI-POWERED EMAIL AUTOMATION</div>
          
          <h1 className={`headline-hero animate-fade-up delay-100 ${styles.heroTitle}`}>
            THE DAILY INTELLIGENCE FOR THE <span className="text-accent">TECH WORLD.</span>
          </h1>
          
          <p className={`animate-fade-up delay-200 ${styles.heroDescription}`}>
            Tech Pulse transforms fresh technology news into an AI-curated newsletter and delivers it automatically.
          </p>
          
          <div className={`animate-fade-up delay-300 ${styles.heroActions}`}>
            <a href="#demo" className="btn btn-primary">
              TEST THE AUTOMATION &rarr;
            </a>
            <a href="#workflow" className="btn btn-secondary">
              EXPLORE THE WORKFLOW &darr;
            </a>
          </div>
        </div>

        {/* Right Column - Email Preview */}
        <div className={`animate-fade-up delay-400 ${styles.heroVisual}`}>
          <div className={styles.emailCard}>
            
            <div className={styles.emailHeader}>
              <div className={styles.emailBrand}>TECH PULSE</div>
              <div className={styles.emailMeta}>
                <span>ISSUE No. 042</span>
                <span className={styles.emailDate}>OCT 03, 2026</span>
              </div>
            </div>
            
            <div className={styles.emailTitle}>
              TODAY'S TOP TECHNOLOGY STORIES
            </div>

            <div className={styles.emailStories}>
              {/* Story 01 */}
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

              {/* Story 02 */}
              <div className={styles.story}>
                <div className={styles.storyNumber}>02</div>
                <h3 className={styles.storyHeading}>Anthropic Unveils Upgraded Claude 3.5 Sonnet</h3>
              </div>

              {/* Story 03 */}
              <div className={styles.story}>
                <div className={styles.storyNumber}>03</div>
                <h3 className={styles.storyHeading}>OpenAI Readies 'Strawberry' Reasoning Models</h3>
              </div>
            </div>

            <div className={styles.emailFooter}>
              <span>AI CURATED</span>
              <span className={styles.dot}>&bull;</span>
              <span>HTML GENERATED</span>
              <span className={styles.dot}>&bull;</span>
              <span>DELIVERED VIA GMAIL</span>
            </div>

            {/* Decorative alignment marks */}
            <div className={styles.markTopLeft}>+</div>
            <div className={styles.markTopRight}>+</div>
            <div className={styles.markBottomLeft}>+</div>
            <div className={styles.markBottomRight}>+</div>
          </div>
        </div>
      </div>

      {/* Metrics Strip */}
      <div className={`container animate-fade-up delay-500`}>
        <div className={styles.metricsStrip}>
          <div className={styles.metricItem}>
            <div className={styles.metricValue}>05</div>
            <div className={styles.metricLabel}>ARTICLES PROCESSED</div>
          </div>
          <div className={styles.metricDivider}></div>
          
          <div className={styles.metricItem}>
            <div className={styles.metricValue}>03</div>
            <div className={styles.metricLabel}>STORIES SELECTED</div>
          </div>
          <div className={styles.metricDivider}></div>
          
          <div className={styles.metricItem}>
            <div className={styles.metricValue}>AI</div>
            <div className={styles.metricLabel}>CURATED</div>
          </div>
          <div className={styles.metricDivider}></div>
          
          <div className={styles.metricItem}>
            <div className={styles.metricValue}>HTML</div>
            <div className={styles.metricLabel}>EMAIL GENERATED</div>
          </div>
        </div>
      </div>
    </section>
  )
}
