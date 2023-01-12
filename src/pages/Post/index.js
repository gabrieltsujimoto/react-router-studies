import React from 'react'
import { useParams, Routes, Route } from 'react-router-dom'
import posts from 'json/posts.json'
import PostModel from 'components/PostModel';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import './Post.css';
import DefaultPage from 'components/DefaultPage';
import NotFound from 'pages/NotFound';
import Recomendados from 'components/Recomendados';
import ScrollToTop from 'react-scroll-to-top';
import { AiOutlineToTop } from 'react-icons/ai'

export default function Post() {
  const params = useParams();

  const post = posts.find((post) => post.id === Number(params.id))

  if (!post) {
    return <NotFound />
  }


  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route index element={

          <PostModel fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
            <div className='post-markdown-container'>
              <ReactMarkdown>{post.texto}</ReactMarkdown>
            </div>
            <Recomendados />
            <ScrollToTop className='post-back-to-top' component={<AiOutlineToTop size={32}/>} smooth />
          </PostModel>
        } />
      </Route>
    </Routes>
  )
}
