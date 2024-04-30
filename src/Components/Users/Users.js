'use client'
import { useEffect, useState } from "react";


const Users = () => {
    const [users, setusers] = useState([])
    useEffect( ()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( res => res.json())
        .then(data => setusers(data))
    } , [])
    return (
        <div>
            users length : {users.length}
            <div className="grid grid-cols-4 gap-5">
                {
                    users.map( user => <div key={user.id} className="card  bg-base-100 shadow-xl ">
               
                    <div className="card-body">
                      <h2 className="card-title">Name:{user.name}</h2>
                      <p>email:{user.email}</p>
                      <span>street{user.address.street}</span>
                      <span>city:{user.address.city}</span>
                     
                 
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Users;