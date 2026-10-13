import PropTypes from 'prop-types';

export const CharacterRow = ({ item }) => {
  return (
    <tr style={{ borderBottom: '1px solid #eee' }}>
      <td style={{ padding: '8px' }}>{item.name}</td>
      <td style={{ padding: '8px' }}>{item.status}</td>
      <td style={{ padding: '8px' }}>{item.species}</td>
    </tr>
  );
};

CharacterRow.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
  }).isRequired,
};