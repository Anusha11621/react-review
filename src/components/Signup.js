import React, { Component } from 'react'

// function Signup(props) {
//     console.log(props.value);
//   return (
//     <div>
//         <div>
//             <label>username</label>
//             <input id='username' onChange={props.click} value={props.value.username}></input>
//             <p>{props.value.username}</p>
//         </div>
//         <div>
//             <label>email</label>
//             <input id='email' onChange={props.click} value={props.value.email}></input>
//             <p>{props.value.email}</p>
//         </div>
//     </div>
//   )
// }
class Signup extends Component {
    constructor(props){
        super()
      }
  render() {
    return (
                <div>
                    <div>
                        <label>username</label>
                        <input id='username' onChange={this.props.listener} value={this.props.value.username}></input>
                        <p>{this.props.value.username}</p>
                    </div>
                    <div>
                        <label>email</label>
                        <input id='email' onChange={this.props.listener} value={this.props.value.email}></input>
                        <p>{this.props.value.email}</p>
                    </div>
                </div>   
    )
  }
}


export default Signup