import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Rating, Slider, Toolbar } from '@mui/material';

const drawerWidth = 240;
const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 1000,
      label: '1000',
    },
  ];
  
  function valuetext(value) {
    return `${value}`;
  }

const Sidebar = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [value, setValue] = React.useState(2);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <Box sx={{height: { sm: `calc(100vh - 100px)` },overflowY:'scroll',pb:5}}>
        <Divider>
            <Typography variant="h6" noWrap component="div">
                        Brand
            </Typography>
        </Divider>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
    
        <Divider>
            <Typography variant="h6" noWrap component="div">
                Price
            </Typography>
        </Divider>
        <Box sx={{
             width: 200,
             display:'flex',
             ml:2,
             mt:3,
             mb:3,
             justifyContent:'center' }}>
          <Slider
            aria-label="Custom marks"
            defaultValue={20}
            getAriaValueText={valuetext}
            step={10}
            valueLabelDisplay="auto"
            marks={marks}
            min={0}
            max={1000}
          />
        </Box>
        <Divider>
            <Typography variant="h6" noWrap component="div">
                Ratting
            </Typography>
        </Divider>
        <Box
          sx={{
            display:'flex',
            justifyContent:'center',
            mt:2,
            '& > legend': { mt: 2 },
          }}
        >
          <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
        </Box>
      );

  return (
    <>
      <Toolbar>
          <Box sx={{ display: { sm: 'none',xs:'flex' },justifyContent:'center',alignItems:'center',position:'fixed',zIndex:100,bgcolor:'white'}}>
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap >
                  Filter
              </Typography>
          </Box>
      </Toolbar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
           {drawer}
        </Drawer>
        <Box
          variant="permanent"
          sx={{
            mt:3,
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
            {drawer} 
        </Box>
      </Box>
    </>
  )
}

export default Sidebar