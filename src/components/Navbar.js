import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
  Menu,
  MenuItem
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Mail, Notifications } from "@mui/icons-material";
// import { Input } from '@mui/icons-material';

// custom toolbar
const CustomToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SeacharBox = styled("div")(({theme})=>({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%"

  // display:"flex",
  // justifyContent:"center",
  // alignItems:"center"
}));

const IconsNBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
  [theme.breakpoints.down('sm')]:{
    display:"none"
  }
}));

// const Icon= styled('Box')(({theme})=>({
//   display:"flex",
//   justifyContent:'center',
//   alignItems:"center",
//   [theme.breakpoints.up('sm')]:{
//     display:'none'
//   }
  
// }));
const UserBox=styled('Box')(({theme})=>({
      display:'none',
      alignItems:'center',
      justifyContent:'center',
      gap:10,
      [theme.breakpoints.down('sm')]:{
        display:"flex"
      } 
        
}))

function Navbar({mode}) {
 const [open,setOpen]=useState(false);

  return (
    <AppBar position="sticky">
      {/* <Toolbar >
        <Typography variant='h4'> Navbar</Typography>
        
        </Toolbar> */}
      <CustomToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }} >
          Shahid Raza
        </Typography>
        <MenuIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <SeacharBox >
          <InputBase  placeholder="Search....." fullWidth sx={{color:mode==='dark'? "black":"text.primary"}}/>
        </SeacharBox>
        <IconsNBox >
          <Badge badgeContent={6} color="secondary">
            <Mail />
          </Badge>
          <Badge badgeContent={6} color="secondary">
            <Notifications />
          </Badge>

          <Avatar
            alt="pic"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            onClick={()=> setOpen(true)}
          />
        </IconsNBox>
        <UserBox onClick={()=>setOpen(true)}>
        <Avatar
          alt="pic"
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Typography variant="p"> Shahid Raza</Typography>
        </UserBox>
      </CustomToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}

              >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
