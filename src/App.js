import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/')
    .then((response) => {
      setPosts(response.data)
      
    })
    .catch(() => {
      console.log('deu ERRADO')
    })
  }, [])


	return(
		<div className="app">

      <h1 className="title">Lista Teste</h1>
    
    
			<div className="cards">

        {posts.map((post, key) => {

          return(
            <div className="card" key={key}>
              
              <div className="card-body" >
                  <p>Name: {post.name}</p>
                  <p>Address: {post.address}</p>
                  <p>Category: {post.category}</p>
                  <p>City: {post.city}</p>
                  <p>Country: {post.country}</p>
                  <p>Description: {post.description}</p>
                  <p>State: {post.state}</p>
                  <p>Website: {post.website}</p>
              </div>
            </div>
          )
        })}

			</div>
		</div>
	)
}

export default App;

