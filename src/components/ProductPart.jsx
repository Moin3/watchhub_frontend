import { Box, Typography } from '@mui/material'
import React from 'react'
import ProductCard from './ProductCard';
import productData from '../data';


const ProductPart = () => {
    const drawerWidth = 240;
  return (
    <Box
    component="main"
    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` },height: { sm: `calc(100vh - 100px)`},overflowY:'scroll' }}
  >

    <Box sx={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
      {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  </Box>
  )
}

export default ProductPart