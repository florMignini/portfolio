import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import { styles } from "../styles"
import logo from "../assets/florencia-logo-white.png"
export const Navbar = () => {

  const [active, setActive] = useState("")
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-1 fixed top-0 z-20 bg-primary`}>
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
<Link
to="/"
className="flex items-center gap-2"
onClick={()=>{
  setActive("")
  window.scrollTo(0, 0)
}}
>
<img src={logo} alt="logo"
className="w-9 h-9"
/>
<p>
  Florencia <strong>Fullstack Engineer</strong>
</p>
</Link>
      </div>
    </nav>
  )
}
