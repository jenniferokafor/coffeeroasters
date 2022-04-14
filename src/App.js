import GlobalStyles from '../src/components/shared/styled/Global.js';
import Header from './components/shared/Header.js';
import { ThemeProvider } from 'styled-components';
import Theme from './components/shared/Theme.js';
import HomeHero from './components/home/HomeHero.js';
import Collection from './components/home/Collection.js';
import WhyUs from './components/home/WhyUs.js';

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
    <>
    <GlobalStyles />
      <Header />
      <HomeHero />
      <Collection />
      <WhyUs />
    </>
    </ThemeProvider>
  );
}

