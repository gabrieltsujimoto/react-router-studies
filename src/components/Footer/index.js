import React from 'react';
import styles from './Footer.module.css';
import {ReactComponent as Marca} from 'assets/marca_registrada.svg'

export default function Footer() {
  return (
    <div className={styles.footer}>
       <Marca /> Desenvolvido por Gabriel.
    </div>
  )
}
