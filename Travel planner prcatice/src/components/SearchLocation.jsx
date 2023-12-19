import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import SearchResult from '../pages/SearchResult';

const SearchLocation = ({}) => {
    const navigate = useNavigate()
    const [query, setQuery] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const handleSearch = () => {
        navigate(`/searchResult?query=${query}`)
    };

    const handleLocation = (selectedLocation) => {
        navigate('/searchResult', { selectedLocation })
        setQuery('');
        setSearchResult([]);
    };

    return (
        <div>
        <input placeholder="Enter your location" type="text" id="location" value={query} onChange={(e) => setQuery(e.target.value)} />

        <button onClick={handleSearch}>Search</button>

        {searchResult.length > 0 && (
            <ul>
            {searchResult.map((result) => (
                <li key={result.formatted}>
                <button onClick={() => handleLocation(result)}>
                    {result.formatted}
                </button>
                </li>
            ))}
            </ul>
        )}
        </div>
    );
};

export default SearchLocation;



      // if (navigator.geolocation) {
        // navigator.geolocation.getCurrentPosition(
        //     async (position) => {
        //     const { latitude, longitude } = position.coords;
        //     const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=38c229aabf8a4b938e9d651eeffef082`);
    
        //     if (response.ok) {
        //         const data = await response.json();
        //         setSearchResult(data.results);
        //     } else {
        //         console.error('Error fetching location data');
        //     }
        //     },
        //     (error) => {
        //     console.error('Error getting user location: ', error);
        //     }
        // );
        // }else {
        // console.error('Geolocation is not supported by your browser');
        // }
