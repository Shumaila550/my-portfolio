import DarkModeToggle from './DarkModeToggle'

export default function Navbar() {
  return (
    <nav style={{ display:'flex', justifyContent:'space-between', padding:'20px', alignItems:'center' }}>
      <h2>Shahzad Bukhari</h2>
      <div>
        <DarkModeToggle />
      </div>
    </nav>
  )
}