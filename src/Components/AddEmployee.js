import axios from "axios"
import { useState } from "react";
import { Link } from "react-router-dom";


function AddEmployee(){
    const initialStateError={
        empFirstName:{required:false},
        empEmail:{required:false},
        empPassword:{required:false},
        empPhoneNo:{required:false},
        empLocation:{required:false},
        custom_error:null   
    }
    const [error,setError]=useState(initialStateError)

    const [loading, setLoading]=useState(false)

    const [employees,setEmployees]= useState({
        empFirstName:'',empEmail:'',empPassword:'',empPhoneNo:'', empLocation:''});

        const handleChange=(e)=>{
            setEmployees((data)=>({...data,[e.target.name]: e.target.value}))
        }
        const handleSubmit=(e)=>{
            e.preventDefault();
        let error=initialStateError;
        let hashError=false;
        if (employees.empFirstName == '') {
            error.empFirstName.required=true;
            hashError=true;
        }
        if (employees.empEmail == '') {
            error.empEmail.required=true;
            hashError=true;
        }
        if (employees.empPassword == '') {
            error.empPassword.required=true;
            hashError=true;
        }
        if (employees.empPhoneNo == '') {
            error.empPhoneNo.required=true;
            hashError=true;
        }
        if (employees.empLocation == '') {
            error.empLocation.required=true;
            hashError=true;
        }
        
        if (!hashError) {
            setLoading(true)
            // sending register api request
            console.log(employees)
            axios.post("http://localhost:6003/employees/api/v1/",employees)
            .then((data)=>{
                setEmployees(data.data)
            }).finally(()=>{
            setLoading(false)
            })
        }
        setError({...error})   
    }
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center">Add Employee</h2>
                        <div className="card-body">
                            <form onClick={handleSubmit}  className="register-form" action="">
                                <div className="form-group mb-0.1">
                                    <label className="form-label">FULL NAME:</label>
                                    <input type="text" placeholder="Enter Emp Full Name" name="empFirstName" 
                                     className="form-control"
                                     onChange={handleChange}
                                     >
                                    </input>
                                    {error.empFirstName.required?
                                    (<span className="text-danger" >
                                    Full Name is required.
                                    </span>):null}
                                </div>
                                <div className="form-group mb-0.1">
                                    <label className="form-label">EMAIL:</label>
                                    <input type="email"
                                     placeholder="Enter Emp email"
                                     name="empEmail"
                                     className="form-control"
                                     onChange={handleChange}
                                     >
                                    </input>
                                    {error.empEmail.required?
                                    (<span className="text-danger" >
                                    Email Id is required.
                                    </span>):null}
                                </div>
                                <div className="form-group mb-0.1">
                                    <label className="form-label">PASSWORD:</label>
                                    <input type="password"
                                     placeholder="Enter Emp Login password"
                                     name="empPassword"
                                     className="form-control"
                                     onChange={handleChange}
                                     >
                                    </input>
                                    {error.empPassword.required?
                                    (<span className="text-danger" >
                                    Password is required.
                                    </span>):null}
                                </div>
                                <div className="form-group mb-0.1">
                                    <label className="form-label">PHONE NO:</label>
                                    <input type="number"
                                     placeholder="Enter Emp Phone No"
                                     name="empPhoneNo"
                                     className="form-control"
                                     onChange={handleChange}
                                     >
                                    </input>
                                    {error.empPhoneNo.required?
                                    (<span className="text-danger" >
                                    PhoneNo is required.
                                    </span>):null}
                                </div>
                                <div className="form-group mb-0.1">
                                    <label className="form-label">LOCATION:</label>
                                    <input type="text"
                                     placeholder="Enter Emp Location"
                                     name="empLocation"
                                     className="form-control"
                                     onChange={handleChange}
                                     >
                                    </input>
                                    {error.empLocation.required?
                                    (<span className="text-danger" >
                                    Location is required.
                                    </span>):null}
                                </div>
                                
                                <div className="form-group">
                                <span className="text-danger" >
                                {error.custom_error?
                                (<p>Custom Error Message!</p>):null}
                                </span>
                            
                                {loading?
                                (<div  className="text-center">
                                <div className="spinner-border text-primary " role="status">
                                    <span className="sr-only"></span>
                                </div>
                                </div>):null}
                                <input type="submit" className="btn btn-success" 
                                 disabled={loading} value="Register"/>
                                <Link to="/employees" className="btn btn-primary">Click to Employee List</Link>                                                       
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddEmployee