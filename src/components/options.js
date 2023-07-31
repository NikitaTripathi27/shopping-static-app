import "./Home.css"
import {Stack, Typography,TextField ,Box} from "@mui/material"
import { useState } from "react";
import axios from "axios"
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
const Options = ({uniqueCategory ,itemlist ,setitemlist ,debounceSearch ,handlesort ,outputArray}) => {
   
   
    const languages = ['English']

 

    return ( <>
           <div className="parent">
            <Box className='hero'>
            <Stack direction="row" spacing={5}>
                <Stack direction="column" xs={12} sm={12} md={6} lg={3} xl={3}>
                <div className="head">
                    <MenuIcon/>
                </div>
                </Stack>
               
                <Stack direction="column" xs={12} sm={12} md={6} lg={3} xl={3}>
                <select className="category "  onChange={(e)=>{handlesort(e)}}>
                {uniqueCategory.map((val ,index)=>(
                  
                    <option value={val} key={index} >{val}</option>
                    
                ))}
            </select>
                
                </Stack>
                <Stack>
                <TextField  id="outlined-basic-fullWidth" variant="outlined"
                    width='10rem'
                    input="text"
                    placeholder="type categories"
                    name="search"
                    inputProps={{ sx: { border: "2px solid grey", width:"80vh"} }}
                    onChange={(event)=>debounceSearch(event , 500)}
        />
                </Stack>
               <Stack direction="column" xs={12} sm={12} md={6} lg={3} xl={3}>
               <select className="category">
                {languages.map((val ,index)=>(
                  
                    <option value={val} key={index}>{val}</option>
                    
                ))}
            </select>
               </Stack>
               <Stack direction="row" xs={12} sm={12} md={6} lg={3} xl={3}>
                <Stack direction="column" className="head"><ShoppingCartCheckoutIcon/></Stack>
               <Stack direction="column" className="head"><Typography>Cart</Typography></Stack>
               </Stack>
               
            </Stack>
            </Box>
        </div>
    </> );
}
 
export default Options;