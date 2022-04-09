import { createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    background: {
      default: '#292D32',
      paper: '#353B42'
    },
    primary: {
      contrastText: '#ffffff',
      main: '#ffffff'
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff'
    }
  },
});

export default theme;
