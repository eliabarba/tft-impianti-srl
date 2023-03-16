import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { shadows } from '@mui/system'

export default function PostInEvidenza(props) {
    return (
        <Container maxWidth="lg">
            <Paper elevation={5}
                sx={{
                    position: 'relative',
                    backgroundColor: 'grey.800',
                    color: '#fff',
                    mb: 4,
                    /*backgroundImage: 'url(' + post.immagine + ')',*/
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    borderRadius:'30px',
                    
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
                        borderRadius:'40px'
                    }}
                />
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                position: 'relative',
                                p: { xs: 3, md: 6 },
                                pr: { md: 0 },
                            }}
                        >
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                {props.titolo}
                            </Typography>
                            <Typography component="h5" color="inherit" paragraph>
                                {props.descrizione}
                            </Typography>
                            <Link variant="subtitle1" href="#">
                                {props.testoLink}
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}