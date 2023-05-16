import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Detail from '../Detail';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('Detail', () => {
  it('should render the component with loading state', () => {
    const initialState = { pokemonsDetail: null }; // Initial state for your Redux store
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Router>
          <Detail />
        </Router>
      </Provider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render the component with pokemon details', () => {
    const initialState = {
      pokemonsDetail: {
        name: 'Pikachu',
        id: 1,
        life: 100,
        attack: 50,
        defense: 30,
        height: 0.4,
        weight: 6,
        types: 'Electric',
      },
    }; // Initial state with pokemon details
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Router>
          <Detail />
        </Router>
      </Provider>
    );

    expect(screen.getByText('Pikachu')).toBeInTheDocument();
    expect(screen.getByText('HP: 100')).toBeInTheDocument();
    expect(screen.getByText('ATTACK: 50')).toBeInTheDocument();
    expect(screen.getByText('DEFENSE: 30')).toBeInTheDocument();
    expect(screen.getByText('HEIGHT: 0.4')).toBeInTheDocument();
    expect(screen.getByText('WEIGHT: 6')).toBeInTheDocument();
    expect(screen.getByText('TYPE:')).toBeInTheDocument();
    expect(screen.getByText('Electric')).toBeInTheDocument();
  });
});
