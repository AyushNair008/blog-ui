import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UsersList extends React.Component{
    constructor(){
        super()
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            const posts=response.data
            this.setState({posts})
        })
        .catch((error)=>{
            console.log('error')
        })
    }
    render(){
        return(
        <Userslist company={this.state.posts}/>
        )
    }
}

function Userslist(props){
    return(
        <div>
                <h2> LIST OF POSTS -{props.company.length}</h2>
                
                <ul>
                    {props.company.map(post=>{
                        return <li key={post.id}> <Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                    })}
                </ul>
            </div>

    )
}
export default UsersList