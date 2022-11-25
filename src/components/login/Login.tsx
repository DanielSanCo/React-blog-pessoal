import React from 'react'
import { Grid, Typography, TextField, Button } from '@material-ui/core'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box padding={20}>
                    <form>
                        <Typography>Entrar</Typography>
                        <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth/>
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' fullWidth/>
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decoration: none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center'>Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} style={{
                backgroundImage: 'url(https://images-ext-1.discordapp.net/external/Crc25VKJ9F7aNLZQciU4iTtrCw6jy79uME_g7AYY_Qg/https/i.imgur.com/d5bMdDJ.jpg?width=462&height=664")',
                backgroundRepeat: 'no-repeat', width: '100vw', backgroundSize: 'cover', backgroundPosition: 'center'
            }}>

            </Grid>
        </Grid>
    )
}

export default Login;