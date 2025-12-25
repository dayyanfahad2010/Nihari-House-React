import React,{useState} from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import '../Signuplogin.css'
import email from '../../assets/icons/email.png'
import password from '../../assets/icons/password.png'

export const Login = () => {
    const [input,setInput]=useState({
        email:"",
        password:""
    });
    const navigate =useNavigate();
    let [setisCredents] = useState("false");
    const handleSubmit=(e)=>{
        e.preventDefault();
        setisCredents=false
        let Users=JSON.parse(localStorage.getItem('users')) || [];
        Users.forEach(element => {
            if(input.email === element.email && input.password === element.password){
                setisCredents=true  
                localStorage.setItem("loggedin",true)
                localStorage.setItem("loggedUser",JSON.stringify(element));              
            }
        });
        if(setisCredents){
            alert("login Successfully")
            navigate("/")
        }
        else{
            alert("Incorrect email or password")
        }
    }
    return (
    <div className='container'>
        <div className="main-div">
            <h1>Login</h1>
            <div className="inputs">
                <div className="input">
                    <img src={email} alt="" />
                    <input type="email" placeholder='Email'
                    name='email' 
                    value={input.email} 
                    onChange={(e)=>
                        setInput({
                            ...input
                            ,[e.target.name]:e.target.value
                        })
                    }/>
                </div>
                <div className="input">
                    <img src={password} alt="" />
                    <input type="password" placeholder='Password'
                    name='password' 
                    value={input.password} 
                    onChange={(e)=>
                        setInput({
                            ...input
                            ,[e.target.name]:e.target.value
                        })
                    }/>
                </div>
                    <Link to={"/signup"}>Don't have an account</Link>
                <button onClick={handleSubmit}>Login</button>
            </div>
        </div>
    </div>
  )
}
