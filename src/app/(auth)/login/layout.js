import { PROJECT_NAME_TITLE_CASE } from '@/constants'
import React from 'react'

export const metadata = {
    title: PROJECT_NAME_TITLE_CASE + ' | Login'
}

const Layout = ({children}) => {
  return (
    <>
        {children}
    </>
  )
}

export default Layout