import PropTypes from 'prop-types';
import { Box } from '../Box';
import Button from './FeedbackButton';

const FeedbackOptions = ({ options, onClickButtonHandler }) => {
  return (
    <Box display="flex" gridGap="15px" justifyContent="center">
      {options.map((option, index) => (
        <Button
          key={index}
          option={option}
          onClickButtonHandler={onClickButtonHandler}
        />
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickButtonHandler: PropTypes.func.isRequired,
};

export default FeedbackOptions;
