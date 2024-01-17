import React, { useState } from 'react'
import "./navbar.scss"
import { IoCloseSharp } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <nav>
                <div className="navText">
                    <h1>helloii</h1>
                </div>
                <div className="navbarMain">
                    <ul className='navUl'>
                        <li>home</li>
                        <li>about</li>
                        <li>contact</li>
                        <li>blog</li>
                    </ul>
                </div>

                <div id='mobile' onClick={handleClick}>
                    {
                        isOpen ? <IoCloseSharp /> : <CiMenuBurger />
                    }
                </div>
            </nav>
            <div className={`${isOpen ? 'navlist_active':'navlist_close'}navlist`}>
                <ul >
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                    <li>blog</li>
                </ul>

            </div>
        </>
    )
}

export default Navbar
