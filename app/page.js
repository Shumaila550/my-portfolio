import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section style={{ padding: "50px" }}>
        <h1>Hello, I'm Shumaila 👋</h1>
        <p>Web Developer Portfolio</p>
      </section>

      <Projects />
    </main>
  );
}