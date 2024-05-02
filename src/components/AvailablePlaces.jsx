import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { fetchAvailablePlaces } from '../http.js';



export default function AvailablePlaces({ onSelectPlace }) {

  const [availablePlaces, updateAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() =>{
    async function getAvailablePlaces() {
      setIsLoading(true);
      try {
        const places = await fetchAvailablePlaces(); 
        updateAvailablePlaces(places);
      }
      catch(error) {
        setError({message: error.message});
      }
      setIsLoading(false);
    }
      
    getAvailablePlaces();

    
  }, []);
 
  if(error) {
    return <Error title="An error occurred!" message={error.message} />;

  }
  else{
    return (
      <Places
        title="Available Places"
        places={availablePlaces}
        isLoading={isLoading}
        isLoadingText = "Loading..."
        fallbackText="No places available."
        onSelectPlace={onSelectPlace}
      />
    );
  }

  
}
