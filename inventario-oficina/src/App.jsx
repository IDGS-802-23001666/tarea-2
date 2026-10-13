import { useState, useEffect } from 'react';
import { CharacterTable } from './components/CharacterTable';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        
        if (!response.ok) {
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
  }, []);

  return (
    <>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>Directorio Interdimensional</h1>
      </header>
      
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
        {loading && <p>Abriendo portal de datos...</p>}
        
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        
        {!loading && !error && <CharacterTable items={characters} />}
      </main>
    </>
  );
}

export default App;