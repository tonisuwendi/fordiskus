import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';

import App from './App';
import store from './states';
import './styles/globals.css';
import './styles/responsive.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <StrictMode>
                <ToastContainer autoClose={3000} />
                <App />
            </StrictMode>
        </BrowserRouter>
    </Provider>,
);
