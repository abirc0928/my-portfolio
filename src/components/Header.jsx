import React, { useState, useEffect } from 'react'
import '../index.css'
import Navbar from './Navbar'

const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
   
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setNavOpen(false); 
            }
        }

       
        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex items-center justify-between md:px-6 md:grid md:grid-cols-[1fr_3fr_1fr]">
                <h1>
                    <a
                        href="/"
                        className="logo"
                    >
                        <img src="/images/logo.svg"
                            width={40}
                            height={40}
                            alt="Abir Chowdhury" />
                    </a>
                </h1>
                <div className="relative md:justify-self-center">
                    {/* Menu Button - always top right in small screen */}
                    <button
                        className="menu-btn md:!hidden bg-red-400"
                        onClick={() => setNavOpen((prev) => !prev)}
                    >
                        <span className="material-symbols-rounded">
                            {navOpen ? 'close' : 'menu'}
                        </span>
                    </button>

                    {/* Navbar - dropdown in small screen, inline in md */}
                    <Navbar navOpen={navOpen} />
                </div>

                <a href="#contact" className='btn btn-secondary max-md:hidden md:justify-self-end'>
                    Contact Me
                </a>
            </div>
        </header>
    )
}

export default Header