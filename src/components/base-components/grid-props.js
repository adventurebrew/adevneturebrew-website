import { system } from 'styled-system';

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

export default gridProps;
