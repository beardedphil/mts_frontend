import React, { useState, createContext, useContext, useEffect } from 'react';

export const TrustedSourceStateContext = createContext();
export const TrustedSourceDispatchContext = createContext();

const TrustedSourceProvider = props => {
    const [trustedSources, setTrustedSources] = useState([]);

    useEffect(() => {
        try {
            const json = localStorage.getItem('sources');
            const sources = JSON.parse(json);

            if (sources) {
                setTrustedSources(sources);
            }
        } catch (e) {
            const sources = JSON.stringify([]);
            localStorage.setItem('sources', sources);
        }
    }, [])

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
