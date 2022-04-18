import GlobalStyles from '../src/components/shared/styled/Global.js';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Theme from './components/shared/Theme.js';
import Views from './Views.js';

export default function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={Theme}>
    <GlobalStyles />
      <Views />
    </ThemeProvider>
    </BrowserRouter>
  );
}

