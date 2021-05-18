import React from 'react';
import {Link} from 'react-router-dom';
import DefaultLayout from '../../layouts/default';
import Typography from '@material-ui/core/Typography';
import {Button, List, ListItem} from '@material-ui/core';

const HomePage: React.FC = (): JSX.Element => {

    return (
        <DefaultLayout>
            <Typography variant="h5" gutterBottom>
                Home page as a sample
            </Typography>
            <Typography gutterBottom>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.
            </Typography>
            <Typography variant="h6">
                Pages:
            </Typography>
            <List>
                <ListItem>
                    <Button
                        color="secondary"
                        component={Link}
                        to="/">Home page</Button>
                </ListItem>
                <ListItem>
                    <Button
                        color="secondary"
                        component={Link}
                        to="/clouds">Cloud page</Button>
                </ListItem>
            </List>
        </DefaultLayout>
    );
}

export default HomePage;
