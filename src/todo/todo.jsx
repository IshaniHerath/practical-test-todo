import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React, {useState, useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import NavigationBar from "../component/navigationBar";
// import { Link } from "react-router-dom";

function Todo() {
    const [users, setUsers] = useState();
    const [pageValues, setPageValues] = useState();

    //,(['']) = will Execute only once!
    useEffect(() => {
        getTodo();
    }, [''])

    function getTodo(){
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then((data) => {
                setUsers(data);

                users.forEach((user)=> {

                    if(users.length < 11){
                        setPageValues.map(user)
                    }

                })

                // let items = [];
                // for (let number = 1; number <= data.length; number++) {
                //     items.push(
                //         <Pagination.Item key={number}>
                //             {number}
                //         </Pagination.Item>,
                //     );
                // }
            });
    }

    function onClickUser(userId) {
        fetch('https://jsonplaceholder.typicode.com/todos/'+userId)
            .then(res => res.json())
            .then((user)=> {
                alert(JSON.stringify(user))
            })
    }

    const handleChange = (event, value) => {
        // setPage(value);
    };

    return (
        <div className="Todo">
            <MuiThemeProvider>
                <div className="main-card todo-size">
                    <NavigationBar title="TO DO"/>
                    {/*<div>*/}
                    <table className="table table-style">
                        <thead>
                        <tr>
                            <th> USER ID </th>
                            <th> ID </th>
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
                                <td> {user.id} </td>
                                <td> {user.title} </td>
                                <td> {user.completed?"true":"false"} </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <Pagination
                        // page={1}
                        count={10} color="primary"
                        onChange={handleChange}
                        // renderItem={(users) => (
                        // <PaginationItem
                        //     type={"start-ellipsis"}
                        //     component={Link}
                        // selected
                        // to={`${/todo}/`}
                        // {...users}
                        // />
                        // )}

                    />
                    <mat-paginator
>
                    </mat-paginator>
                </div>
            </MuiThemeProvider>
        </div>
    );
}

export default Todo;
