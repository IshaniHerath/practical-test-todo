import '../App.css';
import Input from '@material-ui/core/Input';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import NavigationBar from "../component/navigationBar";
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

function Login() {
    const [username, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
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

    function handleClickShowPassword() {
        setShowPassword(!showPassword);
    }

    function handleMouseDownPassword (event) {
        event.preventDefault();
    }

    return (
        <div className="App">
            <MuiThemeProvider>
                <div className="main-card login-size">
                    <NavigationBar title={"LOGIN"}/>
                    {/*<AppBar title="Login"/>*/}
                    <div className="spacing-div">
                        <label className="mandatory">User Name : </label>
                        <Input className="mt-3"
                               placeholder="Enter Your User Name"
                               name="userName"
                               style={{width: '50%'}}
                               onChange={(e) => {
                                   setUserName(e.target.value)
                               }}
                               value={username}
                        /><br/>
                        <label className="mandatory">Password : </label>
                        <Input className="mt-4"
                               placeholder="Enter Your Password"
                               name="Password"
                               type= "password"
                               style={{width: '50%'}}
                               value={password}
                               onChange={(e) => {
                                   setPassword(e.target.value)
                               }}
                               endAdornment={
                                   <InputAdornment position="end">
                                       <IconButton
                                           aria-label="toggle password visibility"
                                           onClick={handleClickShowPassword}
                                           onMouseDown={handleMouseDownPassword}
                                       >
                                           {showPassword ? <Visibility/> : <VisibilityOff/>}
                                       </IconButton>
                                   </InputAdornment>
                               }
                        />
                    </div>
                    <div className="spacing-div">
                        <RaisedButton
                            className="button-style"
                            primary={true}
                            onClick={handleSubmit}
                        >SUBMIT</RaisedButton>
                        <RaisedButton
                            className="mt-3"
                            onClick={handleClear}
                        >CLEAR</RaisedButton>
                    </div>
                </div>
            </MuiThemeProvider>
        </div>
    );
}

export default Login;
