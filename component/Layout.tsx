import React from 'react'
import Header from './Header'
import styles from '../styles/Layout.module.css';
import Footer from './Footer'

function Layout({ children}) {
  return (
      <>
      <Header/>
      <main className={styles.height}>
    <div>{children}</div>

      </main>
      <Footer />
      </>
  )
}

export default Layout