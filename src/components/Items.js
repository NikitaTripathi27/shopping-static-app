import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material"
const Items = ({itemlist ,setitemlist}) => {
  console.log(itemlist,"itemlist")
 
    return ( 
    <>
    <div>
      <h2 className='head-title'>Men And Women Fashion</h2>
    <Grid container spacing={2} display='flex' direction="row" p={2}>
        {itemlist.length > 0 ? itemlist.map((item)=>(
            <>
              <Grid item className="video-tile-link" xs={12} sm={12} md={6} lg={3} xl={3} key={item._id}>
                 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={item.image}
        title={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         ${item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.title}
        </Typography>
      </CardContent>
     
    </Card>
    </Grid>
            </>
        )):(
          <>
           <Grid item className="video-tile-link" xs={12} sm={12} md={6} lg={3} xl={3} key={itemlist._id}>
                 <Card sx={{ width: 345 ,height:200 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={itemlist.image}
        title={itemlist.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         ${itemlist.price}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          {itemlist.title}
        </Typography>
      </CardContent>
     
    </Card>
    </Grid>
          </>
        )}
   </Grid>
    </div>
    </> 
    );
}
 
export default Items;