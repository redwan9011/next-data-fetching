import React from 'react';

const postPage = async() => {
    const res = await fetch('http://localhost:5000/post', {
        // cache: 'force-cache'

        // next: {
        //     revalidate: 5,
        // }
        cache: 'no-store'
    })
    const posts = await res.json()
    // console.log(posts);
    return (
        <div>
            <h1>Total Postssssssssss: {posts.length} </h1>
           <div className='grid grid-cols-3 gap-7'>
           {
                posts.map(post => <div key={post.id} className="card  bg-base-100 shadow-xl ">
               
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p>{post.description}</p>
                  <p>likes: {post.likes_count} </p>
               
                </div>
              </div>)
            }
           </div>
    
        </div>
    );
};

export default postPage;