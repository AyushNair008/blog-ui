import React from "react"
import axios from "axios"
import {Link} from 'react-router-dom'

let fetchTried = 0

class UserShow extends React.Component {
  constructor() {
    super();
    this.state = {
      users:[], 
      userPosts: [],
      userComments: [],
      username:[]
    }
  }

  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
      )
      .then(response => {
        const userPosts = response.data;
        this.setState({ userPosts });
      })
      .catch(err => {
        console.log(err);
      });
    
     axios
       .get(
         `https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.id}`
       )
       .then(response => {
         const userComments = response.data;
         this.setState({ userComments });
       })
       .catch(err => {
         console.log(err);
       });
    
    let catchId = setInterval(() => { 
        console.log("running", fetchTried)     
        axios
          .get(
            `https://jsonplaceholder.typicode.com/users/${this.state.userPosts.userId}`
          )
          .then(response => {
            const users = response.data
            this.setState({ users })
          })
          .catch(err => {
            console.log(err)
          })
          if(this.state.userPosts.userId !== undefined || fetchTried===7){
            clearInterval(catchId)
            console.log('stopping fetch')
          }  
          fetchTried++
    }, 2000);
    
      
    //   setTimeout(() => {
    //       let username= this.state.users.find(user => user.id == this.state.userPosts.userId)
    //       this.setState({username})
    //   },2000)
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h2>USER NAME: {this.state.users.name}</h2>
        <h3>TITLE: {this.state.userPosts.title} </h3>
        <h4>BODY:</h4>
        <h4>{this.state.userPosts.body}</h4>
        <h3>Comments</h3>
        <ul>
          {this.state.userComments.map((comment, i) => {
            return <li key={i}>{comment.body}</li>;
          })}
        </ul>
        <p><Link to={`/users/${this.state.users.id}`}>More posts of Author:{this.state.users.name}</Link></p>
      </div>
    );
  }
}
export default UserShow