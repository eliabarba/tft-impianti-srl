import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Container } from '@mui/system';
import ResponsiveAppBar from '../components/navbar';
import LandingHero from '../components/landinghero';
import LanguageRounded from '@mui/icons-material/LanguageRounded';


export default function Home() {
  return (
  <>
  <ResponsiveAppBar />
  <LandingHero 
  titolo="IMPIANTI IDRAULICI INDUSTRIALI, CASE E CONDOMINI"
  descrizione="piccola descrizione scritta a cazzo su cosa facciamo in questo settore"
  textlink="scopri di più"
  />
  <LandingHero 
  titolo="RISTRUTTURAZIONE IMPIANTO IDRAULICO BAGNO"
  descrizione="piccola descrizione scritta a cazzo su cosa facciamo in questo settore"
  textlink="scopri di più"
  />
  <LandingHero 
  titolo="INTERVENTO RIPARAZIONE/ SOSTITUZIONE CALDAIA"
  descrizione="piccola descrizione scritta a cazzo su cosa facciamo in questo settore"
  textlink="scopri di più"
  />
  </>
    
  )
}
