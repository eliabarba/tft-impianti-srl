import AvatarChips from "./avatarchips"
import { Box, Container, height, Stack } from "@mui/system"
import { Button, Typography } from "@mui/material"
import CustomTypographyLevel from "./gradienttext"
import SelectAvatar from "./scelta avatar"
import {noWrap} from "@emotion/styled"
import Grid from "@mui/material"
import PostInEvidenza from "./cardcontatto"

export default function Contact (){
    return(
        <Container maxWidth={false}
        sx={{
            paddingTop:"50px",
            paddingLeft:'',
            height:"45vh",
            alignContent:"center"
            }}>
               <CustomTypographyLevel
               testo="contattaci"
               />
            <Box flexDirection="row" alignItems="center" justifyContent="center">
                <PostInEvidenza
                titolo="Antonio"
                descrizione="Ciao, sono il fondatore dell TFT, ma lavoro e non sto a casa a grattarmi! Per qualsiasi problema"
                testoLink="chiamami"
                />
                <PostInEvidenza
                titolo="Chiara"
                descrizione="Ciao, sono la segretaria dell'ufficio TFT, per qualsiasi informazione, dubbio o difficoltà nella richiesta di preventivo"
                testoLink="chiamami"
                />
                <PostInEvidenza
                titolo="Elia"
                descrizione="Ciao, sono il programmatore di questo sito web, se trovi qualche bug o qualche modifica da apportare"
                testoLink="chiamami"
                />
            </Box>
            
            
            
        </Container>
        
    )
}