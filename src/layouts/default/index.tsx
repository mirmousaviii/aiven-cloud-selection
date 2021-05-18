import React from 'react';
import {AppBar, Box} from '@material-ui/core';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {deepOrange, blue} from '@material-ui/core/colors';
import Header from './header';
import Footer from './footer';

const theme = createMuiTheme({
    palette: {
        primary: deepOrange,
        secondary: blue,
    },
});

/**
 * Default layout
 * @param  {children} Children
 * @return {JSX.Element}
 */
const DefaultLayout: React.FC = ({children}): JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Header/>
            </AppBar>
            <Box m={3} minHeight="80vh">
                {children}
            </Box>
            <Footer/>
        </ThemeProvider>
    );
}

export default DefaultLayout;
