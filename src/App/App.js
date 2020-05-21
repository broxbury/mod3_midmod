import React, { Component } from 'react';
import './App.css';

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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }

  

 
}

export default App;
