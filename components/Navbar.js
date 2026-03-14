export default function Navbar() {
  return (
    <nav style={{display:"flex", justifyContent:"space-between", padding:"20px"}}>
      <h2>Shumaila</h2>
      <div>
        <a href="#projects">Projects</a> | 
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}