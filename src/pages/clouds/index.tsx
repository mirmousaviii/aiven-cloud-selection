import React, {useEffect, useState} from 'react';
import DefaultLayout from '../../layouts/default';
import Typography from '@material-ui/core/Typography';
import {GetClouds} from '../../services/api';
import CloudsDataGrid from '../../components/clouds-data-grid';

const CloudsPage: React.FC = (): JSX.Element => {
    const [clouds, setClouds] = useState<object[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

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

    return (
        <DefaultLayout>
            <Typography variant="h5" gutterBottom>
                Clouds list (Alpha version)
            </Typography>
            <CloudsDataGrid data={clouds} isLoading={isLoading}/>
        </DefaultLayout>
    );
}

export default CloudsPage;
