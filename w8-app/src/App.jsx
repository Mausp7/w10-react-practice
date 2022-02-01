import { useState } from "react";

const dummyPosts = [
  {
    title:"Cím 1",
    text: "Postszöveg 1",
    date: "2022-02-01"
  }
];

const App = () => {
  const [posts, setPosts] = useState(dummyPosts);
  const [inputPost, setInputPost] = useState({title: "", text: ""});

  const todaysDate = new Date();

  const addPost = (event) => {
    setPosts(
      [
        ...posts,
        {
          title: inputPost.title,
          text: inputPost.text,
          date: todaysDate.toLocaleDateString()
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


      {posts.map((post, index) => {
        return (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
            <p>{post.date}</p>

            <input type="text" placeholder="New post title" />
            <textarea placeholder="New post text" />
            <button>Update</button>
            <button onClick={() => setPosts(posts.filter((p, i) => i !== index ? p : null))} >Delete</button>
          </div>
        );
      })}
    </div>

  );
}

export default App;
