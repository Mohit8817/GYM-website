import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import logo from '../../images/logo.png';
import { links } from '../../data'

const Navbar = () => {
    return (
        <div>

            <div className="container-fluid nav_pos">
                <div className="row">
                    <div className="col d-flex">
                        {/* logo img  */}                        
                            <Link to="/" className='logo'>                                
                                    <img src={logo} alt="nav logo" className='logo_img'/>  
                             </Link>
                    


                        <div className='fa_btn' >
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                                    <i className='fa fa-bars text-light'></i>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className='navbar-nav left_nav'>
                                        {
                                            links.map(({ name, path }, index) => {
                                                return ( 
                                                    <li className='nav-item'>
                                                        <NavLink className="nav-link text-light fs-4" to={path}>{name}</NavLink>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
