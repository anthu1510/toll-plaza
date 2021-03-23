import { useEffect, useState } from 'react';
import { Link, Redirect, Switch, Route } from 'react-router-dom';
import axios from "axios";
import VehicleAdd from "./VehicleAdd";

const Dashbaord = () => {
    const [vehicles,setVehicles] = useState([]);

    useEffect(() => {
       const getAllVehicles = () => {
           axios.get('/vehicle')
               .then(rs => {
                   if(rs.data && rs.data.length > 0){
                       setVehicles(rs.data)
;                   }
               });
       }

       getAllVehicles();
    },[])

    return (
        <div className="container">
            <Switch>
                <Route path="/dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Welcome to Toll Plaza</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mb-3">
                            <Link to="/dashboard/new-vehicle" className="btn btn-success float-right">New Vehicle</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Register No</th>
                                    <th>Trip Type</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    vehicles.map(v => (
                                        <tr>
                                            <td>{v.vehicleId}</td>
                                            <td>{v.vehicleNo}</td>
                                            <td>{v.tripType}</td>
                                            <td>{v.date}</td>
                                            <td>{v.time}</td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Route>
                <Route path="/new-vehicle" component={VehicleAdd} />
            </Switch>
        </div>
    );
};

export default Dashbaord;
