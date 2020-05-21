import React from 'react';
import './ReservationCard.css';

const ReservationCard = (props) => {

  return (
    <>
      <section className='res-card'>
        <h2>Name: {props.reservation.name}</h2>
        <h2>Reservation Time: {props.reservation.time}</h2>
        <p>Date: {props.reservation.date}</p>
        <p>Reservation Number: {props.reservation.number}</p>
      </section>
    </>
  )
}

export default ReservationCard;