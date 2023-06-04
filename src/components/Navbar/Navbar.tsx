import {useState, useEffect} from 'react'
import styled from "styled-components"
import { Link } from 'react-scroll'
import Logo from "../Logo/Logo"
import Button from "../Button/Button"
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
// Navbar Shadow when scrolled function
const [navScroll, setNavScroll] = useState(false);

const scrolledNav = () => {
    if(window.scrollY > 30) {
        setNavScroll(true);
    } else {
        setNavScroll(false);
    }
}

useEffect(() => {
    window.addEventListener('scroll', scrolledNav);
}, []);

// Mobile menu toggle function
const [toggle, setToggle] = useState(false);

const handleToggle = () => {
    return setToggle(!toggle);
}

  return (
    <NavbarSection className={navScroll ? "scrolled" : undefined}>
        <div className="container">
            <div className={toggle ? "bg_overlay active" : "bg_overlay"} onClick={handleToggle}></div>
            <div className="nav_wrapper">
                <Logo />
                <ul className={toggle ? "nav_menu" : "nav_menu active"}>
                    <li className="nav_item">
                        <Link className="nav_link" to='hero' onClick={handleToggle}>Home</Link>
                    </li>
                    <li className="nav_item">
                        <Link className="nav_link" to='features' onClick={handleToggle}>Features</Link>
                    </li>
                    <li className="nav_item">
                        <Link className="nav_link" to='pricing' onClick={handleToggle}>Pricing</Link>
                    </li>
                    <li className="nav_item">
                        <Link className="nav_link" to='community' onClick={handleToggle}>Community</Link>
                    </li>
                    <div className="nav_btns">
                        <Button className="nav_btn" clicked={handleToggle} text='Sign In'/>
                        <Button className="primary" clicked={handleToggle} text="Sign Up" />
                    </div>
                </ul>
                <div className="menu_btn" onClick={handleToggle}>
                    { toggle ? <FiX /> : <FiMenu /> }
                </div>
            </div>
        </div>
    </NavbarSection>
  )
}

const NavbarSection = styled.div`
    background-color: var(--heroBg);
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem 0;
    width: 100%;
    z-index: 999;
    transition: var(--transition);
    &.scrolled {
        box-shadow: var(--box-shadow);
    }

    .nav_wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .nav_menu {
        display: inline-flex;
        align-items: center;
    }

    .nav_menu .nav_item {
        margin: 0 1.2rem;
        transition: var(--transition);

        .nav_link {
            font-size: 1.2rem;
            transition: var(--transition);
            &:hover {
                color: var(--btnColor);
            }
        }
    }

    .nav_menu .nav_btns {
        margin-left: 18rem;

        .nav_btn {
            margin-right: 1.8rem;
            font-weight: 700;
            font-size: 1.2rem;
            border: none;
            background: none;
            transition: var(--transition);
            &:hover {
                color: var(--btnColor);
            }
        }
    }

.menu_btn {
    font-size: 1.6rem;
    font-weight: 700;
    display: none;
    margin-top: .5rem;
}

@media only screen and (max-width:1280px) {
    .nav_menu .nav_btns {
        margin-left: 3rem;
    }
}

@media only screen and (max-width:960px) {
    .bg_overlay {
        position: absolute;
		left: 0;
		top: 64px;
		z-index: -999;
		height: 100vh;
		width: 100%;
		background: rgba(0, 0, 0, 0.808);
		display: none;
    }

    .bg_overlay.active {
        display: block;
        transition: var(--transition);
    }

    .nav_menu {
        position: fixed;
        top: 64px;
        height: 100vh;
        width: 80%;
        max-width: 300px;
        right: 0;
        display: inline-block;
        align-items: center;
        background-color: var(--heroBg);
        z-index: 999;
        transition: var(--transition);
    }

    .nav_menu.active {
        right: -150%;
    }

.nav_menu .nav_item,
.nav_menu .nav_btns {
    position: relative;
    top: 20%;
    bottom: 0;
    text-align: center;
    margin: 2rem 1rem;
}

.menu_btn {
    display: block;
}
}
`

export default Navbar