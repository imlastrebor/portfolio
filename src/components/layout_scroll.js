/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import MainMenu from "./MainMenu"

import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,700&display=swap');
body, html{
  font-family: 'Roboto Mono', monospace;
  margin: 0 !important;
  padding: 0 !important;
  /* overflow:hidden; */
  height:100%;
}
`
const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding-top: 100px;
  height: 100%;
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>{children}</LayoutWrapper>
  </div>
)

export default Layout
