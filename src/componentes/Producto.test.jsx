import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Producto from './Producto';

describe('Componente Producto', () => {
  it('renders the form correctly', () => {
    render(
      <BrowserRouter>
        <Producto />
      </BrowserRouter>
    );

    expect(screen.getByLabelText('Nombre:')).toBeInTheDocument();
    expect(screen.getByLabelText('Descripción:')).toBeInTheDocument();
    expect(screen.getByLabelText('Marca:')).toBeInTheDocument();
    expect(screen.getByLabelText('Categoría:')).toBeInTheDocument();
    expect(screen.getByLabelText('Precio:')).toBeInTheDocument();
    expect(screen.getByLabelText('Stock:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Registrar Producto' })).toBeInTheDocument();
  });

  it('updates form fields on change', () => {
    render(
      <BrowserRouter>
        <Producto />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText('Nombre:'), { target: { name: 'name', value: 'Clavo' } });
    fireEvent.change(screen.getByLabelText('Descripción:'), { target: { name: 'description', value: 'Acero' } });
    fireEvent.change(screen.getByLabelText('Marca:'), { target: { name: 'brand', value: 'Tigre' } });
    fireEvent.change(screen.getByLabelText('Categoría:'), { target: { name: 'category', value: 'Clavos' } });
    fireEvent.change(screen.getByLabelText('Precio:'), { target: { name: 'price', value: '10' } });
    fireEvent.change(screen.getByLabelText('Stock:'), { target: { name: 'stock', value: '1000' } });

    expect(screen.getByLabelText('Nombre:')).toHaveValue('Clavo');
    expect(screen.getByLabelText('Descripción:')).toHaveValue('Acero');
    expect(screen.getByLabelText('Marca:')).toHaveValue('Tigre');
    expect(screen.getByLabelText('Categoría:')).toHaveValue('Clavos');
    expect(screen.getByLabelText('Precio:')).toHaveValue(10);
    expect(screen.getByLabelText('Stock:')).toHaveValue(1000);
  });
});