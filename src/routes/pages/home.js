import React, {useRef} from 'react'
import scrollToComponent from 'react-scroll-to-component';
import {FaCannabis, FaFemale, FaBox, FaCheck} from 'react-icons/fa';
import HealthEffects from '../components/healthEffects'



const Home = () => {
    var scrollOpts = {
        align: 'top',
        offset: -50
    }
    

    var howItWorks = useRef(null);
    var whatsInside = useRef(null);
    var plans = useRef(null)
    var faq = useRef(null)
    var whyUs = useRef(null)

    const scrollToHowItWorks = () => {
        scrollToComponent(howItWorks, scrollOpts)
    }

    const scrollWhatsInside = () => {
        scrollToComponent(whatsInside, scrollOpts)
    }

    const scrollToPlans = () => {
        scrollToComponent(plans, scrollOpts)
    }

    const scrollToFaq = () => {
        scrollToComponent(faq, scrollOpts)
    }

    const scrollToWhyUs = () => {
        scrollToComponent(whyUs, scrollOpts)
    }

    


    return(
        <div>
            <div id="page" className="site">
            <header className="site-header">
                    <nav className="navbar navbar-custom fixed-top navbar-expand-md">
                    <div className="container">
                        <a href='/' className="navbar-brand">
                            <img className="navbar-logo" src="images/Logo.png" alt="Femnitude Logo" />
                        </a>
                        <a className="navbar-toggler login-link" href="https://www.subbly.co/account/auth/login?store=femnitude" title="Login / Register">
                            <i className="feather icon-user" />
                        </a>
                       
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation-primary" aria-controls="navigation-primary" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="feather icon icon-menu" />
                        </button>
                        <div className="navbar-collapse collapse" id="navigation-primary">
                        <div className="mx-auto">
                            <ul id="menu-primary" className="navbar-nav">
                            <li itemScope="itemscope" id="menu-item-7" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7 nav-item">
                                <span title="scroll" className="nav-link" onClick={scrollToHowItWorks}>How it Works?</span>
                            </li>
                            <li itemScope="itemscope" id="menu-item-524" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-524 nav-item">
                                <span title="scroll" onClick={scrollWhatsInside} className="nav-link">What’s Inside?</span>
                            </li>
                            <li itemScope="itemscope" id="menu-item-807" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-807 nav-item">
                                <span className="nav-link" onClick={scrollToPlans}>Plans</span>
                            </li>
                            <li itemScope="itemscope" id="menu-item-1027" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1027 nav-item">
                                <span className="nav-link" onClick={scrollToFaq}>FAQ</span>
                            </li>
                            <li itemScope="itemscope" id="menu-item-1027" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1027 nav-item">
                                <span onClick={scrollToWhyUs} className="nav-link">Why Us</span>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <a className="navbar-collapse collapse  login-link mr-2" href="https://www.subbly.co/account/auth/login?store=femnitude" title="Login / Register">
                        <i className="feather icon-user" /><b>My Account</b>
                        </a>
                    </div>
                    </nav>
                </header>
                <div id="content" className="site-content">
                    <div className="kc_clfw" />
                    <section data-kc-equalheight="true" data-kc-equalheight-align="middle" className="kc-elm kc-css-101174 kc_row" style={{minHeight: '100vh', height: 'auto', paddingTop: '100px', paddingBottom: '50px'}}>
                    <div className="kc-row-container  kc-container">
                        <div className="kc-wrap-columns">
                        <div className="kc-elm kc-css-685966 kc_col-sm-6 kc_column kc_col-sm-6">
                            <div className="kc-col-container">
                            <div className="kc-elm kc-css-43993 kc-title-wrap ">
                                <h1 className="kc_title">
                                    <i>CBD subscription boxes</i> created to meet the needs of any woman.<br/>We are a brand created by woman for the Rebel Woman!
                                </h1>
                            </div>
                            <div className="kc-elm kc-css-753618 kc_text_block lead">
                                <p>Our products address anxiety, depression, and several gynecological issues many women face daily.</p>
                            </div>
                            <span className="kc-elm kc-css-737529">
                                <a href="javascript:void(0)" onClick={scrollToPlans} className="btn btn-nm btn-custom " target="_self">
                                    SHOP NOW
                                </a>
                            </span></div>
                        </div>
                        <div className="kc-elm kc-css-654969 kc_col-sm-6 kc_column kc_col-sm-6">
                            <div className="kc-col-container" />
                        </div>
                        </div>
                    </div>
                    </section>
                    <section id="how-it-works" className="kc-elm kc-css-467044 kc_row" ref={(section) => { howItWorks = section; }} >
                    <div className="kc-row-container  kc-container">
                        <div className="kc-wrap-columns">
                        <div className="kc-elm kc-css-629053 kc_col-sm-12 kc_column kc_col-sm-12">
                            <div className="kc-col-container">
                            <div className="kc-elm kc-css-279537 kc-title-wrap ">
                                <h2 className="kc_title">How it Works?</h2>
                            </div>
                            <div className="kc-elm kc-css-460075 kc-title-wrap ">
                                <h6 className="kc_title">One click could change your life</h6>
                            </div>
                            <div className="kc-elm kc-css-977939 kc_row kc_row_inner">
                                <div className="kc-elm kc-css-51703 kc_col-sm-4 kc_column_inner kc_col-sm-4">
                                <div className="kc_wrapper kc-col-inner-container">
                                    <div className="kc-elm kc-css-753710 kc-feature-boxes kc-fb-layout-1 step-box">
                                    <div className="content-icon"><i className="thebox-laptop" /></div>
                                    <div className="content-title">1. ORDER</div>
                                    <div className="content-desc">
                                        Select a pre-made subscription box or create a custom box designed around your needs.
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="kc-elm kc-css-301705 kc_col-sm-4 kc_column_inner kc_col-sm-4">
                                <div className="kc_wrapper kc-col-inner-container">
                                    <div className="kc-elm kc-css-385693 kc-feature-boxes kc-fb-layout-1 step-box">
                                    <div className="content-icon"><i className="thebox-gift-2" /></div>
                                    <div className="content-title">2. GET IT</div>
                                    <div className="content-desc">Recieve your box in discrete packaging through the mail filled with CBD products tailored to womens health issues.</div>
                                    </div>
                                </div>
                                </div>
                                <div className="kc-elm kc-css-205127 kc_col-sm-4 kc_column_inner kc_col-sm-4">
                                <div className="kc_wrapper kc-col-inner-container">
                                    <div className="kc-elm kc-css-258683 kc-feature-boxes kc-fb-layout-1 step-box">
                                    <div className="content-icon"><i className="thebox-gift-1" /></div>
                                    <div className="content-title">3. EXPLORE</div>
                                    <div className="content-desc">Try our products and return to further customize your subscription to your needs.</div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                  
                    <section className="kc-elm kc-css-927035 kc_row text-center" style={{background: '#FAB1D6'}} ref={(section) => { whatsInside = section; }}>
                    <div className="kc-row-container  kc-container">
                        <div className="kc-wrap-columns">
                        <div className="kc-elm kc-css-786522 kc_col-sm-12 kc_column kc_col-sm-12">
                            <div className="kc-col-container">
                            <div className="kc-elm kc-css-904053 kc-title-wrap ">
                                <h2 className="kc_title" style={{fontFamily: 'Playfair Display', fontSize: '2rem', paddingBottom: '30px'}}>What's inside the box?</h2>
                            </div>


                              
                            <div className='row'>
                                <div className='col'>
                                    <div className="item align-self-center">
                                        <div className="kc-elm kc-css-391491 kc_shortcode kc_single_image">
                                            <img src="images/beauty_logo1.png" className alt="" /> </div>
                                            <h4>Topical CBD Gel</h4>
                                        </div>
                                </div>
                                <div className='col'>
                                    <div className="item align-self-center">
                                        <div className="kc-elm kc-css-14635 kc_shortcode kc_single_image">
                                            <img src="images/beauty_logo2.png" className alt="" /> 
                                            <h4>Lavender Body Scrub</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="item align-self-center">
                                        <div className="kc-elm kc-css-243348 kc_shortcode kc_single_image">
                                            <img src="images/beauty_logo3.png" className alt="" />
                                            <h4>Pain Relief Lotion</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="item align-self-center">
                                        <div className="kc-elm kc-css-375071 kc_shortcode kc_single_image">
                                            <img src="images/beauty_logo4.png" className alt="" />
                                            <h4><span>CBD Gummies</span></h4>
                                        </div>
                                    </div>    
                                </div>
                                <div className='col'>
                                    <div className="item align-self-center">
                                        <div className="kc-elm kc-css-140703 kc_shortcode kc_single_image">
                                            <img src="images/beauty_logo6.png" className alt="" /> </div>
                                            <h4>CBD Tincture</h4>
                                    </div> 
                                </div>
                            </div>

                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <HealthEffects/>
                    <section className="kc-elm kc-css-742716 kc_row">
                    <div className="kc-row-container  kc-container">
                        <div className="kc-wrap-columns">
                        <div className="kc-elm kc-css-26481 kc_col-sm-12 kc_column kc_col-sm-12">
                            <div className="kc-col-container">
                            <div className="kc-elm kc-css-250935 kc-title-wrap ">
                                <h2 className="kc_title">FEMNITUDE</h2>
                            </div>
                            <div className="kc-elm kc-css-777378 kc-title-wrap ">
                                <h6 className="kc_title">FOR THE REBEL WOMAN</h6>
                            </div>
                            <div className="kc-elm kc-css-720142">
                               
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section id="pricing" className="kc-elm kc-css-416738 kc_row" ref={(section) => { plans = section; }}>
                    <div className="kc-row-container  kc-container">
                        <div className="kc-wrap-columns">
                        <div className="kc-elm kc-css-669098 kc_col-sm-12 kc_column kc_col-sm-12">
                            <div className="kc-col-container">
                            <div className="kc-elm kc-css-714460 kc-title-wrap ">
                                <h2 className="kc_title">Choose Your Plan</h2>
                            </div>
                            <div className="kc-elm kc-css-196561 kc-title-wrap ">
                                <h6 className="kc_title">You can either choose from a Femnitude box or design your own</h6>
                            </div>
                          

                                <div className='row'>
                                    <div class='col-md-4'>
                                            <div className="kc_wrapper kc-col-inner-container">
                                                <div className="tc-custom-pricing tc-pricing-1 kc-elm kc-css-192985">
                                                <div className="pricing-title">
                                                    <span className="title">TOTAL/HOLISTIC</span>
                                                </div>
                                                
                                                <ul className="list-unstyled content-desc">
                                                    <li><b>CBD Tincture</b><br/>OR<br/><b>CBD Gummies</b>
                                                    </li><br/>
                                                    <hr/>
                                                    <li><b>Pain Relief Lotion</b><br/>OR<br/><b>Shower Gel</b>
                                                     </li><br/>
                                                     <hr/>
                                                    <li><b>Bath Bomb</b></li>
                                                    <li>&nbsp;</li>
                                                </ul>
                                                <div className="pricing-block" style={{backgroundImage: 'url(images/bg-brush-red.png)'}}>
                                                    <span className="price">$93.99/mo</span>
                                                </div>
                                                <a className="subbly-checkout subbly-btn subbly-green" href="https://www.subbly.co/checkout/buy/33975" data-product-id="33975" style={{background: 'black', padding: '10px', color: '#ffffff', textDecoration: 'none'}}>GET BOX</a>
                                                </div>
                                            </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className="kc_wrapper kc-col-inner-container">
                                            <div className="tc-custom-pricing tc-pricing-1 kc-elm kc-css-108791">
                                            <div className="pricing-title">
                                                <span className="title">LUXE</span>
                                            </div>
                                            
                                            <ul className="list-unstyled content-desc">
                                                <li><b>CBD Tincture</b></li><hr/>
                                                <li><b>CBD Gummies</b></li><hr/>
                                                <li><b>Pain Relief Lotion</b></li><hr/>
                                                <li><b>Shower Gel</b></li><hr/>
                                                <li><b>Bath Bomb</b></li><hr/>
                                                <li><b>CBD Sugar Scrub</b></li>
                                            </ul>
                                            <div className="pricing-block" style={{backgroundImage: 'url(images/bg-brush-red.png)'}}>
                                                <span className="price">$169.99/mo</span>
                                            </div>
                                            <a className="subbly-checkout subbly-btn subbly-green" href="https://www.subbly.co/checkout/buy/33977" data-product-id="33977" style={{background: 'black', padding: '10px', color: '#ffffff', textDecoration: 'none'}}>GET BOX</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='col-md-4'>
                                            <div className="kc_wrapper kc-col-inner-container">
                                                <div className="tc-custom-pricing tc-pricing-1 kc-elm kc-css-192985">
                                                <div className="pricing-title">
                                                    <span className="title">CUSTOM</span>
                                                </div>
                                                
                                                <ul className="list-unstyled content-desc">
                                                    <li><b>Build your subscription box from scratch</b>
                                                    </li><br/><br/><br/>
                                                    <li><b>Pick your own combination of 3-4 of our products</b>
                                                    </li><br/>
                                                    <li><b>&nbsp;</b></li><br/>
                                                    <li><b>&nbsp;</b></li>
                                                    <li>&nbsp;</li>
                                                    <li>&nbsp;</li>
                                                    <li>&nbsp;</li>
                                                </ul>
                                                <div className="pricing-block" style={{backgroundImage: 'url(images/bg-brush-red.png)'}}>
                                                    <span className="price">Custom</span>
                                                </div>
                                                <a className="subbly-checkout subbly-btn subbly-green" href="https://www.subbly.co/checkout/buy/34280" data-product-id="34280" style={{background: 'black', padding: '10px', color: '#ffffff', textDecoration: 'none'}}>BUILD BOX</a>
                                                </div>
                                            </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    
                    <section id="faq" className="kc-elm kc-css-974987 kc_row" ref={(section) => { faq = section; }}>
                    <div className="kc-row-container  kc-container">
                        <div className="kc-wrap-columns">
                        <div className="kc-elm kc-css-739451 kc_col-sm-12 kc_column kc_col-sm-12">
                            <div className="kc-col-container">
                            <div className="kc-elm kc-css-978291 kc-title-wrap ">
                                <h4 className="kc_title">Frequently Asked Questions</h4>
                            </div>
                            <div className="kc-elm kc-css-44968 kc_row kc_row_inner">
                                <div className="kc-elm kc-css-274151 kc_col-sm-6 kc_column_inner kc_col-sm-6">
                                <div className="kc_wrapper kc-col-inner-container">
                                    <div data-allowopenall="true" className="kc-elm kc-css-70810 kc_accordion_wrapper">
                                    <div className="kc-elm kc-css-531705 kc_accordion_section group ">
                                        <h3 className="kc_accordion_header ui-accordion-header"><span className="ui-accordion-header-icon ui-icon" />
                                        <a href="javascript:void(0)" data-prevent="scroll"><i className /> 
                                            What will I get in my box?
                                        </a></h3>
                                        <div className="kc_accordion_content ui-accordion-content kc_clearfix">
                                        <div className="kc-panel-body">
                                            <div className="kc-elm kc-css-481672 kc_text_block">
                                            <p style={{color: 'black', fontWeight: '400'}}>
                                                The contents of each box are listed under the "choose your plan" section. The Total/Holistic and Luxe boxes are premade to suit your needs,
                                                however you can also build a custom subscription box if you desire!
                                            </p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="kc-elm kc-css-605501 kc_accordion_section group ">
                                        <h3 className="kc_accordion_header ui-accordion-header"><span className="ui-accordion-header-icon ui-icon" /><a href="javascript:void(0)" data-prevent="scroll"><i className />When will my first box ship?</a></h3>
                                        <div className="kc_accordion_content ui-accordion-content kc_clearfix">
                                        <div className="kc-panel-body">
                                            <div className="kc-elm kc-css-234147 kc_text_block">
                                            <p style={{color: 'black', fontWeight: '400'}}>Your first box will be processed after you sign up and boxes for the following months will ship on the same date.</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="kc-elm kc-css-605501 kc_accordion_section group ">
                                        <h3 className="kc_accordion_header ui-accordion-header"><span className="ui-accordion-header-icon ui-icon" /><a href="javascript:void(0)" data-prevent="scroll"><i className />Will I feel “high” when using your CBD products?</a></h3>
                                        <div className="kc_accordion_content ui-accordion-content kc_clearfix">
                                        <div className="kc-panel-body">
                                            <div className="kc-elm kc-css-234147 kc_text_block">
                                            <p style={{color: 'black', fontWeight: '400'}}>
                                                Unlike THC, the chemical in marijuana responsible for the “high” CBD is
                                                a non-psychotropic derivative of the plant. Our boxes are filled with the
                                                highest quality CBD products on market aimed towards womens health.
                                            </p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="kc-elm kc-css-979701 kc_col-sm-6 kc_column_inner kc_col-sm-6">
                                <div className="kc_wrapper kc-col-inner-container">
                                    <div data-allowopenall="true" className="kc-elm kc-css-199417 kc_accordion_wrapper">
                                    <div className="kc-elm kc-css-963005 kc_accordion_section group ">
                                        <h3 className="kc_accordion_header ui-accordion-header"><span className="ui-accordion-header-icon ui-icon" /><a href="javascript:void(0)" data-prevent="scroll"><i className /> When will I be billed?</a></h3>
                                        <div className="kc_accordion_content ui-accordion-content kc_clearfix">
                                        <div className="kc-panel-body">
                                            <div className="kc-elm kc-css-672838 kc_text_block">
                                            <p style={{color: 'black', fontWeight: '400'}}>
                                                You will be billed for your first month of subscription at sign up and your subscription will renew on the same date of the month your signed up on.
                                            </p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="kc-elm kc-css-702421 kc_accordion_section group ">
                                        <h3 className="kc_accordion_header ui-accordion-header"><span className="ui-accordion-header-icon ui-icon" /><a href="javascript:void(0)" data-prevent="scroll"><i className /> How do I cancel my subscription?</a></h3>
                                        <div className="kc_accordion_content ui-accordion-content kc_clearfix">
                                        <div className="kc-panel-body">
                                            <div className="kc-elm kc-css-534020 kc_text_block">
                                            <p style={{color: 'black', fontWeight: '400'}}>
                                                We make it very easy to cancel your subscription from within your customer portal or you can reach out to us to cancel your subscription.
                                            </p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                
                    <section className="kc-elm kc-css-888340 kc_row" ref={(section) => { whyUs = section; }}>
                    <div className="kc-row-container  kc-container">
                        <div className="kc-wrap-columns">
                        <div className="kc-elm kc-css-366104 kc_col-sm-12 kc_column kc_col-sm-12">
                            <div className="kc-col-container">
                            <div className="kc-elm kc-css-376728 kc-title-wrap ">
                                <h2 className="kc_title">Why Choose Femnitude?</h2>
                            </div>
                            <div className="kc-elm kc-css-513840 kc_row kc_row_inner">
                                <div className="kc-elm kc-css-844460 kc_col-sm-4 kc_column_inner kc_col-sm-4">
                                <div className="kc_wrapper kc-col-inner-container">
                                    <div className="kc-elm kc-css-761980 kc-feature-boxes kc-fb-layout-1 ls-2h">
                                    <div className="content-icon"><FaCheck style={{fontSize:'5em'}}/></div>
                                    <div className="content-title">High-Quality CBD</div>
                                    <div className="content-desc">
                                        Our products are made with the highest quality USA full-spectrum hemp extract
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="kc-elm kc-css-156726 kc_col-sm-4 kc_column_inner kc_col-sm-4">
                                <div className="kc_wrapper kc-col-inner-container">
                                    <div className="kc-elm kc-css-322554 kc-feature-boxes kc-fb-layout-1 ls-2h">
                                    <div className="content-icon"><FaFemale style={{fontSize: '5em'}}/></div>
                                    <div className="content-title">For Women By Women</div>
                                    <div className="content-desc">
                                        Femnitude is a woman-owned company designed to meet the needs of all women
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="kc-elm kc-css-938846 kc_col-sm-4 kc_column_inner kc_col-sm-4">
                                <div className="kc_wrapper kc-col-inner-container">
                                    <div className="kc-elm kc-css-507497 kc-feature-boxes kc-fb-layout-1 ls-2h">
                                    <div className="content-icon"><FaBox style={{fontSize: '5em'}}/></div>
                                    <div className="content-title">Convenient</div>
                                    <div className="content-desc">
                                        We search to find the best products, test them in-house, and ship customized boxes based on specific health needs
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                   {/*
                    <section className="kc-elm kc-css-136142 kc_row">
                    <div className="kc-row-container  kc-container">
                        <div className="kc-wrap-columns">
                        <div className="kc-elm kc-css-108925 kc_col-sm-12 kc_column kc_col-sm-12">
                            <div className="kc-col-container">
                            <div className="kc-elm kc-css-320230 kc-title-wrap ">
                                <h6 className="kc_title">
                                    <a href='https://www.instagram.com/femnitude/'>
                                        FOLLOW US ON INSTAGRAM
                                    </a>
                                </h6>
                            </div>
                            <div id="instadabeauty" className="instagram_feed kc-elm kc-css-606578" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                   */}
                </div>
                
                
                </div>

        </div>
    )
}

export default Home