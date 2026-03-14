import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shumaila Bukhari | Portfolio</title>
        <meta name="description" content="Web Developer Portfolio" />
      </Head>

      <header className={styles.header}>
        <Image src="/images/profile.jpg" alt="Profile" width={120} height={120} className={styles.profile}/>
        <h1>Shumaila Bukhari</h1>
        <p>Frontend Developer | React | Next.js | Portfolio</p>
      </header>

      <main className={styles.main}>
        <section className={styles.about}>
          <h2>About Me</h2>
          <p>Hi! I build modern web applications using React and Next.js. I focus on responsive design and performance.</p>
        </section>

        <section className={styles.projects}>
          <h2>Projects</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <Image src="/images/project1.png" alt="Project 1" width={300} height={200}/>
              <h3>Portfolio Website</h3>
              <p>My personal portfolio website built with Next.js.</p>
            </div>
            <div className={styles.projectCard}>
              <Image src="/images/project2.png" alt="Project 2" width={300} height={200}/>
              <h3>Interactive Resume Matcher</h3>
              <p>React app that parses resumes and matches job descriptions.</p>
            </div>
          </div>
        </section>

        <section className={styles.contact}>
          <h2>Contact Me</h2>
          <p>Email: shahzad@example.com</p>
        </section>
      </main>
    </div>
  )
}