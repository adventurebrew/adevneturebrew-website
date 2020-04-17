import React from 'react';
import styled from '@emotion/styled';
import Button from './button.js';
import SearchAlt from 'emotion-icons/boxicons-regular/SearchAlt';
import { Box } from './base-components';
import { colors } from '../theme.js';

const Span = Box.withComponent('span');
const Input = styled(Box)`
  font-family: 'stranger';
  border: none;
  flex: 1;
  padding-right: 1rem;
`;
const StyledIconStyle = styled(SearchAlt)`
  color: ${colors.white};
  margin-right: 10px;
  margin-left: 10px;
  min-width: 4rem;
`;

const SearchBar = (props) => {
  return (
    <Span {...props} display="inline-flex" bg="gray.1">
      <StyledIconStyle size="3rem" />
      <Input
        as="input"
        color="gray.0"
        bg="gray.1"
        type="text"
        placeholder="שם המשחק..."
        fontSize="5"
        py="1.5rem"
      />
      <Button aria-label="search" color="bunker" bg="brightTurquoise">
        חפשו
      </Button>
    </Span>
  );
};

export default SearchBar;
