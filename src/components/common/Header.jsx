"use client"
import { Link } from 'next-view-transitions'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Header = () => {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (pathname === '/') {
      const scrollToId = sessionStorage.getItem('scrollTo')
      if (scrollToId) {
        setTimeout(() => {
          const el = document.getElementById(scrollToId)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
          sessionStorage.removeItem('scrollTo')
        }, 500)
      }
    }
  }, [pathname])

  const navLinks = [
    {
      label: "Projects",
      href: "/projects",
      scrollTo: "projects"
    },
    {
      label: "Resume",
      href: "/resume"
    },
    {
      label: "Contact",
      href: "/contact",
      scrollTo: "footer"
    },
  ]

  const handleNavClick = (e, item) => {
    if (item.scrollTo) {
      e.preventDefault()
      if (pathname === '/') {
        const el = document.getElementById(item.scrollTo)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        sessionStorage.setItem('scrollTo', item.scrollTo)
        router.push('/')
      }
    }
  }

  return (
    <div className='fixed top-0 w-full  py-5 z-100'>
      <div className="container w-full flex justify-between">
        <div className="uppercase">
          <p>Mridula Devi</p>
          <p className='opacity-60'>UI/UX Designer</p>
        </div>
        <nav className="flex flex-col uppercase">
          {navLinks.map((item, i) => (
            <Link 
              href={item.href} 
              key={i} 
              className="relative group"
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.label}
              <div className={` ${pathname === item.href ? "w-full" : "w-0"} h-px rounded-full absolute bottom-0 bg-white group-hover:w-full left-0 transition-all duration-300`}></div>
            </Link>
          ))}

        </nav>

      </div>
    </div>
  )
}

export default Header