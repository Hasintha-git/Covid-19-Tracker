import darkScrollbar from '@material-ui/core/darkScrollbar';

const theme = createMuiThemeuiTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: theme.palette.mode === 'dark' ? darkScrollbar() : null,
      },
    },
  },
});