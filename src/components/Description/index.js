import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Chip from "@mui/material/Chip"
import Rating from "@mui/material/Rating"
import Button from "@mui/material/Button"
import Divider from '@mui/material/Divider';
import photo from "../../media/yogaClip.png"

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <Card
          sx={{
              maxWidth: "100%",
              margin: "10px",
              fontSize: "30px",
          }}
      >
          <Typography component="div" style={{ margin: 10 }}>
              <Chip
                  avatar={
                      <Avatar alt={props.info.author.name} src={props.info.author.photo || null}>
                          {props.info.author.photo ? null : props.info.author.name.charAt(0)}
                      </Avatar>
                  }
                  label={props.info.author.name}
                  color="secondary"
                  size="large"
                  variant="filled"
                  style={{
                      float: "right",
                      marginRight: "20px",
                      marginTop: "10px",
                  }}
              />
              <div
                  style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: 20,
                  }}
              >
                  <span
                      style={{
                          fontSize: "25px",
                          fontWeight: 600,
                      }}
                  >
                      {props.info.title}
                  </span>
                  <span
                      style={{
                          fontSize: "10px",
                      }}
                  >
                      {props.info.date}
                  </span>
              </div>
          </Typography>
          <div
              style={{
                  display: "flex",
                //   flexFLow: "row nowrap",
                  placeContent: "center",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  justifyContent: "space-evenly",
                //   flexDirection: "row",

              }}
          >
              <CardMedia
                  component="img"
                  height="380"
                  image={props.info.photo || photo}
                  alt="Fit yogi"
                  style={{
                      margin: "10px",
                      width: "500px",
                      maxHeight: "fit-content",
                  }}
              />
                <Typography variant="body2" color="text.secondary" style={{
                    fontSize: 20,
                    float: "right",
                    // width: "40%",
                    margin: 10,
                }}>
                    {props.info.description1}
                </Typography>
          </div>

          <CardActions disableSpacing style={{ justifyContent: "space around", marginLeft: 5 }}>
              <IconButton aria-label="add to favorites">
                  <span className="material-icons" style={{ color: "" }}>
                      favorite
                  </span>
              </IconButton>
              <IconButton aria-label="share">
                  <span className="material-icons">share</span>
              </IconButton>
          </CardActions>
              <Typography style={{ alignSelf: "center", textAlign: "center", fontSize: 18, fontWeight: 700 }}>{props.info.tagline}</Typography>
          <CardContent>
              <Typography style={{ fontSize: 20, fontWeight: "bold" }}>Description: </Typography>
            <br></br>
              <div className='Description_section'
                  style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      margin: 20,
                  }}
              >
                  <Typography component="div" style={{ fontSize: 15, fontWeight: 700 }}>
                      {props.info.description2}
                      <ul
                          style={{
                              fontSize: 13,
                              fontWeight: 400,
                              textAlign: "left",
                              marginLeft: 10,
                              lineHeight: 2,
                          }}
                      >
                          {props.info.des2.map((values, index, array) => (
                              <li key={index}>{values}</li>
                          ))}
                      </ul>
                  </Typography>
                  <Divider orientation="vertical" flexItem />
                  <Typography component="div" style={{ fontSize: 15, fontWeight: 700 }}>
                      {props.info.description3}
                      <ul
                          style={{
                              fontSize: 13,
                              fontWeight: 400,
                              textAlign: "left",
                              marginLeft: 10,
                              lineHeight: 2,
                          }}
                      >
                          {props.info.des3.map((values, index, array) => (
                              <li key={index}>{values}</li>
                          ))}
                      </ul>
                  </Typography>
                  <Divider orientation="vertical" flexItem />
                  <Typography component="div" style={{ fontSize: 15, fontWeight: 700 }}>
                      {props.info.description3}
                      <ul
                          style={{
                              fontSize: 13,
                              fontWeight: 400,
                              textAlign: "left",
                              marginLeft: 10,
                              lineHeight: 2,
                          }}
                      >
                          {props.info.des3.map((values, index, array) => (
                              <li key={index}>{values}</li>
                          ))}
                      </ul>
                  </Typography>
              </div>

          </CardContent>

          <CardActions style={{ justifyContent: "center", paddingRight: 20, paddingBottom: 15 }}>
              <Button size="large" style={{ marginRight: 20 }}>
                  Learn More
              </Button>
              <Button size="large" variant="contained">
                  <span className="material-icons" style={{ fontSize: 20, marginRight: 10 }}>
                      add_shopping_cart
                  </span>
                  Buy
              </Button>
          </CardActions>
      </Card>
  )
}
