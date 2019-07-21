import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#578c5a',
      main: '#2e7031',
      dark: '#204e22',
      contrastText: '#fff',
    },
    secondary: {
      light: '#5464c0',
      main: '#2a3eb1',
      dark: '#1d2b7b',
      contrastText: '#000',
    },
  },
});

export default theme;
