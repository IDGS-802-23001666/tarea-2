import { useState, useEffect } from 'react';

export const useCharacters = (name = '', status = '', page = 1) => {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(1); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}`;
        const response = await fetch(url);
        
        if (!response.ok) {
          if (response.status === 404) {
             setCharacters([]);
             setTotalPages(1);
             return;
          }
          throw new Error('Error al obtener los datos');
        }
        
        const data = await response.json();
        setCharacters(data.results);
        setTotalPages(data.info.pages); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [name, status, page]);

  return { characters, totalPages, loading, error };
};