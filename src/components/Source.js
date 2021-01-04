import React from 'react';

const Source = ({ source }) => {
    return (
        <div className="source">
            <p>ID: { source.id }</p>
            <p>Source: { source.source }</p>
            <p>Proper Source: { source.proper_source }</p>
        </div>
    );
};

export default Source;
