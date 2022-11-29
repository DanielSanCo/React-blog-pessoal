import { Grid } from '@material-ui/core';
import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';

const CadastroUsuario = () => {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                <form>
                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center'>Cadastre-se</Typography>
                    <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                    <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                    <TextField id='senha' label='senha' variant='outlined' name='senha' type='password' margin='normal' fullWidth />
                    <TextField id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' fullWidth />
                    <Box marginTop={2} textAlign='center'>
                        <Link to='/login' className='text-decoration-none'>
                            <Button variant='contained' color='secondary' className='btnCancelar'>
                                Cancelar
                            </Button>
                        </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>
                    </Box>
                </form>
                </Box>
            </Grid>
        </Grid>
    )
}

export default CadastroUsuario;