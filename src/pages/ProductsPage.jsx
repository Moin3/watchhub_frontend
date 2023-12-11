import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import ProductPart from '../components/ProductPart';
import Sidebar from '../components/Sidebar';


function ProductsPage(props) {
  return (
    <Box sx={{ display: 'flex',mt:10,flexDirection:{xs:'column',sm:'row'} }}>
      <CssBaseline />
        <Sidebar/>
        <ProductPart/>
    </Box>
  );
}


export default ProductsPage;