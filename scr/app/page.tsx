import Navbar from "../components/Navbar";
import Projects from "../components/Projects"; // 👈 import at top

export default function Home() {
  return (
    <main>
      <Navbar />

      <section style={{ padding: "50px" }}>
        <h1>I build modern web experiences.</h1>
        <p>Frontend Developer | React | Next.js</p>
      </section>

      <Projects />   {/* 👈 PASTE HERE */}

    </main>
  );
}