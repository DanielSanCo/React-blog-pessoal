import React from 'react';
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';

const Home = () => {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className="botao">Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className="postagens">
                </Grid>
            </Grid>
        </>
    );
}

export default Home;

/*import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <div className="main">
                    <div className="radius">
                        
                        <a href="https://www.linkedin.com/in/daniel-santos-corr%C3%AAa-007979217/" target={'_blank'}>
                            <div>
                                <h2>Feito por</h2>
                                <h1>Daniel Santos</h1>
                                <img src="./images/linkedinLogo.png" alt="" />
                            </div>
                        </a>
                    </div>
                <img src="./images/crimsonDragonArch.png" alt="" className="dragon"/>
            </div>

            <div className="firePage">
                <div className="divAbsolute"></div>
                <img src="https://i.pinimg.com/originals/5e/5c/aa/5e5caae1a1f411f7d35d341440567906.gif" alt="" />
            </div>

            <div className="line"></div>

            <Footer />
        </div>
    )
}

export default Home;*/