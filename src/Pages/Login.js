import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import metamask from '../assets/images/metamask.png';
import walletconnect from '../assets/images/walletconnect.png';
import walletlink from '../assets/images/walletlink.png';
import facebook from '../assets/images/facebook.png'
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 148,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Login() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        marginTop: 5,
        maxWidth: 500,
        flexGrow: 1,
        gridTemplateColumns: { md: '1fr 1fr' },
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={1}>
        
        <Grid item xs={12} sm container >
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              You need to sign in to see this page
              </Typography>
              <Typography variant="body2" gutterBottom>
              Sign in using one the providers below:


              </Typography>
              
            </Grid>
           
          </Grid>
        </Grid>
      </Grid>
      

    <Grid container spacing={2}>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={12} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
                <Item key="16" elevation="16">
                <ButtonBase sx={{ width: 128, height: 88, marginTop: 3 }}>
                        <Img alt="complex" src={metamask} />  
                    </ButtonBase>
                    <Typography variant="h6" gutterBottom>
             Metamask 
              </Typography>
                </Item>
                <Item key="16" elevation="16">
                <ButtonBase sx={{ width: 128, height: 88, marginTop: 3 }}>
                        <Img alt="complex" src={walletconnect} />
                    </ButtonBase>
                    <Typography variant="h6" gutterBottom>
             Wallet Connect 
              </Typography>
                </Item>
                <Item key="16" elevation="16">
                <ButtonBase sx={{ width: 128, height: 88, marginTop: 3 }}>
                        <Img alt="complex" src={walletlink} />
                    </ButtonBase>
                    <Typography variant="h6" gutterBottom>
             Coinbase 
              </Typography>
                </Item>
                <Item key="16" elevation="16">
                <ButtonBase sx={{ width: 128, height: 88, marginTop: 3 }}>
                        <Img alt="complex" src={facebook} />
                    </ButtonBase>
                    <Typography variant="h6" gutterBottom>
             Facebook 
              </Typography>
                </Item>
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
    </Paper>
  );
}
