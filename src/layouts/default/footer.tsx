import React from 'react';
import {Box, Container, Divider, Link, Typography} from '@material-ui/core';

/**
 * Footer of default layout
 * @return {JSX.Element}
 * @constructor
 */
const Footer: React.FC = (): JSX.Element => {
    return (
        <footer>
            <Container>
                <Divider/>
                <Box textAlign="center" m={2}>
                    <Typography variant="body2" color="primary">
                        A simple Aiven cloud selection {' '}
                        <Link color="inherit" href="https://mo.js.org/">
                            mo.js.org
                        </Link>{' '}
                        &#9679; 2020 - {new Date().getFullYear()}
                    </Typography>
                </Box>
            </Container>
        </footer>
    );
}

export default Footer;