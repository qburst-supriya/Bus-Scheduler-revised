import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '@/features/home';
import '@/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className="app-container">
            <Home></Home>
        </div>
    </React.StrictMode>
);
