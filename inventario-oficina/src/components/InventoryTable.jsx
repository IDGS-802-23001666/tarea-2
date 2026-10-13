import React from 'react';
import PropTypes from 'prop-types';
import { InventoryRow } from './InventoryRow';

export const InventoryTable = ({ items }) => {
  return (
    <React.Fragment>
      <h2>Inventario de Oficina</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ccc', backgroundColor: '#f4f4f4' }}>
            <th style={{ padding: '8px' }}>Artículo</th>
            <th style={{ padding: '8px' }}>Cantidad</th>
            <th style={{ padding: '8px' }}>Departamento</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <InventoryRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

InventoryTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};