import React from 'react'
import { useParams } from 'react-router-dom'

export default function Post() {
    const params = useParams();
    return (
    <div>Post Renderizado foi o: {params.id}</div>
  )
}
