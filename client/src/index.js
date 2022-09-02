import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '.styles/index.scss';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}

