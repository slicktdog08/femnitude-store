import React from 'react'

const Navbar  = () => {
    return(
        <header className="site-header">
                    <nav className="navbar navbar-custom fixed-top navbar-expand-md">
                    <div className="container">
                        <a href='/' className="navbar-brand">
                            <img className="navbar-logo" src="images/Logo.png" alt="Femnitude Logo" />
                        </a>
                        <a className="navbar-toggler login-link" href="#" title="Login / Register">
                            <i className="feather icon-user" />
                        </a>
                        <a className="navbar-toggler header-mini-cart" href="#">
                            <i className="feather icon icon-shopping-bag" />
                        </a>
                        
                        
                        <div className="navbar-collapse collapse justify-content-end" id="woo">
                        
                        </div>
                    </div>
                    </nav>
                </header>
    )
}


export default Navbar