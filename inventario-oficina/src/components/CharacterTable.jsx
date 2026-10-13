import React from 'react';
import PropTypes from 'prop-types';
import { CharacterRow } from './CharacterRow';

export const CharacterTable = ({ items }) => {
  return (
    <React.Fragment>
      <h2>Lista de Personajes</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ccc', backgroundColor: '#f4f4f4' }}>
            <th style={{ padding: '8px' }}>Nombre</th>
            <th style={{ padding: '8px' }}>Estado</th>
            <th style={{ padding: '8px' }}>Especie</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <CharacterRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

CharacterTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};