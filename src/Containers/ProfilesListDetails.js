import React, { Component } from 'react';
import { connect } from 'react-redux';
 


class  ProfilesListDetails extends Component {

    render() { 
        console.log("AnimalsDetails" ,this.props.selecteddata)
        if(!this.props.selecteddata){
            return <div>...</div>
        }
        
        
        return (
            <div >
            <h2>  Name: &nbsp;&nbsp;{this.props.selecteddata.name} </h2>
            <h2>  Gender:  &nbsp;&nbsp;{this.props.selecteddata.gender}</h2>
            <h2>  Age::  &nbsp;&nbsp; {this.props.selecteddata.age}  </h2>
           
         
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        selecteddata: state.selectedProfilesdata
    }
}
export default connect(mapStateToProps)(ProfilesListDetails)
 
