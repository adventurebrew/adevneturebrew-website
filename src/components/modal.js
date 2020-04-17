import ReactDOM from 'react-dom';
import { Grid, Box } from './base-components';

const portalRoot =
  typeof document !== `undefined` ? document.getElementById('portal') : null;

const Modal = ({ callback, children }) => {
  return ReactDOM.createPortal(
    <Grid
      position="fixed"
      top="0"
      right="0"
      bottom="0"
      left="0"
      justifyContent="center"
      alignItems="center"
      bg="blackfade90"
    >
      <Box
        p="15rem"
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
        <button aria-label="close" onClick={callback}>
          Close
        </button>
      </Box>
    </Grid>,
    portalRoot
  );
};

export default Modal;
