import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { studentData } from "../data/data";

export default function Login() {
    const navigate = useNavigate();

    const [credential,setCredential] = useState({
        username: "",
        password: "",
        error: ""
    })

    const change=(e)=>{
        e.preventDefault();
        const {name,value} = e.target;
        setCredential((prev)=>({
            ...prev,
            [name]: value
        }))
    }

    const authenticate=(e)=>{
        e.preventDefault()
        const user = studentData.find(
            (user)=>
                user.username === credential.username && user.password === credential.password
        )
        if(user) {
            setCredential({username: "", password: "", error: ""});
            navigate('/dashboard');
        } else {
            setCredential((prev)=>({
                ...prev,
                error: "Please check your username & password"
            }))
        }
    }
    
    return(
        <div>
            <h1>Login Page</h1>
            <hr />
            <table>
                <tr>
                    <td aligh="right">Username: </td>
                    <td>
                        <input type="text" name="username" onChange={change}/>
                    </td>
                </tr>
                <tr>
                    <td aligh="right">Password: </td>
                    <td>
                        <input type="text" name="password" onChange={change}/>
                    </td>
                </tr>
                <button onClick={authenticate}>Login</button>
                <br></br>
                <p>{credential.error}</p>
            </table>
        </div>
    )
}