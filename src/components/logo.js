import React from 'react';
import Text from './text';
import GlowText from './glow-text';
import { Flex } from './base-components';

const Logo = (props) => {
  return (
    <Flex {...props} flexDirection="column">
      <GlowText
        lineHeight="3.5rem"
        color="brightTurquoise"
        fontSize="4rem"
        glowRadius="2"
      >
        הרפתקה עברית
      </GlowText>
      <Text color="brightTurquoise" opacity="0.6" fontSize="4">
        קווסטים בעברית לילדים ולמבוגרים
      </Text>
    </Flex>
  );
};

export default Logo;
