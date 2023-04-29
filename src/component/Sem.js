
import React from 'react';
import "./sem.css";
import axios from 'axios';
export default class Sem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            s1:"",s2:"",s3:"",s4:"",s5:""
        }
        this.h1 = this.h1.bind(this);
        this.h2 = this.h2.bind(this);
        this.h3 = this.h3.bind(this);
        this.h4 = this.h4.bind(this);
        this.h5 = this.h5.bind(this);

        this.add = this.add.bind(this);
    }
    h1=(e)=>{

        this.setState({s1:e.target.value})
    }
    h2=(e)=>{

        this.setState({s2:e.target.value})
    }
    h3=(e)=>{

        this.setState({s3:e.target.value})
    }
    h4=(e)=>{

        this.setState({s4:e.target.value})
    }
    h5=(e)=>{

        this.setState({s5:e.target.value})
    }

    add(e){
            e.preventDefault();
        
            const user = {
            roll: this.state.s1,
            sem: this.state.s2,
            sub: this.state.s3,
            cr: this.state.s4,
            gr: this.state.s5,
           
          }
          alert(user)
            axios.post('http://localhost:7000/admin/sem', user)
            .then(res => {console.log(res.data)
                alert("Sem subject added");}
            )
        }
    render(){
        return(
            <>
                    <form  method="post" name='add' onSubmit={this.add}>
                    <table>
                    Roll No 
                    <input type="text"  class="form-control"  onChange={this.h1} >
                            </input><br></br>Semester 
                            <input type="text"  class="form-control"  onChange={this.h2} >
                            </input><br></br><br></br>
                        <tr>
                            <th style={{paddingLeft:300}}>Subject</th>
                            <th style={{paddingLeft:130}}>Credit</th>
                            <th style={{paddingLeft:130}}>Grade</th>
                        </tr><br></br>
                        <tr>
                            <td id="sub">
                                <input type="text" class="form-control"  onChange={this.h3}  />
                            </td>
                            <td id="in">
                            <input type="text" class="form-control" onChange={this.h4}  />
                            </td>
                            <td id="in">
                            <input type="text" class="form-control"  onChange={this.h5} />
                            </td> 
                            <td id="in"><button className='btn btn-danger'>Add</button></td>
                        </tr>
                        <br></br>
                        {/* <tr>
                            <td id="sub">
                                <input type="text" class="form-control"  />
                            </td>
                            <td id="in">
                            <input type="text" class="form-control"  />
                            </td>
                            <td id="in">
                            <input type="text" class="form-control"  />
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td id="sub">
                                <input type="text" class="form-control"  />
                            </td>
                            <td id="in">
                            <input type="text" class="form-control"  />
                            </td>
                            <td id="in">
                            <input type="text" class="form-control"  />
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td id="sub">
                                <input type="text" class="form-control"  />
                            </td>
                            <td id="in">
                            <input type="text" class="form-control"  />
                            </td>
                            <td id="in">
                            <input type="text" class="form-control"  />
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td id="sub">
                                <input type="text" class="form-control"  />
                            </td>
                            <td id="in">
                            <input type="text" class="form-control"  />
                            </td>
                            <td id="in">
                            <input type="text" class="form-control"  />
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td id="sub">
                                <input type="text" class="form-control"  />
                            </td>
                            <td id="in">
                            <input type="text" class="form-control"  />
                            </td>
                            <td id="in">
                            <input type="text" class="form-control"  />
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td id="sub">
                                <input type="text" class="form-control"  />
                            </td>
                            <td id="in">
                            <input type="text" class="form-control"  />
                            </td>
                            <td id="in">
                            <input type="text" class="form-control"  />
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td id="sub">
                                <input type="text" class="form-control"  />
                            </td>
                            <td id="in">
                            <input type="text" class="form-control"  />
                            </td>
                            <td id="in">
                            <input type="text" class="form-control"  />
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td id="sub">
                                <input type="text" class="form-control"  />
                            </td>
                            <td id="in">
                            <input type="text" class="form-control"  />
                            </td>
                            <td id="in">
                            <input type="text" class="form-control"  />
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td id="sub">
                                <input type="text" class="form-control"  />
                            </td>
                            <td id="in">
                            <input type="text" class="form-control"  />
                            </td>
                            <td id="in">
                            <input type="text" class="form-control"  />
                            </td>
                        </tr>
                        <br></br> */}
                        </table>
                    </form>
                
            </>

        )
    }
}