import React from 'react';
import ReactDOM from 'react-dom';
import Productos from './Productos';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Productos />, div);
  ReactDOM.unmountComponentAtNode(div);
});
