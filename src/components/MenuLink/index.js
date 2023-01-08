import React from 'react'
import styles from './MenuLink.module.css'
import { Link, useLocation } from 'react-router-dom'

export default function MenuLink({children, to}) {
    const location = useLocation()
    return (
        <Link
            className={`
            ${styles.link} 
            ${location.pathname === to ? styles.linkDestacado : ''}
          `}
            to={to}>{children}</Link>
    )
}
