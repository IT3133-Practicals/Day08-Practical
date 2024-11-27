export default function Login() {
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
                <button>Login</button>
            </table>
        </div>
    )
}