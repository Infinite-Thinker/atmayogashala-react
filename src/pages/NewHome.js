import { Divider, Grid, Snackbar, Toolbar, Typography } from "@mui/material"
import React from "react"
import backPath from "../backPath"
import pp from "../media/product4.jpg"
import Card from "../components/HomeCard"
import { display } from "@mui/system"

function NewHome() {
    return(
        <div style={{
            height: "100vh",
            width: "100vw",
            backgroundImage: "url(https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8eW9nYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            justifyContent: "center",
            alignItems: "center",   
        }}>
            <Typography variant="body1" color="initial" style={{
                fontWeight: "bold",
                fontSize: "70px",
                color: "#ffffff",
                padding: "30px",
                textAlign: "left",
                letterSpacing: 6,
            }}>
                ONE MIN & 10<br/>
                <Divider orientation="horizontal" textAlign="left" variant="inset">BREATHS</Divider>

            </Typography>
            <div style={{
                float: "right",
                marginRight: "15px",
                marginTop: "-80px",

                padding: "10px",
                justifyContent: "space-evenly",
                display: "flex",
            }}>
                <span className="material-icons">email</span>
                <span className="material-icons">call</span>
                <span className="material-icons">question_answer</span>
                <span className="material-icons">contact_page</span>
            </div>

            <Grid container spacing = {2} style={{
                margin: "10px",
                padding: "10px",
            }}>
            <Card
                info={{
                    photo: pp,
                    chapter: "Move",
                }}
            ></Card>
            <Card
                info={{
                    photo: pp,
                    chapter: "Move",
                }}
            ></Card>
            <Card
                info={{
                    photo: pp,
                    chapter: "Move",
                }}
            ></Card>
            <Card
                info={{
                    photo: pp,
                    chapter: "Move",
                }}
            ></Card>

            </Grid>

        </div>
    )
}

export default NewHome