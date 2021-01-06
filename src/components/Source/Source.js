import React, { useState, useEffect } from 'react';
import { useTrustedSources } from '../contexts/TrustedSourceContext';
import './Source.scss';

const Source = ({ source }) => {
    const [trusted, setTrusted] = useState(false);
    const [trustedSources, setTrustedSources] = useTrustedSources();

    useEffect(() => {
        if (trustedSources.includes(source.source)) {
            setTrusted(true);
        }
    }, []);

    const updateTrustedSources = (e) => {
        setTrusted(e.target.checked);
        const index = trustedSources.indexOf(source.source);
        // Moving from unchecked to checked
        if (e.target.checked) {
            if (index === -1) {
                const updatedSources = [...trustedSources, source.source]
                setTrustedSources(updatedSources);
                const json = JSON.stringify(updatedSources);
                localStorage.setItem('sources', json);
            }
        // Moving from checked to unchecked
        } else {
            if (index > -1) {
                const updatedSources = trustedSources.filter(item => item !== source.source);
                setTrustedSources(updatedSources);
                const json = JSON.stringify(updatedSources);
                localStorage.setItem('sources', json);
            }
        }
    }

    return (
        <div className={`source ${ trusted && 'selected' }`}>
            <form className="source-form">
                <input type="checkbox" checked={trusted} onChange={updateTrustedSources} />
                <img src={`./images/${ source.source }.png`} alt={source.source}/>
                <p>{ source.proper_source }</p>
            </form>
        </div>
    );
};

export default Source;
