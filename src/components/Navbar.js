import { AddCircle, Cancel, CancelOutlined, CloseFullscreen, PlusOne, RemoveCircle, ShoppingBag, ShoppingCart, ShoppingCartOutlined } from '@mui/icons-material'
import { Button, Drawer, IconButton, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "block",
  color: "#fff",
  [theme.breakpoints.down("md")]: {
    display: "block",
    right: "12px",
  },
}));

const Navbar = () => {
 
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{display:"flex",justifyContent:"space-between",flexDirection:{md:"row",sm:"row",xs:"column"},alignItems:"center",position:"sticky",top:"0px",zIndex:"100",backgroundColor:"#FFFFFF"}}>
        <Box>
          <Link href={"/"}>  <Image src={"/logo.png"} width={200} height={40} alt="logo" style={{marginLeft:"20px"}} /></Link>
        </Box>
       <Box component="nav">
        <Box component="ul" sx={{display:"flex",gap:"30px",}}>
       <Link href={"/tshirts"} style={{textDecoration:"none",listStyle:"none"}}>  <Typography component="li">Tshirts</Typography></Link>
       <Link href={"/hoodies"} style={{textDecoration:"none",listStyle:"none"}}>  <Typography component="li">Hoodies</Typography></Link>
       <Link href={"/stickers"} style={{textDecoration:"none",listStyle:"none"}}>  <Typography component="li">Stickers</Typography></Link>
       <Link href={"/mug"} style={{textDecoration:"none",listStyle:"none"}}>  <Typography component="li">Mugs</Typography></Link>
        </Box> 
        </Box> 
        <Box sx={{marginX:"20px",}}  >
          <MenuButton contained onClick={handleOpen}><ShoppingCartOutlined sx={{color:"#000"}}/></MenuButton>
        </Box>
        <Drawer open={open} onClose={handleClose} sx={{position:"absolute",right:"10px",top:"10px",}}>
        <Box sx={{padding:"20px 20px",backgroundColor:"#f2cbde",height:"100%",width:"20vw"}} component='sidebar' >
      <CancelOutlined sx={{color:"#d81175",position:"absolute",top:"10px",right:"10px",}} onClick={handleClose}/>
         <Box >
         <Typography component="ul" fontWeight='600' margin="10px 0px">Shopping Cart</Typography> 
          <Typography  variant='span' sx={{display:"flex",alignItems:"center",fontSize:"16px",gap:"20px",textAlign:"center",marginBottom:"20px"}}>
         1. T-Shit - wear the code
        <AddCircle sx={{color:"#d81175"}}/> <span>1</span><RemoveCircle sx={{color:"#d81175"}}/>
          </Typography>
          <Typography  variant='span' sx={{display:"flex",alignItems:"center",fontSize:"16px",gap:"20px",textAlign:"center",marginBottom:"20px"}}>
         2. T-Shit - wear the code
        <AddCircle sx={{color:"#d81175"}}/> <span>1</span><RemoveCircle sx={{color:"#d81175"}}/>
          </Typography>
          <Typography  variant='span' sx={{display:"flex",alignItems:"center",fontSize:"16px",gap:"20px",textAlign:"center",marginBottom:"20px"}}>
         3. T-Shit - wear the code
        <AddCircle sx={{color:"#d81175"}}/> <span>1</span><RemoveCircle sx={{color:"#d81175"}}/>
          </Typography>
          <Typography  variant='span' sx={{display:"flex",alignItems:"center",fontSize:"16px",gap:"20px",textAlign:"center",marginBottom:"20px"}}>
         4. T-Shit - wear the code
        <AddCircle sx={{color:"#d81175"}}/> <span>1</span><RemoveCircle sx={{color:"#d81175"}}/>
          </Typography>
          <Typography  variant='span' sx={{display:"flex",alignItems:"center",fontSize:"16px",gap:"20px",textAlign:"center",marginBottom:"20px"}}>
         5. T-Shit - wear the code
        <AddCircle sx={{color:"#d81175"}}/> <span>1</span><RemoveCircle sx={{color:"#d81175"}}/>
          </Typography>
          <Box textAlign="center">
            <Button sx={{backgroundColor:"#d81175",color:"#FFFFFF","&:hover":{
              backgroundColor:"#d81175",color:"#FFFFFF",
            }}} startIcon={<ShoppingBag/>}>checkout</Button>
          </Box>
          </Box> 
        </Box>
        </Drawer>
    </Box>
  )
}

export default Navbar