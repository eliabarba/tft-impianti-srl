import Head from 'next/head';
import styles from '../styles/Home.module.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from '../components/navbar';

export default function Home() {
  return (
    <ResponsiveAppBar />
  )
}
