
import './App.css';
// import { useState } from 'react';
import Signup from './components/Signup';

// function App() {
//   let obj = {
//     username : '',
//     email: ''
//   }
//   let [data,SetData] = useState(obj)
//   let handelChangefn = (e)=>{
//     let val = e.target.id
//     SetData((prevState)=>{
//         prevState[val] = e.target.value
//         return {
//             ...prevState
//         }
//     })
// }
//   return (
//     <>
//       <Signup value = {data} click = {handelChangefn}/>
//     </>
//   );
// }

// export default App;


import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      username : '',
      email: ''
    }
  }
  handelChangefn = (e)=>{
      // this.setState((prevState)=>{
      //   return {
      //     ...prevState,
      //     switch (e.target.id)) {
      //       case 'username':
              
      //         break;
          
      //       default:
      //         break;
      //     }
      //     username: e.target.value
      //   }
      // })
      // switch (id,value) {
        
      //   case (id):
          
      //     break;
      
      //   default:
      //     break;
      // }
      this.setState((previousState)=>{
        if (e.target.id === 'username') {
          return {
            ...previousState,
            username:e.target.value
          }
        } else {
          return {
            ...previousState,
            email:e.target.value
          }
        }
        
      })
  }
  render() {
    return (
      <>
      <Signup value={this.state} listener={this.handelChangefn}></Signup>
      </>
    )
  }
}

export default App