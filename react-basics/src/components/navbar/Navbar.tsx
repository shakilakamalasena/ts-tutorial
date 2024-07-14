import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">Doinkcozyy</span>
        <div className="links">
            <Link href="#">HomePage</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar