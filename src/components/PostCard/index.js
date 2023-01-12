import MainButton from 'components/MainButton';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Post.module.css';

export default function PostCard({ posts }) {
    return (
        <Link to={`/posts/${posts.id}`}>
            <div className={styles.post}>
                <img className={styles.capa} src={`/assets/posts/${posts.id}/capa.png`} alt="Capa" />

                <h2 className={styles.titulo}>{posts.titulo}</h2>
                <MainButton> Ler mais </MainButton>
            </div>
        </Link>
    )
}
