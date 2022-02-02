import { useState } from "react";

const BlogPost = ( {post, posts, setPosts} ) => {
    const [updatePost, setUpdatePost] = useState({title: post.title, text: post.text});
    const [showEditor, setShowEditor] = useState(false);


    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
            <p>{post.date.toLocaleDateString()}</p>
            <button onClick={() => setShowEditor(!showEditor)}>Edit</button>
            {showEditor &&
            <div>
                <input 
                    type="text" 
                    placeholder="New post title" 
                    value={updatePost.title} 
                    onChange={(e) => setUpdatePost({...updatePost, "title": e.target.value})} 
                />
                <textarea 
                    placeholder="New post text" 
                    value={updatePost.text} 
                    onChange={(e) => setUpdatePost({...updatePost, "text": e.target.value})}
                />
                <button 
                    onClick={ () => setPosts(posts.map((p) => post.id === p.id ? {...p, "title": updatePost.title, "text": updatePost.text} : p))}
                >
                    Update
                </button>
                <button 
                    onClick={() => setPosts(posts.filter((p) => post.id !== p.id))}
                >
                    Delete
                </button>
            </div>
            }
        </div>
    );
};

export default BlogPost;
