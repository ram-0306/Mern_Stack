'use client'
import {faThumbsUp  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

const CommentApp = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComments] = useState('');
    const [liked, setLiked] = useState(false);

    const addComment = (e) => {
        if (newComment.trim() !== '' ){  

            console.log(e.target.value);

            const obj = {text: newComment ,published:false};
            setComments([ obj,...comments]);
            setNewComments('');
        
        }
    };

    const handleChange = (e) => {
        setNewComments(e.target.value);
    };

    const removeComment = (index) => {
        const temp = comments;
        temp.splice(index, 1);
        setNewComments(...temp);
    };
  
    const handleLikeClick = (index) => {   
        setLiked(!liked); 
    };

  return (
    <div> 
        <div className='container mt-5 border-3 border-primary'>

            <div className='row gap-5 d-flex justify-content-center'>

                <div className='col-md-5 shadow p-4 border'>
                    <h1 className='text-center'>Add New Comment</h1>
                    <input value={newComment} onChange={handleChange} type='text' className='form-control border border-primary' placeholder='Write comments here...'/>
                    <button onClick={addComment} className='btn btn-primary d-flex mx-auto mt-3' >ADD COMMENT</button>
                </div>

                <div className='col-md-5 shadow p-4 border'>
                <h1 className='text-center'>Your Comments</h1>
                {
                comments.map((comment, index)=>{
                    return  <div key={index} className='d-flex justify-content-between border-1 border-primary'>
                     <p>{comment.text}</p>
                     {/* <FontAwesomeIcon icon={faThumbsUp} size='2x'  onClick={handleLikeClick} style={{ color: liked ? 'blue' : 'gray' }}/> */}
                     <FontAwesomeIcon icon={faThumbsUp} size='2x'  onClick={()=>(handleLikeClick(index))}style={{ color: liked ? 'blue' : 'gray' }}/>
                    
                     <button onClick={()=>(removeComment(index))} className='btn btn-primary'>DELETE</button>
                    </div>
                })
                }
                </div>
                
    
        </div>

            
        </div>
    </div> 
  )
}

export default CommentApp