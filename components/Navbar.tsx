import { NextPage } from "next";
import { useState } from "react";

const Navbar: NextPage = () => {

    const [collapseOpen, setCollapse] = useState(false);
    var displayMenu;

    return (
        <div className='navbar'>
            <div className='collapse-menu' style={{}}>
                <ul className='nav'>
                    <li className='nav-links'><a href="#">Home</a></li>
                    <li className='nav-links'><a href="#collection">Collection</a></li>
                    <li className='nav-links'><a href="#about">About</a></li>
                    <li className='nav-links'><a href="#network">Network</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;