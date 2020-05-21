import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';

describe('Form', () => {
  it('should display a newly added reservation to the DOM', () => {
    const mockInput = jest.fn();

    const { getByPlaceholderText, getByText, getByLabelText } = render(
      <Form addReservation={mockInput} />
    )

    fireEvent.change(getByPlaceholderText('NAME'), {
      target: { value: 'Brian' }
    });
   
    fireEvent.change(getByPlaceholderText('DATE: dd/mm'), {
      target: { value: '08/12' }
    });

    fireEvent.change(getByPlaceholderText('SIZE OF PARTY'), {
      target: { value: '5' }
    });

    fireEvent.change(getByPlaceholderText('TIME'), {
      target: { value: '7:00' }
    });

    fireEvent.click(getByLabelText('submit'))

    expect(mockInput).toHaveBeenCalledTimes(1)
  })
}) 