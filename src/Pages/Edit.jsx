import React, { useEffect, useState } from 'react'
import { Container, PostCard, PostForm } from '../Components'
import serivece from '../appwirte/config'
import { useNavigate, useParams } from 'react-router-dom'
const Edit = () => {
    const [post, setPost] = useState([])
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            serivece.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                }
            })
        }
        else {
            navigate("/")
        }
    }, [slug, navigate])
    return (
        post ? <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div> : null
    )
}

export default Edit