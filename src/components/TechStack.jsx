import styles from './TechStack.module.css'

export default function TechStack() {
  return (
    <>
      {/* 17. TECH STACK */}
      <section id="tech-stack" className={`section ${styles.techSection}`}>
        <div className="container">
          <div className="label-small animate-fade-up">BUILT WITH</div>
          
          <div className={styles.techList}>
            <div className={`animate-fade-up delay-100 ${styles.techItem}`}>
              <div className={styles.techName}>n8n</div>
              <div className={styles.techDesc}>Workflow orchestration</div>
            </div>
            
            <div className={`animate-fade-up delay-200 ${styles.techItem}`}>
              <div className={styles.techName}>Groq</div>
              <div className={styles.techDesc}>AI inference</div>
            </div>

            <div className={`animate-fade-up delay-300 ${styles.techItem}`}>
              <div className={styles.techName}>RSS</div>
              <div className={styles.techDesc}>News ingestion</div>
            </div>

            <div className={`animate-fade-up delay-400 ${styles.techItem}`}>
              <div className={styles.techName}>JavaScript</div>
              <div className={styles.techDesc}>Content processing</div>
            </div>

            <div className={`animate-fade-up delay-500 ${styles.techItem}`}>
              <div className={styles.techName}>HTML</div>
              <div className={styles.techDesc}>Newsletter rendering</div>
            </div>

            <div className={`animate-fade-up delay-500 ${styles.techItem}`}>
              <div className={styles.techName}>Gmail</div>
              <div className={styles.techDesc}>Email delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* 18. FUTURE ROADMAP */}
      <section className={`section ${styles.roadmapSection}`}>
        <div className="container">
          <div className={styles.roadmapHeader}>
            <h2 className="headline-section animate-fade-up">
              WHAT COMES NEXT?
            </h2>
            <div className="label-small animate-fade-up delay-100" style={{ marginTop: '16px' }}>
              NEXT ITERATION
            </div>
          </div>

          <div className={`animate-fade-up delay-200 ${styles.roadmapList}`}>
            <div className={styles.roadmapItem}>
              <div className={styles.roadmapNumber}>01</div>
              <div className={styles.roadmapTitle}>SUBSCRIBER MANAGEMENT</div>
            </div>
            
            <div className={styles.roadmapItem}>
              <div className={styles.roadmapNumber}>02</div>
              <div className={styles.roadmapTitle}>PERSONALIZATION</div>
            </div>

            <div className={styles.roadmapItem}>
              <div className={styles.roadmapNumber}>03</div>
              <div className={styles.roadmapTitle}>CAMPAIGN ANALYTICS</div>
            </div>

            <div className={styles.roadmapItem}>
              <div className={styles.roadmapNumber}>04</div>
              <div className={styles.roadmapTitle}>MULTI-SOURCE NEWS</div>
            </div>

            <div className={styles.roadmapItem}>
              <div className={styles.roadmapNumber}>05</div>
              <div className={styles.roadmapTitle}>AUTOMATED SCHEDULING</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
