import { useState } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom";

const VehicleAdd = () => {
    const [addSuccess, setaddSuccess] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();

        const vehicleData = {
            vehicleNo: e.target.regno.value ? e.target.regno.value : '',
            tripType: e.target.trip.value ? e.target.trip.value : '',
        }

        axios.post('http://localhost:2000/vehicle', vehicleData)
            .then(rs => {
                if(rs.data === 'Vehicle Added'){
                    setaddSuccess(true);
                }
            });
    }

    return (
        <div className="container">
            { addSuccess ? <Redirect to="/" />: '' }
            <div className="row">
                <div className="col-lg-4 offset-lg-4 mt-5">
                    <div className="card">
                        <div className="card-header">Add Toll</div>
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-group">
                                    <label htmlFor="">Registration Number</label>
                                    <input type="text" name="regno" className="form-control" placeholder="Enter Username"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Type</label>
                                    <select name="trip" className="form-control custom-select">
                                        <option value="single">Single</option>
                                        <option value="round">Round</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleAdd;
