
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReservationCard from './ReservationCard';
import Form from '../Form/Form'
import App from '../../App/App.js'

describe('ReservationCard', () => {
  it('should display a newly added reservation to the DOM', () => {

    const mockReservation = {
      "id": 1,
      "name": "Christie",
      "date": "12/29",
      "time": "7:00",
      "number": 12
  }

    const { getByText } = render(
      <>
      <ReservationCard reservation={mockReservation} />
      </>
    )

    const name = getByText('Name: Christie')
    const date = getByText('Date: 12/29')
    const time = getByText('Time: 7:00')

 
    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();

  }) 

})  