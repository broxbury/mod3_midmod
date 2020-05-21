import React, { Component } from 'react';
import './App.css';
import ReservationCard from '../Components/ReservationCard/ReservationCard';
import Form from '../Components/Form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
    .then(info => {
      const promises = info.map(reservation => {
        return {
          id: reservation.id,
          name: reservation.name,
          date: reservation.date,
          time: reservation.time,
          number: reservation.number
        }
      })
      Promise.all(promises).then(completedReservations => this.setState({reservations: completedReservations}))
    })
  }

  addReservation = async (reservation) => {
    await this.setState({ reservations: [...this.state.reservations, reservation]})
    
  }

  render() {
    const reservationsToDisplay = this.state.reservations.map(reservation => {
      return <ReservationCard reservation={reservation} key={reservation.id}/>
    })
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          {reservationsToDisplay}
        </div>
      </div>
    )
  }

  

 
}

export default App;
