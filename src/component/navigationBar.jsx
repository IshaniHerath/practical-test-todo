import '../App.css';
import React, {useEffect, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useNavigate} from "react-router-dom";

function NavigationBar(title) {
    const [menu, setMenu] = useState(null);
    const [pageTitle, setPageTitle] = useState(title.title);
    const [isLogin, setIsLogin] = useState(true);
    let navigate = useNavigate();
    const open = Boolean(menu);

    useEffect(()=> {
        if(pageTitle === 'LOGIN'){
            setIsLogin(true)
        }else setIsLogin(false)
    },[''])

    const handleClick = (event) => {
        setMenu(event.currentTarget);
    };

    const handleClose = () => {
        setMenu(null);
    };

    function navigateTodo() {
        if (isLogin === false){
            navigate("../todo", { replace: true });
        }else alert('Please Login First!')
        setMenu(null);
    }

    function navigateLogin() {
        navigate("../", { replace: true });
        setMenu(null);
    }

    return (
        <div className="NavigationBar">
            <div className="header-style">
                <div className="menu-icon">
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-haspopup="true"
                        onClick={handleClick}pus
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                        }}
                        anchorEl={menu}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                width: '20ch',
                            },
                        }}
                    >
                        <MenuItem onClick={navigateTodo}>To Do</MenuItem>
                        <MenuItem onClick={navigateLogin}>Log Out</MenuItem>
                    </Menu>
                    <span className="title-name">{pageTitle}</span>
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;
