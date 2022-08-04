import React from 'react';
import { AppBar,IconButton,Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@mui/icons-material/Menu';

function navbar() {
  return(
<>
<AppBar position="static">
<Toolbar>
    <IconButton>
        <MenuIcon/>
    </IconButton>
            <Typography variant="h6">CricLive</Typography>
        </Toolbar>
        </AppBar>
</>
  );
}

export default navbar;
