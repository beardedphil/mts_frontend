import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SourceList from './SourceList';

const SourcePage = () => {
    const [sources, setSources] = useState();

    useEffect(() => {
        const getSources = async () => {
            const response = await axios.get('http://localhost:8000/sources/');

            if (response) {
                setSources(response.data.results);
            }
        };
        getSources().then().catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div className="source-page">
            <h1>SourcePage Component</h1>
            <SourceList sources={sources} />
        </div>
    )
};

export default SourcePage;
