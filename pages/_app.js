import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from './components/ThemeContext.js.js';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider >
  );
}

