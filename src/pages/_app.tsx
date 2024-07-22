// src/pages/_app.tsx
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import "@fontsource/jost";
import '../app/globals.css';
import { AppProps } from 'next/app';
import Header from '../Content/Components/header';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import dynamic from 'next/dynamic'
const CoockiesWarning = dynamic(() => import('../Content/Components/cookies'), {
  ssr: false,
});

const theme = extendTheme({
  breakpoints: {
    sm: '450px',
    md: '700px',
    lg: '960px',
    xl: '1200px',
  },
  colors: {
    brand: {
      clear_black: '#1A202C',
      gray: '#4A5568',
      blue: 'linear-gradient(to right, rgba(0, 123, 255), rgba(33, 180, 253))',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        fontFamily: 'Jost, sans-serif',
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [isComputerWidth, setIsComputerWidth] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      ReactGA.initialize('G-H00C9148KH');
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });

      const handleResize = () => {
        setIsComputerWidth(window.innerWidth > 900);
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Header isComputerWidth={isComputerWidth} />
      <Component {...pageProps} />
      <CoockiesWarning />
    </ChakraProvider>
  );
}

export default MyApp;
