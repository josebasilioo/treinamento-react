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
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// import './PostList.css';

// function PostList() {
//   const [data, setData] = useState({});
//   const [name, setName] = useState({});
//   const [isDark, setIsDark] = useState(false);

//   const requisition = async () => {
//     const response = await axios.get(`https://images-api.nasa.gov/search?q=${name.planet_name}`);
//     setData(response.data);
//   };

//   useEffect(() => {
//     requisition();
//   }, []);

//   console.log(data);

//   return (
//     <div className={isDark ? 'planet-section-dark': 'planet-section'}>
//       <p className="title">What about the space?</p>
//       <input className="input-planet" value={name.planet_name} onChange={(e) => setName({...name, planet_name: e.target.value })} />
//       {isDark ? (
//         <button className="dark" onClick={requisition}>Pesquisar</button>
//       ) : (
//         <button className="search" onClick={requisition}>Pesquisar</button>
//       )}
//       {data.collection && (
//         <img className="space-image" src={data.collection.items[0]?.links[0]?.href}></img>
//       )}
//     </div>
//   );
// }

// export default PostList;
