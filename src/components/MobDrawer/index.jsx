import React, {useState} from 'react';
import {Box, Drawer, Button, List, ListItemButton, ListItemText} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';

export default function TemporaryDrawer() {
    const links = [
        {id:1, name: 'Main Page', src:'/'},
        {id:2, name: 'Catalog', src:'/categories'},
        {id:3, name: 'All products', src:'/products/all'},
        {id:4, name: 'All sales', src:'/sales/sales_all'},
    ]
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mt: 10}}>
        {links.map(({id, name, src}) => (
          <Link variant="body1" key={id} color={'black'} width="100%"  href={src} underline="none" >
            <ListItemButton>
              <ListItemText  primary={name}/>
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon color={'action'} fontSize={'large'}/>
            </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}