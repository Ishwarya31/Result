import "./Style.css";
import React, { Component } from "react";

import img1 from "../login2.jpg";

// import axios from 'axios'
export default class User extends Component{

    constructor(props){
        super(props);
 
        this.state={user:"",pass:""}
        this.username=this.username.bind(this)
        this.password=this.password.bind(this)
        this.handle=this.handle.bind(this)
        
    }

    handle=(e)=>{
        e.preventDefault();
        const value={
            uname:this.state.user,
            pass:this.state.pass
        }
        
        if(value.uname=="20ITR112" && value.pass=="112"){
            alert("Logged in as a USER successfully");
            this.props.history.push('/view')
        }
        
        
    }
  
    username=(e)=>{
        this.setState({user:e.target.value})
    }
    password=(e)=>{
        this.setState({pass:e.target.value})
        
    }
    
  render(){
    return(
      <>

    <div class="container">
        <div class="row">
            
            <div class="col-md-6" ><br></br><br></br><br></br><br></br>
                <div class="card-img ">
                    <img src={img1} class="img-fluid" />
                </div>
            </div>
            <div class="col-md-4" style={{paddingTop: "100px"}}>
                <div class="card">
                    <div class="card-body">
                        <form onSubmit={this.handle}>
                            <h1 id="ul">User Login</h1>
                            <br></br><br></br>
                           <label for="u" >Username</label>
                           <br></br>
                            <input type="text" id="u" onChange={this.username} class="no-outline" />
                              <br></br><br></br><br></br><br></br>
                            <label for="u" class="form-label">Password</label>
                            <br></br>
                            <input type="password" id="ui"  onChange={this.password} class="no-outline" />
                            <br></br> <br></br>
                          
                                
                              <br></br>
                             
                                <center>
                              <button class="btn btn-primary btn-lg">Login </button>
                              {/* <a href="/add"><input type="button" value="Login" class="btn btn-primary btn-lg"  /></a> */}
                              {/* <input type="button" value="Login" onClick={()=>this.edit()} class="btn btn-primary btn-lg"  /> */}

                              </center>
                              <br></br>
                            
                       </form>

                    </div>
                </div>
                
            </div>
            
        </div>
    </div>


</>
    )
  
}
}

