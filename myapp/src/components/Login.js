import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const navigate = useNavigate();

    const authenticate=()=>{
        navigate('/dashboard')
    }
    
    return(
        <div>
            <h1>Login Page</h1>
            <hr />
            <table>
                <tr>
                    <td aligh="right">Username: </td>
                    <td>
                        <input type="text" name="username"/>
                    </td>
                </tr>
                <tr>
                    <td aligh="right">Password: </td>
                    <td>
                        <input type="text" name="password"/>
                    </td>
                </tr>
                <button onClick={authenticate}>Login</button>
            </table>
        </div>
    )
}