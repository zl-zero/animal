import ReactDOM from 'react-dom';
import routes from 'configs/routers.js';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(routes, document.getElementById('root'));
});
