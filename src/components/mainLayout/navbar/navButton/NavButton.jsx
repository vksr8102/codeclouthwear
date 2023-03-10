import {
  styled,
  Badge,
  Button,
  Box,
  Divider,
  List,
  useTheme,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { Phone } from "@mui/icons-material";
// import { Link } from "react-router-dom";

const CustomButton = styled(Box)`
  // width: 19%;
  height: 64px;
  display: flex;
  gap: 50px;
  justify-content: space-between;
  align-items: center;
`;

const MoreButton = styled(Box)(({theme}) => ({
    // width: '19%',
    height: '64px',
    display: 'flex',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // [theme.breakpoints.down('sm')]: {
    //     display: 'none'
    // },
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const LoginButton = styled(Button)(({theme}) => ({
  
  //  background: theme.header.textColor,
  //  color: theme.header.background,
    // width: '100%',
    textTransform: 'none',

    [theme.breakpoints.down('md')]: {
      // background: theme.header.background,
      // color: theme.header.textColor,
      marginRight: '-50px',
      cursor:'none'
  },

    [theme.breakpoints.down('sm')]: {
      // background: theme.header.background,
      // color: theme.header.textColor,
      marginRight: '-40px',
      cursor:'none'
  },

  "@media (max-width: 500px)": {
    // background: theme.header.background,
    // color: theme.header.textColor,
    marginRight: '-30px',
    cursor:'none'
  },

}));
const Cart = styled(Box)(({theme})=>({
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between',
  flex: '2',
  marginRight:"50px",
  // color: theme.header.textColor,
  [theme.breakpoints.down('md')]: {
      flex:'1',
  } 
}));

export default function NavButton(props) {
//   const [showLogin, setShowLogin] = useState("none");
//   const [showMore, setShowMore] = useState("none");
//   onMouseOver={() => setShowLogin("flex")} onMouseOut={() => setShowLogin("none")}
const theme = useTheme();
  return (
    <CustomButton >
      <Box  sx={{
                
                // alignItems: 'center',
                cursor:'pointer',
                display:'flex',
               position:'realative',
                "&:hover .MuiBox-root": { display:{md:'flex'}},
                "& Button:hover": { backgroundColor: {md: "blue"}}}}>
                   <Cart sx={{flex:'2'}}>
                <Box sx={{display:{md:'flex',xs:'none'},justifyContent:'flex-start',alignItems:'center',paddingLeft:'20px',flex:'2',color:"#000"}}>
                    <Phone/>
                    <Typography sx={{paddingLeft:'5px',fontSize:'20px',fontWeight:'400',color:"#000"}}>+91-9999999999</Typography>
                </Box>
                {/* <CartButton href={'/cart'} sx={{display:'flex',textDecoration:'none'}}>
                    <Badge sx={{cursor: {md:'pointer',sm:'none'},color:`${theme.header.textColor}`}}>
                        <ShoppingCart/>
                    </Badge>
                    <Typography sx={{display:{md:'block',xs:'none',fontSize:'20px',cursor: {md:'pointer',sm:'none'},color:`${theme.header.textColor}`}}}>Cart</Typography>
                </CartButton> */}
            </Cart>
        <Link href={'/login'} style={{textDecoration:'none'}}><LoginButton sx={{fontSize:{xs:'17px',md:'14px'}, letterSpacing:'0.8px', fontWeight:{xs:500,md:700}}}>
          Login
        </LoginButton></Link>
        <Box
          sx={{
            display: 'none',
            flexDirection: "column",
            width: "180px",
            backgroundColor: "blue",
            position: "absolute",
            color: "#000",
            margin: "53px 0 0 -55px",
            zIndex: "100",
            // boxShadow: `${theme.header.boxShadow}`
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "14px",
              backgroundColor: "#FFFFFF",
              clipPath: "polygon(50% 0, 46% 100%, 54% 100%)",
              margin: "-13px 0 0 0",
            }}
          ></Box>
          <List component="nav" aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary="Inbox" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </Box>
      </Box>
      <MoreButton sx={{display: `${props.logo}`==='Cart'?'none':'flex' ,paddingTop:'18px' ,cursor:'pointer',"&:hover .MuiBox-root": { display:'flex'}, "&:hover .MuiSvgIcon-root": { transform: 'rotate(180deg)'}}}>
        <Typography sx={{fontSize:'18px'}}>More</Typography>
        <Badge>
          <ExpandMoreIcon />
        </Badge>
        <Box
          sx={{
            display: 'none',
            flexDirection: "column",
            width: "180px",
            bgcolor: "background.paper",
            position: "absolute",
            color: "red",
            margin: "45px 0 0 -55px",
            zIndex: "100"
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "14px",
              backgroundColor: "#FFFFFF",
              clipPath: "polygon(50% 0, 46% 100%, 54% 100%)",
              margin: "-13px 0 0 0",
            }}
          ></Box>
          <List component="nav" aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary="Inbox" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </Box>
      </MoreButton>
    </CustomButton>
  );
}
