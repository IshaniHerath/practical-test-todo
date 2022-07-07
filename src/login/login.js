import '../App.css';
import Input from '@material-ui/core/Input';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    let navigate = useNavigate();

    function handleSubmit() {
        if (username === "admin" && password === "admin") {
            navigate("../todo", { replace: true });
        }else {
            alert('The User Name/Password is incorrect');
        }
    }

    function handleClear() {
        setUserName( "");
        setPassword("");
    }

    return (
        <div className="App">
            <MuiThemeProvider>
                <div className="main-card login-size">
                    <AppBar title="Login"/>
                    <div className="spacing-div">
                        <label htmlFor="" className="mandatory">User Name : </label>
                        <Input className="mt-3"
                               placeholder="Enter Your User Name"
                               name="userName"
                               required={true}
                               style={{width: '50%'}}
                               margin="normal"
                               onChange={(e) => {
                                   setUserName(e.target.value)
                               }}
                               value={username}
                        />
                    </div>

                    <div className="spacing-div">
                        <label htmlFor="" className="mandatory">Password : </label>
                        <Input className="mt-3"
                               placeholder="Enter Your Password"
                               name="Password"
                               required={true}
                               style={{width: '50%'}}
                               margin="normal"
                               value={password}
                               onChange={(e) => {
                                   console.log("wwww" , e)
                                   setPassword(e.target.value)
                               }}
                        />

                    </div>

                    <div className="spacing-div">
                        <RaisedButton
                            className="button-style"
                            primary={true}
                            color="primary"
                            variant="contained"
                            onClick={handleSubmit}
                        >SUBMIT</RaisedButton>

                        <RaisedButton
                            className="mt-3"
                            color="primary"
                            variant="contained"
                            onClick={handleClear}
                        >CLEAR</RaisedButton>
                    </div>
                </div>
            </MuiThemeProvider>
        </div>
    );
}

export default Login;
