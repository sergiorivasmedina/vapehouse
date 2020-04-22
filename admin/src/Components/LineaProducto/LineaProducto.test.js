import React from 'react';
import ReactDOM from 'react-dom';
import LineaProducto from './LineaProducto';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LineaProducto />, div);
  ReactDOM.unmountComponentAtNode(div);
});
