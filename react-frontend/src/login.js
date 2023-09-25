import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";




const Login=()=>{
    let navigator=useNavigate();
    
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value 
    });
    };



    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const loginForm=async(e)=>{
        e.preventDefault();
        const PassData = {
            email: formData.email,
            password: formData.password,
        }
        console.log(PassData);

        axios.post("http://localhost/capstone-task/php-api/login.php", PassData)
        .then((res)=>{
            console.log(res.data);
            if(res.data.message == 'Please Fill in all Required Fields!'){
                alert('Fill all the fields and Try again');
            }
            if(res.data.message == 'Invalid Email Address!'){
                alert('Use a valid email address');
            }
            if(res.data.message == 'Invalid Password!'){
                alert('Use a valid password');
            }
            else if(res.data.message == 'You have successfully logged in.'){
                alert('Login Successful Token: '+res.data.token+'');
                
                localStorage.setItem('user-info', JSON.stringify(res.data));
                 navigator("/dashboard");
                
            }
            })
    }

    return(
        <div>
            <h1>Login</h1>
            <div>
            <form onSubmit={loginForm}>
                <div className="mb-3">
                    <label for="inputEmail" className="form-label">Email address</label>
                    <input name="email" type="email" className="form-control" aria-describedby="emailHelp"
                    onChange={handleChange} value={formData.email}
                    />
                    
                </div>
                <div className="mb-3">
                    <label for="InputPassword" className="form-label">Password</label>
                    <input name="password" type={showPassword ? 'text' : 'password'} className="form-control"
                    onChange={handleChange} value={formData.password}
                    />

                    <div className="p-1">
                    {showPassword ? <i onClick={togglePasswordVisibility}  class="bi bi-eye text-danger fw-bold"></i> : <i onClick={togglePasswordVisibility}  class="bi bi-eye-slash text-success fw-bold"></i>}

                    <span  onClick={togglePasswordVisibility}  className="text-success mx-2">
                            {showPassword ? <span className="text-danger fw-bold">Hide password</span> : <span className="text-success fw-bold">Show password</span>}</span>

                    </div>
                </div>
                
                <button type="submit" className="btn btn-success">Login</button>
            </form>
            </div>
        </div>
    )

}
export default Login;