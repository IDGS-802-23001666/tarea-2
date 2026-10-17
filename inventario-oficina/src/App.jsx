import { useState, useEffect } from 'react';
import { CharacterTable } from './components/CharacterTable';
import Pagination from './components/Pagination'; // Importamos tu componente
import { useCharacters } from './hooks/useCharacters';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(1); // Nuevo estado para la página actual
  
  // Pasamos "page" al custom hook y extraemos "totalPages"
  const { characters, totalPages, loading, error } = useCharacters(searchTerm, statusFilter, page);

  // Efecto para regresar a la página 1 cada vez que el usuario busque o filtre algo nuevo
  useEffect(() => {
    setPage(1);
  }, [searchTerm, statusFilter]);

  // Funciones para manejar los botones de la paginación
  const handlePrev = () => setPage((prev) => Math.max(1, prev - 1));
  const handleNext = () => setPage((prev) => Math.min(totalPages, prev + 1));

  return (
    <>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>Directorio Interdimensional</h1>
      </header>
      
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
        
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <input 
            type="text" 
            placeholder="Buscar por nombre..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: '8px', flex: 1, borderRadius: '4px', border: '1px solid #ccc' }}
          />
          
          <select 
            value={statusFilter} 
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="">Todos los estados</option>
            <option value="alive">Vivo</option>
            <option value="dead">Muerto</option>
            <option value="unknown">Desconocido</option>
          </select>
        </div>

        {loading && <p>Abriendo portal de datos...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        
        {!loading && !error && characters.length === 0 && (
          <p>No se encontraron personajes en este universo.</p>
        )}

        {!loading && !error && characters.length > 0 && (
          <>
            <CharacterTable items={characters} />
            {/* Renderizamos tu componente Pagination */}
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <Pagination 
                page={page} 
                totalPage={totalPages} 
                onPrev={handlePrev} 
                onNext={handleNext} 
              />
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;