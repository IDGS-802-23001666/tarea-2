import PropTypes from 'prop-types';

export const InventoryRow = ({ item }) => {
  return (
    <tr style={{ borderBottom: '1px solid #eee' }}>
      <td style={{ padding: '8px' }}>{item.name}</td>
      <td style={{ padding: '8px' }}>{item.quantity}</td>
      <td style={{ padding: '8px' }}>{item.department}</td>
    </tr>
  );
};

InventoryRow.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    department: PropTypes.string.isRequired,
  }).isRequired,
};