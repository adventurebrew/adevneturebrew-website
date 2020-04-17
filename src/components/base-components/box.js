import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {
  border,
  space,
  color,
  layout,
  fontSize,
  typography,
  position,
  shadow,
  system,
} from 'styled-system';
import systemPropTypes from '@styled-system/prop-types';

const gridProps = system({
  alignSelf: {
    property: 'align-self',
  },
  justifySelf: {
    property: 'justify-self',
  },
  gridArea: {
    property: 'grid-area',
  },
  gridColumn: {
    property: 'grid-column',
  },
  gridRow: {
    property: 'grid-row',
  },
  zIndex: {
    property: 'z-index',
    scale: 'zIndex',
  },
});

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
