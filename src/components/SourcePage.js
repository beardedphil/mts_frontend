import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SourceList from './SourceList/SourceList';

const SourcePage = () => {
    const [sources, setSources] = useState();

    useEffect(() => {
        const getSources = async () => {
            const response = await axios.get('https://mytrustedsourceapi.herokuapp.com/sources/');

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
            <SourceList sources={sources} />
        </div>
    )
};

export default SourcePage;
