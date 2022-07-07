import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React, {useState} from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import Pagination from 'react-bootstrap/Pagination'
import {Dropdown} from "react-bootstrap";

function Todo() {
    const [users, setUsers] = useState();
    const [items, setItems] = useState();

    function getTodo(){
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then((data) => {
                setUsers(data)

                let items = [];
                for (let number = 1; number <= data.length; number++) {
                    items.push(
                        <Pagination.Item key={number}>
                            {number}
                        </Pagination.Item>,
                    );
                }
            });
    }

    function onClickUser(userId) {
        fetch('https://jsonplaceholder.typicode.com/todos/'+userId)
            .then(res => res.json())
            .then((user)=> {
                alert(JSON.stringify(user))
            })
    }


    return (
        <div className="Todo">

            <MuiThemeProvider>
                <div className="main-card todo-size">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Menu
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/">Logout</Dropdown.Item>
                            <Dropdown.Item href="/todo">Todo</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <div className="app-body">
                        <MuiThemeProvider>
                            <React.Fragment>
                                <div className="spacing-div">
                                    <RaisedButton
                                        className="button-style-todo mt-5 mr-3"
                                        color="primary"
                                        variant="contained"
                                        onClick={getTodo}
                                    >
                                        Click Here To Fetch Data
                                    </RaisedButton>
                                </div>
                            </React.Fragment>
                        </MuiThemeProvider>

                        <div>
                            <table className="table table-style">
                                <thead>
                                <tr>
                                    <th> USER ID </th>
                                    <th> TITLE </th>
                                    <th> COMPLETED </th>
                                </tr>
                                </thead>
                                <tbody>
                                {users && users.map((user) => (
                                    <tr key={user.id} onClick={() =>{
                                        onClickUser(user.id)
                                    }}>
                                        <td> {user.userId} </td>
                                        <td> {user.title} </td>
                                        <td> {user.completed?"true":"false"} </td>
                                    </tr>
                                ))}

                                </tbody>
                            </table>
                            <Pagination>{items}</Pagination>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        </div>
    );
}

export default Todo;
