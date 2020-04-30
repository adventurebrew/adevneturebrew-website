import React from 'react';
import { Flex, Box } from './base-components';
import styled from '@emotion/styled';

const StyledTextContent = styled(Flex)`
  * {
    font-family: 'Open Sans Hebrew';
  }
`;
const TextContent = styled((props) => {
  const { text, title } = props;
  return (
    <StyledTextContent
      as="section"
      {...props}
      flexDirection="column"
      align-items="center"
    >
      <Box fontSize="3rem">{title}</Box>
      <Box
        fontFamily="Open Sans Hebrew"
        as="p"
        wordBreak="break-word"
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    </StyledTextContent>
  );
})``;

export default TextContent;
