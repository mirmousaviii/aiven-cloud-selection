import React, {useEffect, useState} from 'react';
import DefaultLayout from '../../layouts/default';
import {GetClouds} from '../../services/api';
import CloudsDataGrid from '../../components/clouds-data-grid';
import {Typography} from "@material-ui/core";
import {Cloud} from "../../types/cloud";
import {Provider} from "../../types/provider";
import FilterProvider from "../../components/filter-provider";

const CloudsPage: React.FC = (): JSX.Element => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [clouds, setClouds] = useState<Cloud[]>([]);
    const [filterProvider, setFilterProvider] = useState<Provider>(Provider.all);
    const [filteredClouds, setFilteredClouds] = useState<Cloud[]>([]);

    useEffect(() => {
        setIsLoading(true);
        GetClouds()
            .then(response => {
                return response.data?.clouds.map((item, index) => ({
                    ...item, id: index,
                }));
            })
            .then(response => {
                setClouds(response);
                setIsLoading(false);
                // console.table(response);
            })
            .catch(error => {
                //TODO: Use material-ui for show errors
                alert(error.message);
                setIsLoading(false);
                // console.log(error.message);
            });
    }, []);

    useEffect(() => {
        if (filterProvider === Provider.all) {
            setFilteredClouds(clouds);
        } else {
            const newFilteredClouds = clouds.filter((item) => item.cloud_name.startsWith(`${filterProvider}-`));
            setFilteredClouds(newFilteredClouds);
        }
    }, [clouds, filterProvider]);

    const handlerFilterProvider = (event: React.ChangeEvent<{ value: Provider }>) => {
        setFilterProvider(event.target.value as Provider);
    };

    return (
        <DefaultLayout>
            <Typography variant="h5" gutterBottom>
                Clouds list (Alpha version)
            </Typography>
            <FilterProvider filterProvider={filterProvider} onChange={handlerFilterProvider}/>

            <CloudsDataGrid data={filteredClouds} isLoading={isLoading}/>
        </DefaultLayout>
    );
}

export default CloudsPage;
