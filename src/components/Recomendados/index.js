import React from 'react'
import posts from 'json/posts.json'
import { useParams } from 'react-router-dom'
import PostCard from 'components/PostCard'
import styles from './Recomendados.module.css'

export default function Recomendados() {
    const params = useParams()
    console.log(params.id)

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(params.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)

    return (
        <div className={styles.recomendadosContainer}>
            <h1>Outros posts que você pode gostar:</h1>
            <div className={styles.recomendados}>
                {
                    postsRecomendados.map(post => {
                        return (
                            <div key={post.id} className={styles.post}>
                                <PostCard posts={post}></PostCard>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
