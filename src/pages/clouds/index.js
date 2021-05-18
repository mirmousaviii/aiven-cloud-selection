import React, {useEffect} from 'react';
import DefaultLayout from '../../layouts/default';
import Typography from '@material-ui/core/Typography';
import {GetClouds} from '../../services/api';

function CloudsPage() {

  useEffect(() => {
    GetClouds()
        .then(response => {
          console.table(response.data?.clouds);
        })
        .catch(error => {
          //TODO: Use material-ui for show errors
          alert(error.message);
        });
    console.log();
  });

  return (
      <DefaultLayout>
        <Typography variant="h5" gutterBottom>
          Cloud page
        </Typography>
      </DefaultLayout>
  );
}

export default CloudsPage;
