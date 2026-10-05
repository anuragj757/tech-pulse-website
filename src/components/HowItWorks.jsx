import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  return (
    <>
      {/* 10. INTRODUCTION SECTION */}
      <section id="introduction" className={`section ${styles.introSection}`}>
        <div className="container">
          <div className="label-small animate-fade-up">THE IDEA</div>
          
          <div className={styles.introHeader}>
            <h2 className={`headline-section animate-fade-up delay-100`}>
              FROM ARTICLE<br/>TO INBOX.
            </h2>
            <p className={`text-secondary animate-fade-up delay-200 ${styles.introDescription}`}>
              Tech Pulse automates the repetitive work behind creating a technology newsletter.
            </p>
          </div>

          <div className={`grid-3 animate-fade-up delay-300 ${styles.introGrid}`}>
            <div className={styles.introColumn}>
              <div className={styles.introNumber}>01</div>
              <h3 className={styles.introHeading}>DISCOVER</h3>
              <p className="text-secondary">Fresh technology stories enter through RSS.</p>
            </div>
            
            <div className={styles.introDivider}></div>

            <div className={styles.introColumn}>
              <div className={styles.introNumber}>02</div>
              <h3 className={styles.introHeading}>CURATE</h3>
              <p className="text-secondary">AI identifies the stories most worth reading.</p>
            </div>

            <div className={styles.introDivider}></div>

            <div className={styles.introColumn}>
              <div className={styles.introNumber}>03</div>
              <h3 className={styles.introHeading}>DELIVER</h3>
              <p className="text-secondary">The finished newsletter is formatted and sent automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. WORKFLOW SECTION (DARK) */}
      <section id="workflow" className={`section-large bg-dark`}>
        <div className="container">
          <div className="label-small animate-fade-up">BEHIND THE ISSUE</div>
          
          <div className={styles.workflowHeader}>
            <h2 className="headline-section animate-fade-up delay-100">
              EVERY NEWSLETTER<br/>HAS A PIPELINE.
            </h2>
            <p className={`text-secondary animate-fade-up delay-200 ${styles.workflowDescription}`}>
              Every Tech Pulse newsletter passes through an automated content pipeline.
            </p>
          </div>

          <div className={`animate-fade-up delay-300 ${styles.workflowDiagram}`}>
            
            <div className={styles.workflowStep}>
              <div className={styles.stepIndicator}></div>
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>01 RSS</div>
                <div className={styles.stepTitle}>TECHCRUNCH FEED</div>
              </div>
            </div>
            
            <div className={styles.workflowArrow}>&rarr;</div>

            <div className={styles.workflowStep}>
              <div className={styles.stepIndicator}></div>
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>02 CURATE</div>
                <div className={styles.stepTitle}>AI SELECTS TOP 3</div>
              </div>
            </div>

            <div className={styles.workflowArrow}>&rarr;</div>

            <div className={styles.workflowStep}>
              <div className={styles.stepIndicator}></div>
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>03 WRITE</div>
                <div className={styles.stepTitle}>AI-GENERATED COPY</div>
              </div>
            </div>

            <div className={styles.workflowArrow}>&rarr;</div>

            <div className={styles.workflowStep}>
              <div className={styles.stepIndicator}></div>
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>04 FORMAT</div>
                <div className={styles.stepTitle}>HTML NEWSLETTER</div>
              </div>
            </div>

            <div className={styles.workflowArrow}>&rarr;</div>

            <div className={styles.workflowStep}>
              <div className={styles.stepIndicator}></div>
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>05 DELIVER</div>
                <div className={styles.stepTitle}>GMAIL</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 12. AI SECTION */}
      <section className={`section ${styles.aiSection}`}>
        <div className="container">
          <div className="label-small animate-fade-up">THE INTELLIGENCE LAYER</div>
          
          <h2 className={`headline-section animate-fade-up delay-100 ${styles.aiTitle}`}>
            AI DOESN'T JUST<br/>WRITE THE EMAIL.
          </h2>
          <p className={`text-secondary animate-fade-up delay-200 ${styles.aiDescription}`}>
            It decides <span className="text-accent">what is worth reading.</span>
          </p>

          <div className={`grid-3 animate-fade-up delay-300 ${styles.aiGrid}`}>
            <div className={styles.aiCard}>
              <div className={styles.aiNumber}>01</div>
              <h3 className={styles.aiHeading}>CURATION</h3>
              <p className="text-secondary">AI selects the most relevant stories.</p>
            </div>
            
            <div className={styles.aiCard}>
              <div className={styles.aiNumber}>02</div>
              <h3 className={styles.aiHeading}>SUMMARIZATION</h3>
              <p className="text-secondary">AI converts articles into concise newsletter copy.</p>
            </div>

            <div className={styles.aiCard}>
              <div className={styles.aiNumber}>03</div>
              <h3 className={styles.aiHeading}>CONTEXT</h3>
              <p className="text-secondary">AI explains why each story matters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. BEFORE / AFTER */}
      <section className={`section ${styles.compareSection}`}>
        <div className="container">
          <h2 className="headline-section animate-fade-up">
            FROM MANUAL<br/>TO AUTOMATED.
          </h2>

          <div className={`grid-2 animate-fade-up delay-100 ${styles.compareGrid}`}>
            
            {/* Before */}
            <div className={styles.compareColumn}>
              <div className={styles.compareHeader}>BEFORE</div>
              <ul className={styles.compareList}>
                <li>Raw articles</li>
                <li>Manual reading</li>
                <li>Manual summarization</li>
                <li>Manual formatting</li>
                <li>Manual sending</li>
              </ul>
            </div>

            <div className={styles.compareDivider}></div>

            {/* After */}
            <div className={styles.compareColumn}>
              <div className={styles.compareHeaderAccent}>AFTER</div>
              <ul className={`${styles.compareList} ${styles.compareListAccent}`}>
                <li>RSS</li>
                <li>AI curation</li>
                <li>AI writing</li>
                <li>HTML</li>
                <li>Gmail</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
