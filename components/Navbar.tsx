import { NextPage } from "next";
import { useState } from "react";
import { Divider, Drawer, IconButton } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';

const Navbar: NextPage = () => {

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    }

    const handleDrawerClose = () => {
        setOpen(false);
    }

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'space-evenly',
    }));

    return (
        <div className='navbar'>
            <div className='collapse-menu'>
                <ul className='nav'>
                    <li className='nav-links'><a href="#">Home</a></li>
                    <li className='nav-links'><a href="#collection">Collection</a></li>
                    <li className='nav-links'><a rel='noreferrer' target="_blank" href="https://tinyurl.com/whitepaperNASAETH">Whitepaper<LaunchIcon></LaunchIcon></a></li>
                    <li className='nav-links'><a href="#network">Network</a></li>
                    <li className='nav-links'><a href="#about">About</a></li>
                </ul>
            </div>
            <div className='drawer-menu'>
                <h1>N.A.S.A</h1>
                <IconButton
                    onClick={handleDrawerOpen}
                >
                    <MenuIcon></MenuIcon>
                </IconButton>
                <Drawer open={open} anchor={"right"}>
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            <CloseIcon></CloseIcon>
                        </IconButton>

                    </DrawerHeader>
                    <Divider></Divider>
                    <ul className='drawer-nav-menu'>
                        <li className='nav-links drawer'><a onClick={handleDrawerClose} href="#">Home</a></li>
                        <li className='nav-links drawer'><a onClick={handleDrawerClose} href="#collection">Collection</a></li>
                        <li className='nav-links drawer'><a rel='noreferrer' target="_blank" onClick={handleDrawerClose} href="https://tinyurl.com/whitepaperNASAETH">Whitepaper<LaunchIcon></LaunchIcon></a></li>
                        <li className='nav-links drawer'><a onClick={handleDrawerClose} href="#network">Network</a></li>
                        <li className='nav-links drawer'><a onClick={handleDrawerClose} href="#about">About</a></li>
                    </ul>
                </Drawer>
            </div>
        </div>
    );
}

export default Navbar;