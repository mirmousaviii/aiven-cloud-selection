import React from 'react';
import {Box, FormControl, InputLabel, makeStyles, MenuItem, Select} from '@material-ui/core';
import {Provider} from "../../types/provider";

const useStyles = makeStyles((theme) => ({
    filterProviderBox: {
        marginTop: 50,
        marginBottom: 30,
        maxWidth: 300
    },
}));


type propsType = {
    filterProvider: Provider,
    onChange: any
}

function FilterProvider({filterProvider, onChange}: propsType): JSX.Element {
    const classes = useStyles();

    return (
        <Box className={classes.filterProviderBox}>
            <FormControl fullWidth>
                <InputLabel>Filter by cloud provider</InputLabel>
                <Select value={filterProvider} onChange={onChange}>
                    <MenuItem value='all'><em>ALL PROVIDERS</em></MenuItem>
                    <MenuItem value='google'>Google Cloud Platform</MenuItem>
                    <MenuItem value='aws'>Amazon Web Services</MenuItem>
                    <MenuItem value='do'>Digitalocean</MenuItem>
                    <MenuItem value='azure'>Azure</MenuItem>
                    <MenuItem value='upcloud'>UpCloud</MenuItem>
                </Select>
                <InputLabel>Filter by cloud provider</InputLabel>
            </FormControl>
        </Box>
    );
}

export default FilterProvider;



