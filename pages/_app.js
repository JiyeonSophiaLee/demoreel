import '../styles/globals.scss'
import '../styles/homeLayout.scss'
import '../styles/infoLayout.scss'
import '../styles/imageLayout.scss'
import '../styles/skillLayout.scss'
import '../styles/threeJsLayout.scss'
import '../styles/loaderLayout.scss'
// import { createStore } from 'redux';
// import allReducers from '../redux/reducers'


// const store = createStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// -------------this is turning off google anaytics----------------- 


function MyApp({ Component, pageProps }) {
  return (

      <Component {...pageProps}/>

  )
}

export default MyApp


// // -------------this is turning on google anaytics-----------------
// import { useEffect } from 'react'
// import { useRouter } from 'next/router'
// import * as gtag from '../lib/gtag'

// const App = ({ Component, pageProps }) => {
//   const router = useRouter()
//   useEffect(() => {
//     const handleRouteChange = (url) => {
//       gtag.pageview(url)
//     }
//     router.events.on('routeChangeComplete', handleRouteChange)
//     return () => {
//       router.events.off('routeChangeComplete', handleRouteChange)
//     }
//   }, [router.events])

//   return <Component {...pageProps} />
// }

// export default App