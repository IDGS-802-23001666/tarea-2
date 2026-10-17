import { useState, useEffect } from 'react';

export const useCharacters = (name = '', status = '') => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const url = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`;
        const response = await fetch(url);
        
        if (!response.ok) {
          if (response.status === 404) {
             setCharacters([]); 
             return;
          }
          throw new Error('Error al obtener los datos del servidor');
        }
        
        const data = await response.json();
        setCharacters(data.results.slice(0, 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [name, status]);

  return { characters, loading, error };
};