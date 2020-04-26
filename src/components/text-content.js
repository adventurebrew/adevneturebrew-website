import React from 'react';
import { Flex, Box } from './base-components';
import styled from '@emotion/styled';

const TextContent = styled((props) => {
  const { text, title } = props;
  return (
    <Flex as="section" {...props} flexDirection="column" align-items="center">
      <Box fontSize="3rem">{title}</Box>
      <Box
        as="p"
        wordBreak="break-word"
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    </Flex>
  );
})``;

export default TextContent;
