import ReactDOM from 'react-dom';
import { Grid, Box } from './base-components';
import styled from '@emotion/styled';

const portalRoot =
  typeof document !== `undefined` ? document.getElementById('portal') : null;
const Button = styled(Box)`
  cursor: pointer;
`.withComponent('button');

const ModalContainer = styled(Grid)`
  justify-content: center;
  align-items: center;
`;
const Modal = ({ callback, children }) => {
  return ReactDOM.createPortal(
    <ModalContainer
      position="fixed"
      top="0"
      right="0"
      bottom="0"
      left="0"
      bg="blackfade90"
    >
      <Box
        p="8rem"
        bg="transparent"
        borderRadius="2px"
        display="inline-block"
        margin="1rem"
        position="relative"
        minWidth="300px"
        boxShadow="medium"
        justifySelf="center"
      >
        {children}
        <hr />
        <Button fontSize="3rem" p="1rem" aria-label="close" onClick={callback}>
          Close
        </Button>
      </Box>
    </ModalContainer>,
    portalRoot
  );
};

export default Modal;
