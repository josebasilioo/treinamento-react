import { useState, useEffect } from 'react';
import axios from 'axios';

import './PostList.css';

function PostList() {
  const [posts, setPosts] = useState({});
  const [planet, setPlanet] = useState({});
  const [isDark, setIsDark] = useState(false);

  const loadPosts = async () => {
    const res = await axios.get(`https://images-api.nasa.gov/search?q=${planet.planet_name}`);
    setPosts(res.data);
  };

  return (
    <div className={isDark ? 'planet-section-dark': 'planet-section'}>
      <p className="title">What about the space?</p>
      <button onClick={() => setIsDark(!isDark)}>DarkMode</button>
      <input className="input-planet" value={planet.planet_name} onChange={(e) => setPlanet({...planet, planet_name: e.target.value })} />
      {isDark ? (
        <button className="dark" onClick={loadPosts}>Pesquisar</button>
      ) : (
        <button className="search" onClick={loadPosts}>Pesquisar</button>
      )}
         {posts.collection && (
           <>
             <p className={isDark ? 'description-dark' : 'description'}>{posts.collection.items[0]?.data[0]?.title}</p>
             <img className="space-image" src={posts.collection.items[0]?.links[0]?.href}></img>
             <p className={isDark ? 'description-dark' : 'description'}>{posts.collection.items[0]?.data[0]?.description}</p>
           </>
         )}
    </div>
  );
}

export default PostList;
