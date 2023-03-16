import { Box, Container, Stack } from "@mui/system";
import { Button, Paper, Typography } from "@mui/material";
import ParkSharpIcon from '@mui/icons-material/ParkSharp';
import styleFunctionSx from "@mui/system/styleFunctionSx";
import styled from "@emotion/styled";

export default function Landing(props) {
    return (
        <Container maxWidth={false}>
            <Paper
                sx={{
                    position: 'relative',
                    color: '#fff',
                    mb: 4,
                    height: '100vh',
                    backgroundImage: 'url(' + props.imageUrl + ')',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    padding: 0,
                    margin: 0,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover', // Centra l'immagine e la fa coprire l'intero sfondo senza bordi bianchi
                    backgroundPosition: 'center',

                }}>
                <Box
                    sx={{
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        height: '100%'
                    }}>
                    <Stack
                    sx={{
                        paddingTop:'100px',
                        alignItems:'center',
                        mb:4,
                        p: { xs: 3, md: 6 },
                        pr: { md: 0 },
                    }}>
                        <Typography variant="h4">
                            {props.titolo}
                        </Typography>    
                    </Stack>
                    <hr />
                    <Stack sx={{
                        alignItems:'center',
                        paddingTop:'200px',
                        mb:4,
                        p: { xs: 3, md: 6 },
                        pr: { md: 0 },
                    }}>
                    <Typography variant="h6">
                        SCOPRI COSA FACCIAMO PER L'AMBIENTE
                    </Typography> 

                    </Stack>

                    <Stack>
                    <Button sx={{height:'100px',}}>
                    <ParkSharpIcon/>
                    <Typography
                    sx={{color:'white'}}>
                    SCOPRILO QUI
                    </Typography>
                    <ParkSharpIcon/>
                    </Button>
                    </Stack>
                </Box>
                    
                
                   
                

            </Paper>
        </Container>
    )
}