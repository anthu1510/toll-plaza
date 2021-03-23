import { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        const loginData = {
            email: e.target.username.value ? e.target.username.value : '',
            password: e.target.password.value ? e.target.password.value : '',
        }

        axios.defaults.baseURL = 'http://localhost:2000';
        axios.post('/login', loginData)
            .then(rs => {
                if(rs.data.status === true){
                    localStorage.setItem('token', rs.data.token);
                    setIsLoggedIn(true);
                }
            });
    }


    return (
        <Fragment>
            { isLoggedIn ? <Redirect to="/dashboard"/> : '' }
            <div className="row">
                <div className="col-lg-4 offset-lg-4 mt-5">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label htmlFor="">Username</label>
                                    <input type="text" name="username" className="form-control" placeholder="Enter Username"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Password</label>
                                    <input type="password" name="password" className="form-control" placeholder="Enter Password"/>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;
