import React from 'react'

function About() {
    return (
        <section className="about">
            <h2 className="header">About</h2>
            <div className="about-container">
                <div className="skewBox">
                <div className="about-left">
                    <img src={require('../../resources/assets/museum/museum-img.jpg')} alt="img"/>
                </div>
                <div className="about-right">
                    <div className="content">
                        <h3>History</h3>
                        <p>
                        The proposal for a Museum in Madras was mooted by the Madras Literary Society in 1846 AD and Sir Henry Pottinger, the then Governor, obtained the sanction of the Court of Directors of the East India Company in London.

                        In January 1851 AD, Dr. Edward Balfour, Medical Officer of the Governor's Body guard was appointed as the First Officer in charge of the Government Museum. The notification in the Fort St. George Gazetteer dated 29th April 1851 AD contained the first announcement regarding the opening of the Madras Government Museum...
                        </p>
                        <button className="btn">Read More</button>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default About
