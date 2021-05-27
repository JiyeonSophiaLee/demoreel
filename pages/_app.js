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


function MyApp({ Component, pageProps }) {
  return (

      <Component {...pageProps}/>

  )
}

export default MyApp
