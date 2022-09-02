import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const rootElement = document.getElementById("root");
// if (root.hasChildNodes()) {
//   ReactDOM.hydrate(<App />, root);
// } else {
//   ReactDOM.render(<App />, root);
// }

