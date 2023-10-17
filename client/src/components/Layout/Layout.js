import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet , HelmetProvider} from "react-helmet-async";
import { Toaster } from 'react-hot-toast';

const Layout = ({children,title,description,keywords,author}) => {
  return (
    <HelmetProvider>
    <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
           
    <Header/>
      <main style={{minHeight:"70vh"}}>
       <Toaster /> 
       {/* It Will give Registration successful message  */}
      {children}
      </main>
    <Footer/>
    </div>
    </HelmetProvider>
  )
}

export default Layout
