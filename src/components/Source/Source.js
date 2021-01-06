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
        // Moving from unchecked to checked
        if (e.target.checked) {
            const index = trustedSources.indexOf(source.source);
            if (index === -1) {
                setTrustedSources([...trustedSources, source.source]);
            }
        // Moving from checked to unchecked
        } else {
            const index = trustedSources.indexOf(source.source)
            if (index > -1) {
                setTrustedSources(trustedSources.filter(item => item !== source.source));
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
