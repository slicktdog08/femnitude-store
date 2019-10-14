import React, {useEffect} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//component imports
import ScrollToTop from './components/scrollToTop'
import Navbar from './components/navbar'
import Footer from './components/footer'

//page imports
import Home from './pages/home'
import PrivacyPolicy from './pages/privacyPolicy'
import TermsAndConditions from './pages/termsAndConditions'
import ReturnPolicy from './pages/returnPolicy'


const Index = (props) => {
    return(
        <BrowserRouter>
            {/*<Navbar/>*/}
            <ScrollToTop>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/privacy-policy' component={PrivacyPolicy}/>
                    <Route path='/terms-and-conditions' component={TermsAndConditions}/>
                    <Route path='/return-policy' component={ReturnPolicy}/>
                </Switch>
            </ScrollToTop>
            <Footer/>
        </BrowserRouter>
    )
}

export default Index