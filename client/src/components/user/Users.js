import React, { Fragment } from 'react'

import { useEffect, useState } from 'react';
import Card from '../../UI/Card/Card';
import useHttp from '../../costum-hook/usehttp/use-http';
import classes from'./users.module.css'

const Users = () => {
    const [post, setPost] = useState([])
    const { isLoading, reqError, sendRequest: getData } = useHttp()
  
    useEffect(() => {
      getData(
        { url: 'https://jsonplaceholder.typicode.com/users' }, setPost
      )
    }, [])
  return (
    <Fragment>
        <Card>
        {isLoading && <h1>isLoading</h1>}
        {reqError && <p>{reqError}</p>}
        {post.length > 0 && <h1>Number posts:{post.length}</h1>}
        {post.length > 0 && post.map(item => {
          return <Card key={item.id}>
            <h2>USER:{item.id}</h2>
            <div className={classes.users}>
                
              <div>
                <h2>User</h2>
                <h3>Name:{item.name}</h3>
                <h3>Username:{item.username}</h3>
                <h3>Email:{item.email}</h3>
                <h3>Phone:{item.phone}</h3>
                <h3>Website:{item.website}</h3>
              </div>
              <section>
                <h3>Address</h3>
                <h4>Street:{item.address.street}</h4>
                <h4>Suite:{item.address.suite}</h4>
                <h4>City:{item.address.city}</h4>
                <h4>Zipcode:{item.address.zipcode}</h4>
                <article>
                  <h4>Geo</h4>
                  <h5>Lat:{item.address.geo.lat}</h5>
                  <h5>Lng:{item.address.geo.lng}</h5>
                </article>
              </section>
              <section>
                <h4>Company</h4>
                <h5>Name:{item.company.name}</h5>
                <h5>Catch Phrase:{item.company.catchPhrase}</h5>
                <h5>BS:{item.company.bs}</h5>
              </section>
            </div>

          </Card>
        })}
      </Card>
    </Fragment>
  )
}

export default Users