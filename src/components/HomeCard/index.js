import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { PropaneSharp } from '@mui/icons-material';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ 
        maxWidth: 345,
        margin: 2,
     }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.info.photo}
          alt="green iguana"
        />
          <Typography gutterBottom variant="h5" component="div" style={{
            margin: "10px",
            textAlign: "left",
          }}>
            {props.info.chapter}
          </Typography>
      </CardActionArea>
    </Card>
  );
}
