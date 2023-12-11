import { Box } from '@mui/material'
import './App.css'
import { Outlet,useLocation } from 'react-router-dom'
import React, { useEffect } from 'react';
import Headers from './components/Headers';


function App() {
  
  const location = useLocation();

  // Scroll to the top when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Headers/>
      <Box sx={{marginTop:'75px'}}>
        <Outlet/>
      </Box>
    </>
  )
}

export default App