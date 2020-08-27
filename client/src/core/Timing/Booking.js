import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
import { connect } from 'react-redux'
import moment from 'moment'
import { startCreateBooking } from '../../store/actions/bookingActions';

function Booking(props) {
    const {bookings} = props
    const [startDate, setStartDate] = useState(new Date())
    const [time, setTime] = useState({ value: '9:00 AM', label: '9:00 AM' })
    const [bookedFor, setBookedFor] = useState(1)
    const options = [
        { value: '9:00 AM', label: '9:00 AM' },
        { value: '11:00 AM', label: '11:00 AM' },
        { value: '12:00 PM', label: '12:00 PM' },
        { value: '2:00 PM', label: '2:00 PM' },
        { value: '4:00 PM', label: '4:00 PM' },
    ]
    const handleTime = (e) => {
        setTime(e)
    }
    const handleChange = (e) => {
        setBookedFor(e.target.value)
    }
    const handleBookSubmit = (e) => {
        e.preventDefault()
        const formData = {
            booked: startDate,
            bookTime: time.value,
            bookedFor
        }
        props.dispatch(startCreateBooking(formData))
        console.log(formData)
    }
    const checkBookings = (date) => {
        const booksOnDate = bookings.filter(book => moment(date).format('DD-MM-YYYY') == moment(book.booked).format('DD-MM-YYYY'))
        if(booksOnDate.length){
            return (
                <div className='bookingTable'>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Entry Time Booked</th>
                                <th>Booked For</th>
                            </tr>
                        </thead>
                        <tbody>{
                            booksOnDate.map((books,i) => {
                                return <tr key={books._id}>
                                    <td>{i+1}</td>
                                    <td>{books.bookTime}</td>
                                    <td>{books.bookedFor}</td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            )
        }else{
            return (
                <div>
                    <p>No bookings on this date</p>
                </div>
            )
        }
    }
    return (
        <div className='booking-container'>
            <div className="booking-form">
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                timeIntervals={60}
                timeCaption="time"
                dateFormat="MMMM d, yyyy"
                minDate={new Date()}
                highlightDates={bookings.map(books => new Date(books.booked))}
                className='bool-elements'
            />
            <form onSubmit={handleBookSubmit}>
                <input className='bool-elements' type='number' placeholder="No. of people" onChange={handleChange} value={bookedFor} />
                <Select 
                    value={time}
                    options={options}
                    onChange={handleTime}
                    className='bool-elements-select'
                />
                <input className='btn-login' type="submit" value="Book"/>
            </form>
            </div>
            {checkBookings(startDate)}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        bookings: state.bookings
    }
}
export default connect(mapStateToProps)(Booking)
