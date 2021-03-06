import React from 'react';
import {DataGrid, GridToolbar} from '@material-ui/data-grid';
import {Box, makeStyles} from '@material-ui/core';
import {Cloud} from "../../types/cloud";

const useStyles = makeStyles((theme) => ({
  table: {
    height: 950,
    width: '100%',
  },
}));

type propsType = {
  data: Cloud[],
  isLoading: boolean
}
function CloudsDataGrid({data, isLoading}: propsType): JSX.Element {
  const classes = useStyles();

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 1,
      sortable: false,
      filterable: false,
      hide: true,
    },
    {
      field: 'cloud_name',
      headerName: 'Cloud name',
      width: 300,
      sortable: true,
    },
    {
      field: 'cloud_description',
      headerName: 'Cloud description',
      flex: 2,
      sortable: true,
    },
    {
      field: 'geo_region',
      headerName: 'Region',
      flex: 1,
      sortable: true,
    },
    {
      field: 'geo_latitude',
      headerName: 'GEO latitude',
      flex: 0.5,
      type: 'number',
      sortable: true,
    },
    {
      field: 'geo_longitude',
      headerName: 'GEO longitude',
      flex: 0.5,
      type: 'number',
      sortable: true,
    },
  ];

  return (
      <Box className={classes.table}>
        <DataGrid
            columns={columns}
            rows={data}
            pageSize={15}
            disableColumnMenu
            disableDensitySelector
            loading={isLoading}
            components={{Toolbar: GridToolbar}}
            checkboxSelection/>
      </Box>
  );
}

export default CloudsDataGrid;



