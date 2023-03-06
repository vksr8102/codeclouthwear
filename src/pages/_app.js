import Footer from '@/components/footer/footer/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (

    <>
    <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
)
}
