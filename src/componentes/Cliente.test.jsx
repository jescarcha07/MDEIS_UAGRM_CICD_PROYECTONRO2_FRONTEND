import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cliente from './Cliente';

describe('Componente Cliente', () => {
  it('renders the form correctly', () => {
    render(
      <BrowserRouter>
        <Cliente />
      </BrowserRouter>
    );

    expect(screen.getByLabelText('Nombres:')).toBeInTheDocument();
    expect(screen.getByLabelText('Apellidos:')).toBeInTheDocument();
    expect(screen.getByLabelText('Correo:')).toBeInTheDocument();
    expect(screen.getByLabelText('Teléfono:')).toBeInTheDocument();
    expect(screen.getByLabelText('Dirección:')).toBeInTheDocument();
    expect(screen.getByLabelText('Fecha de Nacimiento:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Registrar Cliente' })).toBeInTheDocument();
  });

  it('updates form fields on change', () => {
    render(
      <BrowserRouter>
        <Cliente />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText('Nombres:'), { target: { name: 'first_name', value: 'John' } });
    fireEvent.change(screen.getByLabelText('Apellidos:'), { target: { name: 'last_name', value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Correo:'), { target: { name: 'email', value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText('Teléfono:'), { target: { name: 'phone', value: '1234567890' } });
    fireEvent.change(screen.getByLabelText('Dirección:'), { target: { name: 'address', value: '123 Main St' } });
    fireEvent.change(screen.getByLabelText('Fecha de Nacimiento:'), { target: { name: 'birth_date', value: '2000-01-01' } });

    expect(screen.getByLabelText('Nombres:')).toHaveValue('John');
    expect(screen.getByLabelText('Apellidos:')).toHaveValue('Doe');
    expect(screen.getByLabelText('Correo:')).toHaveValue('john.doe@example.com');
    expect(screen.getByLabelText('Teléfono:')).toHaveValue('1234567890');
    expect(screen.getByLabelText('Dirección:')).toHaveValue('123 Main St');
    expect(screen.getByLabelText('Fecha de Nacimiento:')).toHaveValue('2000-01-01');
  });
});