import { Link } from 'react-router-dom';
 
export default function Dashboard() {
    return(
        <div>
            <h1>Welcome to Dashboard</h1>
            <hr/>
            <div>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}