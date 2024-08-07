import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import "./index.scss"
import {store} from "src/shared/store/rootStore.ts";
import {Provider} from "react-redux";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
)
