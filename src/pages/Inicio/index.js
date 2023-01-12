import PostCard from "components/PostCard";
import styles from './Inicio.module.css';
import posts from 'json/posts.json';


const Inicio = () =>{
    return(
        <main>
            <ul className={styles.posts}>
                {posts.map(post =>{
                    return(
                        <li key={post.id}>
                            <PostCard posts={post}/>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Inicio;