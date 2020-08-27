import React from 'react'
import About from './core/About/About'
import CarouselSlider from './core/Carousel/Carousel'
//import Gallery from './core/Gallery/Gallery'
import Header from './core/Nav/Header'
import Nav from './core/Nav/Nav'
import Timing from './core/Timing/Timing'

function Home() {
    return (
        <div>
            <Header />
            <Nav />
            <CarouselSlider />
            <Timing />
            <About />
            <div className="copyright">
                <i className="fa fa-facebook" aria-hidden="true"></i>
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <hr />
                <p>copyright {'\u00A9'} 2020 Department of Museums. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Home
