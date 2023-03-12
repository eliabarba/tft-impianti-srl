
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Button } from '@mui/material'


export default function LandingHero(props){
    return(
        <Container maxWidth="false">
            <Paper
                sx={{
                    position: 'relative',
                    backgroundColor: 'grey.800',
                    color: '#fff',
                    mb: 4,
                    marginTop:'2px',
                    marginBottom: '2px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        backgroundColor: 'rgba(0,0,0,0.4)',
                    }}
                />

        <Button href="#" fullWidth >
                <Grid container>
                    <Grid item md={6}>
                        <Box
                            sx={{
                                position: 'relative',
                                p: { xs: 2, md: 6 },
                                pr: { md: 0 },
                                minHeight:'15vh'
                                
                                
                            
                            }}
                        >
                           
                            <Typography component="h4" variant="h5" color="darkgrey" gutterBottom maxWidth="70%">
                            {props.titolo}
                            </Typography>  
                            <Typography component="h5" color="coral" paragraph>
                            {props.descrizione}
                            </Typography>
                            
                            
                        </Box>
                    </Grid>
                </Grid>
            </Button>
            </Paper>
        </Container>     
    )
}
/*<Link variant="subtitle1" href="#">
                            {props.textlink}
                            </Link>*/
                            