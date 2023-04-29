import "./Style.css";
import React, { Component } from "react";
import { Redirect } from "react-router";
import img1 from "../login2.jpg";


// import axios from 'axios'
export default class Admin extends Component{

    constructor(props){
        super(props);
 
        this.state={uname:"",pass:"",c:""}
        this.username=this.username.bind(this)
        this.password=this.password.bind(this)
        this.handle=this.handle.bind(this)
      
    }

    handle=(e)=>{
        e.preventDefault();
        const value={
            uname:this.state.uname,
            pass:this.state.pass
        }
        
        if(value.uname=="sri" && value.pass=="sri"){
            alert("Logged in as a ADMIN successfully");
            this.props.history.push('/Aenter')
        }
        
    }
      username=(e)=>{
        this.setState({uname:e.target.value})
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
                            <h1 id="ul">Admin Login</h1>
                            <br></br><br></br>
                           <label for="u" >Username</label>
                           <br></br>
                            <input type="text" id="u" onChange={this.username} class="no-outline" />
                              <br></br><br></br><br></br><br></br>
                            <label for="u" class="form-label">Password</label>
                            <br></br>
                            <input type="password" id="ui"  onChange={this.password} class="no-outline" />
                            <br></br> <br></br>
                          
                                
                             
                                <center>
                              {/* <button class="btn btn-primary btn-lg">Login </button> */}
                              {/* <a href="/add"><input type="button" value="Login" class="btn btn-primary btn-lg"  /></a> */}
                              <input type="button" value="Login" onClick={this.handle} class="btn btn-primary btn-lg"  />

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

