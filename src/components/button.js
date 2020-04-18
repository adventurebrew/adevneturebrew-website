import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Box, Flex, Grid } from './base-components';

const ButtonContent = styled(Box)``;
const ButtonBorder = styled(Box)``;
const ButtonContainer = styled(Grid)`
  grid-template-rows: 9fr 1fr;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  grid-template-areas:
    'icon button'
    'button-border button-border';
  ${ButtonContent} {
    line-height: 1;
    grid-row: 1/3;
    grid-column: 1/3;
    align-self: center;
    text-align: center;
    background-color: transparent;
    line-height: 2em;
  }
  ${ButtonBorder} {
    grid-row: 2;
    grid-column: 1/3;
    height: 100%;
    z-index: 30;
    width: 100%;
  }
  svg {
    margin: auto;
    width: 100%;
  }
`;

const iconStyle = css`
  grid-row: 1/3;
  grid-column: 1;
  height: 100%;
`;

const Button = (props) => {
  const Icon = props.icon;
  const { fontSize } = props;
  return (
    <ButtonContainer {...props}>
      {Icon && (
        <Flex
          borderLeftColor="blackfade20"
          borderLeftStyle="solid"
          borderLeftWidth="3px"
          alignItem="center"
          css={iconStyle}
        >
          <Icon size={fontSize} />
        </Flex>
      )}
      <ButtonContent
        justifySelf="center"
        fontSize={fontSize}
        {...props}
        px="3.4rem"
      />
      <ButtonBorder bg="blackfade20" />
    </ButtonContainer>
  );
};

Button.defaultProps = {
  fontSize: '3rem',
};
export default styled(Button)();
