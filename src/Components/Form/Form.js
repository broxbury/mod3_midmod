import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      date: '',
      time: '',
      number: '',
      name: '',
    }
  }
  updateName = (e) => {
    this.setState({ name: e.target.value })
  }

  updateDate = (e) => {
    this.setState({ date: e.target.value })
  }

  updateNumber = (e) => {
    let number = Number(e.target.value)
    this.setState({ number: number })
  }

  updateTime = (e) => {
    this.setState({ time: e.target.value })
    this.setState({ id: Date.now()})
  }

  updateState = (e) => {
    e.preventDefault()
    this.props.addReservation(this.state)
    
    document.querySelectorAll('input').forEach(input => input.value = '')
  }

  render() {
    return (
      <>
      <section className='form-container'>
        <form onSubmit={(e) => this.updateState(e)}>
          <input className='input' required id='name-input' onChange={(e) => this.updateName(e)} type='text' placeholder='NAME'></input>
          <input className='input' required id='date-input' onChange={(e) => this.updateDate(e)} type='text' placeholder='DATE: dd/mm'></input>
          <input className='input' required id='number-input' onChange={(e) => this.updateNumber(e)} type='text' placeholder='SIZE OF PARTY'></input>
          <input className='input' required id='time-input' onChange={(e) => this.updateTime(e)} type='text' placeholder='TIME'></input>
          <button aria-label='submit' className='submit-btn' type='submit'>Make Reservation</button>
        </form>
      </section>
      </>
    )
  }
}