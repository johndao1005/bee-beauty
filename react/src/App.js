import React,{useEffect , useState} from 'react'
import Router from "./pages/00_router/Router";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "./App.css";
import {fetchAPI, getStrapiMedia} from './ultis/api'
// import { ThemeProvider } from '@mui/system';
// import theme from './theme'

function App() {
  const [siteName, setSiteName] = useState('Bee-Beauty')
  const [favicon, setFavicon] = useState('')
  const [defaultSeo, setDefaultSeo] = useState(null)
  useEffect(() => {
    getData()
    return () => {
    }
  }, [])

  const getData = async () => {
    const data = await fetchAPI("/global", {
      // decide on what data should populate
      populate: {
        favicon: "*",
        defaultSeo: {
          populate: "*",
        },
      },
    }).then((result) => {
      if(result != null){
        const { siteName,favicon, defaultSeo} = result?.data?.attributes
        setSiteName(siteName)
        setDefaultSeo(defaultSeo)
        setFavicon(getStrapiMedia(favicon))
      } else{
        throw new Error("cant connect")
      }
    }).catch((err) => {
      console.log(err)
    });
  }
  // TODO Apply theme and later on state manager if needed
  return (
    <>
      <HelmetProvider>
        {/* <ThemeProvider theme={theme}> */}
        <Router />

        {/* </ThemeProvider> */}
        <Helmet
          defaultTitle="Bee Beauty">
          {/* html attributes */}
          <html lang="en" amp />
          {/* body attributes */}
          <body className="root" />
          <title>{siteName}</title>
          <link rel="icon" type="image/png" sizes="16x16" href={!favicon?'/favicon':favicon} />
          {/* multiple meta elements */}
          <meta name="title" content={!defaultSeo?.metaTitle?defaultSeo?.metaTitle:"Bee-Beauty"} />
          <meta name="description" content={!defaultSeo?.metaDescription?defaultSeo?.metaDescription:"A community page"} />
        </Helmet>
      </HelmetProvider>
    </>
  );
}
export default App;
