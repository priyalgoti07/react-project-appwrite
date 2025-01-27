import React from 'react'
import appWriteService from '../appwirte/config'
import { Link } from 'react-router-dom'
const PostCard = ({ $id, title, featuredImage }) => {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-200 rounded-xl px-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={appWriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className='rounded-xl' />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard