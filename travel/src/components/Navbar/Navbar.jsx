import React,{useState} from "react";
import './navbar.css'
import { MdModeOfTravel } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    //function to toggle Navbar

    const  showNav = () =>{
        setActive('navBar activeNavbar')
    }
//function to remove NavBar
    const  removeNavbar = () =>{
        setActive('navBar')
    }
    return (
        <section className="navBarSection">
            <header className="header flex">

                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><MdModeOfTravel className="icon"/> Travel App</h1>
                    </a>
                </div>
                <div className={active}>..
                
                </div>
                <div className="navBar">
                    <ul className="navList flex">
                        <li className="navItem">
                         <a href="" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                         <a href="" className="navLink">Packages</a>
                        </li>

                        <li className="navItem">
                         <a href="" className="navLink">Shop</a>
                        </li>

                        <li className="navItem">
                         <a href="" className="navLink">About</a>
                        </li>

                        <li className="navItem">
                         <a href="" className="navLink">Pages</a>
                        </li>

                        <li className="navItem">
                         <a href="" className="navLink">News</a>
                        </li>

                        <li className="navItem">
                         <a href="" className="navLink">Contact</a>
                        </li>

                        <button className="btn">
                            <a href="" className="btnLink">Book Now</a>
                        </button>
                    </ul>

                    <div onClick={removeNavbar}    className="closeNavbar">
                        <AiFillCloseCircle className="Icon"/>
                    </div>
                </div>
               <div onClick={showNav}

               
                className="toggleNavbar">
                    <PiDotsNineBold className="icon"/>
                </div>
            </header>

        </section>
    )
}

export default Navbar;