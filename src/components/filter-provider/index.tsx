import React from 'react';
import {Box, FormControl, InputLabel, makeStyles, MenuItem, Select} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    filterProviderBox: {
        marginTop: 50,
        marginBottom: 30,
        maxWidth: 300
    },
}));

export enum ProviderListItem {
    ALL = 'all',
    GOOGLE = 'google',
    AWS = 'aws',
    DO = 'do',
    AZURE = 'azure',
    UP_CLOUD = 'upcloud',
}

type propsType = {
    value: ProviderListItem,
    onChange: (event: React.ChangeEvent<{ value: any }>) => any
}

function FilterProvider({value, onChange}: propsType): JSX.Element {
    const classes = useStyles();

    const MenuList = [
        {value: ProviderListItem.ALL, title: 'ALL PROVIDERS'},
        {value: ProviderListItem.GOOGLE, title: 'Google Cloud Platform'},
        {value: ProviderListItem.AWS, title: 'Amazon Web Services'},
        {value: ProviderListItem.DO, title: 'Digitalocean'},
        {value: ProviderListItem.AZURE, title: 'Azure'},
        {value: ProviderListItem.UP_CLOUD, title: 'UpCloud'},
    ];

    return (
        <Box className={classes.filterProviderBox}>
            <FormControl fullWidth>
                <InputLabel>Filter by cloud provider</InputLabel>
                <Select value={value} onChange={onChange}>
                    {MenuList.map((item) => (
                        <MenuItem value={item.value} key={item.value}>{item.title}</MenuItem>
                    ))}

                </Select>
                <InputLabel>Filter by cloud provider</InputLabel>
            </FormControl>
        </Box>
    );
}

export default FilterProvider;



