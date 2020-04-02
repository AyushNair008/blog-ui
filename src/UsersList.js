import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UsersList extends React.Component{
    constructor(){
        super()
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const users=response.data
            this.setState({users})
        })
        .catch((error)=>{
            console.log('error')
        })
    }
    render(){
        return(
        <Userslist company={this.state.users}/>
        )
    }
    }
function Userslist(props){
    return(
        <div>
                <h2> list of users -{props.company.length}</h2>
                
                <ul>
                    {props.company.map(user=>{
                        return <li key={user.id}> <Link to={`/users/${user.id}`}>{user.name}</Link></li>
                    })}
                </ul>
            </div>

    )
}
export default UsersList