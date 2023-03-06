import React,{useState} from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './searchbar/SearchBar'
import NavButton from './navButton/NavButton'
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    styled,
    Badge,
    Drawer,
    IconButton,
    useTheme
} from "@mui/material";

import { ShoppingCart, Menu,} from '@mui/icons-material';
import PhoneIcon from '@mui/icons-material/Phone';
import WestIcon from '@mui/icons-material/West';
import Siderbar from '../sideBar/Siderbar';
import Link from 'next/link';

  const StyleToolbar = styled(Toolbar)(({theme}) => ({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
  }));
  
 

  const Logo = styled(Box)(({theme}) => ({
        // color: theme.header.textColor,
        [theme.breakpoints.down('md')]:{
            paddingBottom:'5px',
        }
}));

  const CartButton = styled(Link)({
    flex: "1",
    alignItems: "center",
    justifyContent: "flex-end" 
    })


  const NavLeft = styled(Box)(({theme}) => ({

      flex:'4',
      display: 'flex',
      gap:'10px',
     justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        // height: '50px',
    },
      [theme.breakpoints.down('md')]: {
        flex:'3',
    }
  }));

  const MenuButton = styled(IconButton)(({ theme }) => ({
    // color: theme.colors.alpha.white[100],
    [theme.breakpoints.down('md')]: {
        right:'12px'
    }
}));

  const NavBar = styled(AppBar)(({ theme }) => ({
    // backgroundColor:  theme.header.background,
}));




export default function Navbar(props) {

    const [open, setOpen] = useState(false);
    const [flag, setFlag] = useState(true);
    const [flag1, setFlag1] = useState(false);
    const [flag2, setFlag2] = useState(false);

    const handleOpen = ()=>{
        setOpen(true);
    };

    const handleClose = ()=>{
        setOpen(false);
    }

    const handleColor = () => {
      setFlag(!flag);
      setFlag1(false)
      setFlag2(false)
    }
    const handleColor1 = () => {
        setFlag1(true);
        setFlag(false)
        setFlag2(false)
      }
      const handleColor2 = () => {
        setFlag2(true);
        setFlag(false)
        setFlag1(false)
      }

    // const navigate = useNavigate();
    const theme = useTheme();
    
  return (
      <NavBar  sx={{paddingLeft: '27px',paddingRight: '27px'}} position="fixed">
        
        <StyleToolbar sx={{height:{sm:'64px',xs:'70px',},top:{sm:'0',xs:'0px',},dispaly:'flex',alignItems:"center"}}>
        <Box sx={{display:"flex",gap:"30px",justifyContent:"center"}}>
<Link href={"/home"} style={{textDecoration:"none",color:"#000"}}>
<Typography onClick={handleColor} color={flag ? "primary" : "secondary"}   sx={{fontSize:"16px",fontWeight:"500"}}>About</Typography>
</Link>
        <Link href={"/company"} style={{textDecoration:"none",}}>
<Typography color={flag1 ? "primary" : "secondary"} onClick={handleColor1}  sx={{fontSize:"16px",fontWeight:"500"}}>Company</Typography>
</Link>
        <Link href={"/purpose"} style={{textDecoration:"none",color:"#000",}}>
<Typography onClick={handleColor2} color={flag2 ? "primary" : "secondary"}   sx={{fontSize:"16px",fontWeight:"500"}}>Purpose</Typography>
</Link>
       
      </Box>
            <MenuButton sx={{display:{md:'none',xs:`${props.arrow}`}}} >
                
            {/* onClick={()=>navigate(-1)} */}
                <WestIcon/>
            </MenuButton>
            <MenuButton sx={{display:{md:'none',xs:`${props.menu}`},marginTop:"8px"}} onClick={handleOpen}>
                <Menu sx={{color:"#000"}}/>
            </MenuButton>
            <Drawer anchor='left' open={open} onClose={handleClose} transitionDuration={{enter:400 , exit:400}} ModalProps={{sx:{position:'absolute'}}}>
                <Siderbar />
            </Drawer>
            <NavLeft sx={{flex:'4'}}>
                
                <Logo>
                    <Typography  component="div" sx={{fontSize: {md:'35px',xs:'20px'}}}>
                        {props.logo}
                    </Typography>
                    {/* <Typography component="div" sx={{fontSize:{md:'13px',xs:'10px'}, fontWeight:100}}>
                        Make a simple Bussiness
                    </Typography> */}
                </Logo>
                {/* <SearchBar/> */}
                {/* <Badge sx={{display:{sm:'block',md:'none'}, left:'48px'}}>
                    <ShoppingCart/>
                </Badge> */}
                <NavButton/>
            </NavLeft>
           
        </StyleToolbar>
      </NavBar>

  )
}
