import PropTypes from 'prop-types';
import { Box } from '../../Box';
import { Title, Value } from './StatItem.styled';

const StatItem = ({ name, value, totalCount }) => {
  return name === 'positivePercentage' ? (
    <Box display="flex" justifyContent="center">
      <Title>Positive feedback:</Title>
      <Value name={name}>{value ? `${value.toFixed(0)}%` : '-'}</Value>
    </Box>
  ) : (
    <Box mb={2} display="flex">
      <Title>{name.charAt(0).toUpperCase() + name.slice(1)}:</Title>
      <Value name={name} value={value} totalCount={totalCount} width="515px">
        {value ? value : '-'}
      </Value>
    </Box>
  );
};

StatItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  totalCount: PropTypes.number,
}.isRequired;

export default StatItem;
