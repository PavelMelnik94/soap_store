import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore'
import DeviceStore from "./store/DeviceStore";

import './styles/index.scss';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore(),
}}>
    <App />
</Context.Provider>
);

// const rootElement = document.getElementById("root");
// if (root.hasChildNodes()) {
//   ReactDOM.hydrate(<App />, root);
// } else {
//   ReactDOM.render(<App />, root);
// }

