import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Signup=()=>{

    let navigator=useNavigate();
       const [data, setData]= useState({
        
      })
      

      const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setData({...data,[name]:value})
        // console.log(data);
      }
        const [showPassword, setShowPassword] = useState(false);          
        const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
        };

      const submitForm=async(e)=>{
        e.preventDefault();
        const PassData = {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password,
            confirmpassword: data.confirmpassword
        }
        //console.log(PassData);

        

        if (PassData.password === PassData.confirmpassword) {
            // Passwords match, you can proceed with form submission

            // console.log('Passwords match:', PassData.password);

            // Signup logic here then redirect to login page after signup
            axios.post("http://localhost/capstone-task/php-api/signup.php", PassData)
            .then((res)=>{
                //console.log(res.data);
                if(res.data.message == 'Missing required data'){
                    alert('Fill all the fields and Try again');
                }
                if(res.data.message == 'Short Password'){
                    alert('Password must be atleast 6 characters long');
                }
                if(res.data.message == 'User created'){
                    alert('User Created Successfully');
                    navigator("/login");
                }
                else if(res.data.message == 'This email already exist!'){ 
                    alert('User with this email  already exists Try again with different email');
                }
                })
          } else {
            // Passwords do not match, show an error message or take appropriate action
            alert('Passwords do not match, Try again');
          }
        
      }

    
    return(
        <div>
            <h1>Signup</h1>

            <div>
            <form onSubmit={submitForm}>
                <div className="mb-3">
                    <label for="inputFirstName" className="form-label">Firstname</label>
                    <input name="firstname" type="text" className="form-control" aria-describedby="emailHelp"
                    onChange={handleInput} value={data.firstname}
                    />
                    <div id="caution" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="inputLastName" className="form-label">Lastname</label>
                    <input name="lastname" type="text" className="form-control" 
                    onChange={handleInput} value={data.lastname}
                    />
                </div>
                <div className="mb-3">
                    <label for="inputemail" className="form-label">Email address</label>
                    <input name="email" type="email" className="form-control" 
                    onChange={handleInput} value={data.email}
                    />
                </div>
                <div className="mb-3">
                    <label for="InputPassword" className="form-label">Password</label>
                    
                    <input name="password" type={showPassword ? 'text' : 'password'} className="form-control" 
                    onChange={handleInput} value={data.password}/>
                    
                </div>

                <div className="mb-3">
        
                    <label for="InputPassword" className="form-label">Confirm Password</label>
                    <input name="confirmpassword" type={showPassword ? 'text' : 'password'} className="form-control"
                    onChange={handleInput} value={data.confirmpassword}  
                    />

                    <div className="p-1">
                    {showPassword ? <i onClick={togglePasswordVisibility}  class="bi bi-eye text-danger fw-bold"></i> : <i onClick={togglePasswordVisibility}  class="bi bi-eye-slash text-success fw-bold"></i>}

                    <span  onClick={togglePasswordVisibility}  className="text-success mx-2">
                            {showPassword ? <span className="text-danger fw-bold">Hide password</span> : <span className="text-success fw-bold">Show password</span>}</span>

                    </div>
                </div>
                
                        
                <button type="submit" className="btn btn-warning">Signup</button>
            </form>
            </div>


        </div>
    )

}
export default Signup;