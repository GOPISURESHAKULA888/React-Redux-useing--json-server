import React, { Component } from 'react';
import { Input,Select, Button  } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { createProfileAction } from '../Actions';


const { Option } = Select;
 
class ProfiledataAdd extends Component {
constructor(props) {
    super(props)
    this.state={
        Profilename:'',
        Gender:'Male',
        Age:''
    }
}
 handlechange=(e)=>{
this.setState({ 
  
  Profilename:e.target.value
 });
}
Agehandlechange=(e)=>{
  this.setState({ 
    
    Age:parseInt(e.target.value)
   });
  }
selecthandlechange=(e)=>{
this.setState({ Gender:e });
}
fromsubmitbutton=()=>{
 
  this.props.creteprofile(this.state)
  this.setState({   Profilename:'',
  Gender:'',
  Age:''});
}

    render() { 
    console.log("this.props",this.props)
        return (
          <div>
            <form>
              <label>Name:</label>
              <br />
              <Input  value={this.state.Profilename}
              name="Profilename"
              onChange={this.handlechange}
              />
              <br /><br />
              <label>Gender:</label>
              <br />
              <Select
                
                defaultValue="Male"
                style={{ width: 340 }}
                value={this.state.Gender}
                onChange={this.selecthandlechange}
              >
                <Option value="Male">Male</Option>
                <Option value="FeMale">FeMale (101)</Option>
              </Select>
              <br /><br />
              <label>AGE:</label>
              <br />
              <Input value={this.state.Age}  name="Age"  type="number" onChange={this.Agehandlechange}/>
              <br />
            </form><br/><br/>
            <Button onClick={this.fromsubmitbutton}> Submit</Button>
          </div>
        );
    }
}
 
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    creteprofile:createProfileAction
  },dispatch)
} 

export default connect(null, mapDispatchToProps)(ProfiledataAdd)
