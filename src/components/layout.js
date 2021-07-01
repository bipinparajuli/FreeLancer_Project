import * as React from "react"
import Header from "./Header"
import Footer from './Footer'
import { GlobalStyle } from "./styles/GlobalStyles"
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {


  return (
    <>
    <GlobalStyle/>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout
