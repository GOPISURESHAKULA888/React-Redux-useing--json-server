import React, { Component } from 'react'
import ProfilesList from '../Containers/ProfilesList'
import AnimalsDetails from '../Containers/ProfilesListDetails'
import ProfildataAdd from '../Containers/ProfiledataAdd'

class App extends Component {

  render() {
   
    return (
      <div style={{display:'flex',flexDirection:'row'}}>
          <div style={{width:"25%",margin:"50px 50px"}}>
          <h2> ProfildataAdd</h2>
          <ProfildataAdd/>
          </div>
        <div style={{width:'25%',borderColor:'black',}}>
        <ProfilesList/>
        </div>
        <div style={{width:"25%",margin:"50px 50px"}}>
          <h2> Details</h2>
          <AnimalsDetails/>
          </div>
        
      </div>
    )
  }
}

export default App
