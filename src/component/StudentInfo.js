import React from 'react';
import fields from 'react-dom';
import './StudentInfo.css';
import axios from 'axios';
export default class Std extends React.Component{
    constructor(){
        super();
        this.state={
            fields:{},
            errors:{}
        }
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    };
    handleChange(e){
        let fields=this.state.fields;
        fields[e.target.name]=e.target.value;
        this.setState({
            fields
        });
    }
    submituserRegistrationForm(e) {
      
        e.preventDefault();
     
            console.log(this.state);
            this.setState({fields:fields});
            let a=this.state.fields;
            alert("Form submitted");

            const user = {
                roll: a.rollno,
                name: a.username,
                dob: a.dob,
                gen: a.gen,
                ph: a.ph,
                fname: a.fname,
                mname:a.mname,
                pph:a.pph,
                cm:a.cm,
                pm:a.pm,
                add:a.add,
                cl:a.cl


              }
            //   alert(user.name)
              axios.post('http://localhost:7000/admin/add', user)
      .then(res => console.log(res.data))
      .catch((error) => {
        console.log(error);
        alert("data is not present");
       

  
      })

      alert("super registered");

      window.location = '/sem';
     
    
          
        }
    
    // validateForm() {
    //     let fields = this.state.fields;
    //     let errors = {};
    //     let formIsValid = true;
    //     if(!fields["rollno"]){
    //         formIsValid=false;
    //         errors["rollno"]="*Please enter your rollno.";
    //     }
    //     if (!fields["username"]) {
    //       formIsValid = false;
    //       errors["username"] = "*Please enter your username.";
    //     }
    //     if (typeof fields["username"] !== "undefined") {
    //         if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
    //           formIsValid = false;
    //           errors["username"] = "*Please enter alphabet characters only.";
    //         }
    //       }
    //     if(!fields["dob"]){
    //         formIsValid="false";
    //         errors["dob"]="*Please enter your DOB.";
    //     }
    //     if(!fields["gen"]){
    //         formIsValid="false";
    //         errors["gen"]="*Please enter your Gender.";
    //     }
    //     if(!fields["ph"]){
    //         formIsValid="false";
    //         errors["ph"]="*Please enter your Phone Number.";
    //     }
    //     if (typeof fields["ph"]!=="undefined"){
    //         if(!fields["ph"].match(/^[0-9]*$/)){
    //             formIsValid=false;
    //             errors["ph"] = "*Please enter numbers only.";
    //         }
    //     }
    //     if (typeof fields["ph"] !== "undefined") {
    //         if (!fields["ph"].match(/^[0-9]{10}$/)) {
    //           formIsValid = false;
    //           errors["ph"] = "*Please enter valid mobile no.";
    //         }
    //     }
    //     if (!fields["fname"]) {
    //         formIsValid = false;
    //         errors["fname"] = "*Please enter your fathername.";
    //       }
    //     if (typeof fields["fname"] !== "undefined") {
    //         if (!fields["fname"].match(/^[a-zA-Z ]*$/)) {
    //             formIsValid = false;
    //             errors["fname"] = "*Please enter alphabet characters only.";
    //           }
    //         }
    //     if (!fields["mname"]) {
    //             formIsValid = false;
    //             errors["mname"] = "*Please enter your mothername.";
    //           }
    //     if (typeof fields["mname"] !== "undefined") {
    //             if (!fields["mname"].match(/^[a-zA-Z ]*$/)) {
    //                 formIsValid = false;
    //                 errors["mname"] = "*Please enter alphabet characters only.";
    //               }
    //             }
    //     if(!fields["pph"]){
    //             formIsValid="false";
    //             errors["pph"]="*Please enter your Parents Phone Number.";
    //             }
    //     if (typeof fields["pph"]!=="undefined"){
    //             if(!fields["pph"].match(/^[0-9]*$/)){
    //                     formIsValid=false;
    //                     errors["pph"] = "*Please enter numbers only.";
    //                 }
    //             }
    //     if (typeof fields["pph"] !== "undefined") {
    //             if (!fields["pph"].match(/^[0-9]{10}$/)) {
    //                   formIsValid = false;
    //                   errors["pph"] = "*Please enter valid mobile no.";
    //                 }
    //             }
    //     if (!fields["cm"]) {
    //                 formIsValid = false;
    //                 errors["cm"] = "*Please enter your college email-ID.";
    //               }
    //     if (typeof fields["cm"] !== "undefined") {
    //                 var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //                 if (!pattern.test(fields["cm"])) {
    //                   formIsValid = false;
    //                   errors["cm"] = "*Please enter valid email-ID.";
    //                 }
    //               }
    //     if (!fields["pm"]) {
    //                 formIsValid = false;
    //                 errors["pm"] = "*Please enter your personal email-ID.";
    //               }
    //     if (typeof fields["pm"] !== "undefined") {
    //                 var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //                 if (!pattern.test(fields["cm"])) {
    //                   formIsValid = false;
    //                   errors["pm"] = "*Please enter valid email-ID.";
    //                 }
    //               }
    //     if(!fields["add"]){
    //                 formIsValid="false";
    //                 errors["add"]="*Please enter your Address.";
    //             }
    //     if(!fields["cl"]){
    //                 formIsValid="false";
    //                 errors["cl"]="*Please enter your class.";
    //             }
    //     this.setState({
    //         errors:errors
    //     });
    //     return formIsValid;
    // }
    render(){
        return(
     <div id="main-registration-container">
     <div id="register">
      <center>
        
        <h3>Enter Student Details.</h3>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>Roll No</label>
        <br></br>
        <input type="text" name="rollno"     />
        <div className="errorMsg">{this.state.errors.rollno}</div>
        <label>Name</label>
        <br></br>
        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.username}</div>
        <label>DOB</label>
        <br></br>
        <input type="text" name="dob" value={this.state.fields.dob} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.dob}</div>
        
        <label>Phone Number</label>
        <br></br>
        <input type="text" name="ph" value={this.state.fields.ph} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.ph}</div>
        <label>Father's Name</label>
        <br></br>
        <input type="text" name="fname" value={this.state.fields.fname} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.fname}</div>
        <label>Mother's Name</label>
        <br></br>
        <input type="text" name="mname" value={this.state.fields.mname} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.mname}</div>
        <label>Parents Mobile No</label>
        <br></br>
        <input type="text" name="pph" value={this.state.fields.pph} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.pph}</div>
        <label>College Mail</label>
        <br></br>
        <input type="text" name="cm" value={this.state.fields.cm} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.cm}</div>
        <label>Personal Mail</label>
        <br></br>
        <input type="text" name="pm" value={this.state.fields.pm} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.pm}</div>
        <label>Address</label>
        <br></br>
        <textarea name="add" value={this.state.fields.add} onChange={this.handleChange}></textarea>
        <div className="errorMsg">{this.state.errors.add}</div>
        <label>Class</label>
        <br></br>
        <input type="text" name="cl" value={this.state.fields.cl} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.cl}</div>
        <input type="submit" className="button"  value="Submit"/>
        </form>
        
        </center>
    </div>
</div>
    );
   }
}
 