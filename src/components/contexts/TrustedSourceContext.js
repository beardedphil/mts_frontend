import React, { useState, createContext, useContext } from 'react';

export const TrustedSourceStateContext = createContext();
export const TrustedSourceDispatchContext = createContext();

const TrustedSourceProvider = props => {
    const [trustedSources, setTrustedSources] = useState([]);

    return (
        <TrustedSourceStateContext.Provider value={trustedSources}>
            <TrustedSourceDispatchContext.Provider value={setTrustedSources}>
                { props.children }
            </TrustedSourceDispatchContext.Provider>
        </TrustedSourceStateContext.Provider>
    );
}

const useTrustedSourceState = () => {
    const context = useContext(TrustedSourceStateContext);
    if (context === undefined) {
        throw new Error('useTrustedSourceState must be used within a TrustedSourceProvider');
    }
    return context;
}

const useTrustedSourceDispatch = () => {
    const context = useContext(TrustedSourceDispatchContext);
    if (context === undefined) {
        throw new Error('useTrustedSourceDispatch must be used within a TrustedSourceProvider');
    }
    return context;
}

const useTrustedSources = () => {
    return [useTrustedSourceState(), useTrustedSourceDispatch()]
}

export {TrustedSourceProvider, useTrustedSources}
