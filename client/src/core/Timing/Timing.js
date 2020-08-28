import React, { Fragment } from 'react'
import Booking from './Booking'
import { isSignedIn } from '../../auth/isAuth'

function Timing() {
  return (
    <Fragment>
      <section className='open-detail'>
        <div className='timing-container'>
          <div className='visit-time'>
            <div className='visit-svg'>
              <img
                src={require('../../resources/pngs/museum.png')}
                alt='svg1'
              />
            </div>
            <div className='visit-contain'>
              <div className='visit-cards'>
                <h4 className='onVisit'>WORKING DAYS</h4>
                <div className='visit-card-rt'>
                  <h5>MON - SUN</h5>
                  <p>9:30 AM to 5:00 PM</p>
                </div>
              </div>
              <div className='visit-cards'>
                <h4 className='offVisit'>HOLIDAYS</h4>
                <div className='visit-card-rt'>
                  <h5>MON - SUN</h5>
                  <p>
                    Every Friday, Republic Day (26th Jan),
                    <br />
                    Independence Day (15th Aug),
                    <br />
                    Gandhi Jayanthi (2nd Oct)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='entry-charge'>
        <div className='timing-right'>
          <h4>Entry Charge</h4>
          <table>
            <tbody>
              <tr>
                <td>Indians</td>
                <td> Adult</td>
                <td> Rs.15/-</td>
              </tr>

              <tr>
                <td></td>
                <td> Children</td>
                <td> Rs.10/-</td>
              </tr>

              <tr>
                <td></td>
                <td>Bonafide School Students</td>
                <td> Rs.5/-</td>
              </tr>

              <tr>
                <td>Foreigners</td>
                <td> Adult </td>
                <td> Rs.250/-</td>
              </tr>

              <tr>
                <td></td>
                <td> Children</td>
                <td> Rs.125/-</td>
              </tr>

              <tr>
                <td></td>
                <td>Bonafide Students</td>
                <td>Rs.75/-</td>
              </tr>
              <tr>
                <td>Photography Charges</td>
                <td> Still Camera </td>
                <td> Rs.200/-</td>
              </tr>

              <tr>
                <td></td>
                <td> Video Camera </td>
                <td> Rs.500/-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='pay-svg'>
          <img src={require('../../resources/pngs/pay.png')} alt='svg2' />
        </div>
      </section>

      {isSignedIn() && (
        <div className='bookingDate'>
          <h3 className='book-title'>Book a slot</h3>
          <Booking />
        </div>
      )}
    </Fragment>
  )
}

export default Timing
