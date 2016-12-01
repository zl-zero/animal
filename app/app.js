import React from 'react';
import ReactDOM,{render} from 'react-dom';
import Routers from 'configs/routers';

document.addEventListener('DOMContentLoaded', () => {
  render(<Routers/>, document.getElementById('root'));
});
