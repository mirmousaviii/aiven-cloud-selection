import React from 'react';
import {AppBar, Box, Toolbar, Typography} from '@material-ui/core';
import {PlaylistAddCheck as PlaylistAddCheckIcon,} from '@material-ui/icons';

/**
 * Header of default layout
 * @return {JSX.Element}
 * @constructor
 */
const Header: React.FC = (): JSX.Element => {
    return (
        <AppBar position="static">
            <Toolbar>
                <PlaylistAddCheckIcon fontSize="large"/>
                <Box>
                    <Typography variant="h5" component="h1" color="inherit">
                        ‌ Aiven cloud selection
                    </Typography>
                </Box>
                {/* TODO: Add Login/Logout */}
                {/* {user ?
              (<Button
                  color="inherit"
                  aria-label="Logout"
                  onClick={logout}>Logout</Button>) :
              (<Button
                  color="inherit"
                  aria-label="Login"
                  component={Link}
                  to="/login">Login</Button>)
          }*/}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
