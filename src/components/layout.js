import * as React from "react"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {


  return (
    <>
    <GlobalStyle/>
      <Header/>
      <main>{children}</main>
    </>
  )
}

export default Layout
