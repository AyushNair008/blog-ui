import React from 'react'
import Home from './Home'
import UsersList from './UsersList'
import PostList from './PostList'
import UsersShow from './UsersShow'
import ShowPost from './ShowPost'
import {BrowserRouter,Route,Link} from 'react-router-dom'

function App(props){
  return(
      <BrowserRouter>
          <div>
              <Link to='/'>Home</Link>
              <Link to='/users'>Users</Link>
              <Link to='/posts'>Post</Link>
              <Route path='/' component={Home} exact={true}/>
              <Route path='/users' component={UsersList} exact={true}/>
              <Route path='/users/:id' component={UsersShow} />
              <Route path='/posts' component={PostList} exact={true} />
              <Route path='/posts/:id' component={ShowPost} />
          </div>
      </BrowserRouter>
  )
}
export default App