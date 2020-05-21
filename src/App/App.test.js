import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should allow a user to post a new reservation', () => {
    const { getByText, getByPlaceholderText, getByLabelText } = render(
      <App />
    );
    fireEvent.change(getByPlaceholderText('NAME'), {
      target: { value: 'Brian' }
    });
   
    fireEvent.change(getByPlaceholderText('DATE: dd/mm'), {
      target: { value: '08/12' }
    });

    fireEvent.change(getByPlaceholderText('SIZE OF PARTY'), {
      target: { value: 5 }
    });

    fireEvent.change(getByPlaceholderText('TIME'), {
      target: { value: '7:00' }
    });

    fireEvent.click(getByLabelText('submit'));

    expect(getByText('Name: Brian')).toBeInTheDocument()
  })
}) 