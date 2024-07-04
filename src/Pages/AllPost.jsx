import React, { useEffect, useState } from 'react'
import serivece from '../appwirte/config'
import { Container } from 'postcss'
import { PostCard } from '../Components'
const AllPost = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        serivece.getPost([]).then((post) => {
            if (post) {
                setPosts(posts.documnets)
            }
        })
    }, [])
    return (
        <div className='w-full py-8 '>
            <Container>
                <div className='flex flex-wrap'>
                    {posts?.map((item) => (
                        <div key={item.$id} className='p-2 w-1/2'>
                            <PostCard post={item} />
                        </div>
                    )
                    )}
                </div>

            </Container>
        </div>
    )
}

export default AllPost