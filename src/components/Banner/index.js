import React from 'react';
import styles from './Banner.module.css';
import circuloColorido from '../../assets/circulo_colorido.png'
import foto from '../../assets/minha_foto.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá, mundo!
        </h1>
        <p className={styles.paragrafo}>
          Eiusmod mollit magna quis deserunt aliquip cillum aliquip ipsum aliqua eiusmod irure.
        </p>
      </div>
      <div className={styles.imagens}>
        <img className={styles.circuloColorido} src={circuloColorido} alt="Círculo colorido" aria-hidden={true}/>
        <img className={styles.minhaFoto} src={foto} alt="Minha foto" aria-hidden={true} />
      </div>
    </div>
  )
}
