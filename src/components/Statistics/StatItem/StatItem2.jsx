import PropTypes from 'prop-types';
import { Box } from '../../Box';
import { Item, Title, Value } from './StatItem.styled';

const StatItem2 = ({ name, value, totalCount }) => {
  return (
    <Box display="flex" justifyContent="center">
      <Title>Positive feedback:</Title>
      <Value name={name}>{value ? `${value.toFixed(0)}%` : '-'}</Value>
    </Box>
  );
};

StatItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  totalCount: PropTypes.number,
}.isRequired;

export default StatItem;
