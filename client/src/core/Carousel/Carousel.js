import React from 'react'
import Carousel from 'react-material-ui-carousel'

function CarouselSlider() {
    return (
        <section className='carousel-container'>
            <Carousel navButtonsAlwaysVisible={true} interval="6000">
                <div className="carousel-content">
                    <img src={require('../../resources/assets/carousel/event-img-1.jpg')} alt="event"/>
                    <div className="carousel-content-title">
                        <h4>Main Museum</h4>
                    </div>
                </div>
                <div className="carousel-content">
                    <img src={require('../../resources/assets/carousel/event-img-2.jpg')} alt="event"/>
                    <div className="carousel-content-title">
                        <h4>Museum Theatre</h4>
                    </div>
                </div>
                <div className="carousel-content">
                    <img src={require('../../resources/assets/carousel/event-img-3.jpg')} alt="event"/>
                    <div className="carousel-content-title">
                        <h4>Children's Park</h4>
                    </div>
                </div>
            </Carousel>
        </section>
    )
}

export default CarouselSlider
