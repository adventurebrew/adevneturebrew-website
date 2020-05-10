import React from 'react';
import Box from './box';

const Link = (props) => {
  return (
    <Box {...props} as="a" rel="noopener" target="_blank">
      {props.children}
    </Box>
  );
};

export default Link;
