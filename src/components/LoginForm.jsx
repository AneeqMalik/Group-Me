import { useState } from "react";
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const authObject = { 'Project-ID': "458a3f3c-8c07-417d-ba34-d57472829b12", 'User-Name': username, 'User-Secret': password }
        
        try {
            //username | password => chatengine -> give messages
            axios.get('https://api.chatengine.io/chats', { headers: authObject });

            //saving cred for next reload
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

        }catch (error) {
            //error -> try with new username....
            setError('Oops, incorrect credentials');
        }

        //works out -> logged in

    }
    return (
        <div className="wrapper">
            <div className="form">
                <div className="title">Group Me Application</div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required="true" />
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required="true" />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;