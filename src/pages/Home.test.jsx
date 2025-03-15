import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('Home Component', () => {
  it('renders the title and options', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText('Sistema de Ventas')).toBeInTheDocument();
    expect(screen.getByText('Registrar Cliente')).toBeInTheDocument();
    expect(screen.getByText('Ver Clientes')).toBeInTheDocument();
  });

  it('renders all the links', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByRole('link', { name: 'Registrar Cliente' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Registrar Producto' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Registrar Empleado' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Ver Clientes' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Ver Productos' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Ver Empleados' })).toBeInTheDocument();
  });
});