const React = require('react');
const { render, screen } = require('@testing-library/react');
const { Provider } = require('react-redux');
const { BrowserRouter: Router } = require('react-router-dom');
const Detail = require('../Detail');
const configureStore = require('redux-mock-store');

const mockStore = configureStore([]);

describe('Detail', () => {
  it('should render the component with loading state', () => {
    const initialState = { pokemonsDetail: null }; // Initial state for your Redux store
    const store = mockStore(initialState);

    render(
      React.createElement(Provider, { store },
        React.createElement(Router, null,
          React.createElement(Detail, null)
        )
      )
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
      React.createElement(Provider, { store },
        React.createElement(Router, null,
          React.createElement(Detail, null)
        )
      )
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
