import '../styles/globals.css'
import '../styles/css/bootstrap.min.css'
import '../styles/css/animate.min.css'
import '../styles/css/meanmenu.css'
import '../styles/css/boxicons.min.css'
import '../styles/css/owl.carousel.min.css'
import '../styles/css/owl.theme.default.min.css'
import '../styles/css/nice-select.min.css'
import '../styles/css/style.css'
import '../styles/css/dark.css'
import '../styles/css/responsive.css'



import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    
  )
}

export default MyApp
