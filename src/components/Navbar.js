import * as React from 'react';
import '../App.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function DenseAppBar() {
  return (
    <Box  sx={{ flexGrow: 2 }}>
      <AppBar className='navbar' position="static">
        <Toolbar variant="dense">
         
          <Typography variant="h6" color="inherit" component="div">
            Multi-Steeper Form
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
