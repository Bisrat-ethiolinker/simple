import { createTheme } from '@mui/material/styles';
import { blue, purple, orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[800],
    },
    secondary: {
      main: purple[500],
    },
    error: {
      main: orange[500],
    },
    
  },
});

export default theme;