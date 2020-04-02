import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class UsersShow extends React.Component {
    constructor(){
        super()
        this.state={
            user:{},
            posts:[]
        }
    }
   componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            //console.log(response.data)
            const user=response.data
            this.setState({user})
        })
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response)=>{
            console.log(response.data)
            const posts=response.data
            this.setState({posts})
        })
    }
    render() {
        //console.log(this.state)
        return (
            <div> 
                <h2>User Name - {this.state.user.name}</h2>
                <h3>Posts Written By The User</h3>
                <ul>
                    {
                       this.state.posts.map(post => {
                           return <li key={post.id}><Link to={`/posts/${post.userId}`}>{post.title}</Link></li> 
                       })
                    }
                </ul>
            </div> 
        )
    }
}

export default UsersShow