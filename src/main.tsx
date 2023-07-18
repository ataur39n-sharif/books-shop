import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/index.tsx';
import { Provider } from 'react-redux';
import { store } from "../Redux/store.ts"
import { Toaster } from 'react-hot-toast';
import PreInitApp from './preApp.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Provider store={store}>
      <PreInitApp>
        <Toaster />
        <RouterProvider router={router} />
      </PreInitApp>
    </Provider>
  </React.StrictMode>,
)
