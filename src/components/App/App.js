import React from 'react';
import AppRouter from '../../routers/AppRouter';
import { TrustedSourceProvider } from '../contexts/TrustedSourceContext';
import './App.scss';

const App = () => {
    return (
        <div className="app">
            <TrustedSourceProvider>
                <AppRouter />
            </TrustedSourceProvider>
        </div>
    );
}

export default App;
