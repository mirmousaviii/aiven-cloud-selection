import React, {useEffect, useState} from 'react';
import DefaultLayout from '../../layouts/default';
import Typography from '@material-ui/core/Typography';
import {GetClouds} from '../../services/api';
import CloudsDataGrid from '../../components/clouds-data-grid';

function CloudsPage() {
  const [clouds, setClouds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    GetClouds()
        .then(response => {
          return response.data?.clouds.map((item, index) => ({
            ...item, id: index,
          }));
        })
        .then(response => {
          console.table(response);
          setClouds(response);
          setIsLoading(false);
        })
        .catch(error => {
          //TODO: Use material-ui for show errors
          console.log(error.message);
          alert(error.message);
          setIsLoading(false);
        });
  }, []);

  return (
      <DefaultLayout>
        <Typography variant="h5" gutterBottom>
          Clouds list
        </Typography>
        <CloudsDataGrid data={clouds} isLoading={isLoading}/>
      </DefaultLayout>
  );
}

export default CloudsPage;
