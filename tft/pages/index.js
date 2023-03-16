import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Container } from '@mui/system';
import ResponsiveAppBar from '../components/navbar';
import LandingHero from '../components/landinghero';
import LanguageRounded from '@mui/icons-material/LanguageRounded';
import Landing from '../components/landingpage';
import Contact from '../components/contact';


export default function Home() {
  return (
  <>
  
  <ResponsiveAppBar />
  <Landing
  imageUrl="https://cdn.we-wealth.com/-/media/Images/summary/college-americani-il-non-aumento-delle-tasse-e-da-record.png?rev=dec6c04ac7904e55b50eef5485cd67fb&modified=20210830131241"
  titolo="IL FUTURO NELLE NOSTRE MANI"
  />
  <LandingHero 
  titolo="IMPIANTI TERMOIDRAULICI"
  descrizione="piccola descrizione scritta a cazzo su cosa facciamo in questo settore"
  textlink="scopri di più"
  />
  <LandingHero 
  titolo="INSTALLAZIONE E RIPARAZIONE PANNELLI SOLARI"
  descrizione="piccola descrizione scritta a cazzo su cosa facciamo in questo settore"
  textlink="scopri di più"
  />
   <LandingHero 
  titolo="RISTRUTTURAZIONE BAGNI"
  descrizione="piccola descrizione scritta a cazzo su cosa facciamo in questo settore"
  textlink="scopri di più"
  />

  <Contact/>
  
 

  </>
    
  )
}
