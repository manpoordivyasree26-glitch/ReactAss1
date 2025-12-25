import {useState} from "react";
import {useNavigate} from "react-router-dom";
function Login(){
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[error,setError]=useState("");
const navigate=useNavigate();

const handleLogin=()=>{
    if(email==="admin@gmail.com" && password==="admin@123"){
        localStorage.setItem("isLoggedIn","true")
        navigate("/todos");
    }else{
        setError("Invalid email or Passward");
    }
};
return(
    <div style={{textAlign:"center"}}>
        <h2>Login</h2>
        <input
        type="email"
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}>
        </input>
        <br></br>
        <input
        type="password"
        placholder="password"
        onChange={(e)=>setPassword(e.target.value)}>
        </input>
        <br></br>
        <button onClick={handleLogin}>Login</button>

        {error&& <p style={{color:"red"}}>{error}</p>}

    </div>
);


}
export default Login;