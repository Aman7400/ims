import { ChakraProvider } from '@chakra-ui/react'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import { AuthContextProvider } from '../contexts/AuthContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <AuthContextProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </AuthContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
