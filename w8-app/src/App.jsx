import { useState } from "react";
import BlogPost from "./components/BlogPost";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [inputPost, setInputPost] = useState({title: "", text: ""});

  const addPost = (event) => {
    setPosts(
      [
        ...posts,
        {
          id: Math.floor(Math.random()*10000),
          title: inputPost.title,
          text: inputPost.text,
          date: new Date()
        }
      ]
    );
    setInputPost({title: "", text: ""});
  };

  return (
    <div className="App">
      <h1>Blog Posts</h1>
      <div>
        <input 
          type="text" 
          placeholder="Post title" 
          value={inputPost.title} 
          onChange={(e) => setInputPost({...inputPost, "title": e.target.value})}
        />
        <textarea 
          placeholder="Post text"
          value={inputPost.text} 
          onChange={(e) => setInputPost({...inputPost, "text": e.target.value})}
        />
        <button onClick={addPost}>Create Post</button>

        <button onClick={() => setPosts([])}>Clear Posts</button>
      </div>

      <hr />


      {posts.map(post => <BlogPost key={`${post.date.toISOString()}-${post.id}`} post={post} posts={posts} setPosts={setPosts}/>)}
    </div>

  );
}

export default App;
