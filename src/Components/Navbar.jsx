import React from 'react'
import logo from '../images/logo.svg'
export default function Navbar() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center" style={{ borderRadius: "20px", border: "3px solid white" }}>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            {/* Logo */}
                            <a className="navbar-brand" href="#">
                                <img src={logo} alt="Logo" className="d-inline-block align-top w-100 w-sm-auto" />
                            </a>
                            {/* Menu */}
                            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Product</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Tools</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Blogs</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            {/* Login Button */}
                            <div className="d-flex">
                                <button className="btn btn-dark" type="submit">Login</button>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                        </div>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col-12 pt-2">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <a href="/" class="text-decoration-none">Home</a> <i class="bi bi-chevron-right"></i>
                            <li className="breadcrumb-item active" aria-current="page">Liquid Staking Derivatives Tracker</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>


    )
}
