import React, { Fragment } from 'react'
import Booking from './Booking'

function Timing() {
    return (
        <Fragment >
            <section className="timing-container">
            <div className="timing-table">
                <div className="timing-left">
                    <h3>VISITING HOURS</h3>
                    <div className="visit-contain">
                        <div className="visit-cards">
                            <h4 className='onVisit'>WORKING DAYS</h4>
                            <div className="visit-card-rt">
                                <h5>MON - SUN</h5>
                                <p>9:30 AM to 5:00 PM</p>
                            </div>
                        </div>
                        <div className="visit-cards">
                            <h4 className='offVisit'>HOLIDAYS</h4>
                            <div className="visit-card-rt">
                                <h5>MON - SUN</h5>
                                <p>Every Friday, Republic Day (26th Jan),<br/>Independence Day (15th Aug,<br/>
                                Gandhi Jayanthi (2nd Oct)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="timing-right">
                    <h4>Entry Charge</h4>
                    <table>
                        <tbody>
                        <tr>
                            <td>Indians</td>
                            <td>Adult<br/>Children<br/>Bonafide School Students</td>
                            <td>Rs 15 /- <br/>Rs 10 /- <br/>Rs 5 /- 
                            </td>
                        </tr>
                        <tr>
                            <td>Foreigners</td>
                            <td>Adult<br/>Children<br/>Bonafide Students</td>
                            <td>Rs 250 /-<br/>Rs 150 /-<br/>Rs 75 /-</td>
                        </tr>
                        <tr>
                            <td>Photography Charges</td>
                            <td>Still Camera<br/>Video Camera</td>
                            <td>Rs 200 /-<br/>Rs 500 /-</td>
                        </tr>
                        </tbody>
                        </table>
                </div>
            </div>
        </section>
        <div className='bookingDate'>
            <h3 className="book-title">Book a slot</h3>
            <Booking />
        </div>
    </Fragment>
    )
}

export default Timing
