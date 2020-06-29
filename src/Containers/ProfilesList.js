import React, { Component } from "react";
import { connect } from "react-redux";
import 'antd/dist/antd.css';
import { selectProfilesAction, getProfilesListAction, deleteProfileAction } from "../Actions";
import { bindActionCreators } from "redux";
import { Button } from "antd";

class ProfilesList extends Component {


  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    this.props.getProfilesList()
  }
  renderProfilesList() {
      let counter = 0;
    return this.props.getfetchprofiledata.map((list) => {
      counter = counter +1
      return (
        <div  style={{
          border: " 2px solid #ffff",
          backgroundColor: "#fbfbfb",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          cursor: "pointer",
          margin:25
        }}
        key={list.id}
        >
        <li
          key={list.id}
          onClick={()=>this.props.selectProfiles(list)}
          style={{
            listStyle: "none",
            height: 50,
            textAlign: "center",
            alignContent:'center',
            cursor: "pointer",
            paddingTop:10
          }}
        >
          <p>Name: &nbsp;
          &nbsp;{list.name}</p>
        </li>
        
        <Button  type="primary" onClick={()=>this.props.deleteProfile(list.id)} danger> Delete</Button>
        </div>
      );
    });
  }

  render() {

if(!this.props.getfetchprofiledata){
  return (<div>....</div>)
}
    return (
      <div>
        <ul >{this.renderProfilesList()}
        
        {/* <Button  
        onClick={this.props.getProfilesList}
        style={{width:"22vw"}} type="primary" danger>
         click me to Server details
    </Button> */}
    </ul>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  
  return {
    profile: state.profiledata,
    selecteddata:state.selectedProfilesdata,
    getfetchprofiledata:state.FetchProfilesdata
  };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      selectProfiles:selectProfilesAction, 
      getProfilesList:getProfilesListAction,
      deleteProfile:deleteProfileAction,
 
    }, dispatch)
}


// higher order component
export default connect(mapStateToProps,mapDispatchToProps)(ProfilesList);
