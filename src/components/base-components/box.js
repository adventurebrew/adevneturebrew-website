import styled from '@emotion/styled';
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
} from 'styled-system';
import systemPropTypes from '@styled-system/prop-types';

const Box = styled.div`
  ${layout}
  ${space}
  ${color}
  ${fontSize}
  ${typography}
  ${border}
  ${position}
  ${shadow}
  ${gridProps}
`;

Box.propTypes = {
  ...systemPropTypes.layout,
  ...systemPropTypes.space,
  ...systemPropTypes.color,
};

export default Box;
