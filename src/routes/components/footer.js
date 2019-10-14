import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return(
        <div>
            {/* #content */}
            <a href="#" id="back-to-top" title="Back to top"><i className="feather icon icon-chevron-up" /></a>
                <footer className="site-footer">
                    <div className="container">
                    <div className="row">
                        <div className="col mb-2">
                        <section id="text-1" className="widget widget_text">
                            <h5 className="widget-title">FOLLOW US</h5>
                            <div className="textwidget">
                            <ul className="social-icons kc-elm list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a className="social-ico" href="https://www.instagram.com/femnitude/" target="_blank">
                                        <i className="fab fa-lg fa-instagram" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="social-ico" href="https://www.facebook.com/Femnitude" target="_blank">
                                        <i className="fab fa-lg fa-facebook" />
                                    </a>
                                </li>
                                {/*
                                <li className="list-inline-item">
                                    <a className="social-ico" href="#" target="_blank"><i className="fab fa-lg fa-pinterest" /></a>
                                </li>
                                */}
                                <li className="list-inline-item">
                                    <a className="social-ico" href="https://twitter.com/femnitude" target="_blank">
                                        <i className="fab fa-lg fa-twitter" />
                                    </a>
                                </li>
                                {/*
                                <li className="list-inline-item">
                                    <a className="social-ico" href="#" target="_blank">
                                        <i className="fab fa-lg fa-youtube" />
                                    </a>
                                </li>
                                */}
                            </ul>
                            </div>
                        </section>
                        </div>
                        <div className="col mb-2">
                        <section id="nav_menu-1" className="widget widget_nav_menu">
                            <h5 className="widget-title">SUBSCRIBE</h5>
                            <div className="menu-subscribe-container">
                            <ul id="menu-subscribe" className="menu">
                                <li id="menu-item-1024" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-1024">
                                <a href="https://www.subbly.co/checkout/buy/33975" data-product-id="33975">Get Total/Holistic Box</a>
                                </li>
                                <li id="menu-item-1029" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1029">
                                <a href="https://www.subbly.co/checkout/buy/33977" data-product-id="33977">Get Luxe Box</a>
                                </li>
                                <li id="menu-item-808" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-808">
                                    <a data-product-id="34280" href="https://www.subbly.co/checkout/buy/34280">Get Custom Box</a>
                                </li>
                            </ul>
                            </div>
                        </section>
                        </div>
                        {/*}
                        <div className="col mb-2">
                        <section id="nav_menu-2" className="widget widget_nav_menu">
                            <h5 className="widget-title">EXPLORE</h5>
                            <div className="menu-explore-container">
                            <ul id="menu-explore" className="menu">
                                <li id="menu-item-526" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-526">
                                    <a title="scroll" href="javascript:void(0)" on>How it Works</a>
                                </li>
                                <li id="menu-item-527" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-527">
                                    <a title="scroll" href="avascript:void(0)">Whats Inside</a>
                                </li>
                                <li id="menu-item-1026" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1026">
                                <a title href="avascript:void(0)">Plans</a>
                                </li>
                                <li id="menu-item-1028" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1028">
                                <a title href="avascript:void(0)">Why</a>
                                </li>
                            </ul>
                            </div>
                        </section>
                        </div>
                            */}
                        <div className="col mb-2">
                        <section id="nav_menu-3" className="widget widget_nav_menu">
                            <h5 className="widget-title">LEGAL</h5>
                            <div className="menu-legal-container">
                            <ul id="menu-legal" className="menu">
                                <li id="menu-item-528" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-528">
                                <Link to="/privacy-policy">Privacy Policy</Link>
                                </li>
                                <li id="menu-item-529" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-529">
                                <Link to="/terms-and-conditions">Terms and Conditions</Link>
                                </li>
                                <li id="menu-item-530" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-530">
                                <Link to='/return-policy'>Shipping &amp; Returns</Link>
                                </li>
                            </ul>
                            </div>
                        </section>
                        </div>
                        {/*}
                        <div className="col-4 col-alt mb-2">
                        <section id="text-2" className="widget widget_text">
                            <h5 className="widget-title">NEWSLETTER</h5>
                            <form id="mc4wp-form-1" className="mc4wp-form mc4wp-form-522" method="post" data-id={522} data-name="Newsletter Form">
                            <div className="mc4wp-form-fields">
                                <div className="form-inline">
                                <div className="form-group">
                                    <input type="email" className="form-control br-0 br-w" name="EMAIL" placeholder="Your email address" required />
                                    <input className="br-0 btn btn-primary" type="submit" defaultValue="Sign up" />
                                </div>
                                </div>
                            </div>
                            </form>
                        </section>
                        </div>
                        */}
                    </div>
                    </div>
                </footer>
            {/* #footer */}
            <div className="subfooter text-center">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <span className="small">© 2019 FEMNITUDE</span>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default Footer