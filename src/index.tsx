import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RoutesController from "./router/RoutesController";
import Store from "./store/store";

const store = new Store();

interface IProps {
    store: Store
}

export const Context = React.createContext<IProps>({
    store
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Context.Provider value={{store}}>
      <RoutesController/>
    </Context.Provider>
);
