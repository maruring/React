import React from "react";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    return(
        <AppBar position="static">
            <Toolbar>
            <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <AccountCircleIcon />
                </IconButton>
                <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <SettingsIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;