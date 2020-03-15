import React from 'react'
import logo from "../../logo.svg";
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand ml-5">
                    <img src={logo} style={{width:"35px"}} alt=""/>
                </Link>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#nav">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="nav">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link ml-5">
                        <i className="fas fa-home"></i> &nbsp;Home<span class="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/news" className="nav-link ml-5">News</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link ml-5">Contact</Link>
                    </li>
                </ul>
            </div>

            </div>
        </nav>
    )
}

export default Navbar;