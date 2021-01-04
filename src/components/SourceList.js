import React from 'react';
import Source from './Source';

const SourceList = ({ sources = [] }) => {
    return (
        <div className="source-list">
            {
                sources.length === 0 ? (
                    <p>No sources found.</p>
                ) : (
                    sources.map((source) => {
                        return (
                            <Source key={source.id} source={source} />
                        );
                    })
                )
            }
        </div>
    );
};

export default SourceList;
