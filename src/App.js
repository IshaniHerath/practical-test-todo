import './App.css';
import Login from './login/login'
import Todo from './todo/todo'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/todo" element={<Todo /> } />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
