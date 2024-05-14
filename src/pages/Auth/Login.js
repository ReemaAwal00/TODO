import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ViPasswordInput from "../../components/ViPasswordInput";
import ViTextInput from "../../components/ViTextInput";
// import ViMessage from "../../components/ViMessage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Image from "../../images/Image";


const Login = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    if(event.target.name === 'email') {
      setEmail(event.target.value);
    }
    if(event.target.name === 'password') {
      setPassword(event.target.value);
    }
  }
  const doLogin = (e) => {
    let isLogin = false;
    if(email === "admin" && password === "admin") {
      localStorage.setItem('isLogin', '1');
      isLogin = true;
    }

    if(isLogin) {
      localStorage.setItem('isLogin','1');
      toast.success('Welcome back',{
        position:"top-right",
        autoClose:5000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        theme:"colored",
      });
      navigate('/pages/Main');
    } else {
        alert('Login failed');
        setErrorMessage('Invalid email or password');
      }
    }
 

    useEffect(() => {
      const isLogin = localStorage.getItem('isLogin');
      if(isLogin === '1') {
        navigate('/');
      }
    }, []);
    return (
        <div>
            <div class="login-header">
             <Image/>
               
                <h3>Log In</h3>
                <div class="login-container">

                    <div class="login-form">
                        <form>
                            <div class="form-group">
                                <ViTextInput
                                    title="Email"
                                    name="email"
                                    handleInputChange={handleInputChange}
                                    value={email} />

                            </div>
                            <div class="form-group">
                                <ViPasswordInput
                                    title="Password"
                                    name="password"
                                    handleInputChange={handleInputChange}
                                    value={password} />

                            </div>
                            {/* <!-- <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> --> */}

                            <button type="submit"  onClick={doLogin} class="login-button">Log in</button>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Dont have an account? SignUp</label>

                            </div>
                        </form>
                    </div>
                    <div class="login-box">
                        <h2>A better TO-DO List App for You!</h2>
                        <div class="login-box1">
                            <h4>We make it easier for a team or an individual to plan their works by using TO-DO app Listfull
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default Login;