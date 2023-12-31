import * as React from 'react'
import Styles from './index.module.css'
import IndexPage from '@/pages/IndexPage'

function Layout() {
  return (
    <div className={Styles.layout}>
      <IndexPage />
    </div>
  )
}

export default Layout
