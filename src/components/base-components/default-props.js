import gridProps from './grid-props';
import {
  border,
  space,
  color,
  layout,
  fontSize,
  typography,
  position,
  shadow,
  compose,
} from 'styled-system';

const defaultProps = compose(
  border,
  space,
  color,
  layout,
  fontSize,
  typography,
  position,
  shadow,
  gridProps
);

export default defaultProps;
