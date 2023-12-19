import React from 'react';
import { useLocation, useSearchParams  } from 'react-router-dom';
import Weather from '../components/Weather';

const SearchResult = () => {
  const [searchParams] = useSearchParams()
  const location = useLocation();
  const selectedLocation = searchParams.get("query");

  return (
    <div>
      <h2>Search Result Page</h2>
      {selectedLocation ? (
        <div>
          <p>Selected Location: {searchParams.get("query")}</p>
          <Weather selectedLocation={selectedLocation} />
        </div>
      ) : (
        <p>No location selected</p>
      )}
    </div>
  );
};

export default SearchResult;

